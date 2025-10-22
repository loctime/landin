import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Inicializar Firebase Admin
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const auth = getAuth();
const db = getFirestore();

interface TenantRegistrationData {
  domain: string;
  companyName: string;
  adminEmail: string;
  adminName: string;
  googleUid?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: TenantRegistrationData = await request.json();
    const { domain, companyName, adminEmail, adminName, googleUid } = data;

    // Validaciones
    if (!domain || !companyName || !adminEmail || !adminName) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato del dominio
    if (!/^[a-z0-9-]+$/.test(domain)) {
      return NextResponse.json(
        { error: 'El dominio solo puede contener letras minúsculas, números y guiones' },
        { status: 400 }
      );
    }

    // Verificar si el tenant ya existe
    const tenantRef = db.collection('tenants').doc(domain);
    const tenantDoc = await tenantRef.get();
    
    if (tenantDoc.exists) {
      return NextResponse.json(
        { error: 'Este dominio ya está registrado' },
        { status: 409 }
      );
    }

    // Generar ID único para el tenant
    const tenantId = domain;
    const timestamp = new Date();

    // 1. Crear el tenant en Firestore
    await tenantRef.set({
      id: tenantId,
      domain: domain,
      companyName: companyName,
      createdAt: timestamp,
      status: 'active',
      settings: {
        theme: {
          primaryColor: '#10b981',
          logo: null,
        },
        features: ['dashboard', 'users', 'analytics'],
      },
      metadata: {
        totalUsers: 0,
        lastActivity: timestamp,
      }
    });

    // 2. Manejar usuario admin (crear o usar existente)
    let adminUser;
    try {
      if (googleUid) {
        // Usuario ya autenticado con Google
        adminUser = await auth.getUser(googleUid);
      } else {
        // Crear nuevo usuario
        adminUser = await auth.createUser({
          email: adminEmail,
          displayName: adminName,
          emailVerified: false,
        });
      }
    } catch (error: any) {
      // Si el usuario ya existe, obtenerlo
      if (error.code === 'auth/email-already-exists') {
        adminUser = await auth.getUserByEmail(adminEmail);
      } else {
        throw error;
      }
    }

    // 3. Configurar custom claims para multi-tenant
    const existingClaims = adminUser.customClaims || {};
    const updatedClaims = {
      ...existingClaims,
      tenants: [...(existingClaims.tenants || []), tenantId],
      roles: {
        ...(existingClaims.roles || {}),
        [tenantId]: 'admin'
      }
    };

    await auth.setCustomUserClaims(adminUser.uid, updatedClaims);

    // 4. Crear documento del usuario en el tenant
    await tenantRef.collection('users').doc(adminUser.uid).set({
      id: adminUser.uid,
      email: adminEmail,
      name: adminName,
      role: 'admin',
      createdAt: timestamp,
      lastLogin: null,
      isActive: true,
    });

    // 5. Actualizar contador de usuarios
    await tenantRef.update({
      'metadata.totalUsers': 1
    });

    return NextResponse.json({
      success: true,
      tenantId: tenantId,
      adminUserId: adminUser.uid,
      message: 'Tenant creado exitosamente'
    });

  } catch (error: any) {
    console.error('Error creating tenant:', error);
    
    return NextResponse.json(
      { 
        error: error.message || 'Error interno del servidor',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain');

    if (!domain) {
      return NextResponse.json(
        { error: 'Domain parameter is required' },
        { status: 400 }
      );
    }

    const tenantRef = db.collection('tenants').doc(domain);
    const tenantDoc = await tenantRef.get();

    if (!tenantDoc.exists) {
      return NextResponse.json(
        { exists: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      exists: true,
      tenant: tenantDoc.data()
    });

  } catch (error: any) {
    console.error('Error checking tenant:', error);
    
    return NextResponse.json(
      { error: 'Error checking tenant' },
      { status: 500 }
    );
  }
}

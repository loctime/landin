// Script de prueba para verificar configuración de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Función para verificar variables del cliente (frontend)
export function testClientConfig() {
  console.log('🔍 Verificando variables del cliente (frontend)...');
  
  const requiredClientVars = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID'
  ];

  const missingVars: string[] = [];
  const presentVars: string[] = [];

  requiredClientVars.forEach(varName => {
    // En el cliente, las variables NEXT_PUBLIC_ están disponibles directamente
    const value = (globalThis as any)[varName] || process.env[varName];
    if (!value) {
      missingVars.push(varName);
    } else {
      presentVars.push(varName);
      console.log(`✅ ${varName}: ${value.substring(0, 20)}...`);
    }
  });

  if (missingVars.length > 0) {
    console.log('❌ Variables faltantes del cliente:');
    missingVars.forEach(varName => console.log(`   - ${varName}`));
    return false;
  }

  console.log('✅ Todas las variables del cliente están presentes');
  return true;
}

// Función para verificar variables del servidor (backend)
export function testServerConfig() {
  console.log('🔍 Verificando variables del servidor (backend)...');
  
  const requiredServerVars = [
    'FIREBASE_ADMIN_PRIVATE_KEY',
    'FIREBASE_ADMIN_CLIENT_EMAIL',
    'FIREBASE_PROJECT_ID'
  ];

  const missingVars: string[] = [];
  const presentVars: string[] = [];

  requiredServerVars.forEach(varName => {
    const value = process.env[varName];
    if (!value) {
      missingVars.push(varName);
    } else {
      presentVars.push(varName);
      if (varName === 'FIREBASE_ADMIN_PRIVATE_KEY') {
        console.log(`✅ ${varName}: ${value.substring(0, 30)}...`);
      } else {
        console.log(`✅ ${varName}: ${value}`);
      }
    }
  });

  if (missingVars.length > 0) {
    console.log('❌ Variables faltantes del servidor:');
    missingVars.forEach(varName => console.log(`   - ${varName}`));
    return false;
  }

  console.log('✅ Todas las variables del servidor están presentes');
  return true;
}

// Función para probar inicialización del cliente
export async function testClientInitialization() {
  console.log('🚀 Probando inicialización del cliente...');
  
  try {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    console.log('✅ Cliente Firebase inicializado correctamente');
    console.log(`   - App: ${app.name}`);
    console.log(`   - Auth: ${auth.app.name}`);
    
    return true;
  } catch (error) {
    console.error('❌ Error al inicializar cliente Firebase:', error);
    return false;
  }
}

// Función para probar inicialización del servidor (solo verificación de variables)
export async function testServerInitialization() {
  console.log('🚀 Verificando variables del servidor...');
  
  try {
    const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
    const projectId = process.env.FIREBASE_PROJECT_ID;
    
    if (!privateKey || !clientEmail || !projectId) {
      console.log('❌ Faltan variables del servidor');
      return false;
    }
    
    console.log('✅ Variables del servidor configuradas correctamente');
    console.log(`   - Project ID: ${projectId}`);
    console.log(`   - Client Email: ${clientEmail}`);
    console.log(`   - Private Key: ${privateKey.substring(0, 30)}...`);
    
    return true;
  } catch (error) {
    console.error('❌ Error al verificar variables del servidor:', error);
    return false;
  }
}

// Función principal de prueba
export async function testFirebaseConfig() {
  console.log('🔥 Iniciando verificación de configuración Firebase...\n');
  
  const clientVarsOk = testClientConfig();
  console.log('');
  
  const serverVarsOk = testServerConfig();
  console.log('');
  
  if (clientVarsOk) {
    await testClientInitialization();
    console.log('');
  }
  
  if (serverVarsOk) {
    await testServerInitialization();
    console.log('');
  }
  
  const allOk = clientVarsOk && serverVarsOk;
  
  if (allOk) {
    console.log('🎉 ¡Todas las variables de Firebase están configuradas correctamente!');
  } else {
    console.log('⚠️  Algunas variables necesitan ser configuradas. Revisa los errores arriba.');
  }
  
  return allOk;
}

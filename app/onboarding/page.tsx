'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Building2, Shield, CheckCircle } from 'lucide-react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/lib/firebase-config';

export default function OnboardingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [currentDomain, setCurrentDomain] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Obtener el subdominio actual
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
    setCurrentDomain(subdomain);
  }, []);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      setUser(user);
      
      // Crear tenant automáticamente
      await createTenant(user);
      
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión con Google');
    } finally {
      setIsLoading(false);
    }
  };

  const createTenant = async (user: any) => {
    try {
      const response = await fetch('/api/register-tenant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          domain: currentDomain,
          companyName: user.displayName || 'Mi Empresa',
          adminEmail: user.email,
          adminName: user.displayName || 'Administrador',
          googleUid: user.uid,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al crear el tenant');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Error al crear el tenant');
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-emerald-400">¡Bienvenido!</CardTitle>
            <CardDescription className="text-gray-300">
              Tu espacio de trabajo está listo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertDescription>
                <strong>Dominio:</strong> {currentDomain}.tu-dominio.com
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertDescription>
                <strong>Email:</strong> {user?.email}
              </AlertDescription>
            </Alert>
            <Button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Ir a tu Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-emerald-400">
            Bienvenido a {currentDomain}
          </CardTitle>
          <CardDescription className="text-gray-300">
            Configura tu espacio de trabajo en segundos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Inicia sesión con Google para crear tu espacio de trabajo personalizado
            </p>
            
            <Button 
              onClick={handleGoogleSignIn}
              className="w-full bg-white text-black hover:bg-gray-100"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Configurando...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continuar con Google
                </>
              )}
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="p-4 bg-gray-900 rounded-lg">
            <h3 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              ¿Qué incluye?
            </h3>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• Dashboard personalizado</li>
              <li>• Gestión de usuarios</li>
              <li>• Configuración de marca</li>
              <li>• Soporte técnico incluido</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

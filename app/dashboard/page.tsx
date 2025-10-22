'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Settings, LogOut, Shield } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase-config';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [tenant, setTenant] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Obtener usuario actual
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
      
      if (user) {
        // Cargar datos del tenant
        loadTenantData();
      }
    });

    return () => unsubscribe();
  }, []);

  const loadTenantData = async () => {
    try {
      // Obtener tenant ID del header o localStorage
      const tenantId = localStorage.getItem('tenantId') || 'demo';
      
      // Aquí cargarías los datos del tenant desde Firestore
      setTenant({
        id: tenantId,
        name: tenantId.charAt(0).toUpperCase() + tenantId.slice(1),
        users: 1,
        status: 'active'
      });
    } catch (error) {
      console.error('Error loading tenant data:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Acceso Denegado</h1>
          <p className="text-gray-300 mb-4">Necesitas iniciar sesión para acceder al dashboard</p>
          <Button onClick={() => window.location.href = '/onboarding'}>
            Iniciar Sesión
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="w-8 h-8 text-emerald-400 mr-3" />
              <div>
                <h1 className="text-xl font-bold">{tenant?.name || 'Mi Empresa'}</h1>
                <p className="text-sm text-gray-400">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-emerald-500 text-emerald-400">
                <Shield className="w-3 h-3 mr-1" />
                Admin
              </Badge>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usuarios</CardTitle>
              <Users className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{tenant?.users || 0}</div>
              <p className="text-xs text-gray-400">usuarios activos</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Estado</CardTitle>
              <Shield className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-400">Activo</div>
              <p className="text-xs text-gray-400">tenant funcionando</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dominio</CardTitle>
              <Building2 className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{tenant?.id || 'demo'}</div>
              <p className="text-xs text-gray-400">subdominio</p>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Section */}
        <div className="mt-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl">¡Bienvenido, {user.displayName || user.email}!</CardTitle>
              <CardDescription>
                Tu espacio de trabajo está listo. Aquí puedes gestionar usuarios, configuraciones y más.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Users className="w-4 h-4 mr-2" />
                  Gestionar Usuarios
                </Button>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Configuración
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

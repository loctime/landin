'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Building2, Users, Shield } from 'lucide-react';

interface TenantRegistrationData {
  domain: string;
  companyName: string;
  adminEmail: string;
  adminName: string;
}

export default function RegisterTenantPage() {
  const [formData, setFormData] = useState<TenantRegistrationData>({
    domain: '',
    companyName: '',
    adminEmail: '',
    adminName: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [currentDomain, setCurrentDomain] = useState('');

  useEffect(() => {
    // Obtener el subdominio actual
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
    setCurrentDomain(subdomain);
    setFormData(prev => ({ ...prev, domain: subdomain }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/register-tenant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al registrar el tenant');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof TenantRegistrationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (success) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-emerald-400">¡Registro Exitoso!</CardTitle>
            <CardDescription className="text-gray-300">
              Tu tenant ha sido creado correctamente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertDescription>
                <strong>Dominio:</strong> {formData.domain}.tu-dominio.com
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertDescription>
                <strong>Email Admin:</strong> {formData.adminEmail}
              </AlertDescription>
            </Alert>
            <Button 
              onClick={() => window.location.href = `https://${formData.domain}.tu-dominio.com`}
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
          <CardTitle className="text-2xl text-emerald-400">Registrar Nuevo Tenant</CardTitle>
          <CardDescription className="text-gray-300">
            Configura tu espacio de trabajo personalizado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="domain">Dominio</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="domain"
                  value={formData.domain}
                  onChange={(e) => handleInputChange('domain', e.target.value)}
                  placeholder="mi-empresa"
                  required
                  className="flex-1"
                />
                <span className="text-gray-400">.tu-dominio.com</span>
              </div>
              <p className="text-xs text-gray-400">
                URL: {formData.domain || 'mi-empresa'}.tu-dominio.com
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Nombre de la Empresa</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Mi Empresa S.A."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adminName">Tu Nombre</Label>
              <Input
                id="adminName"
                value={formData.adminName}
                onChange={(e) => handleInputChange('adminName', e.target.value)}
                placeholder="Juan Pérez"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adminEmail">Email de Administrador</Label>
              <Input
                id="adminEmail"
                type="email"
                value={formData.adminEmail}
                onChange={(e) => handleInputChange('adminEmail', e.target.value)}
                placeholder="admin@mi-empresa.com"
                required
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button 
              type="submit" 
              className="w-full bg-emerald-600 hover:bg-emerald-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Registrando...
                </>
              ) : (
                <>
                  <Users className="w-4 h-4 mr-2" />
                  Crear Tenant
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-gray-900 rounded-lg">
            <h3 className="text-sm font-semibold text-emerald-400 mb-2">¿Qué incluye?</h3>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• Dashboard personalizado</li>
              <li>• Gestión de usuarios</li>
              <li>• Configuración de marca</li>
              <li>• Soporte técnico</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

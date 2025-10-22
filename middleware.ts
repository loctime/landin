import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;
  
  // Obtener subdominio
  const subdomain = hostname.split('.')[0];
  
  // Ignorar subdominios conocidos
  const ignoredSubdomains = ['www', 'localhost', '127.0.0.1', 'app', 'admin', 'api'];
  
  if (ignoredSubdomains.includes(subdomain)) {
    return NextResponse.next();
  }
  
  // Es un subdominio personalizado
  const isTenantSubdomain = subdomain && subdomain !== 'localhost';
  
  if (isTenantSubdomain) {
    // Verificar si es la página de onboarding
    if (pathname === '/onboarding' || pathname === '/auth') {
      return NextResponse.next();
    }
    
    // Verificar si el tenant existe
    const tenantExists = checkTenantExists(subdomain);
    
    if (!tenantExists) {
      // Redirigir a página de onboarding automático
      return NextResponse.redirect(new URL('/onboarding', request.url));
    }
    
    // Agregar headers para el tenant
    const response = NextResponse.next();
    response.headers.set('x-tenant-id', subdomain);
    return response;
  }
  
  return NextResponse.next();
}

// Función para verificar si el tenant existe
async function checkTenantExists(tenantId: string): Promise<boolean> {
  try {
    // En desarrollo, siempre redirigir al onboarding para nuevos subdominios
    if (process.env.NODE_ENV === 'development') {
      return false; // Siempre mostrar onboarding en desarrollo
    }
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/register-tenant?domain=${tenantId}`);
    return response.ok;
  } catch (error) {
    console.error('Error checking tenant:', error);
    return false;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

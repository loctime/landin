'use client';

export default function DebugEnvPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">🔍 Debug Variables de Entorno</h1>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Variables del Cliente (Frontend)</h2>
          <div className="bg-gray-900 p-4 rounded-lg space-y-2">
            <div>NEXT_PUBLIC_FIREBASE_API_KEY: {process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '❌ No encontrada'}</div>
            <div>NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '❌ No encontrada'}</div>
            <div>NEXT_PUBLIC_FIREBASE_PROJECT_ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '❌ No encontrada'}</div>
            <div>NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: {process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '❌ No encontrada'}</div>
            <div>NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: {process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '❌ No encontrada'}</div>
            <div>NEXT_PUBLIC_FIREBASE_APP_ID: {process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '❌ No encontrada'}</div>
          </div>

          <h2 className="text-2xl font-semibold">Variables del Servidor (Backend)</h2>
          <div className="bg-gray-900 p-4 rounded-lg space-y-2">
            <div>FIREBASE_ADMIN_PRIVATE_KEY: {process.env.FIREBASE_ADMIN_PRIVATE_KEY ? '✅ Configurada' : '❌ No encontrada'}</div>
            <div>FIREBASE_ADMIN_CLIENT_EMAIL: {process.env.FIREBASE_ADMIN_CLIENT_EMAIL || '❌ No encontrada'}</div>
            <div>FIREBASE_PROJECT_ID: {process.env.FIREBASE_PROJECT_ID || '❌ No encontrada'}</div>
          </div>

          <h2 className="text-2xl font-semibold">Información del Sistema</h2>
          <div className="bg-gray-900 p-4 rounded-lg space-y-2">
            <div>NODE_ENV: {process.env.NODE_ENV}</div>
            <div>NEXT_PUBLIC_VERCEL_URL: {process.env.NEXT_PUBLIC_VERCEL_URL || 'No definida'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

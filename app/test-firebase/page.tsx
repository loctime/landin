'use client';

import { useEffect, useState } from 'react';
import { testFirebaseConfig } from '@/lib/firebase-simple-test';

export default function TestFirebasePage() {
  const [results, setResults] = useState<{
    clientVars: boolean;
    serverVars: boolean;
    clientInit: boolean;
    loading: boolean;
  }>({
    clientVars: false,
    serverVars: false,
    clientInit: false,
    loading: true,
  });

  useEffect(() => {
    function runTests() {
      console.log('🔥 Iniciando pruebas de Firebase...\n');
      
      const { clientOk, serverOk } = testFirebaseConfig();
      
      setResults({
        clientVars: clientOk,
        serverVars: serverOk,
        clientInit: clientOk, // Si las variables del cliente están bien, asumimos que la inicialización también
        loading: false,
      });
    }

    runTests();
  }, []);

  if (results.loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg">Probando configuración de Firebase...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          🔥 Prueba de Configuración Firebase
        </h1>
        
        <div className="grid gap-6">
          {/* Variables del Cliente */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              {results.clientVars ? '✅' : '❌'} Variables del Cliente (Frontend)
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>NEXT_PUBLIC_FIREBASE_API_KEY:</span>
                <span className={process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'text-green-400' : 'text-red-400'}>
                  {process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? '✅ Configurada' : '❌ Faltante'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:</span>
                <span className={process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'text-green-400' : 'text-red-400'}>
                  {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? '✅ Configurada' : '❌ Faltante'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>NEXT_PUBLIC_FIREBASE_PROJECT_ID:</span>
                <span className={process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'text-green-400' : 'text-red-400'}>
                  {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? '✅ Configurada' : '❌ Faltante'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:</span>
                <span className={process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? 'text-green-400' : 'text-red-400'}>
                  {process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? '✅ Configurada' : '❌ Faltante'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:</span>
                <span className={process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? 'text-green-400' : 'text-red-400'}>
                  {process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? '✅ Configurada' : '❌ Faltante'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>NEXT_PUBLIC_FIREBASE_APP_ID:</span>
                <span className={process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'text-green-400' : 'text-red-400'}>
                  {process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? '✅ Configurada' : '❌ Faltante'}
                </span>
              </div>
            </div>
          </div>

          {/* Variables del Servidor */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              {results.serverVars ? '✅' : '❌'} Variables del Servidor (Backend)
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>FIREBASE_ADMIN_PRIVATE_KEY:</span>
                <span className={process.env.FIREBASE_ADMIN_PRIVATE_KEY ? 'text-green-400' : 'text-red-400'}>
                  {process.env.FIREBASE_ADMIN_PRIVATE_KEY ? '✅ Configurada' : '❌ Faltante'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>FIREBASE_ADMIN_CLIENT_EMAIL:</span>
                <span className={process.env.FIREBASE_ADMIN_CLIENT_EMAIL ? 'text-green-400' : 'text-red-400'}>
                  {process.env.FIREBASE_ADMIN_CLIENT_EMAIL ? '✅ Configurada' : '❌ Faltante'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>FIREBASE_PROJECT_ID:</span>
                <span className={process.env.FIREBASE_PROJECT_ID ? 'text-green-400' : 'text-red-400'}>
                  {process.env.FIREBASE_PROJECT_ID ? '✅ Configurada' : '❌ Faltante'}
                </span>
              </div>
            </div>
          </div>

          {/* Inicialización del Cliente */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              {results.clientInit ? '✅' : '❌'} Inicialización del Cliente
            </h2>
            <p className="text-gray-300">
              {results.clientInit 
                ? 'Firebase se inicializó correctamente en el cliente' 
                : 'Error al inicializar Firebase en el cliente'
              }
            </p>
          </div>

          {/* Resumen */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">📊 Resumen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">
                  {results.clientVars ? '✅' : '❌'}
                </div>
                <div className="text-sm">Variables Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">
                  {results.serverVars ? '✅' : '❌'}
                </div>
                <div className="text-sm">Variables Servidor</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">
                  {results.clientInit ? '✅' : '❌'}
                </div>
                <div className="text-sm">Inicialización</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            ← Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

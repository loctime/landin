// Script simple para verificar configuración de Firebase
export function testFirebaseConfig() {
  console.log('🔥 Verificando configuración de Firebase...\n');
  
  // Variables del cliente (frontend)
  const clientVars = {
    'NEXT_PUBLIC_FIREBASE_API_KEY': process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN': process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID': process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET': process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID': process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    'NEXT_PUBLIC_FIREBASE_APP_ID': process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  // Variables del servidor (backend) - solo verificación, no inicialización
  const serverVars = {
    'FIREBASE_ADMIN_PRIVATE_KEY': process.env.FIREBASE_ADMIN_PRIVATE_KEY,
    'FIREBASE_ADMIN_CLIENT_EMAIL': process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    'FIREBASE_PROJECT_ID': process.env.FIREBASE_PROJECT_ID,
  };

  console.log('📋 Variables del Cliente (Frontend):');
  let clientOk = true;
  Object.entries(clientVars).forEach(([key, value]) => {
    if (value) {
      console.log(`✅ ${key}: ${value.substring(0, 20)}...`);
    } else {
      console.log(`❌ ${key}: No encontrada`);
      clientOk = false;
    }
  });

  console.log('\n📋 Variables del Servidor (Backend):');
  let serverOk = true;
  Object.entries(serverVars).forEach(([key, value]) => {
    if (value) {
      console.log(`✅ ${key}: ${value.substring(0, 20)}...`);
    } else {
      console.log(`❌ ${key}: No encontrada`);
      serverOk = false;
    }
  });

  console.log('\n📊 Resumen:');
  console.log(`Cliente: ${clientOk ? '✅' : '❌'}`);
  console.log(`Servidor: ${serverOk ? '✅' : '❌'}`);
  
  return { clientOk, serverOk };
}

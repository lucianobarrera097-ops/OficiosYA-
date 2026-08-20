// ============================================================
// CONFIGURACIÓN DE FIREBASE - Oficios YA!
// ============================================================
// 1. Entrá a https://console.firebase.google.com
// 2. Creá un proyecto (o usá uno existente)
// 3. Agregá una app Web (+) y copiá la configuración
// 4. Pegá acá abajo los valores de firebaseConfig
// 5. Activá Authentication → Email/Password
// 6. Creá Firestore Database (modo producción o prueba)
// 7. Activá Storage
// 8. Publicá las reglas indicadas en FIREBASE_SETUP.md
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDI4d4E91mxzyYRdL6SmNAiQRWZyHkWwYk",
  authDomain: "oficiosya-18909.firebaseapp.com",
  projectId: "oficiosya-18909",
  storageBucket: "oficiosya-18909.firebasestorage.app",
  messagingSenderId: "5904046358",
  appId: "1:5904046358:web:a17c8c9a0cbe4a1d70d837",
  measurementId: "G-CC2JFJ2QZV"
};

// Inicialización (no modificar)
let app, auth, db, storage;
let firebaseReady = false;

try {
  if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "TU_API_KEY") {
    app = firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    storage = firebase.storage();
    firebaseReady = true;
    console.log("Firebase inicializado correctamente");
  } else {
    console.warn("Firebase no configurado. Completá firebase-config.js con tus credenciales.");
  }
} catch (err) {
  console.error("Error al inicializar Firebase:", err);
  firebaseReady = false;
}

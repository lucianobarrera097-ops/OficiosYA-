# Configurar Firebase para Oficios YA!

Seguí estos pasos para que los registros se guarden en la nube y se vean desde cualquier dispositivo.

## 1. Crear proyecto

1. Entrá a [Firebase Console](https://console.firebase.google.com)
2. **Agregar proyecto** → nombre: por ejemplo `oficios-ya`
3. Podés desactivar Google Analytics si no lo necesitás

## 2. Registrar app Web

1. En el proyecto, tocá el ícono **Web** `</>`
2. Nombre de la app: `Oficios YA`
3. **No** hace falta Firebase Hosting todavía
4. Copiá el objeto `firebaseConfig` que te muestra

## 3. Pegar configuración

Abrí el archivo `firebase-config.js` y reemplazá los valores:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

## 4. Authentication

1. Menú **Build → Authentication → Get started**
2. Pestaña **Sign-in method**
3. Activá **Correo electrónico/contraseña** (Email/Password)
4. Guardá

## 5. Firestore Database

1. **Build → Firestore Database → Create database**
2. Elegí modo **producción** (después ponés las reglas)
3. Ubicación: la más cercana (ej. `southamerica-east1`)

### Reglas de Firestore (pestaña Rules)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if true;
      allow create: if request.auth != null && request.auth.uid == userId;
      allow update, delete: if request.auth != null && request.auth.uid == userId;
    }
    match /reviews/{reviewId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if false;
    }
    match /quotes/{quoteId} {
      allow read: if request.auth != null &&
        (resource.data.profId == request.auth.uid || resource.data.clienteId == request.auth.uid);
      allow create: if request.auth != null;
      allow update: if request.auth != null && resource.data.profId == request.auth.uid;
    }
    match /notifications/{notifId} {
      allow read, update: if request.auth != null && resource.data.userId == request.auth.uid;
      allow create: if request.auth != null;
    }
  }
}
```

Publicá las reglas (**Publish**).

## 6. Storage (fotos)

1. **Build → Storage → Get started**
2. Usá las reglas de prueba al inicio o estas:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    match /quotes/{userId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 7. Archivos en GitHub / hosting

Subí **todos** estos archivos juntos:

- `index.html`
- `styles.css`
- `app.js`
- `firebase-config.js`  ← con tus claves
- `logo.jpg`

## 8. Probar

1. Abrí la app
2. Registrate como cliente o profesional
3. Cerrá sesión y entrá desde otro navegador/dispositivo con el mismo email
4. Deberías ver la misma cuenta

## Notas

- Las cuentas **demo** de ejemplo solo existen si las sembrás; los usuarios reales se crean con Auth.
- No subas `firebase-config.js` con claves a un repo **público** si preferís ocultarlas (para una app de aprendizaje suele estar bien; las reglas de seguridad protegen los datos).
- Si ves error de CORS o “permission denied”, revisá las reglas de Firestore y Storage.

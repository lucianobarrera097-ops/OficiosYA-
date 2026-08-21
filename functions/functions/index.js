/**
 * Cloud Functions — Oficios YA!
 *
 * Al crear una reseña o un presupuesto en Firestore,
 * genera automáticamente la notificación para el profesional.
 *
 * Deploy:
 *   cd functions && npm install
 *   firebase deploy --only functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

/**
 * Cuando se crea una reseña → notificación al profesional
 */
exports.onReviewCreated = functions.firestore
  .document("reviews/{reviewId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();
    if (!data || !data.profId) {
      console.warn("Reseña sin profId, se omite notificación");
      return null;
    }

    const calidad = data.calidad || 0;
    const tiempo = data.tiempo || 0;
    const precio = data.precio || 0;
    const comentario = data.comentario || "";
    const nombre = data.clienteNombre || "Un cliente";

    const notif = {
      userId: data.profId,
      tipo: "resena",
      mensaje: `${nombre} te dejó una reseña y valoración.`,
      detalle: `"${comentario.substring(0, 60)}${
        comentario.length > 60 ? "..." : ""
      }" — Calidad: ${calidad}★, Tiempo: ${tiempo}★, Precio: ${precio}★`,
      reviewId: context.params.reviewId,
      fecha: new Date().toISOString(),
      read: false,
      source: "cloud-function",
    };

    await db.collection("notifications").add(notif);
    console.log(`Notificación de reseña creada para ${data.profId}`);
    return null;
  });

/**
 * Cuando se solicita un presupuesto → notificación al profesional
 */
exports.onQuoteCreated = functions.firestore
  .document("quotes/{quoteId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();
    if (!data || !data.profId) {
      console.warn("Presupuesto sin profId, se omite notificación");
      return null;
    }

    const nombre = data.clienteNombre || "Un cliente";
    const urgencia = data.urgencia || "Normal";
    const descripcion = data.descripcion || "";

    const notif = {
      userId: data.profId,
      tipo: "presupuesto",
      mensaje: `${nombre} te solicitó un presupuesto (${urgencia}).`,
      detalle:
        descripcion.substring(0, 120) +
        (descripcion.length > 120 ? "..." : ""),
      quoteId: context.params.quoteId,
      fecha: new Date().toISOString(),
      read: false,
      source: "cloud-function",
    };

    await db.collection("notifications").add(notif);
    console.log(`Notificación de presupuesto creada para ${data.profId}`);
    return null;
  });

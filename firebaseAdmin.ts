import { getApp, getApps } from "firebase/app";
import admin, { credential, initializeApp } from "firebase-admin";


const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACC_KEY
  );

  getApps().length === 0 ? initializeApp({
    credential: credential.cert(serviceAccount)
  }) : getApp();

const adminDb = admin.firestore();

export {adminDb};
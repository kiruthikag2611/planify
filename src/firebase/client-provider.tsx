'use client';

import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore, Firestore } from 'firebase/firestore';
import { ReactNode, useMemo } from 'react';
import { FirebaseProvider } from './provider';

// This is a public config, so it's safe to expose.
// Your rules in `firestore.rules` will protect your data.
const firebaseConfig = {
  apiKey: "TODO_FROM_FIREBASE_CONSOLE",
  authDomain: "TODO_FROM_FIREBASE_CONSOLE",
  projectId: "TODO_FROM_FIREBASE_CONSOLE",
  storageBucket: "TODO_FROM_FIREBASE_CONSOLE",
  messagingSenderId: "TODO_FROM_FIREBASE_CONSOLE",
  appId: "TODO_FROM_FIREBASE_CONSOLE"
};

function initializeFirebase() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  // Note: App Hosting deploys to production, so emulators are not used.
  // If you want to use emulators, you can uncomment the following lines.
  // if (process.env.NEXT_PUBLIC_USE_EMULATORS === 'true') {
  //   connectAuthEmulator(auth, 'http://localhost:9099');
  //   connectFirestoreEmulator(firestore, 'localhost', 8080);
  // }
  
  return { app, auth, firestore };
}

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  const { app, auth, firestore } = useMemo(initializeFirebase, []);

  return (
    <FirebaseProvider app={app} auth={auth} firestore={firestore}>
      {children}
    </FirebaseProvider>
  );
}

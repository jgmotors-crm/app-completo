import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SUA_AUTH_DOMAIN',
  projectId: 'jg-motors-crm',
  storageBucket: 'jg-motors-crm.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

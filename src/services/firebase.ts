import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCGaptbZ9_A3exYkjLJagQ6HDqYAYjAIJo',
  authDomain: 'food-store-dbfd2.firebaseapp.com',
  projectId: 'food-store-dbfd2',
  storageBucket: 'food-store-dbfd2.firebasestorage.app',
  messagingSenderId: '1038133903830',
  appId: '1:1038133903830:web:a70224f70f23591f42e477',
  measurementId: 'G-TCT179N1E2',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAFDYKU5FzK-jjqdezs6A0zJjV6oaV3bys",
  authDomain: "housemarketplaceapp-908ae.firebaseapp.com",
  projectId: "housemarketplaceapp-908ae",
  storageBucket: "housemarketplaceapp-908ae.appspot.com",
  messagingSenderId: "587415183634",
  appId: "1:587415183634:web:99f6e90367c740051c53cb"
};

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
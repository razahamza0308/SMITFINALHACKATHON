import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query, where, onSnapshot } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBZXXWc-OG_HXVRcx7rVvahSR6Lr_lOWdA",
    authDomain: "officework-e1d5f.firebaseapp.com",
    projectId: "officework-e1d5f",
    storageBucket: "officework-e1d5f.appspot.com",
    messagingSenderId: "1056047844376",
    appId: "1:1056047844376:web:2b244e8f5082e2ce88076d",
    measurementId: "G-TMHX4SGJGH"
});

const auth = getAuth();
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,

  db,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
};
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import "firebase/firestore"

const config  = {
    apiKey: "AIzaSyDI-5DsQrooOGNAznKUrYBwODEjSmCnY3A",
    authDomain: "fir-b2557.firebaseapp.com",
    projectId: "fir-b2557",
    storageBucket: "fir-b2557.appspot.com",
    messagingSenderId: "1087617882492",
    appId: "1:1087617882492:web:0365f825f90a3d0b2b2cf9",
    measurementId: "G-2R0B3QZGC5"
} 

initializeApp(config);

const auth = getAuth()

export { auth }
























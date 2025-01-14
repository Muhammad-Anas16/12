import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,

} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAV7dFhyqLbmfVtpUIFM6R04bXEprEmQcY",
    authDomain: "asdfsdf-6f1e2.firebaseapp.com",
    projectId: "asdfsdf-6f1e2",
    storageBucket: "asdfsdf-6f1e2.firebasestorage.app",
    messagingSenderId: "315766363992",
    appId: "1:315766363992:web:3b7536b3c5be11ee12f72d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    getDocs,
};
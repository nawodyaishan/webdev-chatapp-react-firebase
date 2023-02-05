// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf1ONuw5rqpMwVYrL4HOy7k1VfFKOzANw",
    authDomain: "chat-app-90349.firebaseapp.com",
    projectId: "chat-app-90349",
    storageBucket: "chat-app-90349.appspot.com",
    messagingSenderId: "802694815295",
    appId: "1:802694815295:web:8fdfd091c8d2c2136be28a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app)
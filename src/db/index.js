
import firebase from 'firebase/app';
import '@firebase/firestore';
import "firebase/storage";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAHQfl0rUnps_rQDZ3b8Z9yWnyuqaT9eBw",
    authDomain: "dads-772b3.firebaseapp.com",
    projectId: "dads-772b3",
    storageBucket: "dads-772b3.appspot.com",
    messagingSenderId: "879622053536",
    appId: "1:879622053536:web:ad5294b2c38a994e7cb3c5"
});

export function getFirebase() {
    return app;
}

export function getStorage() {
    return firebase.storage(app);
  }
  
export function getFirestore() {
    return firebase.firestore(app);
}
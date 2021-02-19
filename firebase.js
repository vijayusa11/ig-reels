import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA0jj60my8Thi0vKWV8PsL1obmbdj2VYBI",
  authDomain: "ig-reels-d0d9c.firebaseapp.com",
  projectId: "ig-reels-d0d9c",
  storageBucket: "ig-reels-d0d9c.appspot.com",
  messagingSenderId: "793019852123",
  appId: "1:793019852123:web:f612351329de1d6fb5267e",
  measurementId: "G-QX1VX3KRQ1"
  });

  const db = firebaseApp.firestore();

  export default db;
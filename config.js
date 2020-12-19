import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAFKlGztSYr2oUsbbZEbUwaui-kfLVjxnI",
    authDomain: "symptom-checker-app-88e14.firebaseapp.com",
    databaseURL: "https://symptom-checker-app-88e14.firebaseio.com",
    projectId: "symptom-checker-app-88e14",
    storageBucket: "symptom-checker-app-88e14.appspot.com",
    messagingSenderId: "461471479983",
    appId: "1:461471479983:web:126f064bf161905c08bc5a"
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
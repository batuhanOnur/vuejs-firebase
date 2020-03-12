import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCWDx6JV1prEnhp64e_9EwOwQGFGBk7naQ",
    authDomain: "smoothie-43572.firebaseapp.com",
    databaseURL: "https://smoothie-43572.firebaseio.com",
    projectId: "smoothie-43572",
    storageBucket: "smoothie-43572.appspot.com",
    messagingSenderId: "526345676996",
    appId: "1:526345676996:web:6f9eb8646b8207f4240191",
    measurementId: "G-GTH3365LR2"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//export firestore database
export default firebaseApp.firestore();
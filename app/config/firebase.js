import * as firebase from 'firebase';
import * as c from "./constants"

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBx2YFNaDyXKaqiESdyO64Z5blmpI2O01E",
    authDomain: "bra-size-calculator-7da70.firebaseapp.com",
    databaseURL: "https://bra-size-calculator-7da70.firebaseio.com",
    projectId: "bra-size-calculator-7da70",
    storageBucket: "bra-size-calculator-7da70.appspot.com",
    messagingSenderId: "247652679612"
};

firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();

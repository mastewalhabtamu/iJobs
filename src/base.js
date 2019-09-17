import React from 'react'
import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyCVrTwrWZAQjIfXWZbTX66S2vKWyJAqlP8",
    authDomain: "erudite-acre-235806.firebaseapp.com",
    databaseURL: "https://erudite-acre-235806.firebaseio.com",
    projectId: "erudite-acre-235806",
    storageBucket: "",
    messagingSenderId: "624592216627",
    appId: "1:624592216627:web:3c8f3291d1798606267946"
})



export {firebaseConfig as default}
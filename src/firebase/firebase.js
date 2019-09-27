import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBtPSZmbUyxa1jCE1ysGwJEFTav-Yc2Xi8",
    authDomain: "cupturing.firebaseapp.com",
    databaseURL: "https://cupturing.firebaseio.com",
    projectId: "cupturing",
    storageBucket: "cupturing.appspot.com",
    messagingSenderId: "133602788052",
    appId: "1:133602788052:web:8a2ad3ad7994d73a483141"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
    }
}

export default Firebase;
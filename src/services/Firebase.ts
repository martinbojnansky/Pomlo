import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAqwTKoAFEuf7c8675xxQ7Mc5yvaLXnndI",
    authDomain: "pomlo-4d3b6.firebaseapp.com",
    databaseURL: "https://pomlo-4d3b6.firebaseio.com",
    projectId: "pomlo-4d3b6",
    storageBucket: "pomlo-4d3b6.appspot.com",
    messagingSenderId: "1001384575729"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config); 
}

const db = () => firebase.firestore();
const settings = { timestampsInSnapshots: true};
db().settings(settings);

const auth = () => firebase.auth();
const googleAuthProvider = () => new firebase.auth.GoogleAuthProvider();

const loginWithGoogle = () => auth().signInWithPopup(googleAuthProvider());
const logout = () => auth().signOut();

export default {
    db,
    auth,
    loginWithGoogle,
    logout
}
import firebase from 'firebase/app';
 
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDvyr5yPA8GpfPlfc60onqlE5LvxStVx9I",
    authDomain: "crwn-db-60517.firebaseapp.com",
    databaseURL: "https://crwn-db-60517.firebaseio.com",
    projectId: "crwn-db-60517",
    storageBucket: "crwn-db-60517.appspot.com",
    messagingSenderId: "295856144127",
    appId: "1:295856144127:web:d54332d48d60c421ef16ca",
    measurementId: "G-S8Z1M7QJ84"
  };


firebase.initializeApp(config);

// method that we imported earlier; by exporting it now we can use it anywhere related to auth
export const auth = firebase.auth();  

export const firestore = firebase.firestore();


// Create an instance of the Google provider object
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

//const twitterProvider = new firebase.auth.TwitterAuthProvider();


// created a function that calls popup sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// now go to firebase panel and enable the google auth in sidebar we have.also select project support email

// in case you want the whole library
export default firebase;






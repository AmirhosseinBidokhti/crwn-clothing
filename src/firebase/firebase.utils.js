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

// method that we imported earlier; by exporting it now we can use it anywhere related to auth or firestore
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


// ----------------------------------------------------------------------------------------------------


// Function that allows us to take user auth object got back from authentication library and then store it inside DB
// Since we're making API request we set it async 
// Gets userAuth object from auth library and possibly additional data in from of an object.

export const createUserProfileDocument = async (userAuth, additionalData) => {
  
  // check if valid user object exists otherwise exit the function (null returned)
  if (!userAuth) return;

  // if its not null, query inside firestore for document to see if it already exists
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // if it does not exist, create user, to create we use documentrefrence object not snap shot that only represent
  if(!snapShot.exists) {
    
    // properties we want to store
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    // async request to our database, to store data now
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch(error) {
      console.log('error creating user', error.message);
    }

  }
  // what this function also does return the userRef always. because theres chance we wanna use this
  return userRef; 

}


















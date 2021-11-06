/**
 * if you have using a version of firebase that's greater than v8, you will encounter the import error
 **/

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBbgMgTEQk4BLL034q5fPvThZtyW6R6jB8",
  authDomain: "crwn-db2-f72b6.firebaseapp.com",
  projectId: "crwn-db2-f72b6",
  storageBucket: "crwn-db2-f72b6.appspot.com",
  messagingSenderId: "306143668371",
  appId: "1:306143668371:web:c342279e8771d190b80566",
  measurementId: "G-VT84EGRRYF"
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;
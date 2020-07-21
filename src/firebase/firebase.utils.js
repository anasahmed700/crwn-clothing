import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB2Q_zky1cjfujj1UszmrAaFoiotB44VL4",
  authDomain: "crwn-store-test.firebaseapp.com",
  databaseURL: "https://crwn-store-test.firebaseio.com",
  projectId: "crwn-store-test",
  storageBucket: "crwn-store-test.appspot.com",
  messagingSenderId: "298188873916",
  appId: "1:298188873916:web:cf537b01d3e779bb7c70b9",
  measurementId: "G-XNHYN3XPE1"
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

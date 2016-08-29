import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyA6E2n8ZhpRgNFcY6hol472mLUD7zZ-kdU",
  authDomain: "reactmodoro.firebaseapp.com",
  databaseURL: "https://reactmodoro.firebaseio.com",
  storageBucket: "reactmodoro.appspot.com",
})

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider

export {
  ref,
  firebaseAuth,
  facebookProvider,
}
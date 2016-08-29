import { firebaseAuth, facebookProvider, ref } from '~/config/constants'
import { AccessToken } from 'react-native-fbsdk'

export function getAccessToken () {
  return AccessToken.getCurrentAccessToken()
}

export function authWithToken (accesToken) {
  return firebaseAuth
    .signInWithCredential(facebookProvider.credential(accesToken))
}

export function updateUser (user) {
  return ref.child(`users/${user.uid}`).set(user)
}
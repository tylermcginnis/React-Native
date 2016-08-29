import { firebaseAuth, facebookProvider } from '~/config/constants'
import { AccessToken } from 'react-native-fbsdk'

export function getAccessToken () {
  return AccessToken.getCurrentAccessToken()
}

export function authWithToken (accesToken) {
  return firebaseAuth
    .signInWithCredential(facebookProvider.credential(accesToken))
}
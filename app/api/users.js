import { ref } from '~/config/constants'

export function fetchUser (uid) {
  return ref.child(`users/${uid}`)
    .once('value')
    .then((snapshot) => snapshot.val())
}
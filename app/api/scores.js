import { ref } from '~/config/constants'

export function fetchScore (uid) {
  return ref.child(`scores/${uid}`)
    .once('value')
    .then((snapshot) => snapshot.val())
}
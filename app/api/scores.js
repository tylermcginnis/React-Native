import { ref } from '~/config/constants'

export function fetchScore (uid) {
  return ref.child(`scores/${uid}`)
    .once('value')
    .then((snapshot) => snapshot.val())
}

export function increaseScore (uid, amount) {
  return ref.child(`scores/${uid}/score`)
    .transaction((score) => score += amount)
}

export function decreaseScore (uid, amount) {
  return ref.child(`scores/${uid}/score`)
    .transaction((score) => score -= amount)
}
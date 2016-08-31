import { ref } from '~/config/constants'

export function setTimer (duration, uid) {
  return ref.child(`settings/${uid}/timerDuration`)
    .set(duration)
}

export function setRest (duration, uid) {
  return ref.child(`settings/${uid}/restDuration`)
    .set(duration)
}

export function fetchSettings (uid) {
  return ref.child(`settings/${uid}`)
    .once('value')
    .then((snapshot) => {
      const timerDuration = 20
      const restDuration = 5

      const settings = snapshot.val()

      if (settings === null) {
        return {
          timerDuration,
          restDuration
        }
      } else if (!settings.timerDuration) {
        return {
          timerDuration,
          restDuration: settings.restDuration,
        }
      } else if (!settings.restDuration) {
        return {
          restDuration,
          timerDuration: settings.timerDuration,
        }
      } else {
        return settings
      }
    })
}
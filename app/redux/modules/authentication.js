import { getAccessToken, authWithToken, updateUser, logout } from '~/api/auth'
import { fetchSettings } from '~/api/settings'
import { addSettingsTimerDuration, addSettingsRestDuration } from '~/redux/modules/settings'

const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const IS_AUTHED = 'IS_AUTHED'
export const LOGGING_OUT = 'LOGGING_OUT'

export function onAuthChange (user) {
  return function (dispatch) {
    if (!user) {
      dispatch(notAuthed())
    } else {
      const { uid, displayName, photoURL } = user
      updateUser({
        uid,
        name: displayName,
        avatar: photoURL,
      })
      .then(() => fetchSettings(uid))
      .then((settings) => Promise.all([
        dispatch(addSettingsTimerDuration(settings.timerDuration)),
        dispatch(addSettingsRestDuration(settings.restDuration))
      ]))
      .then(() => dispatch(isAuthed(uid)))
    }
  }
}

function authenticating () {
  return {
    type: AUTHENTICATING,
  }
}

function notAuthed () {
  return {
    type: NOT_AUTHED,
  }
}

function isAuthed (uid) {
  return {
    type: IS_AUTHED,
    uid,
  }
}

function loggingOut () {
  return {
    type: LOGGING_OUT
  }
}

export function handleAuthWithFirebase () {
  return function (dispatch, getState) {
    dispatch(authenticating())
    return getAccessToken()
      .then(({accessToken}) => authWithToken(accessToken))
      .catch((error) => console.warn('Error in handleAuthWithFirebase', error))
  }
}

export function handleUnauth () {
  return function (dispatch) {
    logout()
    dispatch(loggingOut())
  }
}

const initialState = {
  isAuthed: false,
  isAuthenticating: true,
  authedId: '',
}

export default function authentication (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING :
      return {
        ...state,
        isAuthenticating: true,
      }
    case NOT_AUTHED :
      return {
        ...state,
        isAuthenticating: false,
        isAuthed: false,
        authedId: '',
      }
    case IS_AUTHED :
      return {
        ...state,
        isAuthed: true,
        isAuthenticating: false,
        authedId: action.uid,
      }
    default :
      return state
  }
}
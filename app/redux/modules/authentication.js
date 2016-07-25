import { getAccessToken, authWithToken } from '~/api/auth'

const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const IS_AUTHED = 'IS_AUTHED'

export function onAuthChange (user) {
  return function (dispatch) {
    if (!user) {
      dispatch(notAuthed())
    } else {
      const { providerData, uid } = user
      dispatch(isAuthed(uid))
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

export function handleAuthWithFirebase () {
  return function (dispatch, getState) {
    dispatch(authenticating())
    return getAccessToken()
      .then(({accessToken}) => authWithToken(accessToken))
      .catch((error) => console.warn('Error in handleAuthWithFirebase', error))
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
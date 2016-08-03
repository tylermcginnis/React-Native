import { ref } from '~/config/constants'
import { fetchScore, increaseScore, decreaseScore } from '~/api/scores'
import { addMultipleUsers, addUser } from '~/redux/modules/users'
import { fetchUser } from '~/api/users'
import { showFlashNotification } from '~/redux/modules/flashNotification'

const FETCHING_SCORE = 'FETCHING_SCORE'
const FETCHING_SCORE_SUCCESS = 'FETCHING_SCORE_SUCCESS'
const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD'
const ADD_LISTENER = 'ADD_LISTENER'
const ADD_SCORES = 'ADD_SCORES'
const INCREMENT_SCORE = 'INCREMENT_SCORE'
const DECREMENT_SCORE = 'DECREMENT_SCORE'

function fetchingScore () {
  return {
    type: FETCHING_SCORE,
  }
}

function fetchingScoreSuccess (uid, score) {
  return {
    type: FETCHING_SCORE_SUCCESS,
    uid,
    score,
  }
}

function updateLeaderboard (uids) {
  return {
    type: UPDATE_LEADERBOARD,
    uids,
  }
}

function addScores (scores) {
  return {
    type: ADD_SCORES,
    scores,
  }
}

function addListener () {
  return {
    type: ADD_LISTENER
  }
}

function incrementScore (uid, amount) {
  return {
    type: INCREMENT_SCORE,
    amount,
    uid,
  }
}

function decrementScore (uid, amount) {
  return {
    type: DECREMENT_SCORE,
    amount,
    uid,
  }
}

export function incrementAndHandleScore (amount) {
  return function (dispatch, getState) {
    const { authedId } = getState().authentication
    dispatch(incrementScore(authedId, amount))
    increaseScore(authedId, amount)
      .catch((error) => {
        dispatch(showFlashNotification({text: 'Error updating your score'}))
        dispatch(decrementScore(authedId, amount))
      })
  }
}

export function decrementAndHandleScore (amount) {
  return function (dispatch, getState) {
    const { authedId } = getState().authentication
    dispatch(decrementScore(authedId, amount))
    decreaseScore(authedId, amount)
      .catch((error) => {
        dispatch(showFlashNotification({text: 'Error updating your score'}))
        dispatch(decrementScore(authedId, amount))
      })
  }
}

export function fetchAndHandleScore (uid) {
  return function (dispatch, getState)  {
    dispatch(fetchingScore())
    return fetchScore(uid)
      .then((scoreInfo) => {
        dispatch(fetchingScoreSuccess(uid, !scoreInfo || !scoreInfo.score ? 0 : scoreInfo.score))

        return typeof getState().users[uid] === 'undefined'
          ? fetchUser(uid).then((user) => dispatch(addUser(uid, user)))
          : Promise.resolve()
      })
      .catch((error) => console.warn('Error in fetchAndHandleScore: ', error))
  }
}

export function fetchAndSetScoreListener () {
  return function (dispatch, getState) {
    let listenerSet = false
    ref.child('scores')
      .orderByValue()
      .limitToLast(15)
      .on('value', (snapshot) => {
        const leaderboard = snapshot.val() || {}
        const leaderboardUids = Object.keys(leaderboard)
          .sort((a,b) => leaderboard[b].score - leaderboard[a].score)
          .filter((uid) => !!leaderboard[uid].score || leaderboard[uid].score > 0)

        const { scores, users } = leaderboardUids.reduce((prev, uid) => {
          prev.scores[uid] = leaderboard[uid].score
          prev.users[uid] = {
            name: leaderboard[uid].name,
            avatar: leaderboard[uid].avatar,
            uid: leaderboard[uid].uid,
          }
          return prev
        }, {scores: {}, users: {}})

        dispatch(updateLeaderboard(leaderboardUids))
        dispatch(addMultipleUsers(users))
        dispatch(addScores(scores))

        if (listenerSet === false) {
          dispatch(addListener())
          listenerSet = true
        }
      })
  }
}

function usersScores (state = {}, action) {
  switch (action.type) {
    case FETCHING_SCORE_SUCCESS :
      return {
        ...state,
        [action.uid]: action.score,
      }
    case ADD_SCORES :
      return {
        ...state,
        ...action.scores,
      }
    case INCREMENT_SCORE :
      return {
        ...state,
        [action.uid]: state[action.uid] + action.amount
      }
    case DECREMENT_SCORE :
      return {
        ...state,
        [action.uid]: state[action.uid] - action.amount
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: true,
  listenerSet: false,
  leaderboardUids: [],
  usersScores: {}
}

export default function scores (state = initialState, action) {
  switch (action.type) {
    case FETCHING_SCORE :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_SCORE_SUCCESS :
      return {
        ...state,
        isFetching: false,
        usersScores: usersScores(state.usersScores, action),
      }
    case UPDATE_LEADERBOARD :
      return {
        ...state,
        leaderboardUids: action.uids,
      }
    case INCREMENT_SCORE :
    case DECREMENT_SCORE :
    case ADD_SCORES :
      return {
        ...state,
        usersScores: usersScores(state.usersScores, action)
      }
    case ADD_LISTENER :
      return {
        ...state,
        listenerSet: true,
      }
    default :
      return state
  }
}
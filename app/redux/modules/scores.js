import { ref } from '~/config/constants'
import { fetchScore } from '~/api/scores'
import { addMultipleUsers, addUser } from '~/redux/modules/users'
import { fetchUser } from '~/api/users'

const FETCHING_SCORE = 'FETCHING_SCORE'
const FETCHING_SCORE_SUCCESS = 'FETCHING_SCORE_SUCCESS'
const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD'
const ADD_LISTENER = 'ADD_LISTENER'
const ADD_SCORES = 'ADD_SCORES'

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

export function fetchAndHandleScore (uid) {
  return function (dispatch, getState)  {
    dispatch(fetchingScore())
    return fetchScore(uid)
      .then((scoreInfo) => {
        const { users } = getState()
        dispatch(fetchingScoreSuccess(uid, scoreInfo === null ? 0 : scoreInfo.score))

        return typeof users[uid] === 'undefined'
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
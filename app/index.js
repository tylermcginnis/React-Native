import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux'
import { AppContainer } from './containers'
import devTools from 'remote-redux-devtools'
import { LOGGING_OUT } from '~/redux/modules/authentication'

const appReducer = combineReducers(reducers)

function rootReducer (state, action) {
  if (action.type === LOGGING_OUT) {
    state = undefined
  }

  return appReducer(state, action)
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    devTools()
  )
)

export default function ReactModoro () {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

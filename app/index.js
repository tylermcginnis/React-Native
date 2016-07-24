import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux'
import { AppContainer } from './containers'

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
)

export default function ReactModoro () {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

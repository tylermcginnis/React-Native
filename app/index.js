import React from 'react'
import { AppContainer } from '~/containers'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux'

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
)

export default function ReactModoro (props) {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
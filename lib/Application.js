import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createMemoryHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducer, { dispatchMiddleware } from './state'
//import { client } from './utils'
import BaseRouter from './BaseRouter'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
})

const history = createHistory()
const reactRouterMiddleware = routerMiddleware(history)
//const internalDispatchMiddleware = dispatchMiddleware(client)

const configureStore = (initialState) => {
  const middlewares = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      //internalDispatchMiddleware,
      reactRouterMiddleware
    )
  )
    console.log('configureStore')

  return createStore(reducer, initialState, middlewares)
}

const store = configureStore({})

export default Application = () =>
  <Provider store={store}>
    <BaseRouter />
  </Provider>
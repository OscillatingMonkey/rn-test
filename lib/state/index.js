import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user'

export { default as dispatchMiddleware } from './dispatch-middleware'

export default combineReducers({
  router: routerReducer,
  user
})

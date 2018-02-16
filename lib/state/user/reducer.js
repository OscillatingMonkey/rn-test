import {
  ADD,
  REMOVE,
  UPDATE
} from './types'

const updateState = payload => ({
  ...payload,
  loggedIn: payload.key !== null
})

const initialState = {
  key: null,
  name: null,
  email: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...initialState, ...updateState(payload) }
    case UPDATE:
      return { ...state, ...updateState(payload) }
    case REMOVE:
      return initialState
    default:
      return state
  }
}

import { UPDATE } from './types'

const mockUser = {
  key: 'somekey',
  email: 'someemail',
  name: 'somename'
}

const login = (data) => {
  return {
    type: UPDATE,
    payload: mockUser
  }
}

export default {
  login
}

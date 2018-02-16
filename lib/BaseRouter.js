import React from 'react'

import { connect } from 'react-redux'

import AuthenticatedRouter from './AuthenticatedRouter'
import NonAuthenticatedRouter from './NonAuthenticatedRouter'

export const BaseRouter = (props) =>
  props.loggedIn
    ? <AuthenticatedRouter />
    : <NonAuthenticatedRouter />

const state = ({
  user: {
    loggedIn
  }
}) => ({ loggedIn })

export default connect(state)(BaseRouter)

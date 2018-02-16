import React from 'react'

import {
  NativeRouter,
  AndroidBackButton,
  Route
} from 'react-router-native'

import Login from './views/Login'
import ArtistDetails from "./views/ArtistDetails";

export const NonAuthenticatedRouter = () =>
  <NativeRouter>
    <AndroidBackButton>
      <Route exact path='/' component={Login} />
        <Route exact path='/details/:id' component={ArtistDetails} />
    </AndroidBackButton>
  </NativeRouter>

export default NonAuthenticatedRouter

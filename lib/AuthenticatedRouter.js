import React from 'react'

import {
  NativeRouter,
  AndroidBackButton,
  Route,
} from 'react-router-native'

import { View } from 'react-native'
import Main from './views/Main'
import StudioDetails from './views/StudioDetails'
import ArtistDetails from './views/ArtistDetails'

export const AuthenticatedRouter = () =>
  <NativeRouter>
    <View>
        <Route exact path='/' component={Main} />
        <Route exact path='/ivam' component={ArtistDetails} />
        <Route exact path='/studios/details/:id' component={ArtistDetails} />
        <Route exact path='/artists/details/:id' component={ArtistDetails} />
    </View>
  </NativeRouter>

export default AuthenticatedRouter

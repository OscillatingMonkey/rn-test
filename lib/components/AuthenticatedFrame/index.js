import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

const bannerStyle = {
  flexDirection: 'row',
  height: '30%',
  backgroundColor: '#1c8d79'
}

const Banner = (props) =>
  <View style={bannerStyle}>
    <Text>
      {'adfa'}
    </Text>
  </View>

export default class AuthenticatedFrame extends Component {
  render () {
    return (
      <View>
        <Banner />
        { this.props.children }
      </View>
    )}
}

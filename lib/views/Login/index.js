import React, { Component } from 'react'

import {
  Button,
  View,
  TextInput,
  StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import { userActions } from '../../state/user'

import DetailHeader from '../../components/DetailHeader'
import InfoLabel from '../../components/InfoLabel'

const inputStyle = {}

export class Login extends Component {
  constructor() {
    super()

    this.state = { phone: '' }
  }

  render () {
    return (
      <View>
        <DetailHeader />
          <View style={styles.leftContainer}>
            <InfoLabel title={'Styles:'} value={'Tradictional, Tribal & Waterloo'} />
            <InfoLabel title={'Styles:'} value={'Tradictional, Tribal & Waterloo'} />
          </View>
          <View style={styles.rightContainer}>
              <InfoLabel title={'Styles:'} value={'Tradictional, Tribal & Waterloo'} />
              <InfoLabel title={'Styles:'} value={'Tradictional, Tribal & Waterloo'} />
          </View>
        <InfoLabel title={'Located:'} value={'Toronto'} isAnchoredOnLeftSide={true}  />

        <InfoLabel title={'Address:'} value={'Rua do Riachuelo'} isAnchoredOnLeftSide={true} />
        <TextInput
          style={inputStyle}
          placeholder={'Enter your phone numbers'}
          onChangeText={i => this.setState({ phone: i })}
          keyboardType={'number-pad'}
        />

        <Button
          title={'Login'}
          onPress={() => this.props.submit(this.state.phone)}
        />
      </View>
    )
  }
}

const actions = (dispatch) => ({
  submit: (data) => dispatch(userActions.login(data))
})

export default connect(null, actions)(Login)

var styles = StyleSheet.create({
    leftContainer: {
        alignItems: 'flex-start',

    },
    rightContainer: {
        alignItems: 'flex-end'
    }
});
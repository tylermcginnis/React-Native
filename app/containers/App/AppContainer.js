import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { ReactModoroNavigator } from '~/containers'
import { PreSplash } from '~/components'

export default class AppContainer extends Component {
  static propTypes = {}
  render () {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
          ? <PreSplash />
          : <ReactModoroNavigator />}
      </View>
    )
  }
}
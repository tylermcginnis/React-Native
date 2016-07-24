import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { ReactModoroNavigator } from '~/containers'

export default class AppContainer extends Component {
  static propTypes = {}
  render () {
    return (
      <View style={{flex: 1}}>
        <ReactModoroNavigator />
      </View>
    )
  }
}
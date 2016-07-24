import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Splash } from '~/components'

export default class SplashContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  handleLoginFinished = (error, result) => {
    if (error) {

    } else if (result.isCancelled = true) {

    } else {

    }
  }
  render () {
    return (
      <Splash onLoginFinished={this.handleLoginFinished} />
    )
  }
}

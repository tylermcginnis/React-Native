import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Splash } from '~/components'
import { handleAuthWithFirebase } from '~/redux/modules/authentication'

class SplashContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  handleLoginFinished = (error, result) => {
    if (error) {
      // Todo
      console.log('Error in handleLoginFinished', error)
    } else if (result.isCancelled === true) {
      // Todo
      console.log('Login Cancelled')
    } else {
      this.props.dispatch(handleAuthWithFirebase())
    }
  }
  render () {
    return (
      <Splash onLoginFinished={this.handleLoginFinished} />
    )
  }
}

export default connect()(SplashContainer)
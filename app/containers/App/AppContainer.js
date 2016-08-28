import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { ReactModoroNavigator } from '~/containers'
import { PreSplash } from '~/components'

class AppContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
  }
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

function mapStateToProps ({authentication}) {
  return {
    isAuthenticating: authentication.isAuthenticating,
  }
}

export default connect(
  mapStateToProps
)(AppContainer)
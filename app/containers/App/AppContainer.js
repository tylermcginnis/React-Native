import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { ReactModoroNavigator } from '~/containers'
import { PreSplash } from '~/components'
import { onAuthChange } from '~/redux/modules/authentication'
import { firebaseAuth } from '~/config/constants'

class AppContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthed: PropTypes.bool.isRequired,
  }
  componentDidMount () {
    firebaseAuth.onAuthStateChanged((user) => this.props.dispatch(onAuthChange(user)))
  }
  render () {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
          ? <PreSplash />
          : <ReactModoroNavigator isAuthed={this.props.isAuthed}/>}
      </View>
    )
  }
}

export default connect(
  ({authentication}) => ({
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed,
  })
)(AppContainer)
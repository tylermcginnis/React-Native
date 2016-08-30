import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { ReactModoroNavigator } from '~/containers'
import { PreSplash, FlashNotification } from '~/components'
import { firebaseAuth } from '~/config/constants'
import { onAuthChange } from '~/redux/modules/authentication'
import { hideFlashNotification } from '~/redux/modules/flashNotification'

class AppContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthed: PropTypes.bool.isRequired,
    flashNotificationIsPermanent: PropTypes.bool.isRequired,
    flashNotificationLocation: PropTypes.string.isRequired,
    flashNotificationText: PropTypes.string.isRequired,
    showFlashNotification: PropTypes.bool.isRequired,
  }
  componentDidMount () {
    firebaseAuth.onAuthStateChanged((user) => this.props.dispatch(onAuthChange(user)))
  }
  handleHideNotification = () => {
    this.props.dispatch(hideFlashNotification())
  }
  render () {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
            ? <PreSplash />
            : <ReactModoroNavigator isAuthed={this.props.isAuthed} />}
        {this.props.showFlashNotification === true
          ? <FlashNotification
              permanent={this.props.flashNotificationIsPermanent}
              location={this.props.flashNotificationLocation}
              text={this.props.flashNotificationText}
              onHideNotification={this.handleHideNotification}/>
          : null}
      </View>
    )
  }
}

function mapStateToProps ({authentication, flashNotification}) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed,
    flashNotificationIsPermanent: flashNotification.permanent,
    flashNotificationLocation: flashNotification.location,
    flashNotificationText: flashNotification.text,
    showFlashNotification: flashNotification.showFlashNotification,
  }
}

export default connect(
  mapStateToProps
)(AppContainer)
import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Settings } from '~/components'
import { connect } from 'react-redux'
import { handleUnauth } from '~/redux/modules/authentication'
import { showFlashNotification } from '~/redux/modules/flashNotification'
import { handleAndUpdateTimer, handleAndUpdateRest } from '~/redux/modules/settings'

class SettingsContainer extends Component {
  static propTypes = {
    timerDuration: PropTypes.number.isRequired,
    restDuration: PropTypes.number.isRequired,
    navigator: PropTypes.object.isRequired,
  }
  state = {
    timerDuration: this.props.timerDuration,
    restDuration: this.props.restDuration,
  }
  handleTimerChange = (timerDuration) => {
    this.setState({timerDuration})
  }
  handleRestChange = (restDuration) => {
    this.setState({restDuration})
  }
  handleTimerComplete = () => {
    this.props.dispatch(handleAndUpdateTimer(this.state.timerDuration))
      .then(() => this.props.dispatch(showFlashNotification({text: 'Duration Saved!'})))
      .catch(() => this.props.dispatch(showFlashNotification({text: 'Error Updating Timer Duration'})))
  }
  handleRestComplete = () => {
    this.props.dispatch(handleAndUpdateRest(this.state.restDuration))
      .then(() => this.props.dispatch(showFlashNotification({text: 'Duration Saved!'})))
      .catch(() => this.props.dispatch(showFlashNotification({text: 'Error Updating Timer Duration'})))
  }
  handleLogout = () => {
    this.props.dispatch(handleUnauth())
  }
  render () {
    return (
      <Settings
        onBack={this.props.navigator.pop}
        onLogout={this.handleLogout}
        onRestComplete={this.handleRestComplete}
        onTimerComplete={this.handleTimerComplete}
        onTimerChange={this.handleTimerChange}
        onRestChange={this.handleRestChange}
        timerDuration={this.state.timerDuration}
        restDuration={this.state.restDuration} />
    )
  }
}

function mapStateToProps ({settings}) {
  return {
    timerDuration: settings.timerDuration,
    restDuration: settings.restDuration,
  }
}

export default connect(
  mapStateToProps
)(SettingsContainer)
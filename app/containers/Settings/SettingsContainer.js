import React, { PropTypes, Component } from 'react'
import { Settings } from '~/components'
import { connect } from 'react-redux'
import { handleUnauth } from '~/redux/modules/authentication'
import { showFlashNotification } from '~/redux/modules/flashNotification'
import { handleAndUpdateTimer, handleAndUpdateRest } from '~/redux/modules/settings'

class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    timerDuration: PropTypes.number.isRequired,
    restDuration: PropTypes.number.isRequired,
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
  handleTimerComplete =  () => {
    this.props.dispatch(handleAndUpdateTimer(this.state.timerDuration))
      .then(() => this.props.dispatch(showFlashNotification({text: 'Timer Duration Updated'})))
      .catch(() => this.props.dispatch(showFlashNotification({text: 'Error Updating Timer Duration'})))
  }
  handleRestComplete = () => {
    this.props.dispatch(handleAndUpdateRest(this.state.restDuration))
      .then(() => this.props.dispatch(showFlashNotification({text: 'Rest Duration Updated'})))
      .catch(() => this.props.dispatch(showFlashNotification({text: 'Error Updating Rest Duration'})))
  }
  handleLogout = () => {
    this.props.dispatch(handleUnauth())
  }
  render () {
    return (
      <Settings
        onLogout={this.handleLogout}
        onRestComplete={this.handleRestComplete}
        onTimerComplete={this.handleTimerComplete}
        timerDuration={this.state.timerDuration}
        restDuration={this.state.restDuration}
        onTimerChange={this.handleTimerChange}
        onRestChange={this.handleRestChange}
        onBack={this.props.navigator.pop} />
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
  mapStateToProps,
)(SettingsContainer)
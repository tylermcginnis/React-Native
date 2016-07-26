import React, { PropTypes, Component } from 'react'
import { Settings } from '~/components'
import { connect } from 'react-redux'
import { handleUnauth } from '~/redux/modules/authentication'

class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  state = {
    timerDuration: 20,
    restDuration: 5,
  }
  handleTimerChange = (timerDuration) => {
    this.setState({timerDuration})
  }
  handleRestChange = (restDuration) => {
    this.setState({restDuration})
  }
  handleTimerComplete =  () => {
    console.log('FINISHED TIMER!')
  }
  handleRestComplete = () => {
    console.log('FINISHED RESSSTTT')
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

export default connect()(SettingsContainer)
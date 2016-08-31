import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Home } from '~/components'

function secondsToHMS (secs) {
  const hours = Math.floor(secs / 3600)
  const mins = Math.floor(secs % 3600 / 60)
  const seconds = Math.floor(secs % 3600 % 60)
  return ((hours > 0 ? hours + ":" + (mins < 10 ? "0" : "") : "") + mins + ":" + (seconds < 10 ? "0" : "") + seconds)
}

class HomeContainer extends Component {
  static propTypes = {
    timerDuration: PropTypes.number.isRequired,
    restDuration: PropTypes.number.isRequired,
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
  }
  state = {
    timer: this.props.timerDuration,
    rest: this.props.restDuration,
    activeCountdown: 'timer',
    countdownRunning: false,
  }
  handleToggleCountdown = () => {
    if (this.state.countdownRunning === true) {
      this.setState({countdownRunning: false})
      return window.clearInterval(this.interval)
    }

    this.setState({
      countdownRunning: true,
    })

    this.interval = setInterval(() => {
      const activeCountdown = this.state.activeCountdown
      const nextSecond = this.state[activeCountdown] - 1

      if (nextSecond === 0) {
        this.setState({
          [activeCountdown]: activeCountdown === 'timer'
            ? this.props.timerDuration
            : this.props.restDuration,
          activeCountdown: activeCountdown === 'timer' ? 'rest' : 'timer'
        })
      } else {
        this.setState({
          [activeCountdown]: nextSecond,
        })
      }
    }, 1000)
  }
  handleReset = () => {
    window.clearInterval(this.interval)
    this.setState({
      timer: this.props.timerDuration,
      countdownRunning: false,
    })
  }
  handleSkipRest = () => {
    this.setState({
      rest: this.props.restDuration,
      activeCountdown: 'timer',
    })
  }
  handleToSettings = () => {
    this.props.navigator.push({
      settings: true
    })
  }
  getProgress = () => {
    return this.state.activeCountdown === 'timer'
      ? 1 - (this.state.timer / this.props.timerDuration)
      : 1 - (this.state.rest / this.props.restDuration)
  }
  render () {
    return (
      <Home
        countdownRunning={this.state.countdownRunning}
        timer={secondsToHMS(this.state.timer)}
        rest={secondsToHMS(this.state.rest)}
        activeCountdown={this.state.activeCountdown}
        onReset={this.handleReset}
        onSkipRest={this.handleSkipRest}
        progress={this.getProgress()}
        onToggleCountdown={this.handleToggleCountdown}
        handleToSettings={this.handleToSettings}
        openDrawer={this.props.openDrawer} />
    )
  }
}

function mapStateToProps ({settings}) {
  return {
    timerDuration: settings.timerDuration * 60,
    restDuration: settings.restDuration * 60,
  }
}

export default connect(
  mapStateToProps
)(HomeContainer)
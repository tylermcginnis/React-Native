import React, { PropTypes, Component } from 'react'
import { Home } from '~/components'

export default class HomeContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
  }
  state = {
    timer: 10,
    rest: 10,
    activeCountdown: 'timer',
    countdownRunning: false,
  }
  handleToggleCountdown = () => {
    if (this.state.countdownRunning === true) {
      this.setState({countdownRunning: false})
      return window.clearInterval(this.interval)
    }

    this.interval = setInterval(() => {
      const activeCountdown = this.state.activeCountdown
      const nextSecond = this.state[activeCountdown] - 1

      if (nextSecond === 0) {
        this.setState({
          [activeCountdown]: 10,
          activeCountdown: this.state.activeCountdown === 'timer' ? 'rest' : 'timer'
        })
      } else {
        this.setState({
          [activeCountdown]: nextSecond,
          countdownRunning: true,
        })
      }
    }, 1000)
  }
  handleReset = () => {
    window.clearInterval(this.interval)
    this.setState({
      timer: 10,
      countdownRunning: false,
    })
  }
  handleSkipRest = () => {
    this.setState({
      rest: 10,
      activeCountdown: 'timer',
    })
  }
  handleToSettings = () => {
    this.props.navigator.push({
      settings: true
    })
  }
  render () {
    return (
      <Home
        timer={this.state.timer}
        rest={this.state.rest}
        activeCountdown={this.state.activeCountdown}
        onReset={this.handleReset}
        onSkipRest={this.handleSkipRest}
        onToggleCountdown={this.handleToggleCountdown}
        handleToSettings={this.handleToSettings}
        openDrawer={this.props.openDrawer} />
    )
  }
}

import React, { PropTypes, Component } from 'react'
import { Navigator } from 'react-native'
import { SplashContainer, FooterTabsContainer } from '~/containers'

export default class ReactModoroNavigator extends Component {
  static propTypes = {}
  renderScene = (route, navigator) => {
    return <FooterTabsContainer navigator={navigator} />
  }
  configureScene = () => {

  }
  render () {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{}}
        renderScene={this.renderScene} />
    )
  }
}

import React, { PropTypes, Component } from 'react'
import { Navigator, Platform } from 'react-native'
import { SplashContainer, FooterTabsContainer, SettingsContainer } from '~/containers'

export default class ReactModoroNavigator extends Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
  }
  renderScene = (route, navigator) => {
    if (this.props.isAuthed === false) {
      return <SplashContainer navigator={navigator} />
    } else if (route.settings === true) {
      return <SettingsContainer navigator={navigator}/>
    }

    return <FooterTabsContainer navigator={navigator} />
  }
  configureScene = (route) => {
    if (Platform.OS === 'android') {
      return Navigator.SceneConfigs.FloatFromBottomAndroid
    }

    if (route.settings) {
      return Navigator.SceneConfigs.FloatFromBottom
    }

    return Navigator.SceneConfigs.FloatFromRight
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

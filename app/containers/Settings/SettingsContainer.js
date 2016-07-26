import React, { PropTypes, Component } from 'react'
import { Settings } from '~/components'

export default class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  render () {
    return (
      <Settings onBack={this.props.navigator.pop} />
    )
  }
}

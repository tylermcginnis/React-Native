import React, { PropTypes, Component } from 'react'
import { Home } from '~/components'

export default class HomeContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
  }
  state = {}
  render () {
    return (
      <Home />
    )
  }
}

import React, { PropTypes, Component } from 'react'
import { Leaderboard } from '~/components'

export default class LeaderboardContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
  }
  state = {}
  render () {
    return (
      <Leaderboard />
    )
  }
}

import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Leaderboard } from '~/components'
import { fetchAndSetScoreListener } from '~/redux/modules/scores'

class LeaderboardContainer extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    leaders: PropTypes.array.isRequired,
    listenerSet: PropTypes.bool.isRequired,
  }
  componentDidMount () {
    if (this.props.listenerSet === false) {
      this.props.dispatch(fetchAndSetScoreListener())
    }
  }
  render () {
    return (
      <Leaderboard isFetching={this.props.isFetching} leaders={this.props.leaders} />
    )
  }
}

export default connect(
  ({scores, users}) => ({
    isFetching: scores.isFetching,
    leaders: scores.leaderboardUids.map((uid) => users[uid]),
    listenerSet: scores.listenerSet,
  })
)(LeaderboardContainer)
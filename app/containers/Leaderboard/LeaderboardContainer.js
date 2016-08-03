import React, { PropTypes, Component } from 'react'
import { ListView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Leaderboard, Leader } from '~/components'
import { fetchAndSetScoreListener } from '~/redux/modules/scores'

class LeaderboardContainer extends Component {
  static propTypes = {
    listenerSet: PropTypes.bool.isRequired,
    leaders: PropTypes.array.isRequired,
    listenerSet: PropTypes.bool.isRequired,
  }
  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.leaders)
    }
  }
  componentDidMount () {
    if (this.props.listenerSet === false) {
      this.props.dispatch(fetchAndSetScoreListener())
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.leaders !== this.props.leaders) {
      this.setState({
        dataSource: this.ds.cloneWithRows(nextProps.leaders)
      })
    }
  }
  renderRow = ({name, avatar, score}) => {
    return (
      <Leader name={name} avatar={avatar} score={score} />
    )
  }
  render () {
    return (
      <Leaderboard
        renderRow={this.renderRow}
        dataSource={this.state.dataSource}
        listenerSet={this.props.listenerSet}
        leaders={this.props.leaders} />
    )
  }
}

export default connect(
  ({scores, users}) => ({
    listenerSet: scores.listenerSet,
    leaders: scores.leaderboardUids.map((uid) => ({...users[uid], score: scores.usersScores[uid]})),
    listenerSet: scores.listenerSet,
  })
)(LeaderboardContainer)
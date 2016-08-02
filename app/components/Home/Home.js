import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ReactModoroNavbar, Gear } from '~/components'
import Score from './Score'
import Countdown from './Countdown'
import ProgressBar from './ProgressBar'
import TimerButtons from './TimerButtons'
import SkipRest from './SkipRest'
import { colors, fontSizes } from '~/styles'

Home.propTypes = {
  timer: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  activeCountdown: PropTypes.string.isRequired,
  countdownRunning: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  onToSettings: PropTypes.func.isRequired,
  onToggleCountdown: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSkipRest: PropTypes.func.isRequired,
}

export default function Home (props) {
  return (
    <View style={[styles.container, {backgroundColor: props.activeCountdown === 'timer' ? colors.blue : colors.red}]}>
      <ReactModoroNavbar
        title='Home'
        rightButton={<Gear onPress={props.onToSettings} />}/>
      <Score count={props.score} />
      <Countdown seconds={props[props.activeCountdown]} />
      <ProgressBar progress={props.progress} style={{marginLeft: 20, marginRight: 20}} />
      <View style={styles.footer}>
        {props.activeCountdown === 'timer'
          ? <TimerButtons countdownRunning={props.countdownRunning} onToggle={props.onToggleCountdown} onReset={props.onReset}/>
          : <SkipRest onSkipRest={props.onSkipRest}/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 65,
  },
})

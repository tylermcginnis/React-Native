import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ReactModoroNavbar, Gear } from '~/components'

function secondsToHMS(secs) {
  const hours = Math.floor(secs / 3600)
  const mins = Math.floor(secs % 3600 / 60)
  const seconds = Math.floor(secs % 3600 % 60)
  return ((hours > 0 ? hours + ":" + (mins < 10 ? "0" : "") : "") + mins + ":" + (seconds < 10 ? "0" : "") + seconds)
}

Home.propTypes = {
  timer: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  activeCountdown: PropTypes.string.isRequired,
  onToSettings: PropTypes.func.isRequired,
  onToggleCountdown: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSkipRest: PropTypes.func.isRequired,
}

export default function Home (props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Home'
        rightButton={<Gear onPress={props.onToSettings} />}/>
      <TouchableOpacity onPress={props.onToggleCountdown}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onSkipRest}>
        <Text>Skip Rest</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onReset}>
        <Text>RESET</Text>
      </TouchableOpacity>
      <Text>Timer: {secondsToHMS(props.timer)}</Text>
      <Text>Rest: {secondsToHMS(props.rest)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

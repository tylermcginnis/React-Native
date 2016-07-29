import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '~/styles'

function secondsToHMS(secs) {
  const hours = Math.floor(secs / 3600)
  const mins = Math.floor(secs % 3600 / 60)
  const seconds = Math.floor(secs % 3600 % 60)
  return ((hours > 0 ? hours + ":" + (mins < 10 ? "0" : "") : "") + mins + ":" + (seconds < 10 ? "0" : "") + seconds)
}

Countdown.propTypes = {
  seconds: PropTypes.number.isRequired,
}

export default function Countdown (props) {
  return (
    <Text style={styles.textContainer}>
      {secondsToHMS(props.seconds)}
    </Text>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    color: colors.white,
    fontSize: 100,
    textAlign: 'center',
    margin: 30,
    fontWeight: '100',
  }
})

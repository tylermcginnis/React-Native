import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ReactModoroNavbar, Gear } from '~/components'

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
      <Text>Timer: {props.timer}</Text>
      <Text>Rest: {props.rest}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

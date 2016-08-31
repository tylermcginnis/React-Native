import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native'
import { ReactModoroNavbar, Gear, Hamburger } from '~/components'

Home.propTypes = {
  timer: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  activeCountdown: PropTypes.string.isRequired,
  onToggleCountdown: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSkipRest: PropTypes.func.isRequired,
  openDrawer: PropTypes.func,
  handleToSettings: PropTypes.func.isRequired,
}

export default function Home (props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Home'
        leftButton={Platform.OS === 'android' ? <Hamburger onPress={props.openDrawer} /> : null}
        rightButton={<Gear onPress={props.handleToSettings}/>} />
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
      <Text>{props.activeCountdown}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

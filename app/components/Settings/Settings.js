import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ReactModoroNavbar, Close } from '~/components'
import Slider from 'react-native-slider'
import { LoginButton } from 'react-native-fbsdk'
import { colors, fontSizes } from '~/styles'

Settings.propTypes = {
  timerDuration: PropTypes.number.isRequired,
  restDuration: PropTypes.number.isRequired,
  onTimerChange: PropTypes.func.isRequired,
  onRestChange: PropTypes.func.isRequired,
  onRestComplete: PropTypes.func.isRequired,
  onTimerComplete: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
}

export default function Settings (props) {
  return (
    <View style={styles.container}>
      <ReactModoroNavbar
        leftButton={<Close onPress={props.onBack}/>}
        title='Settings' />
        <View style={styles.sliderConatiner}>
          <Text style={styles.titleText}>Timer Duration</Text>
          <Text style={styles.valueText}>{props.timerDuration}</Text>
          <Text style={styles.minutes}>Minutes</Text>
          <Slider
            minimumValue={1}
            maximumValue={60}
            onSlidingComplete={props.onTimerComplete}
            thumbTintColor={colors.border}
            step={1}
            minimumTrackTintColor={colors.blue}
            value={props.timerDuration}
            onValueChange={props.onTimerChange} />
        </View>
        <View style={styles.sliderConatiner}>
          <Text style={styles.titleText}>Rest Duration</Text>
          <Text style={styles.valueText}>{props.restDuration}</Text>
          <Text style={styles.minutes}>Minutes</Text>
          <Slider
            onSlidingComplete={props.onRestComplete}
            minimumTrackTintColor={colors.blue}
            thumbTintColor={colors.border}
            minimumValue={1}
            maximumValue={20}
            step={1}
            value={props.restDuration}
            onValueChange={props.onRestChange} />
        </View>
        <TouchableOpacity style={styles.logout} onPress={props.onLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sliderConatiner: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
  },
  valueText: {
    fontSize: 50,
    color: colors.blue,
    textAlign: 'center',
    padding: 15,
  },
  minutes: {
    color: colors.secondary,
    textAlign: 'center',
  },
  logout: {
    backgroundColor: colors.blue,
    alignItems: 'stretch',
    borderRadius: 25,
    margin: 25,
    padding: 10,
  },
  logoutText: {
    color: colors.white,
    fontSize: fontSizes.secondary,
    textAlign: 'center',
  },
})

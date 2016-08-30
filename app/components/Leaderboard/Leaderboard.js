import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import { ReactModoroNavbar, Hamburger } from '~/components'

Leaderboard.propTypes = {
  openDrawer: PropTypes.func,
}

export default function Leaderboard (props) {
  return (
    <View>
      <ReactModoroNavbar
        leftButton={Platform.OS === 'android' ? <Hamburger onPress={props.openDrawer} /> : null}
        title='Leaderboard'/>
      <Text>
        Leaderboard
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

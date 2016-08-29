import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ReactModoroNavbar } from '~/components'

Leaderboard.propTypes = {

}

export default function Leaderboard (props) {
  return (
    <View>
      <ReactModoroNavbar title='Leaderboard'/>
      <Text>
        Leaderboard
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ReactModoroNavbar, Gear } from '~/components'

Home.propTypes = {
  onToSettings: PropTypes.func.isRequired,
}

export default function Home (props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Home'
        rightButton={<Gear onPress={props.onToSettings} />}/>
      <Text>
        Home
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

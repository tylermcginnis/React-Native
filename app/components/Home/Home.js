import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ReactModoroNavbar, Gear } from '~/components'

Home.propTypes = {

}

export default function Home (props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Home'
        rightButton={<Gear onPress={() => console.log('Gear!')}/>} />
      <Text>
        Home
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

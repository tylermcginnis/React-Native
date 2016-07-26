import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ReactModoroNavbar, Cancel } from '~/components'
import { colors } from '~/styles'

Settings.propTypes = {
  onBack: PropTypes.func.isRequired,
}

export default function Settings (props) {
  return (
    <View style={styles.container}>
      <ReactModoroNavbar
        leftButton={<Cancel onPress={props.onBack}/>}
        title='Settings' />
      <Text>
        Settings
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
})

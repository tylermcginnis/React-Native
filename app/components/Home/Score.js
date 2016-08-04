import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors, fontSizes } from '~/styles'

Score.propTypes = {
  count: PropTypes.number.isRequired
}

export default function Score (props) {
  return (
    <Text style={styles.containerText}>
      Score: {props.count}
    </Text>
  )
}

const styles = StyleSheet.create({
  containerText: {
    margin: 10,
    alignSelf: 'stretch',
    color: colors.white,
    fontSize: fontSizes.secondary,
    textAlign: 'right',
  },
})

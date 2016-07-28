import React, { PropTypes } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '~/styles'

Close.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
}

export default function Close (props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Text style={{color: colors.blue}}>Close</Text>
    </TouchableOpacity>
  )
}
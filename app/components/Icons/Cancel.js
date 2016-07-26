import React, { PropTypes } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '~/styles'

Cancel.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
}

export default function Cancel (props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Text style={{color: colors.blue}}>Cancel</Text>
    </TouchableOpacity>
  )
}
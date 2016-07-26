import React, { PropTypes } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '~/styles'

Gear.propTypes = {
  size: PropTypes.number.isRequired,
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
}

Gear.defaultProps = {
  size: 30,
}

export default function Gear (props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Icon
        name={'ios-settings-outline'}
        size={props.size}
        color={colors.blue} />
    </TouchableOpacity>
  )
}
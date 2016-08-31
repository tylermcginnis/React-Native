import React, { PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '~/styles'

PressableIcon.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default function PressableIcon (props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={{padding: 20}}>
      <Icon name={props.name} color={colors.white} size={60} />
    </TouchableOpacity>
  )
}

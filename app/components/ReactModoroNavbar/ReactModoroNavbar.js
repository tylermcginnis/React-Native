import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { colors } from '~/styles'

function Nothing () {
  return null
}

ReactModoroNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  leftButton: PropTypes.element,
  rightButton: PropTypes.element,
}

export default function ReactModoroNavbar (props) {
  return (
    <NavigationBar
      leftButton={props.leftButton ? React.cloneElement(props.leftButton, {style: {marginLeft: 10, justifyContent: 'center'}}) : <Nothing />}
      rightButton={props.rightButton ? React.cloneElement(props.rightButton, {style: {marginRight: 10, justifyContent: 'center'}}): <Nothing />}
      tintColor={colors.tabPrimary}
      title={{title: props.title}} />
  )
}
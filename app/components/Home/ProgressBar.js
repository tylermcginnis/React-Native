import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  incompleteBackgroundColor: PropTypes.string.isRequired,
}

ProgressBar.defaultProps = {
  style: {},
  incompleteBackgroundColor: '#fff'
}

export default function ProgressBar (props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={{flex: props.progress}}></View>
      <View style={{flex: 1 - props.progress, backgroundColor: props.incompleteBackgroundColor}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#4A90E2'
  }
})

import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
}

ProgressBar.defaultProps = {
  incompleteBackgroundColor: '#fff',
  style: {},
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
    backgroundColor: '#4A90E2',
    borderColor: '#fff',
  },
})

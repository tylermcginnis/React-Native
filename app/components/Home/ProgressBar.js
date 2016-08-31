import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default function ProgressBar (props) {
  return (
    <View>
      <Text>
        ProgressBar: {props.progress}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

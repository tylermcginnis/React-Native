import React, { PropTypes, Component } from 'react'
import { View, StyleSheet, Text, Image, Animated } from 'react-native'
import { colors } from '~/styles'

export default class PreSplash extends Component {
  state = {
    rotation: new Animated.Value(0),
  }
  componentDidMount () {
    this.interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(this.state.rotation, {toValue: 20, duration: 100}),
        Animated.timing(this.state.rotation, {toValue: -20, duration: 100}),
        Animated.timing(this.state.rotation, {toValue: 0, duration: 150}),
      ]).start()
    }, 1000)
  }
  componentWillUnmount () {
    window.clearInterval(this.interval)
  }
  getTransform () {
    return {
      transform: [
        {
          rotate: this.state.rotation.interpolate({
            inputRange: [0, 90],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ]
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.image, this.getTransform()]}
          source={require('../../images/logo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 300,
    alignSelf: 'center',
  },
})
import React, { PropTypes, Component } from 'react'
import { View, Text, Animated, Dimensions, StyleSheet } from 'react-native'
const { width } = Dimensions.get('window')
const NOTIFICATION_WIDTH = width * 0.7

export default class FlashNotification extends Component {
  static propTypes = {
    length: PropTypes.number.isRequired,
    permanent: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onHideNotification: PropTypes.func.isRequired,
  }
  static defaultProps = {
    permanent: false,
    length: 1500,
    location: 'top',
  }
  state = {
    width: new Animated.Value(50),
    opacity: new Animated.Value(0.7),
    textOpacity: new Animated.Value(0),
  }
  componentDidMount () {
    Animated.spring(this.state.width, {toValue: NOTIFICATION_WIDTH}).start()
    Animated.timing(this.state.textOpacity, {toValue: 1, duration: 1000}).start()

    if (this.props.permanent === false) {
      setTimeout(() => {
        Animated.timing(this.state.opacity, {toValue: 0, duration: 1000})
          .start(this.props.onHideNotification)
      }, this.props.length)
    }
  }
  getStyle = () => {
    return {
      width: this.state.width,
      opacity: this.state.opacity,
      top: this.props.location === 'top' ? 60 : undefined,
      bottom: this.props.location === 'top' ? undefined : 60,
    }
  }
  render () {
    return (
      <Animated.View style={[styles.container, this.getStyle()]}>
        <Animated.Text style={[styles.text, {opacity: this.state.textOpacity}]}>
          {this.props.text}
        </Animated.Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderRadius: 5,
    height: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    left: (width - NOTIFICATION_WIDTH) / 2
  },
  text: {
    color: '#fff'
  },
})

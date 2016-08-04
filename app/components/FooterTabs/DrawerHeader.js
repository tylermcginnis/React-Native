import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Text, Image } from 'react-native'
import { colors, fontSizes } from '~/styles'

DrawerHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
}

function DrawerHeader (props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.avatar}}/>
      <Text style={styles.nameText}>{props.name}</Text>
      <Text style={styles.scoreText}>Score: {props.score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    alignItems: 'center',
    paddingTop: 20,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  nameText: {
    fontSize: fontSizes.primary,
    color: colors.primary,
    marginTop: 8,
    marginBottom: 3,
  },
  scoreText: {
    fontSize: fontSizes.secondary,
    color: colors.secondary,
  }
})

export default connect(
  ({users, authentication, scores}) => ({
    avatar: users[authentication.authedId].avatar,
    name: users[authentication.authedId].name,
    score: scores.usersScores[authentication.authedId],
  })
)(DrawerHeader)
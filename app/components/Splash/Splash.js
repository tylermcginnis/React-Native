import React, { PropTypes } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { LoginButton } from 'react-native-fbsdk'
import { colors, fontSizes } from '~/styles'

Splash.propTypes = {
  onLoginFinished: PropTypes.func.isRequired,
}

export default function Splash (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.slogan}>ReactModoro</Text>
      <Image style={styles.image} source={require('../../images/logo.png')}/>
      <View style={styles.loginContainer}>
        <LoginButton
          style= {{
            height: 45,
            width: 256,
            marginBottom: 15,
          }}
          onLoginFinished={props.onLoginFinished}
          onLogoutFinished={() => ({})}
          defaultAudience='everyone'
          readPermissions={['email', 'public_profile', 'user_friends']} />
        <Text style={styles.assuranceText}>
          Don't worry. We don't post anything to facebook.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
  },
  slogan: {
    color: colors.blue,
    fontSize: 40,
  },
  image: {
    resizeMode: 'contain',
    height: 300,
    alignSelf: 'center',
  },
  loginContainer: {
    margin: 40,
    padding: 10,
    marginBottom: 5,
  },
  assuranceText: {
    color: colors.secondary,
    fontSize: fontSizes.secondary,
    marginTop: 10,
    textAlign: 'center',
  },
})

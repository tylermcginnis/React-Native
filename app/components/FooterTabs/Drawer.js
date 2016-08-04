import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import DrawerTab from './DrawerTab'
import DrawerHeader from './DrawerHeader'

Drawer.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
}

export default function Drawer ({activeFooterTab, onTabSelect, close}) {
  return (
    <View style={styles.container}>
      <DrawerHeader />
      <DrawerTab
        title='Home'
        selected={activeFooterTab === 'home'}
        onPress={() => {
          close()
          onTabSelect('home')
        }}
        iconName={'ios-home-outline'} />
      <DrawerTab
        title='Leaderboard'
        selected={activeFooterTab === 'leaderboard'}
        onPress={() => {
          close()
          onTabSelect('leaderboard')
        }}
        iconName={'ios-trophy-outline'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

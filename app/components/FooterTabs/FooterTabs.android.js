import React, { PropTypes } from 'react'
import { DrawerLayoutAndroid, Text, View } from 'react-native'
import { HomeContainer, LeaderboardContainer } from '~/containers'
import { colors } from '~/styles'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import Drawer from './Drawer'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  onTabSelect: PropTypes.func.isRequired,
}

export default function FooterTabs ({activeFooterTab, onTabSelect, navigator}) {
  closeDrawer = () => this.drawer.closeDrawer()
  openDrawer = () => this.drawer.openDrawer()
  return (
    <DrawerLayoutAndroid
      ref={(drawer) => this.drawer = drawer}
      drawerWidth={290}
      renderNavigationView={() => (
        <Drawer
          activeFooterTab={activeFooterTab}
          close={closeDrawer}
          onTabSelect={onTabSelect} />
      )}>
        {activeFooterTab === 'home'
          ? <HomeContainer openDrawer={this.openDrawer} navigator={navigator} />
          : <LeaderboardContainer openDrawer={this.openDrawer} navigator={navigator} />}
    </DrawerLayoutAndroid>
  )
}
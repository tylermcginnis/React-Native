import React, { PropTypes } from 'react'
import { TabBarIOS } from 'react-native'
import { HomeContainer, LeaderboardContainer } from '~/containers'
import { colors } from '~/styles'
import IoniconIcon from 'react-native-vector-icons/Ionicons'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  onTabSelect: PropTypes.func.isRequired,
}

export default function FooterTabs ({activeFooterTab, onTabSelect, navigator, authedId}) {
  return (
    <TabBarIOS tintColor={colors.active}>
      <IoniconIcon.TabBarItem
        iconSize={35}
        iconName='ios-home-outline'
        title='Home'
        selected={activeFooterTab === 'home'}
        onPress={() => onTabSelect('home')}>
          <HomeContainer navigator={navigator} />
      </IoniconIcon.TabBarItem>
      <IoniconIcon.TabBarItem
        iconSize={35}
        iconName='ios-trophy-outline'
        title='Leaderboard'
        selected={activeFooterTab === 'leaderboard'}
        onPress={() => onTabSelect('leaderboard')}>
          <LeaderboardContainer navigator={navigator} />
      </IoniconIcon.TabBarItem>
    </TabBarIOS>
  )
}
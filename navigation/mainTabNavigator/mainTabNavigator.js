import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../mainTabNavigator/HomeScreen';
import LinkScreen from '../mainTabNavigator/HomeScreen';
import SettingsScreen from '../mainTabNavigator/HomeScreen';



const MainTabNavigator = createBottomTabNavigator(
  {
    SettingsScreen,
    LinkScreen,
    HomeScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    tabBarComponent: (props) => (
      <View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      }}
      >
        <TabBar navigation={props.navigation} props={props} />
      </View>
    ),
    tabBarOptions: {
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    },
  },
);

MainTabNavigator.path = '';

export default MainTabNavigator;

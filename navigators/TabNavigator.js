/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Discover} from '../components/screens/discover/Discover';
import {Talk} from '../components/screens/talk/Talk';
import {Messages} from '../components/screens/messages/Messages';
import {ProfilMeRA} from '../components/screens/profil/ProfilMeRA';
import MenuBottom from '../components/composants/MenuBottom';

const Tab = createBottomTabNavigator();

function TabNavigator({route}) {
  const {tabPath} = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}
      tabBar={props => <MenuBottom {...props} />}>
      <Tab.Screen
        name="TabDiscover"
        component={Discover}
        options={{headerShown: false}}
        key="discover"
      />
      <Tab.Screen
        name="TabTalk"
        component={Talk}
        options={{headerShown: false}}
        key="talk"
      />
      <Tab.Screen
        name="TabMessages"
        component={Messages}
        options={{headerShown: false}}
        key="messages"
      />
      <Tab.Screen
        name="TabMap"
        component={Map}
        options={{headerShown: false}}
        key="map"
      />
      <Tab.Screen
        name="TabMoi"
        component={ProfilMeRA}
        options={{headerShown: false}}
        key="moi"
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

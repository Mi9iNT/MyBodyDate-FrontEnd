/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Bienvenue} from '../components/screens/Bienvenue';
import HomeNavigator from './HomeNavigator';
import TabNavigator from './TabNavigator';
// Import other screen components...

const MainStack = createNativeStackNavigator();

function MainNavigator({route}) {
  const {MainRoute} = route.params;
  return (
    <MainStack.Navigator initialRouteName={MainRoute}>
      <MainStack.Screen
        name="Bienvenue"
        component={Bienvenue}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
}

export default MainNavigator;

/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PassFlash19} from '../components/screens/pass/PassFlash19';
import {PassFlash21} from '../components/screens/pass/PassFlash21';
import {PrendPass} from '../components/screens/pass/PrendPass';

const PassStack = createNativeStackNavigator();

function PassNavigator({route}) {
  const {PassRoute} = route.params;
  return (
    <PassStack.Navigator initialRouteName={PassRoute}>
      {/* Pass */}
      <PassStack.Screen
        name="Prend pass"
        component={PrendPass}
        options={{headerShown: false}}
      />
      <PassStack.Screen
        name="Pass flash 21"
        component={PassFlash21}
        options={{headerShown: false}}
      />
      <PassStack.Screen
        name="Pass flash 19"
        component={PassFlash19}
        options={{headerShown: false}}
      />
    </PassStack.Navigator>
  );
}

export default PassNavigator;

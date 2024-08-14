/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Even} from '../components/screens/even/Even';
import {EvenBio} from '../components/screens/even/EvenBio';

const EvenStack = createNativeStackNavigator();

function EvenNavigator({route}) {
  const {EvenRoute} = route.params;
  return (
    <EvenStack.Navigator initialRouteName={EvenRoute}>

      {/* Even */}
      <EvenStack.Screen
        name="Evenements"
        component={Even}
        options={{headerShown: false}}
      />
      <EvenStack.Screen
        name="Evenements Bio"
        component={EvenBio}
        options={{headerShown: false}}
      />
    </EvenStack.Navigator>
  );
}

export default EvenNavigator;

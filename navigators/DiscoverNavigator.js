/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Discover} from '../components/screens/discover/Discover';
import {DiscoverCA} from '../components/screens/discover/DiscoverCA';
import {DiscoverRP} from '../components/screens/discover/DiscoverRP';
import {DiscoverBio} from '../components/screens/discover/DiscoverBio';
import { CestMatch } from '../components/screens/discover/CestMatch';

const DiscoverStack = createNativeStackNavigator();

function DiscoverNavigator({route}) {
  const {DiscoverRoute} = route.params;
    return (
    <DiscoverStack.Navigator initialRouteName={DiscoverRoute}>
        {/* Discover */}
      <DiscoverStack.Screen
        name="Discover"
        component={Discover}
        options={{headerShown: false}}
      />
      <DiscoverStack.Screen
        name="DiscoverCA"
        component={DiscoverCA}
        options={{headerShown: false}}
      />
      <DiscoverStack.Screen
        name="DiscoverRP"
        component={DiscoverRP}
        options={{headerShown: false}}
      />
      <DiscoverStack.Screen
        name="DiscoverBio"
        component={DiscoverBio}
        options={{headerShown: false}}
      />
      <DiscoverStack.Screen
        name="C_est_match"
        component={CestMatch}
        options={{headerShown: false}}
      />
    </DiscoverStack.Navigator>
  );
}

export default DiscoverNavigator;

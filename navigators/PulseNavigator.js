/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PulseProfil} from '../components/screens/pulse/PulseProfil';
import {PulseLike} from '../components/screens/pulse/PulseLike';
import {PulseSpotlight} from '../components/screens/pulse/PulseSpotlight';
import SearchPulseSettings from '../components/screens/research/SearchPulseSettings';
import SearchPulse from '../components/screens/research/SearchPulse';
import {PulseRecherche} from '../components/screens/pulse/PulseRecherche';

const PulseStack = createNativeStackNavigator();

function PulseNavigator({route}) {
  const {PulseRoute} = route.params;
  return (
    <PulseStack.Navigator initialRouteName={PulseRoute}>
      {/* Pulse */}
      <PulseStack.Screen
        name="Pulse recherche"
        component={PulseRecherche}
        options={{headerShown: false}}
      />
      <PulseStack.Screen
        name="Search pulse"
        component={SearchPulse}
        options={{headerShown: false}}
      />
      <PulseStack.Screen
        name="Search pulse settings"
        component={SearchPulseSettings}
        options={{headerShown: false}}
      />
      <PulseStack.Screen
        name="Pulse spotlight"
        component={PulseSpotlight}
        options={{headerShown: false}}
      />
      <PulseStack.Screen
        name="Pulse like"
        component={PulseLike}
        options={{headerShown: false}}
      />
      <PulseStack.Screen
        name="Pulse profil"
        component={PulseProfil}
        options={{headerShown: false}}
      />
    </PulseStack.Navigator>
  );
}

export default PulseNavigator;

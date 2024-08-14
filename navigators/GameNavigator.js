/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CarteMagique} from '../components/screens/game/CarteMagique';
import {CarteBriseGlace} from '../components/screens/game/CarteBriseGlace';
import {VoixDuJour2} from '../components/screens/game/VoixDuJour2';
import {VoixDuJour} from '../components/screens/game/VoixDuJour';

const GameStack = createNativeStackNavigator();

function GameNavigator({route}) {
  const {GameRoute} = route.params;
  return (
    <GameStack.Navigator initialRouteName={GameRoute}>

      {/* Game */}
      <GameStack.Screen
        name="Voix_du_jour"
        component={VoixDuJour}
        options={{headerShown: false}}
      />
      <GameStack.Screen
        name="Voix_du_jour2"
        component={VoixDuJour2}
        options={{headerShown: false}}
      />
      <GameStack.Screen
        name="Carte_brise_glace"
        component={CarteBriseGlace}
        options={{headerShown: false}}
      />
      <GameStack.Screen
        name="Carte_magique"
        component={CarteMagique}
        options={{headerShown: false}}
     />
    </GameStack.Navigator>
  );
}

export default GameNavigator;

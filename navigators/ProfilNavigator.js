/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfilMeRP} from '../components/screens/profil/ProfilMeRP';
import {ProfilMeRPfirst} from '../components/screens/profil/ProfilMeRPfirst';
import {ProfilMeCA} from '../components/screens/profil/ProfilMeCA';
import {ProfilMeCAfirst} from '../components/screens/profil/ProfilMeCAfirst';
import {ProfilMeRA} from '../components/screens/profil/ProfilMeRA';
import {ProfilMeRAfirst} from '../components/screens/profil/ProfilMeRAfirst';
import Notifications from '../components/screens/Notifications';

const ProfilStack = createNativeStackNavigator();

function ProfilNavigator({route}) {
  const {ProfilRoute} = route.params;
  return (
    <ProfilStack.Navigator initialRouteName={ProfilRoute}>

      {/* Profil */}
      <ProfilStack.Screen
        name="ProfilMeRP"
        component={ProfilMeRP}
        options={{headerShown: false}}
      />
      <ProfilStack.Screen
        name="ProfilMeRPfirst"
        component={ProfilMeRPfirst}
        options={{headerShown: false}}
      />
      <ProfilStack.Screen
        name="ProfilMeCA"
        component={ProfilMeCA}
        options={{headerShown: false}}
      />
      <ProfilStack.Screen
        name="ProfilMeCAfirst"
        component={ProfilMeCAfirst}
        options={{headerShown: false}}
      />
      <ProfilStack.Screen
        name="ProfilMeRA"
        component={ProfilMeRA}
        options={{headerShown: false}}
      />
      <ProfilStack.Screen
        name="ProfilMeRAfirst"
        component={ProfilMeRAfirst}
        options={{headerShown: false}}
      />
      <ProfilStack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </ProfilStack.Navigator>
  );
}

export default ProfilNavigator;

/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LinksLogIn} from '../components/screens/login/LinksLogIn';
import ConfirmationNumero from '../components/screens/register/ConfirmationNumero';
import {RecuperationCompte} from '../components/screens/RecuperationCompte';
import {ConfirmationEmail} from '../components/screens/register/ConfirmationEmail';

const LogInStack = createNativeStackNavigator();

function LogInNavigator({route}) {
  const {LoginRoute} = route.params;
  return (
    <LogInStack.Navigator initialRouteName={LoginRoute}>
      <LogInStack.Screen
        name="Liens de connexion"
        component={LinksLogIn}
        options={{headerShown: false}}
      />
      <LogInStack.Screen
        name="Recuperation_email"
        component={RecuperationCompte}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <LogInStack.Screen
        name="Confirmation numero"
        component={ConfirmationNumero}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <LogInStack.Screen
        name="Recuperation email"
        component={RecuperationCompte}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <LogInStack.Screen
        name="Confirmation_email"
        component={ConfirmationEmail}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
    </LogInStack.Navigator>
  );
}

export default LogInNavigator;

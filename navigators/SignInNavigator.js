/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LinksSignIn} from '../components/screens/register/LinksSignIn';
import {SignInMail} from '../components/screens/register/SinscrireMail';
import {SignInPhone} from '../components/screens/register/SinscrirePhone';
import ConfirmationNumero from '../components/screens/register/ConfirmationNumero';
import {RecuperationCompte} from '../components/screens/RecuperationCompte';
import {ConfirmationEmail} from '../components/screens/register/ConfirmationEmail';

const SignInStack = createNativeStackNavigator();

function SignInNavigator({route}) {
  const {SignInRoute} = route.params;
    return (
    <SignInStack.Navigator initialRouteName={SignInRoute}>
      <SignInStack.Screen
        name="Liens d'inscription"
        component={LinksSignIn}
        options={{headerShown: false}}
      />
      <SignInStack.Screen
        name="S_inscrire_par_mail"
        component={SignInMail}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <SignInStack.Screen
        name="S_inscrire_par_numero"
        component={SignInPhone}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <SignInStack.Screen
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
      <SignInStack.Screen
        name="Confirmation email"
        component={ConfirmationEmail}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
    </SignInStack.Navigator>
  );
}

export default SignInNavigator;

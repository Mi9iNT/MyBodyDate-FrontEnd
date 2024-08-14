/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../components/screens/Home';
import SettingsNavigator from './SettingsNavigator';
import {HomeStackNext} from '../components/screens/HomeStackNext';
import {Bienvenue} from '../components/screens/Bienvenue';
import {Creation} from '../components/screens/CreationEtDeveloppement';
import {LoveCoach} from '../components/screens/register/LoveCoach';
import {Ville} from '../components/screens/register/Ville';
import {AccesPosition} from '../components/screens/register/AccesPosition';
import {Genre} from '../components/screens/register/Genre';
import {DateDeNaissance} from '../components/screens/register/DateDeNaissance';
import {Taille} from '../components/screens/register/Taille';
import {LangueParler} from '../components/screens/register/LangueParler';
import {Situation} from '../components/screens/register/Situation';
import {Orientation} from '../components/screens/register/Orientation';
import {Recherche1} from '../components/screens/register/Recherche1';
import {Recherche2} from '../components/screens/register/Recherche2';
import {Objectifs} from '../components/screens/register/Objectifs';
import Affinite from '../components/screens/register/Affinite';
import {RythmeDeVie1} from '../components/screens/register/RythmeDeVie1';
import {RythmeDeVie2} from '../components/screens/register/RythmeDeVie2';
import {Prenom} from '../components/screens/register/Prenom';
import {ConfirmationPrenom} from '../components/screens/register/ConfirmationPrenom';
import {ProfilMultiples} from '../components/screens/register/ProfilMultiples';
import {Prenium} from '../components/screens/register/Prenium';
import Compte from '../components/screens/register/Compte';
import {RecuperationCode} from '../components/screens/register/RecuperationCode';
import ConfirmationCompte from '../components/screens/register/ConfirmationCompte';
import AjoutPhoto from '../components/screens/register/AjoutPhoto';
import {EmpreinteVocal} from '../components/screens/register/EmpreinteVocal';
import CharteEngagement from '../components/screens/register/CharteEngagement';
import {Felicitations} from '../components/screens/register/Felicitations';
import Notifications from '../components/screens/Notifications';
import SignInNavigator from './SignInNavigator';
import LogInNavigator from './LogInNavigator';
import DiscoverNavigator from './DiscoverNavigator';
import TalkNavigator from './TalkNavigator';
import AppsAffinitairesNavigator from './AppsAffinitairesNavigator';
import GameNavigator from './GameNavigator';
import PassNavigator from './PassNavigator';
import PulseNavigator from './PulseNavigator';
import SearchNavigator from './SearchNavigator';
import EvenNavigator from './EvenNavigator';
import ProfilNavigator from './ProfilNavigator';
import TabNavigator from './TabNavigator';

const HomeStack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="SettingsStack"
        component={SettingsNavigator}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="HomeNext"
        component={HomeStackNext}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Bienvenue"
        component={Bienvenue}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="CreationEtDeveloppement"
        component={Creation}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="LoveCoach"
        component={LoveCoach}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="LinksSignIn"
        component={SignInNavigator}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="LinksLogIn"
        component={LogInNavigator}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ville"
        component={Ville}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Acces_Position"
        component={AccesPosition}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Genre"
        component={Genre}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Date_de_naissance"
        component={DateDeNaissance}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Taille"
        component={Taille}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Langue_parler"
        component={LangueParler}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Situation"
        component={Situation}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Orientation"
        component={Orientation}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Recherche1"
        component={Recherche1}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Recherche2"
        component={Recherche2}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Objectifs"
        component={Objectifs}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Affinite"
        component={Affinite}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Rythme1"
        component={RythmeDeVie1}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Rythme2"
        component={RythmeDeVie2}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Prenom"
        component={Prenom}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Confirmation_prenom"
        component={ConfirmationPrenom}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Profil_multiples"
        component={ProfilMultiples}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Prenium"
        component={Prenium}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Compte"
        component={Compte}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Recuperation_code"
        component={RecuperationCode}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Confirmation_compte"
        component={ConfirmationCompte}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Ajouter_photo"
        component={AjoutPhoto}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Empreinte_vocal"
        component={EmpreinteVocal}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Charte_engagement"
        component={CharteEngagement}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
        }}
      />
      <HomeStack.Screen
        name="Felicitations"
        component={Felicitations}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
        {/* {Tabs} */}
      <HomeStack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{headerShown: false}}
      />
        {/* Discover */}
      <HomeStack.Screen
        name="DiscoverNavigator"
        component={DiscoverNavigator}
        options={{headerShown: false}}
      />

      {/* Profil */}
      <HomeStack.Screen
        name="ProfilNavigator"
        component={ProfilNavigator}
        options={{headerShown: false}}
      />

      {/* Even */}
      <HomeStack.Screen
        name="Even"
        component={EvenNavigator}
        options={{headerShown: false}}
      />

      {/* {Search} */}
      <HomeStack.Screen
        name="Search"
        component={SearchNavigator}
        options={{headerShown: false}}
      />

      {/* Pulse */}
      <HomeStack.Screen
        name="Pulse"
        component={PulseNavigator}
        options={{headerShown: false}}
      />

      {/* Pass */}
      <HomeStack.Screen
        name="Pass"
        component={PassNavigator}
        options={{headerShown: false}}
      />

      {/* Game */}
      <HomeStack.Screen
        name="GameNavigator"
        component={GameNavigator}
        options={{headerShown: false}}
      />

      {/* Apps Affinitires */}
      <HomeStack.Screen
        name="AppsAffinitairesNavigator"
        component={AppsAffinitairesNavigator}
        options={{headerShown: false}}
      />

      {/* Talk */}
      <HomeStack.Screen
        name="Talk"
        component={TalkNavigator}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;

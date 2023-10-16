/* eslint-disable prettier/prettier */
import * as React from 'react';

import {enableLatestRenderer} from 'react-native-maps';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from './components/screens/Home';
import {Bienvenue} from './components/screens/Bienvenue';
import {Creation} from './components/screens/CreationEtDeveloppement';
import {LoveCoach} from './components/screens/register/LoveCoach';
import {LinksLogIn} from './components/screens/login/LinksLogIn';
import {LinksSignIn} from './components/screens/register/LinksSignIn';
import {RecuperationCompte} from './components/screens/RecuperationCompte';
import {ConfirmationEmail} from './components/screens/register/ConfirmationEmail';
import {Ville} from './components/screens/register/Ville';
import {AccesPosition} from './components/screens/register/AccesPosition';
import {Genre} from './components/screens/register/Genre';
import {DateDeNaissance} from './components/screens/register/DateDeNaissance';
import {Taille} from './components/screens/register/Taille';
import {LangueParler} from './components/screens/register/LangueParler';
import {Screen8} from './components/screens/Screen8';
import {ScreenTest} from './components/screens/ScreenTest';
import {Situation} from './components/screens/register/Situation';
import {Orientation} from './components/screens/register/Orientation';
import {Recherche1} from './components/screens/register/Recherche1';
import {Recherche2} from './components/screens/register/Recherche2';
import {Objectifs} from './components/screens/register/Objectifs';
import {Affinite} from './components/screens/register/Affinite';
import {RythmeDeVie1} from './components/screens/register/RythmeDeVie1';
import {RythmeDeVie2} from './components/screens/register/RythmeDeVie2';
import {Prenom} from './components/screens/register/Prenom';
import {ConfirmationPrenom} from './components/screens/register/ConfirmationPrenom';
import {Prenium} from './components/screens/register/Prenium';
import {ProfilMultiples} from './components/screens/register/ProfilMultiples';
import {Compte} from './components/screens/register/Compte';
import {ConfirmationCompte} from './components/screens/register/ConfirmationCompte';
import {AjoutPhoto} from './components/screens/register/AjoutPhoto';
import {EmpreinteVocal} from './components/screens/register/EmpreinteVocal';
import {CharteEngagement} from './components/screens/register/CharteEngagement';
import {Felicitations} from './components/screens/register/Felicitations';
import {HomeStackNext} from './components/screens/HomeStackNext';
import {SignInMail} from './components/screens/register/SinscrireMail';
import {SignInPhone} from './components/screens/register/SinscrirePhone';
import {RecuperationCode} from './components/screens/register/RecuperationCode';
import {ConfirmationNumero} from './components/screens/register/ConfirmationNumero';
import {ProfilMeRA} from './components/screens/profil/ProfilMeRA';
import {ProfilMeRAfirst} from './components/screens/profil/ProfilMeRAfirst';
import {ProfilMeRP} from './components/screens/profil/ProfilMeRP';
import {ProfilMeRPfirst} from './components/screens/profil/ProfilMeRPfirst';
import {ProfilMeCA} from './components/screens/profil/ProfilMeCA';
import {ProfilMeCAfirst} from './components/screens/profil/ProfilMeCAfirst';
import {Discover} from './components/screens/discover/Discover';
import {DiscoverCA} from './components/screens/discover/DiscoverCA';
import {DiscoverRP} from './components/screens/discover/DiscoverRP';
import {DiscoverBio} from './components/screens/discover/DiscoverBio';
import {CestMatch} from './components/screens/discover/CestMatch';
import {Notifications} from './components/screens/Notifications';
import {Settings} from './components/screens/settings/Settings';
import {NotificationsSettings} from './components/screens/settings/NotificationsSettings';
import {SecurityAndPrivate} from './components/screens/settings/SecurityAndPrivate';
import {ContactAndFAQ} from './components/screens/settings/ContactAndFAQ';
import {Aide} from './components/screens/settings/Aide';
import {CentreSecurite} from './components/screens/settings/CentreSecurite';
import {NousContactez} from './components/screens/settings/NousContactez';
import {FAQ} from './components/screens/settings/FAQ';
import {Emplacement} from './components/screens/settings/Emplacement';
import {ModeInvisible} from './components/screens/settings/ModeInvisible';
import {ModeVoyage} from './components/screens/settings/ModeVoyage';
import {MettreEnPause} from './components/screens/settings/MettreEnPause';
import {ModeDeConnexion} from './components/screens/settings/ModeDeConnexion';
import {ChangerLocalisation} from './components/screens/settings/ChangerLocalisation';
import {ParametresConfident} from './components/screens/settings/ParamtresConfident';
import {AutorisationsNecessaires} from './components/screens/settings/AutorisationsNecessaires';
import {BloquerContacts} from './components/screens/settings/BloquerContacts';
import {SupprimerCompte} from './components/screens/settings/SupprimerCompte';
import {CompteNonTrouve} from './components/screens/settings/CompteNonTrouve';

import {MenuBottom} from './components/composants/MenuBottom';

import {Messages} from './components/screens/messages/Messages';
import {Map} from './components/screens/map/Map';
import {Moi} from './components/screens/profil/Profil';

import {Even} from './components/screens/even/Even';
import {EvenBio} from './components/screens/even/EvenBio';

import {Research} from './components/screens/research/Research';
import {AdvancedFiltre} from './components/screens/research/AdvancedFiltre';
import {SaTaille} from './components/screens/research/SaTaille';
import {SaMorphologie} from './components/screens/research/SaMorphologie';
import {OrigineEthnique} from './components/screens/research/OrigineEthnique';
import {NiveauEtudeResearch} from './components/screens/research/NiveauEtudeResearch';
import {Metier} from './components/screens/research/Metier';
import {Religion} from './components/screens/research/Religion';
import {SigneAstrologie} from './components/screens/research/SigneAstrologie';
import {OrientationPolitique} from './components/screens/research/OrientationPolitique';
import {Tabac} from './components/screens/research/Tabac';
import {Alcool} from './components/screens/research/Alcool';
import {PratiqueSportive} from './components/screens/research/PratiqueSportive';
import {Enfant} from './components/screens/research/Enfants';
import {Revenus} from './components/screens/research/Revenus';
import {SearchPulse} from './components/screens/research/SearchPulse';
import {SearchPulseSettings} from './components/screens/research/SearchPulseSettings';

import {PrendPass} from './components/screens/pass/PrendPass';

import {PulseSpotlight} from './components/screens/pulse/PulseSpotlight';
import {PulseLike} from './components/screens/pulse/PulseLike';
import {PulseProfil} from './components/screens/pulse/PulseProfil';
import {PulseRecherche} from './components/screens/pulse/PulseRecherche';

import {PassFlash21} from './components/screens/pass/PassFlash21';
import {PassFlash19} from './components/screens/pass/PassFlash19';

// Game
import {VoixDuJour} from './components/screens/game/VoixDuJour';
import {VoixDuJour2} from './components/screens/game/VoixDuJour2';
import {CarteBriseGlace} from './components/screens/game/CarteBriseGlace';
import {CarteMagique} from './components/screens/game/CarteMagique';

// Apps Affinitaires
import {AppsAffinitaires} from './components/screens/appsAffinitaires/AppsAffinitaires';
import {AppsAffinitaires2} from './components/screens/appsAffinitaires/AppsAffinitaires2';


import {Talk} from './components/screens/talk/Talk';
import {TalkChat} from './components/screens/talk/TalkChat';
import {TalkPhone} from './components/screens/talk/TalkPhone';
import {TalkPhoneAccept} from './components/screens/talk/TalkPhoneAccept';
import {TalkVideo} from './components/screens/talk/TalkVideo';
import {TalkVideoAccept} from './components/screens/talk/TalkVideoAccept';

const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

enableLatestRenderer();
// Composant pour les écrans des onglets
function TabNavigator({route}) {
  const {tabPath} = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}
      tabBar={props => <MenuBottom {...props} />}>
      <Tab.Screen
        name="TabDiscover"
        component={Discover}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="TabTalk"
        component={Talk}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="TabMessages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="TabMap"
        component={Map}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="TabMoi"
        component={ProfilMeRA}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <Stack.Screen name="Test" component={ScreenTest} options={{ headerShown: false }} />
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <HomeStack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
      <HomeStack.Screen name="SettingsStack" component={SettingsStackScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Home Next" component={HomeStackNext} options={{ headerShown: false }} />
      <HomeStack.Screen name="Bienvenue" component={Bienvenue} options={{ headerShown: false }} />
      <HomeStack.Screen name="Création et Développement" component={Creation} options={{ headerShown: false }} />
      <HomeStack.Screen name="Love Coach" component={LoveCoach} options={{ headerShown: false }} />
      <HomeStack.Screen name="Liens d'inscription" component={LinksSignIn} options={{ headerShown: false }} />
      <HomeStack.Screen name="Liens de connexion" component={LinksLogIn} options={{ headerShown: false }} />
      <HomeStack.Screen name="S'inscrire par mail" component={SignInMail} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="S'inscrire par numero" component={SignInPhone} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Confirmation numero" component={ConfirmationNumero} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Recuperation email" component={RecuperationCompte} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Confirmation email" component={ConfirmationEmail} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Ville" component={Ville} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Accès Position" component={AccesPosition} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Genre" component={Genre} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Date de naissance" component={DateDeNaissance} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Taille" component={Taille} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Langue parler" component={LangueParler} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Situation" component={Situation} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Orientation" component={Orientation} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Recherche1" component={Recherche1} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Recherche2" component={Recherche2} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Objectifs" component={Objectifs} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Affinite" component={Affinite} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Rythme1" component={RythmeDeVie1} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Rythme2" component={RythmeDeVie2} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Prenom" component={Prenom} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Confirmation prenom" component={ConfirmationPrenom} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Profil multiples" component={ProfilMultiples} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Prenium" component={Prenium} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Compte" component={Compte} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Recuperation code" component={RecuperationCode} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Confirmation compte" component={ConfirmationCompte} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="AjoutPhoto" component={AjoutPhoto} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Ajouter photo" component={AjoutPhoto} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Empreinte vocal" component={EmpreinteVocal} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Charte d'engagement" component={CharteEngagement} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
      <HomeStack.Screen name="Felicitations" component={Felicitations} options={{ headerShown: false }} />
      {/* Discover */}
      <HomeStack.Screen name="Discover" component={Discover} options={{ headerShown: false }} />
      <HomeStack.Screen name="DiscoverCA" component={DiscoverCA} options={{ headerShown: false }} />
      <HomeStack.Screen name="DiscoverRP" component={DiscoverRP} options={{ headerShown: false }} />
      <HomeStack.Screen name="DiscoverBio" component={DiscoverBio} options={{ headerShown: false }} />
      <HomeStack.Screen name="CestMatch" component={CestMatch} options={{ headerShown: false }} />
      {/* Profil */}
      <HomeStack.Screen
        name="ProfilMeRP"
        component={ProfilMeRP}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProfilMeRPfirst"
        component={ProfilMeRPfirst}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProfilMeCA"
        component={ProfilMeCA}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProfilMeCAfirst"
        component={ProfilMeCAfirst}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProfilMeRA"
        component={ProfilMeRA}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProfilMeRAfirst"
        component={ProfilMeRAfirst}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      {/* Even */}
      <Stack.Screen
        name="Evenements"
        component={Even}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Evenements Bio"
        component={EvenBio}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Recherche"
        component={Research}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Filtres avances"
        component={AdvancedFiltre}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sa taille"
        component={SaTaille}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sa morphologie"
        component={SaMorphologie}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Origine ethnique"
        component={OrigineEthnique}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Niveau etude"
        component={NiveauEtudeResearch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Metier"
        component={Metier}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Religion"
        component={Religion}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signe astro"
        component={SigneAstrologie}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Orientation politique"
        component={OrientationPolitique}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tabac"
        component={Tabac}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Alcool"
        component={Alcool}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pratique sportive"
        component={PratiqueSportive}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Enfants"
        component={Enfant}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Revenus"
        component={Revenus}
        options={{headerShown: false}}
      />
      {/* Pulse */}
      <Stack.Screen
        name="Pulse recherche"
        component={PulseRecherche}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search pulse"
        component={SearchPulse}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search pulse settings"
        component={SearchPulseSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pulse spotlight"
        component={PulseSpotlight}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pulse like"
        component={PulseLike}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pulse profil"
        component={PulseProfil}
        options={{headerShown: false}}
      />
      {/* Pass */}
      <Stack.Screen
        name="Prend pass"
        component={PrendPass}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pass flash 21"
        component={PassFlash21}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pass flash 19"
        component={PassFlash19}
        options={{headerShown: false}}
      />
      {/* Game */}
      <Stack.Screen
        name="Voix du jour"
        component={VoixDuJour}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Voix du jour2"
        component={VoixDuJour2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Carte brise glace"
        component={CarteBriseGlace}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Carte magique"
        component={CarteMagique}
        options={{headerShown: false}}
      />
      {/* Apps Affinitires */}
      <Stack.Screen
        name="Apps Affinitaires"
        component={AppsAffinitaires}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Apps Affinitaires2"
        component={AppsAffinitaires2}
        options={{headerShown: false}}
      />
      {/* Talk */}
      <Stack.Screen
        name="TalkChat"
        component={TalkChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TalkPhone"
        component={TalkPhone}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TalkPhoneAccept"
        component={TalkPhoneAccept}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TalkVideo"
        component={TalkVideo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TalkVideoAccept"
        component={TalkVideoAccept}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator initialRouteName="Settings">
      {/* SETTINGS SCREENS */}
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Notifications settings"
        component={NotificationsSettings}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Securite et privee"
        component={SecurityAndPrivate}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Contact et FAQ"
        component={ContactAndFAQ}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Aide"
        component={Aide}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Centre de securite"
        component={CentreSecurite}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Nous contactez"
        component={NousContactez}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="FAQ"
        component={FAQ}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Emplacement"
        component={Emplacement}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mode invisible"
        component={ModeInvisible}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mode voyage"
        component={ModeVoyage}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mettre en pause"
        component={MettreEnPause}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mode de connexion"
        component={ModeDeConnexion}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Changer localisation"
        component={ChangerLocalisation}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Parametre de confidentialites"
        component={ParametresConfident}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Autorisations necessaires"
        component={AutorisationsNecessaires}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Bloquer contacts"
        component={BloquerContacts}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Supprimer mon compte"
        component={SupprimerCompte}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Compte non trouve"
        component={CompteNonTrouve}
        options={{headerShown: false}}
      />
    </SettingsStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Stack.Screen name="Bienvenue" component={Bienvenue} options={{ headerShown: false }} />
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeNavigator} options={{headerShown: false}} />
      {/* <Stack.Screen name="Discover" component={HomeTabs} options={{headerShown: false}} /> */}
      {/* <Stack.Screen name="ProfilMe" component={HomeTabs} options={{headerShown: false}} /> */}
      {/* <Stack.Screen name="Messages" component={HomeTabs} options={{headerShown: false}} /> */}
      {/* <Stack.Screen name="Map" component={HomeTabs} options={{headerShown: false}} /> */}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <HomeNavigator />
    </NavigationContainer>
  );
}

export default App;
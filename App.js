import * as React from 'react';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStack} from './components/screens/HomeStack';
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
import {Compte} from './components/screens/register/Compte';
import {ConfirmationCompte} from './components/screens/register/ConfirmationCompte';
import {AjoutPhoto} from './components/screens/register/AjoutPhoto';
import {EmpreinteVocal} from './components/screens/register/EmpreinteVocal';
import {CharteEngagement} from './components/screens/register/CharteEngagement';
import {Felicitations} from './components/screens/register/Felicitations';
import {HomeStackNext} from './components/screens/HomeStackNext';
import {SignInMail} from './components/screens/register/SinscrireMail';
import {SignInPhone} from './components/screens/register/SinscrirePhone';
import {RecuperationCode} from './components/screens/RecuperationCode';
import {ConfirmationNumero} from './components/screens/register/ConfirmationNumero';
import {Profil} from './components/screens/profil/Profil';
import {ProfilMe} from './components/screens/profil/ProfilMe';
import {ProfilMeRP} from './components/screens/profil/ProfilMeRP';
import {ProfilMeCA} from './components/screens/profil/ProfilMeCA';
import {Settings} from './components/screens/settings/Settings';
import {Notifications} from './components/screens/settings/Notifications';
import {SecurityAndPrivate} from './components/screens/settings/SecurityAndPrivate';
import {ContactAndFAQ} from './components/screens/settings/ContactAndFAQ';
import {Emplacement} from './components/screens/register/Emplacement';
import {ModeInvisible} from './components/screens/settings/ModeInvisible';
import {ModeVoyage} from './components/screens/settings/ModeVoyage';
import {MettreEnPause} from './components/screens/settings/MettreEnPause';
import {ModeDeConnexion} from './components/screens/settings/ModeDeConnexion';
import {ChangeLocalisation} from './components/screens/settings/ChangeLocalisation';
import {ParametresConfident} from './components/screens/settings/ParamtresConfident';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />
        <Stack.Screen
          name="Home Next"
          component={HomeStackNext}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bienvenue"
          component={Bienvenue}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Création et Développement"
          component={Creation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Love Coach"
          component={LoveCoach}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Liens d'inscription"
          component={LinksSignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Liens de connexion"
          component={LinksLogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="S'inscrire par mail"
          component={SignInMail}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
          name="S'inscrire par numero"
          component={SignInPhone}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
          name="Accès Position"
          component={AccesPosition}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
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
        <Stack.Screen
          name="Date de naissance"
          component={DateDeNaissance}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
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
        <Stack.Screen
          name="Langue parler"
          component={LangueParler}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
          name="Confirmation prenom"
          component={ConfirmationPrenom}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
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
        <Stack.Screen
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
        <Stack.Screen
          name="Recuperation code"
          component={RecuperationCode}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
          name="Confirmation compte"
          component={ConfirmationCompte}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
          name="AjoutPhoto"
          component={AjoutPhoto}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
          name="Ajouter photo"
          component={AjoutPhoto}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
          name="Empreinte vocal"
          component={EmpreinteVocal}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
          name="Charte d'engagement"
          component={CharteEngagement}
          options={{
            headerShown: true,
            title: 'Retour',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerTintStyle: {borderBottomColor: '#FFF', borderBottomWidth: 2},
          }}
        />
        <Stack.Screen
          name="Felicitations"
          component={Felicitations}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profil"
          component={Profil}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfilMe"
          component={ProfilMe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfilMeRP"
          component={ProfilMeRP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfilMeCA"
          component={ProfilMeCA}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Securite et privee"
          component={SecurityAndPrivate}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contact et FAQ"
          component={ContactAndFAQ}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Emplacement"
          component={Emplacement}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mode invisible"
          component={ModeInvisible}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mode voyage"
          component={ModeVoyage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mettre en pause"
          component={MettreEnPause}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mode de connexion"
          component={ModeDeConnexion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Changer localisation"
          component={ChangeLocalisation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Parametres de confidentialites"
          component={ParametresConfident}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Test"
          component={ScreenTest}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

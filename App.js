// import * as React from 'react';
// import { StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import AboutMeScreen from './components/screens/AboutMeScreen';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar translucent backgroundColor="transparent" />
//       <Stack.Navigator
//         initialRouteName="AboutMe"
//       >
//         <Stack.Screen
//           name="AboutMe"
//           component={AboutMeScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;



import * as React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { AboutMeScreen } from './components/screens/AboutMeScreen';

import { HomeStack } from './components/screens/HomeStack';
import { Bienvenue } from './components/screens/Bienvenue';
import { Creation } from './components/screens/CreationEtDeveloppement';
import { LoveCoach } from './components/screens/LoveCoach';
import { LinksLogIn } from './components/screens/LinksLogIn';
import { LinksSignIn } from './components/screens/LinksSignIn';
import { RecuperationCompte } from './components/screens/RecuperationCompte';
import { ConfirmationEmail } from './components/screens/ConfirmationEmail';
import { Ville } from './components/screens/Ville';
import { AccesPosition } from './components/screens/AccesPosition';
import { Genre } from './components/screens/Genre';
import { DateDeNaissance } from './components/screens/DateDeNaissance';
import { Taille } from './components/screens/Taille';
import { LangueParler } from './components/screens/LangueParler';
import { Screen8 } from './components/screens/Screen8';
import { ScreenTest } from './components/screens/ScreenTest';
import { Situation } from './components/screens/Situation';
import { Orientation } from './components/screens/Orientation';
import { Recherche1 } from './components/screens/Recherche1';
import { Recherche2 } from './components/screens/Recherche2';
import { Objectifs } from './components/screens/Objectifs';
import { Affinite } from './components/screens/Affinite';
import { RythmeDeVie1 } from './components/screens/RythmeDeVie1';
import { RythmeDeVie2 } from './components/screens/RythmeDeVie2';
import { Prenom } from './components/screens/Prenom';
import { ConfirmationPrenom } from './components/screens/ConfirmationPrenom';
import { Prenium } from './components/screens/Prenium';
import { Compte } from './components/screens/Compte';
import { ConfirmationCompte } from './components/screens/ConfirmationCompte';
import { AjoutPhoto } from './components/screens/AjoutPhoto';
import { EmpreinteVocal } from './components/screens/EmpreinteVocal';
import { CharteEngagement } from './components/screens/CharteEngagement';
import { Felicitations } from './components/screens/Felicitations';
import { HomeStackNext } from './components/screens/HomeStackNext';
import { SignInMail } from './components/screens/SinscrireMail';
import { SignInPhone } from './components/screens/SinscrirePhone';
import { RecuperationCode } from './components/screens/RecuperationCode';
import { ConfirmationNumero } from './components/screens/ConfirmationNumero';
import { Profil } from './components/screens/Profil';
import { ProfilMe } from './components/screens/ProfilMe';



const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      {/* <Stack.Navigator initialRouteName="Home"> */}
      {/* ...autres écrans */}
        {/* <Stack.Screen name="AboutMeScreen" component={AboutMeScreen} options={{ headerShown: false }} /> */}

      {/* </Stack.Navigator> */}

       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeStack} options={{ title: "", headerTransparent: true, headerStyle: { backgroundColor: 'transparent', } }} />
        <Stack.Screen name="Home Next" component={HomeStackNext} options={{ headerShown: false }} />
        <Stack.Screen name="Bienvenue" component={Bienvenue} options={{ headerShown: false }} />
        <Stack.Screen name="Création et Développement" component={Creation} options={{ headerShown: false }} />
        <Stack.Screen name="Love Coach" component={LoveCoach} options={{ headerShown: false }} />
        <Stack.Screen name="Liens d'inscription" component={LinksSignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Liens de connexion" component={LinksLogIn} options={{ headerShown: false }} />
        <Stack.Screen name="S'inscrire par mail" component={SignInMail} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="S'inscrire par numero" component={SignInPhone} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Confirmation numero" component={ConfirmationNumero} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Recuperation email" component={RecuperationCompte} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Confirmation email" component={ConfirmationEmail} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Ville" component={Ville} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Accès Position" component={AccesPosition} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Genre" component={Genre} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Date de naissance" component={DateDeNaissance} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Taille" component={Taille} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Langue parler" component={LangueParler} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Situation" component={Situation} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Orientation" component={Orientation} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Recherche1" component={Recherche1} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Recherche2" component={Recherche2} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Objectifs" component={Objectifs} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Affinite" component={Affinite} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Rythme1" component={RythmeDeVie1} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Rythme2" component={RythmeDeVie2} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Prenom" component={Prenom} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Confirmation prenom" component={ConfirmationPrenom} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Prenium" component={Prenium} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Compte" component={Compte} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Recuperation code" component={RecuperationCode} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Confirmation compte" component={ConfirmationCompte} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="AjoutPhoto" component={AjoutPhoto} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Ajouter photo" component={AjoutPhoto} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Empreinte vocal" component={EmpreinteVocal} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Charte d'engagement" component={CharteEngagement} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: '#FFF', headerTintStyle: { borderBottomColor: '#FFF', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Felicitations" component={Felicitations} options={{ headerShown: false }} />
        <Stack.Screen name="ProfilMe" component={ProfilMe} />
        <Stack.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
        
        <Stack.Screen name="Test" component={ScreenTest} options={{ headerShown: false }} />

      </Stack.Navigator>  
    </NavigationContainer>
  );
}

export default App;
/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../components/screens/settings/Settings';
import { NotificationsSettings } from '../components/screens/settings/NotificationsSettings';
import { SecurityAndPrivate } from '../components/screens/settings/SecurityAndPrivate';
import { ContactAndFAQ } from '../components/screens/settings/ContactAndFAQ';
import { Aide } from '../components/screens/settings/Aide';
import { CentreSecurite } from '../components/screens/settings/CentreSecurite';
import { NousContactez } from '../components/screens/settings/NousContactez';
import { FAQ } from '../components/screens/settings/FAQ';
import { Emplacement } from '../components/screens/settings/Emplacement';
import { ModeInvisible } from '../components/screens/settings/ModeInvisible';
import { ModeVoyage } from '../components/screens/settings/ModeVoyage';
import MettreEnPause from '../components/screens/settings/MettreEnPause';
import { ModeDeConnexion } from '../components/screens/settings/ModeDeConnexion';
import { ChangerLocalisation } from '../components/screens/settings/ChangerLocalisation';
import { ParametresConfident } from '../components/screens/settings/ParamtresConfident';
import { AutorisationsNecessaires } from '../components/screens/settings/AutorisationsNecessaires';
import BloquerContacts from '../components/screens/settings/BloquerContacts';
import SupprimerCompte from '../components/screens/settings/SupprimerCompte';
import CompteNonTrouve from '../components/screens/settings/CompteNonTrouve';

const SettingsStack = createNativeStackNavigator();

function SettingsNavigator({route}) {
  const {SettingsRoute} = route.params;
    return (
    <SettingsStack.Navigator initialRouteName={SettingsRoute}>
      {/* SETTINGS SCREENS */}
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Notifications_settings"
        component={NotificationsSettings}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Securite_et_privee"
        component={SecurityAndPrivate}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Contact_et_FAQ"
        component={ContactAndFAQ}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Aide"
        component={Aide}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Centre_de_securite"
        component={CentreSecurite}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Nous_contactez"
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
        name="Mode_invisible"
        component={ModeInvisible}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mode_voyage"
        component={ModeVoyage}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mettre_en_pause"
        component={MettreEnPause}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mode_de_connexion"
        component={ModeDeConnexion}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Changer_localisation"
        component={ChangerLocalisation}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Parametre_de_confidentialites"
        component={ParametresConfident}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Autorisations_necessaires"
        component={AutorisationsNecessaires}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Bloquer_contacts"
        component={BloquerContacts}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Supprimer_mon_compte"
        component={SupprimerCompte}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Compte_non_trouve"
        component={CompteNonTrouve}
        options={{headerShown: false}}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsNavigator;

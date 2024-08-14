/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Research from '../components/screens/research/Research';
import AdvancedFiltre from '../components/screens/research/AdvancedFiltre';
import SaTaille from '../components/screens/research/SaTaille';
import SaMorphologie from '../components/screens/research/SaMorphologie';
import OrigineEthnique from '../components/screens/research/OrigineEthnique';
import NiveauEtudeResearch from '../components/screens/research/NiveauEtudeResearch';
import Metier from '../components/screens/research/Metier';
import Religion from '../components/composants/edit/Religion';
import SigneAstrologie from '../components/screens/research/SigneAstrologie';
import OrientationPolitique from '../components/screens/research/OrientationPolitique';
import Tabac from '../components/screens/research/Tabac';
import Alcool from '../components/composants/edit/Alcool';
import PratiqueSportive from '../components/screens/research/PratiqueSportive';
import Revenus from '../components/screens/research/Revenus';
import Enfant from '../components/screens/research/Enfants';

const SearchStack = createNativeStackNavigator();

function SearchNavigator({route}) {
  const {SearchRoute} = route.params;
  return (
    <SearchStack.Navigator initialRouteName={SearchRoute}>

      {/* Search */}
      <SearchStack.Screen
        name="Recherche"
        component={Research}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Filtres avances"
        component={AdvancedFiltre}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Sa taille"
        component={SaTaille}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Sa morphologie"
        component={SaMorphologie}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Origine ethnique"
        component={OrigineEthnique}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Niveau etude"
        component={NiveauEtudeResearch}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Metier"
        component={Metier}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Religion"
        component={Religion}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Signe astro"
        component={SigneAstrologie}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Orientation politique"
        component={OrientationPolitique}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Tabac"
        component={Tabac}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Alcool"
        component={Alcool}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Pratique sportive"
        component={PratiqueSportive}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Enfants"
        component={Enfant}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Revenus"
        component={Revenus}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
}

export default SearchNavigator;

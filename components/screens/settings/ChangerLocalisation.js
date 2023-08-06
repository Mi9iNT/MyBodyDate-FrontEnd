/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import StyleChangerLocalisation from '../../../assets/style/styleScreens/styleSettings/StyleChangerLocalisation';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const ChangerLocalisation = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [newCity, setNewCity] = useState();
  const [buttonPressed, setButtonPressed] = useState();

  return (
    <ImageBackground
      style={StyleChangerLocalisation.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings settingsNavigation={() => navigation.navigate('Mode voyage')} />
      <View style={{flex:5}}>
      <Text
        style={StyleChangerLocalisation.title}>
        Changer ma localisation
      </Text>
      <View
        style={StyleChangerLocalisation.separator}
      />
      <Text
        style={StyleChangerLocalisation.description}>
        Utilisez le mode voyage pour changez votre emplacement et découvrir de nouvelles personnes. HEIN?
      </Text>

      <SafeAreaView style={StyleChangerLocalisation.boxInputCity}>
        <TextInput
          style={StyleChangerLocalisation.inputCity}
          onChangeText={setNewCity}
          value={newCity}
          placeholder="Entrez votre ville"
          placeholderTextColor={'#0019A7'}
        />
    </SafeAreaView>
      </View>
      <View style={{flex:1}}>
        <TouchableOpacity style={{ top: 0 }} onPress={() => { setButtonPressed(true); navigation.navigate('Mode voyage'); }}>
        <Image
          style={StyleChangerLocalisation.backButton}
          source={buttonPressed ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={[StyleChangerLocalisation.backButtonText, {color: buttonPressed ? '#fff' : '#0019A7' }]}>
          Retour mode voyage
        </Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

ChangerLocalisation.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

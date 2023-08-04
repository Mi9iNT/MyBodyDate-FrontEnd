/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlideSettings} from '../../composants/MenuSlideSettings';
import StyleEmplacement from '../../../assets/style/styleScreens/styleSettings/StyleEmplacement';

export const Emplacement = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  return (
    <ImageBackground
      style={StyleEmplacement.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings settingsNavigation={() => navigation.navigate('Settings')} />
      <Text
        style={StyleEmplacement.title}>
        Emplacement
      </Text>
      <View
        style={StyleEmplacement.separator}
      />
      <Text
        style={StyleEmplacement.description}>
        Il possible de modifier cette fonctionnalité uniquement en mode voyage
        ainsi que si vous disposez d’un papier attestant...
      </Text>
      <View
        style={StyleEmplacement.itemEmplacement}>
        <TouchableOpacity
          accessibilityLabel="Emplacement"
          onPress={() => navigation.navigate('Emplacement')}>
          <View
            style={StyleEmplacement.boxItemEmplacement}>
            <Text
              style={StyleEmplacement.textItemEmplacement}>
              Emplacement
            </Text>
            <Text
              style={StyleEmplacement.secondTextItemEmplacement}>
              Paris, FR
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{top:150}} onPress={() => navigation.navigate('Settings')}>
        <Image
          style={StyleEmplacement.backButton}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={StyleEmplacement.backButtonText}>
          Retour paramètres
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

Emplacement.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

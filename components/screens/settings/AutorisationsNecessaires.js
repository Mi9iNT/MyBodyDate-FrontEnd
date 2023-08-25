/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import StyleAutorisationsNecessaires from '../../../assets/style/styleScreens/styleSettings/StyleAutorisationsNecessaires';
import MenuSlide from '../../composants/MenuSlide';

export const AutorisationsNecessaires = ({navigation}) => {
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
      style={StyleAutorisationsNecessaires.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide settingsNavigation={'Parametre de confidentialites'} backButton={'Retour'} />
      <Text
        style={StyleAutorisationsNecessaires.title}>
        Autorisations nécessaires
      </Text>
      <View
        style={StyleAutorisationsNecessaires.separator}
      />
      <View style={StyleAutorisationsNecessaires.autNecContainer}>
        <View style={StyleAutorisationsNecessaires.containerItem}>
          <Text style={StyleAutorisationsNecessaires.textItem}>Apple</Text>
          <Text style={StyleAutorisationsNecessaires.secondTextItem}>Nous permet de surveiller les pannes et d’améliorer la stabilité de l’application.</Text>
        </View>
        <View style={StyleAutorisationsNecessaires.containerItem}>
          <Text style={StyleAutorisationsNecessaires.textItem}>Giphy</Text>
          <Text style={StyleAutorisationsNecessaires.secondTextItem}>Vous permet d’envoyer des GIF.</Text>
        </View>
        <View style={StyleAutorisationsNecessaires.containerItem}>
          <Text style={StyleAutorisationsNecessaires.textItem}>Google</Text>
          <Text style={StyleAutorisationsNecessaires.secondTextItem}>Nous permet de surveiller les pannes et d’améliorer la stabilité de l’application.</Text>
        </View>
        <View style={StyleAutorisationsNecessaires.containerItem}>
          <Text style={StyleAutorisationsNecessaires.textItem}>Instagram</Text>
          <Text style={StyleAutorisationsNecessaires.secondTextItem}>Vous permet d’ajouter des photos à partir d’Instagram et de les afficher sur ton profil.</Text>
        </View>
        <View style={StyleAutorisationsNecessaires.containerItem}>
          <Text style={StyleAutorisationsNecessaires.textItem}>Spotify</Text>
          <Text style={StyleAutorisationsNecessaires.secondTextItem}>Vous permet d’afficher votre playlist et chansons préférés sur votre profil. </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

AutorisationsNecessaires.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

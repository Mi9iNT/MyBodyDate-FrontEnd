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
  Switch,
} from 'react-native';
import PropTypes from 'prop-types';
import StyleParmetreConfident from '../../../assets/style/styleScreens/styleSettings/StyleParemetresConfident';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const ParametresConfident = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  const [isEnabledLocalisation, setIsEnabledLocalisation] = useState(false);
  const toggleSwitchLocalisation = () =>
    setIsEnabledLocalisation(previousState => !previousState);
  const [isEnabledInfoPerso, setIsEnabledInfoPerso] = useState(false);
  const toggleSwitchInfoPerso = () =>
    setIsEnabledInfoPerso(previousState => !previousState);
  const [isEnabledHistorique, setIsEnabledHistorique] = useState(false);
  const toggleSwitchHistorique = () =>
    setIsEnabledHistorique(previousState => !previousState);
  return (
    <ImageBackground
      style={StyleParmetreConfident.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings settingsNavigation={() => navigation.navigate('Securite et privee')} />
      <Text
        style={StyleParmetreConfident.title}>
        Paramètres de confidentialités
      </Text>
      <View
        style={StyleParmetreConfident.separator}
      />
      <View
        style={StyleParmetreConfident.parametresConfidentContainer}>
        <Text
          style={StyleParmetreConfident.titleItem}>
          Localisation
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={StyleParmetreConfident.textItem}>
            Vous pouvez choisir de partager votre localisation ou non.
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabledLocalisation ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitchLocalisation}
            value={isEnabledLocalisation}
            style={{
              top: 0,
              alignSelf: 'end',
              left: 20,
            }}
          />
        </View>
      </View>
      <View
        style={StyleParmetreConfident.viewItem}>
        <Text
          style={StyleParmetreConfident.titleItem}>
          Informations personnelles
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={StyleParmetreConfident.textItem}>
            Masquer certaines informations sensibles.
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabledInfoPerso ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitchInfoPerso}
            value={isEnabledInfoPerso}
            style={{
              top: 0,
              alignSelf: 'end',
              left: 20,
            }}
          />
        </View>
      </View>
      <View
        style={StyleParmetreConfident.viewItem}>
        <Text
          style={StyleParmetreConfident.titleItem}>
          Historique des discussions
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={StyleParmetreConfident.textItem}>
            Supprimer ou d'archiver les conversations précédentes pour garder
            votre messagerie organisée et protéger votre vie privée.
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabledHistorique ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitchHistorique}
            value={isEnabledHistorique}
            style={{
              top: 0,
              alignSelf: 'end',
              left: 20,
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Securite et privee')}>
        <Image
          style={StyleParmetreConfident.backButton}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={StyleParmetreConfident.backButtonText}>
          Retour sécurité & vie privée
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

ParametresConfident.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

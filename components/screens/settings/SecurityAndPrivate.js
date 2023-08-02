/* eslint-disable prettier/prettier */
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
import StyleSecurityAndPrivate from '../../../assets/style/styleScreens/styleSettings/StyleSecutityAndPrivate';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const SecurityAndPrivate = ({navigation}) => {
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
      style={StyleSecurityAndPrivate.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings settingsNavigation={() => navigation.navigate('Settings')} />

      <Text
        style={StyleSecurityAndPrivate.title}>
        Sécurité & vie privée
      </Text>
      <View
        style={StyleSecurityAndPrivate.separator}
      />
      <Text
        style={StyleSecurityAndPrivate.description}>
        Gérez vos modes de connexions sécurisé ?
      </Text>
      <View
        style={StyleSecurityAndPrivate.securityAndPrivateContainer}>
        <TouchableOpacity
          accessibilityLabel="Mode de connexion"
          onPress={() => navigation.navigate('Mode de connexion')}>
          <View
            style={StyleSecurityAndPrivate.securityAndPrivateItem}>
            <Text
              style={StyleSecurityAndPrivate.securityAndPrivateText}>
              Mode de connexion
            </Text>
            <Text
              style={StyleSecurityAndPrivate.securityAndPrivateType}>
              e-mail, Google
            </Text>
            <Image
              style={StyleSecurityAndPrivate.arrowIcon}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Paramètre de confidentialités"
          onPress={() => navigation.navigate('Parametre de confidentialites')}>
          <View
            style={StyleSecurityAndPrivate.securityAndPrivateItem}>
            <Text
              style={StyleSecurityAndPrivate.securityAndPrivateText}>
              Paramètre de confidentialités
            </Text>
            <Image
              style={StyleSecurityAndPrivate.arrowIcon}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Bloquer les contacts"
          onPress={() => navigation.navigate('Bloquer contacts')}>
          <View
            style={StyleSecurityAndPrivate.securityAndPrivateItem}>
            <Text
              style={StyleSecurityAndPrivate.securityAndPrivateText}>
              Bloquer les contacts
            </Text>
            <Image
              style={StyleSecurityAndPrivate.arrowIcon}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image
          style={StyleSecurityAndPrivate.backButton}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={StyleSecurityAndPrivate.backButtonText}>
          Retour paramètres
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

SecurityAndPrivate.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

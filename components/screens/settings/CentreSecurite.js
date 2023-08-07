/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import StyleCentreSecurite from '../../../assets/style/styleScreens/styleSettings/StyleContactAndFAQ';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const CentreSecurite = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  const [buttonPressed, setButtonPressed] = useState();
  return (
    <ImageBackground
      style={StyleCentreSecurite.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings settingsNavigation={() => navigation.navigate('Contact et FAQ')} />
      <View style={{flex:5}}>
      <Text
        style={StyleCentreSecurite.title}>
        Centre sécurité
      </Text>
      <View
        style={StyleCentreSecurite.separator}
      />
      <Text
        style={StyleCentreSecurite.description}>
        Découvrez le Centre de sécurité
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={StyleCentreSecurite.backButtonContainer} onPress={() => { setButtonPressed(true); navigation.navigate('Contact et FAQ'); }}>
        <Image
          style={StyleCentreSecurite.backButton}
          source={buttonPressed ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={[StyleCentreSecurite.backButtonText, {color: buttonPressed ? '#fff' : '#0019A7'}]}>
          Retour Contact et FAQ
        </Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

CentreSecurite.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

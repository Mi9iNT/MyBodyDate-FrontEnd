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
import StyleNousContactez from '../../../assets/style/styleScreens/styleSettings/StyleNousContactez';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const NousContactez = ({navigation}) => {
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
      style={StyleNousContactez.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings settingsNavigation={() => navigation.navigate('Contact et FAQ')} />
      <View style={{flex:5}}>
      <Text
        style={StyleNousContactez.title}>
        Nous contactez
      </Text>
      <View
        style={StyleNousContactez.separator}
      />
      <Text
        style={StyleNousContactez.description}>
        Nous contactez
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={StyleNousContactez.backButtonContainer} onPress={() => { setButtonPressed(true); navigation.navigate('Contact et FAQ'); }}>
        <Image
          style={StyleNousContactez.backButton}
          source={buttonPressed ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={[StyleNousContactez.backButtonText, {color: buttonPressed ? '#fff' : '#0019A7'}]}>
          Retour Contact et FAQ
        </Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

NousContactez.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

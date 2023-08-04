/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  Switch,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import StyleModeInvisible from '../../../assets/style/styleScreens/styleSettings/StyleModeInvisible';
import PropTypes from 'prop-types';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const ModeInvisible = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ImageBackground
      style={StyleModeInvisible.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings />
      <Text
        style={StyleModeInvisible.title}>
        Mode invisible
      </Text>
      <View
        style={StyleModeInvisible.separator}
      />
      <Text
        style={StyleModeInvisible.description}>
        Seule les membres que vous aurez liké peuvent voir votre profil.
      </Text>
      <View
        style={{
          flexShrink: 0,
          alignSelf: 'center',
          top: 150,
        }}>
        <Text
          style={StyleModeInvisible.textBold}>
          Mettre mon compte en invisible
        </Text>
        <Switch
          trackColor={{false: '#BEC8FF', true: '#17ff58'}}
          thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
          ios_backgroundColor="#f4f3f4"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={StyleModeInvisible.switchModeInvisible}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image
          style={StyleModeInvisible.backButton}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={StyleModeInvisible.backButtonText}>
          Retour paramètres
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

ModeInvisible.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

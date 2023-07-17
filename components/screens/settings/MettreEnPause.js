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
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';
import PropTypes from 'prop-types';

export const MettreEnPause = ({navigation}) => {
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
      style={Styles.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide />
      <Text
        style={{
          top: 30,
          color: '#0019A7',
          fontFamily: 'Gilroy',
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 700,
        }}>
        Mettre mon compte {'\n'}en pause
      </Text>
      <View
        style={{
          backgroundColor: '#0019A7',
          width: 351,
          height: 1,
          alignSelf: 'center',
          top: 60,
        }}
      />
      <Text
        style={{
          color: '#929EDE',
          top: 100,
          width: 320,
          alignSelf: 'center',
          textAlign: 'center',
          fontFamily: 'Comfortaa',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        Vous pouvez suspendre votre compte quand vous le souhaitez. Votre compte
        sera mis en pause et vous pourrez le réactiver quand vous le voudrez.
      </Text>
      <View
        style={{
          flexShrink: 0,
          alignSelf: 'center',
          top: 150,
        }}>
        <Text
          style={{
            color: '#0019A7',
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Mettre mon compte en invisible
        </Text>
        <Switch
          trackColor={{false: '#BEC8FF', true: '#17ff58'}}
          thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
          ios_backgroundColor="#f4f3f4"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{
            top: 40,
            alignSelf: 'center',
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image
          style={{
            top: 500,
            width: 331,
            height: 56,
            flexShrink: 0,
            alignSelf: 'center',
          }}
          source={require('../../../assets/boutons/bouton-retour-parametres.png.png')}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

MettreEnPause.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

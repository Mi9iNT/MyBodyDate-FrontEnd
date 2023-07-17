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
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';

export const ModeVoyage = ({navigation}) => {
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
        Mode voyage
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
        Utilisez le mode voyage pour changez votre emplacement et découvrir de
        nouvelles personnes.
      </Text>
      <View
        style={{
          height: 360,
          width: 351,
          alignSelf: 'center',
          top: 150,
          marginBottom: 40,
        }}>
        <TouchableOpacity
          accessibilityLabel="Changer ma localisation"
          onPress={() => navigation.navigate('Changer localisation')}>
          <View
            style={{
              height: 20,
              width: 351,
              alignSelf: 'center',
              top: 10,
              flexDirection: 'row',
              marginBottom: 40,
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 240,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Changer ma localisation
            </Text>
            <Text
              style={{
                color: '#383A39',
                width: 100,
                fontFamily: 'Comfortaa',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Paris, FR
            </Text>
            <Image
              style={{
                width: 7,
                height: 15,
                flexShrink: 0,
              }}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image
          style={{
            top: 170,
            width: 331,
            height: 56,
            flexShrink: 0,
            alignSelf: 'center',
          }}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={{
            top: 130,
            left: 10,
            color: '#0019A7',
            textAlign: 'center',
            alignSelf: 'center',
            fontFamily: 'Comfortaa',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Retour paramètres
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

ModeVoyage.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

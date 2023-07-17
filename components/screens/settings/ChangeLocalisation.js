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
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';

export const ChangeLocalisation = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  const [text, onChangeText] = useState('Entrez votre ville');
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
        Changer ma localisation
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
          color: '#0019A7',
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
        }}
      />
      <SafeAreaView
        style={{
          top: -220,
          alignSelf: 'center',
        }}>
        <TextInput
          style={{
            width: 276,
            height: 51,
            borderRadius: 24,
            borderWidth: 1,
            textAlign: 'center',
            borderColor: '#0019A7',
            color: '#0019A7',
            fontFamily: 'Comfortaa',
            fontSize: 15,
            fontStyle: 'normal',
          }}
          keyboardType="default"
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Mode voyage')}>
        <Image
          style={{
            top: 120,
            width: 331,
            height: 56,
            flexShrink: 0,
            alignSelf: 'center',
          }}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={{
            top: 80,
            left: 10,
            color: '#0019A7',
            textAlign: 'center',
            alignSelf: 'center',
            fontFamily: 'Comfortaa',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Retour mode voyage
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

ChangeLocalisation.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

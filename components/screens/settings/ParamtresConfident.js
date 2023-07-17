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
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';

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
      <View
        style={{
          flexShrink: 0,
          alignSelf: 'center',
          top: 150,
          marginBottom: 40,
        }}>
        <Text
          style={{
            color: '#0019A7',
            width: 320,
            textAlign: 'left',
            fontFamily: 'Gilroy',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
            marginBottom: 20,
          }}>
          Localisation
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#929EDE',
              width: 260,
              alignSelf: 'start',
              textAlign: 'left',
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
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
        style={{
          flexShrink: 0,
          alignSelf: 'center',
          top: 150,
          marginBottom: 40,
        }}>
        <Text
          style={{
            color: '#0019A7',
            width: 320,
            textAlign: 'left',
            fontFamily: 'Gilroy',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
            marginBottom: 20,
          }}>
          Informations personnelles
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#929EDE',
              width: 260,
              alignSelf: 'start',
              textAlign: 'left',
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
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
        style={{
          flexShrink: 0,
          alignSelf: 'center',
          top: 150,
        }}>
        <Text
          style={{
            color: '#0019A7',
            width: 320,
            textAlign: 'left',
            fontFamily: 'Gilroy',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
            marginBottom: 20,
          }}>
          Historique des discussions
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#929EDE',
              width: 260,
              alignSelf: 'start',
              textAlign: 'left',
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
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
      <TouchableOpacity onPress={() => navigation.navigate('Mode voyage')}>
        <Image
          style={{
            top: 260,
            width: 331,
            height: 56,
            flexShrink: 0,
            alignSelf: 'center',
          }}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={{
            top: 220,
            left: 10,
            color: '#0019A7',
            textAlign: 'center',
            alignSelf: 'center',
            fontFamily: 'Comfortaa',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
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

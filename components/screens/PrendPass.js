/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import MenuSlide from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';
import {MyComponentTer} from '../../composants/MyComponentTer';

export const PrendPass = ({route, navigation}) => {
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';
  const accesPosition = route.params?.accesPosition ?? '';
  const genre = route.params?.genre ?? '';
  const userBirth = route.params?.userBirth ?? '';
  const userSize = route.params?.userSize ?? '';
  const userLang = route.params?.userLang ?? '';
  const userSituation = route.params?.userSituation ?? '';
  const userOrientation = route.params?.userOrientation ?? '';
  const userRecherche1 = route.params?.userRecherche1 ?? '';
  const userRecherche2 = route.params?.userRecherche2 ?? '';
  const userAffinites = route.params?.userAffinites ?? '';
  const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
  const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/bg-parametres.png')}
        style={{flex: 1}}>
        <View
          style={{
            top: 30,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
              margin: 30,
            }}>
            Je prends mon pass
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
              marginBottom: 30,
            }}>
            Sélectionnez les critères essentiels{'\n'}pour vous
          </Text>
          <Image
            source={require('../../../assets/images/bouton-continuer-1.png')}
            style={{
              width: 358,
              height: 151,
              alignSelf: 'center',
              margin: 10,
            }}
          />
          <Image
            source={require('../../../assets/images/bouton-continuer-2.png')}
            style={{
              width: 359,
              height: 151,
              alignSelf: 'center',
              margin: 15,
            }}
          />
          <Image
            source={require('../../../assets/images/bouton-continuer-3.png')}
            style={{
              width: 359,
              height: 151,
              alignSelf: 'center',
              margin: 15,
            }}
          />
        </View>
        <View>
          <MenuBottom />
        </View>
      </ImageBackground>
    </View>
  );
};

PrendPass.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

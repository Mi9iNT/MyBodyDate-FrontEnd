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

export const VoixDuJour = ({route, navigation}) => {
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
        source={require('../../../assets/images/Background-VJ.png')}
        style={{flex: 1}}>
        <View style={{Flex: 1}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              width: 20,
              height: 18,
              left: 330,
              top: 30,
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 205,
            }}>
            Retrouvez qui a la voix de :
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 235,
            }}>
            Soprano
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              fontStyle: 'italic',
              top: 235,
            }}>
            Celine Dion
          </Text>
          <ImageBackground
            source={require('../../../assets/images/VoixEllipse.png')}
            style={{
              width: 122,
              height: 122,
              top: 300,
              left: 195,
            }}>
            <Image
              source={require('../../../assets/images/VoixGae.png')}
              style={{
                width: 119,
                height: 119,
              }}
            />
          </ImageBackground>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              top: 300,
              left: 230,
            }}>
            Gaëlle
          </Text>
          <ImageBackground
            source={require('../../../assets/images/VoixEllipse.png')}
            style={{
              width: 122,
              height: 122,
              top: 300,
              left: 45,
            }}>
            <Image
              source={require('../../../assets/images/VoixRac.png')}
              style={{
                width: 119,
                height: 119,
              }}
            />
          </ImageBackground>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              top: 300,
              left: 70,
            }}>
            Rachel
          </Text>
          <ImageBackground
            source={require('../../../assets/images/VoixEllipse.png')}
            style={{
              width: 122,
              height: 122,
              top: 200,
              left: 240,
            }}>
            <Image
              source={require('../../../assets/images/VoixBev.png')}
              style={{
                width: 119,
                height: 119,
              }}
            />
          </ImageBackground>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              top: 200,
              left: 270,
            }}>
            Beverly
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

VoixDuJour.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

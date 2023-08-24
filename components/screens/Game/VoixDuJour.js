/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

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
        source={require('../../../assets/images/Background.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
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
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 40,
            }}>
            La voix du jour
          </Text>
          <Image
            source={require('../../../assets/images/MicGame.png')}
            style={{
              width: 55,
              height: 55,
              top: 150,
              alignSelf: 'center',
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
              top: 155,
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
              top: 185,
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
              top: 185,
            }}>
            Celine Dion
          </Text>
          <ImageBackground
            source={require('../../../assets/images/VoixEllipse.png')}
            style={{
              width: 122,
              height: 122,
              top: 220,
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
              top: 220,
              left: 230,
            }}>
            Gaëlle
          </Text>
          <ImageBackground
            source={require('../../../assets/images/VoixEllipse.png')}
            style={{
              width: 122,
              height: 122,
              top: 220,
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
              top: 220,
              left: 70,
            }}>
            Rachel
          </Text>
          <ImageBackground
            source={require('../../../assets/images/VoixEllipse.png')}
            style={{
              width: 122,
              height: 122,
              top: 120,
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
              top: 120,
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

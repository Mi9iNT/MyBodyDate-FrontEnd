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

export const PulseSpotlight = ({route, navigation}) => {
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
        source={require('../../../assets/images/Background-22.png')}
        style={{flex: 1}}>
        <View style={{left: 350, marginTop: 30}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              top: 4,
              width: 20,
              height: 18,
            }}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
            }}>
            Pulse spotlight
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              top: 25,
            }}>
            Propulser votre profil en le mettant en avant grâce au Spotlight.
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              top: 50,
            }}>
            Découvrez nos offres !
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: 85,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <ImageBackground
            source={require('../../../assets/images/Rectangle-85.png')}
            style={{
              felx: 1,
              alignItems: 'center',
              width: 154,
              height: 88,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#FFF',
                top:15,
              }}>
              Spotlight
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#FFF',
                top:25,
              }}>
              1,00 € min.
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../assets/images/Rectangle-85.png')}
            style={{
              felx: 1,
              alignItems: 'center',
              width: 154,
              height: 88,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#FFF',
                top:15,
              }}>
              Super spotlight
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#FFF',
                top:25,
              }}>
              4,29 € min.
            </Text>
          </ImageBackground>
        </View>
        <View style={{alignItems: 'center', top: 120}}>
          <Image
            source={require('../../../assets/images/Group-45.png')}
            style={{
              width: 340,
              height: 240,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

PulseSpotlight.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

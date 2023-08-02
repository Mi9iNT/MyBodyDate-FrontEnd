/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';

export const PulseLike = ({route, navigation}) => {
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
        <View
          style={{
            alignItems: 'center',
            top: 20,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
            }}>
            Pulse
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
            }}>
            Pass
          </Text>
        </View>
        <Image
            source={require('../../../assets/images/Line-131.png')}
            style={{
              width: 195,
              height: 3,
              top: 30,
            }}
          />
          <Image
            source={require('../../../assets/images/Line-130.png')}
            style={{
              width: 390,
              height: 1,
              top: 30,
            }}
          />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              top: 45,
            }}>
            Pulse like
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              top: 65,
              textAlign: 'center',
            }}>
            Lorem ipsum dolor sit amet,{'\n'}consectetur adipiscing elit.
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              top: 80,
            }}>
            Découvrez nos offres !
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: 75,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../../assets/images/Group448-bis.png')}
            style={{
              width: 165,
              height: 190,
            }}
          />
          <Image
            source={require('../../../assets/images/Group449-bis.png')}
            style={{
              width: 165,
              height: 230,
              top: 20,
            }}
          />
        </View>
        <View style={{alignItems: 'center', top: 70}}>
          <Image
            source={require('../../../assets/images/Group450-bis-V.png')}
            style={{
              width: 160,
              height: 225,
            }}
          />
        </View>
        <Image
            source={require('../../../assets/images/acheter.png')}
            style={{
              width: 356,
              height: 56,
              top: 90,
              alignSelf: 'center',
            }}
          />
      </ImageBackground>
    </View>
  );
};

PulseLike.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

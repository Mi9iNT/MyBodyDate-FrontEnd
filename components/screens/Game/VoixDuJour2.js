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

export const VoixDuJour2 = ({route, navigation}) => {
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
        <Image
          source={require('../../../assets/images/Group-58.png')}
          style={{
            width: 20,
            height: 18,
            left: 330,
            top: 30,
          }}
        />
        <View style={{Flex: 1, alignItems: 'center'}}>
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
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 75,
            }}>
            Envie d'en savoir plus sur{'\n'}Rachel ?
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 95,
            }}>
            Découvrez sa voix !
          </Text>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              top: 135,
            }}>
            <Image
              source={require('../../../assets/images/Play-P.png')}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Image
              source={require('../../../assets/images/Ondes-Sonores.png')}
              style={{
                width: 60,
                height: 60,
                left: 15,
              }}
            />
            <Image
              source={require('../../../assets/images/Ondes-Sonores.png')}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </View>
          <Image
            source={require('../../../assets/images/VoixRac.png')}
            style={{
              width: 237,
              height: 237,
              top: 175,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#FFF',
              top: 175,
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            Rachel
          </Text>
          <Image
            source={require('../../../assets/images/Bouton-Decouvrir.png')}
            style={{
              width: 331,
              height: 56,
              top: 200,
            }}
          />
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              top: 220,
            }}>
            <Image
              source={require('../../../assets/images/Rejouer.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Comfortaa',
                fontWeight: '400',
                color: '#FFF',
                left: 20,
              }}>
              Rejouer
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

VoixDuJour2.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

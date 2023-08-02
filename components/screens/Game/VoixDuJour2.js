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
        source={require('../../../assets/images/Background-VJ2.png')}
        style={{flex: 1}}>
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
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 105,
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
              top: 135,
            }}>
            Découvrez sa voix !
          </Text>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              top: 180,
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
              top: 210,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#FFF',
              top: 215,
            }}>
            Rachel
          </Text>
          <Image
            source={require('../../../assets/images/Bouton-Decouvrir.png')}
            style={{
              width: 331,
              height: 56,
              top: 230,
            }}
          />
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              top: 250,
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

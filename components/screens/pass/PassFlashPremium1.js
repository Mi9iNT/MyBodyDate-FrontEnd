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

export const PassFlashPremium1 = ({route, navigation}) => {
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
            top: 107,
            position: 'absolute',
            right: 0,
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
        <MyComponentTer />
        <Image
          source={require('../../../assets/images/selectionner.png')}
          style={{
            width: 356,
            height: 60,
            top: 450,
            alignSelf: 'center',
          }}
        />
      </ImageBackground>
    </View>
  );
};

PassFlashPremium1.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

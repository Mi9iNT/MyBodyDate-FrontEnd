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

export const CarteBriseGlace = ({route, navigation}) => {
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
        source={require('../../../assets/images/Background-Glace.png')}
        style={{flex: 1}}>
        {/* <Image
        source={require('../../../assets/images/BackgroudWin.png')} // Ajoutez le chemin de votre image de fond
        style={{
          position: 'absolute',
          bottom:160,
          left: 0,
          width: '100%',
          height: '100%',
          resizeMode: 'cover', // Ajustez le mode de redimensionnement selon vos besoins
        }}
      /> */}
        <Image
          source={require('../../../assets/images/CroixB.png')}
          style={{
            width: 20,
            height: 18,
            left: 330,
            top: 30,
          }}
        />
        <View style={{Flex: 1, alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              top: 180,
            }}>
            <Image
              source={require('../../../assets/images/Claire.png')}
              style={{
                width: 185,
                height: 246,
                top: 70,
              }}
            />
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#0019A7',
                top: 70,
              }}>
              Claire, Paris
            </Text>
            <Image
              source={require('../../../assets/images/Bouton-Decouvrire.png')}
              style={{
                width: 351,
                height: 56,
                top: 140,
              }}
            />
            <Image
              source={require('../../../assets/images/BoutonQuitter.png')}
              style={{
                width: 351,
                height: 56,
                top: 160,
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

CarteBriseGlace.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

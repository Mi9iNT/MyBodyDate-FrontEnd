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
import {MyComponentLike} from '../../composants/MyComponentLike';

export const MesLikeRecu = ({route, navigation}) => {
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
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <MenuSlide />
      <View
        style={{
          height: 75,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../../assets/images/Line-113.png')}
          style={{
            width: 170,
            height: 1,
            top: 50,
            position: 'absolute',
            right: 15,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#0019A7',
            right: 25,
          }}>
          Likes
        </Text>
        <View
          style={{
            flexDirection: 'row',
            left: 25,
          }}>
          <TextInput
            style={{
              fontSize: 14,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
              padding: 5,
            }}
            defaultValue="Rechercher un like"
            // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
          />
          <Image
            source={require('../../../assets/images/Loupe.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      </View>
      <MyComponentLike />
      <ImageBackground
        source={require('../../../assets/images/Bouton-DansLike.png')}
        style={{
          width: 363,
          height: 162,
          top: 155,
          alignSelf: 'center',
        }}>
        <Image
          source={require('../../../assets/images/Profit.png')}
          style={{
            width: 50,
            height: 50,
            alignSelf: 'center',
            top: 20,
          }}
        />
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Gilroy',
            fontWeight: '700',
            color: '#0019A7',
            alignSelf: 'center',
            textAlign: 'center',
            top: 30,
          }}>
          Découvre plus de gens qui vous ont donné{'\n'}un Like
        </Text>
      </ImageBackground>
      <MenuBottom />
    </View>
  );
};

MesLikeRecu.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

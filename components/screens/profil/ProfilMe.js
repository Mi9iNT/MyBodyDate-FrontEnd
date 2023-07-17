/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';
import Styles from '../../../assets/style/Styles';

export const ProfilMe = ({route, navigation}) => {
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
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/MicrosoftTeams-image.png')}>
        <MenuSlide />
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <Image
              source={require('../../../assets/images/Ellipse44.png')}
              style={{
                width: 115,
                height: 115,
                borderColor: '#0019A7',
              }}
            />
            <Text style={{color: '#0019A7', fontSize: 17}}>ID.20230510.88</Text>
          </View>

          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/quality3.png')}
              style={{width: 30, height: 30, marginTop: 20}}
            />
            <Text style={{color: '#0019A7', fontSize: 17, marginTop: 5}}>
              Raluca
            </Text>
            <Text style={{color: '#0019A7', fontSize: 17, marginTop: 5}}>
              43, Paris
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Felicitations', {
                  userConsent: '',
                  routeName: '',
                  loveCoach: '',
                  userEmail: '',
                  userPhone: '',
                  userCity: '',
                  accesPosition: '',
                  genre: '',
                  userBirth: '',
                  userSize: '',
                  userLang: '',
                  userSituation: '',
                  userOrientation: '',
                  userRecherche1: '',
                  userRecherche2: '',
                  userAffinites: '',
                  rythmeDeVie1: '',
                  rythmeDeVie2: '',
                  userPrenom: '',
                  userVoice: '',
                  userPhoto: '',
                })
              }>
              <Image
                source={require('../../../assets/images/boutonContinuer2.png')}
                style={{width: 100, height: 30, marginTop: 25}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/préférence_profil.png')}
              style={{width: 30, height: 30, marginTop: 20}}
            />
            <Image
              source={require('../../../assets/images/heart2.png')}
              style={{width: 30, height: 30, marginTop: 35}}
            />
            <Image
              source={require('../../../assets/images/image116.png')}
              style={{width: 30, height: 30, marginTop: 35}}
            />
          </View>
        </View>
        <MenuBottom />
      </ImageBackground>
    </View>
  );
};

ProfilMe.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

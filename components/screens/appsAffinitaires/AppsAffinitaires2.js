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

export const AppsAffinitaires2 = ({route, navigation}) => {
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
  const activeTab = route.params?.activeTab ?? '';
  const imagePath = route.params?.imagePath ?? '';


  const [radioValue, setRadioValue] = useState(false);

  const handleRadioChange = value => {
    setRadioValue(value);
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg-winegap.png')}
      style={{
        width: '100%',
        height: '100%',
        resizeMode:'contain',
      }}>
      <MenuSlide imagePath={imagePath} backgroundColor={'white'} backButton={'Back'} />
      <Image source={require('../../../assets/images/winegap-card.png')} style={{position:'absolute', top: 150, width: 215, height: 95, alignSelf: 'center', resizeMode: 'cover',zIndex:1  }} />
      <View
        source={require('../../../assets/images/bg-winegap.png')}
        style={{
          width: '100%',
          height: '95%',
          backgroundColor: 'rgba(132, 36, 22, 0.3)',
          position: 'relative',
          zIndex:1,
        }}>
            <Text style={{ top: 220, left:30, color: '#fff', fontFamily: 'Gilory-Bold', textAlign: 'left', fontSize: 48, fontStyle: 'normal', fontWeight:700, }}>WineGap</Text>
          <Text style={[{top: 240, width:'80%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 18,fontStyle: 'normal', }]}>
            À la recherche de rencontres et de liens intemporels : unissons nos cœurs sages !
          </Text>
          <Text style={[{top: 250, width:'80%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 18,fontStyle: 'normal', }]}>
            Que vous cherchiez une amitié complice, une romance vibrante ou simplement un compagnon de vie, notre plateforme facilite les rencontres entre personnes partageant les mêmes valeurs et aspirations.
          </Text>
          <TouchableOpacity onPress={() => handleRadioChange(!radioValue)}>
            <View style={[{top: 120, flexDirection: 'row', width: '80%', alignItems: 'center', marginVertical: 5, alignSelf: 'center',}]}>
              <Image
                source={
                  radioValue
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
                style={{width: 20, height: 20}}
              />
              <Text style={[{color: '#FFF', fontSize: 14, padding: 15,}]}>
                J’accepte le multi-profil GRATUIT.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

AppsAffinitaires2.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

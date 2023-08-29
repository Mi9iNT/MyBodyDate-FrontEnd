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
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import MenuSlide from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';
import {MyComponentTer} from '../../composants/MyComponentTer';

export const PrendPass = ({route, navigation}) => {
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
  // const prendPass = route.params?.prendPass ?? '';

  const [boxPressed, setBoxPressed] = useState();

  return (
    <ImageBackground
      source={require('../../../assets/images/bg-parametres.png')}
      style={{flex: 1}}>
      <MenuSlide imagePath={imagePath} prendPass={true} />
      <View style={{height: 654}}>
        <ScrollView
          style={{
            width: '100%',
          }}
          contentContainerStyle={{paddingBottom: 20}}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
              margin: 30,
            }}>
            Je prends mon pass
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
              marginBottom: 30,
            }}>
            Sélectionnez les critères essentiels{'\n'}pour vous
          </Text>
          <View style={{top: 20}}>
            <TouchableOpacity
              onPress={() => {
                setBoxPressed('1');
                navigation.navigate('Pulse spotlight');
              }}
              accessibilityLabel="Propulsez vos échanges"
              style={{
                flexDirection: 'column',
                alignSelf: 'center',
                justifyContent: 'space-between',
                width: 358,
                height: 151,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0019A7',
                padding: 30,
                marginBottom: 20,
                backgroundColor: boxPressed === '1' ? '#0019A7' : 'transparent',
              }}>
              <Text
                style={{
                  color: '#FF84D7',
                  textAlign: 'center',
                  fontFamily: 'Gilroy',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Propulsez vos échanges
              </Text>
              <Text
                style={{
                  color: boxPressed === '1' ? '#fff' : '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Propulsez votre profil en le mettant en avant grâce au Pulse
                Spolight
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBoxPressed('2');
                navigation.navigate('Pulse profil');
              }}
              accessibilityLabel="Faites-vous remarquer"
              style={{
                flexDirection: 'column',
                alignSelf: 'center',
                justifyContent: 'space-between',
                width: 358,
                height: 151,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0019A7',
                padding: 30,
                marginBottom: 20,
                backgroundColor: boxPressed === '2' ? '#0019A7' : 'transparent',
              }}>
              <Text
                style={{
                  color: '#FF84D7',
                  textAlign: 'center',
                  fontFamily: 'Gilroy',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Faites-vous remarquer
              </Text>
              <Text
                style={{
                  color: boxPressed === '2' ? '#fff' : '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Multipliez vos contacts en un clin d'oeil avec le Pulse Profil
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBoxPressed('3');
                navigation.navigate('Pulse recherche');
              }}
              accessibilityLabel="Éclipsez-vous des regards"
              style={{
                flexDirection: 'column',
                alignSelf: 'center',
                justifyContent: 'space-between',
                width: 358,
                height: 151,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0019A7',
                padding: 30,
                marginBottom: 20,
                backgroundColor: boxPressed === '3' ? '#0019A7' : 'transparent',
              }}>
              <Text
                style={{
                  color: '#FF84D7',
                  textAlign: 'center',
                  fontFamily: 'Gilroy',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Éclipsez-vous des regards
              </Text>
              <Text
                style={{
                  color: boxPressed === '3' ? '#fff' : '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Éclipsez-vous des regards sur commande.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <MenuBottom navigation={navigation} activeTab={activeTab} />
    </ImageBackground>
  );
};

PrendPass.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

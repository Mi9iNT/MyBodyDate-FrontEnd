/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
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

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [boxPressed, setBoxPressed] = useState();

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/Background-22.png')}
        style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => { navigation.goBack(); }}
          style={{ left: 350, width: 20, marginTop: 30 }}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              top: 4,
              width: 20,
              height: 18,
            }}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginTop: 50,}}>
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
            height: 400,
            justifyContent: 'space-around',
            flexDirection: 'column',
          }}>
          <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width:'100%',
          }}>
          <TouchableOpacity
            onPress={() => setBoxPressed('boxSpolight')}
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding: 5,
              alignItems: 'center',
              width: 154,
              height: 88,
              backgroundColor: 'rgba(255, 255, 255, 0.29)',
              borderRadius: 20,
              borderColor: '#fff',
              borderWidth: boxPressed === 'boxSpolight' ? 3 : 0,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Gilory',
                textAlign: 'center',
                fontWeight: '700',
                color: '#FFF',
              }}>
              Spotlight
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Gilory',
                textAlign: 'center',
                fontWeight: '700',
                color: '#FFF',
              }}>
              1,00 € min.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setBoxPressed('boxSuper')}
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: 5,
              width: 154,
              height: 88,
              backgroundColor: 'rgba(255, 255, 255, 0.29)',
              borderRadius: 20,
              borderColor: '#fff',
              borderWidth: boxPressed === 'boxSuper' ? 3 : 0,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Gilory',
                textAlign: 'center',
                fontWeight: '700',
                color: '#FFF',
              }}>
              Super spotlight
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Gilory',
                textAlign: 'center',
                fontWeight: '700',
                color: '#FFF',
              }}>
              4,29 € min.
            </Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => { setBoxPressed('boxAutre');  navigation.navigate('Search pulse')}}
            style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignSelf: 'center',
            alignItems: 'center',
            padding: 20,
            width: 337,
            height: 200,
            backgroundColor: 'rgba(255, 255, 255, 0.29)',
            borderRadius: 48,
            borderColor: '#fff',
            borderWidth: boxPressed === 'boxAutre' ? 3 : 0,
            }}>
            <Text
                style={{
                  fontSize: 32,
                  fontFamily: 'Gilory',
                  textAlign: 'center',
                  fontWeight: '700',
                  color: '#FFF',
                }}>
                Autre Pulse
            </Text>
            <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Gilory',
                  textAlign: 'center',
                  fontWeight: '700',
                  color: '#FFF',
                }}>
                Des options supplémentaires pour propulser votre profil
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

PulseSpotlight.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

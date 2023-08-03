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

export const Avis = ({route, navigation}) => {
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
        source={require('../../../assets/images/Avis.png')}
        style={{
          top: 20,
          left: 20,
          width: 355,
          height: 449,
        }}>
        <View style={{Flex: 1}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              width: 20,
              height: 18,
              left: 310,
              top: 30,
            }}
          />
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 60,
                top: 240,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                1
              </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 90,
                top: 230,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                4
              </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 60,
                top: 220,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                7
              </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 115,
                top: 66,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                2
              </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 115,
                top: 105,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                8
              </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 145,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                5
              </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 170,
                bottom: 109,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                3
              </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 200,
                bottom: 115,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                6
              </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 170,
                bottom: 129,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                9
              </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 225,
                bottom: 282,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                4
              </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../../../assets/images/Ellipse-90.png')}
              style={{
                width: 39,
                height: 38,
                left: 225,
                bottom: 245,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FFF',
                  alignSelf: 'center',
                  textAlign: 'center',
                  top:5,
                }}>
                10
              </Text>
            </ImageBackground>
          </View>
        </View>
        <View>
          <MenuBottom />
        </View>
      </ImageBackground>
    </View>
  );
};

Avis.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

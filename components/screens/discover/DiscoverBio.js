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
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {MyComponent} from '../../composants/MyComponent';
import {MenuBottom} from '../../composants/MenuBottom';
import {More} from '../../composants/More';
import Styles from '../../../assets/style/Styles';
import LinearGradient from 'react-native-linear-gradient';

export const DiscoverBio = ({route, navigation}) => {
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
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <MenuSlide />
      <ImageBackground
        source={require('../../../assets/images/Rectangle-44.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        {/* <View style={{backgroundColor: '#ffffff', height: 30}}>
          <View
            style={{
              width: 320,
              height: 20,
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                width: 160,
                height: 120,
                marginHorizontal: 130,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#0019A7',
                  letterSpacing: 1,
                }}>
                Spotlight
              </Text>
              <Image
                source={require('../../../assets/images/fleche-bas-p.png')}
                style={{
                  width: 25,
                  height: 23,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </View> */}
        {/* <ImageBackground
          source={require('../../../assets/images/Rectangle-89.png')}
          style={{width: 400, height: 127}}>
          <View
            style={{
              width: 320,
              height: 20,
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                width: 160,
                height: 120,
                marginHorizontal: 130,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#fff',
                  letterSpacing: 1,
                }}>
                Spotlight
              </Text>
              <Image
                source={require('../../../assets/images/fleche-haut-p.png')}
                style={{
                  width: 25,
                  height: 23,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Ellipse-99.png')}
                style={{
                  top: 5,
                  left: 5,
                  width: 85,
                  height: 85,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  top: -7.2,
                  left: 5,
                  fontSize: 13,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#fff',
                  letterSpacing: 1,
                }}>
                Evenements
              </Text>
            </View>
            <View
              style={{
                top: 5,
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Ellipse-96.png')}
                style={{
                  borderRadius: 60,
                  width: 60,
                  height: 60,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#fff',
                  letterSpacing: 1,
                }}>
                Alex
              </Text>
            </View>
            <View
              style={{
                top: 5,
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Ellipse-97.png')}
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#fff',
                  letterSpacing: 1,
                }}>
                Mike
              </Text>
            </View>
            <View
              style={{
                top: 5,
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Ellipse-98.png')}
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#fff',
                  letterSpacing: 1,
                }}>
                Beverly
              </Text>
            </View>
            <Image
              source={require('../../../assets/images/fleche-drot-p.png')}
              style={{
                right: 10,
                width: 25,
                height: 23,
                resizeMode: 'contain',
              }}
            />
          </View>
        </ImageBackground> */}
        <View
          style={{
            top: 50,
          }}>
          <ImageBackground
            source={require('../../../assets/images/Rectangle-40-G.png')}
            style={{
              width: 396,
              height: 416,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                letterSpacing: 1,
                top: 20,
                left: 20,
              }}>
              Bio
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                letterSpacing: 1,
                top: 30,
                left: 20,
              }}>
              Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                letterSpacing: 1,
                top: 40,
                left: 20,
              }}>
              Centre d'intérets
            </Text>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                top: 20,
              }}>
              <Image
                source={require('../../../assets/images/Rencontre-amoureuse-I.png')}
                style={{
                  width: 232,
                  height: 40,
                }}
              />
              <Image
                source={require('../../../assets/images/Sportif-I.png')}
                style={{
                  width: 110,
                  height: 40,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                top: 40,
              }}>
              <Image
                source={require('../../../assets/images/Eternel-amoureux-I.png')}
                style={{
                  width: 205,
                  height: 40,
                }}
              />
              <Image
                source={require('../../../assets/images/Globe-trotter-I.png')}
                style={{
                  width: 153,
                  height: 40,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                top: 60,
              }}>
              <Image
                source={require('../../../assets/images/Cuisine-Gourmet-I.png')}
                style={{
                  width: 205,
                  height: 40,
                }}
              />
              <Image
                source={require('../../../assets/images/Cercle-d-amis-I.png')}
                style={{
                  width: 161,
                  height: 40,
                }}
              />
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            top: 60,
          }}>
          <Image
            source={require('../../../assets/images/bouton-continuer-K.png')}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Image
            source={require('../../../assets/images/bouton-continuer-K-1.png')}
            style={{
              width: 100,
              height: 101,
            }}
          />
          <Image
            source={require('../../../assets/images/bouton-continuer-K-2.png')}
            style={{
              width: 100,
              height: 102,
            }}
          />
        </View>
      </ImageBackground>
      <MenuBottom />
    </View>
  );
};

DiscoverBio.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

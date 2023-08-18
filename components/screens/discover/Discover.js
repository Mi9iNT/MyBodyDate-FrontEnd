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
import Spotlight from '../../composants/Spotlight';

export const Discover = ({route, navigation}) => {
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

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <MenuSlide imagePath={imagePath} />
      <ImageBackground
        source={require('../../../assets/images/Rectangle-43.png')}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        }}>
        <>
          <Spotlight navigation={navigation} />
        </>
        <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
          <View
            style={{
              width: 140,
              height: 4,
              backgroundColor: 'white',
              marginVertical: 20,
              marginHorizontal: 8,
            }}
          />
          <View
            style={{
              width: 140,
              height: 4,
              backgroundColor: '#0019A7',
              marginVertical: 20,
              marginHorizontal: 8,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginRight: 300,
          }}>
          <Image
            source={require('../../../assets/images/Ellipse-V33.png')}
            style={{
              top: 4,
              width: 9,
              height: 8,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              letterSpacing: 1,
            }}>
            En ligne
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginRight: 315,
          }}>
          <Image
            source={require('../../../assets/images/localisateur-1.png')}
            style={{
              top: 2,
              width: 15,
              height: 13,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              letterSpacing: 1,
            }}>
            A 5km
          </Text>
        </View>
        <More />
        <View
          style={{
            top: -30,
            left: 25,
          }}>
          <Image
            source={require('../../../assets/images/Rencontre-amoureuse-3.png')}
            style={{
              width: 346,
              height: 50,
              borderColor: '#0019A7',
              borderRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 480,
          }}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              left: 10,
            }}>
            <Text
              style={{
                fontSize: 48,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: 1,
              }}>
              Kolia{'   '}
            </Text>
            <Image
              source={require('../../../assets/images/quality-2.png')}
              style={{
                top: 24,
                width: 30,
                height: 30,
              }}
            />
          </View>
          <View
            style={{
              top: -10,
              left: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: 1,
              }}>
              45, Paris
            </Text>
          </View>
          <View
            style={{
              top: 5,
              left: 15,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: 1,
              }}>
              Croisé plusieurs fois
            </Text>
            <View
              style={{
                top: 5,
              }}>
              <Image
                source={require('../../../assets/images/Group-6.png')}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 350,
            left: 300,
          }}>
          <View
            style={{
              top: 5,
            }}>
            <Image
              source={require('../../../assets/images/profil_user_community.png')}
              style={{
                width: 78,
                height: 78,
              }}
            />
          </View>
          <View
            style={{
              top: 20,
            }}>
            <Image
              source={require('../../../assets/images/profil_coeur.png')}
              style={{
                width: 77,
                height: 77,
              }}
            />
          </View>
          <View
            style={{
              top: 35,
            }}>
            <Image
              source={require('../../../assets/images/profil_croix.png')}
              style={{
                width: 78,
                height: 78,
              }}
            />
          </View>
        </View>
        <MenuBottom navigation={navigation} activeTab={activeTab} />
      </ImageBackground>
    </View>
  );
};

Discover.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

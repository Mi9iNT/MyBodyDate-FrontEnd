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

export const DiscoverRP = ({route, navigation}) => {
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
        source={require('../../../assets/images/Rectangle-43-L.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
          <MyComponent />
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
            source={require('../../../assets/images/Rencontre-amoureuse-1.png')}
            style={{
              width: 346,
              height: 78,
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
              Lisa{'   '}
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
              28, Lyon
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
              source={require('../../../assets/images/Group-25.png')}
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
              source={require('../../../assets/images/Group-26.png')}
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
      </ImageBackground>
      <MenuBottom />
    </View>
  );
};

DiscoverRP.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};


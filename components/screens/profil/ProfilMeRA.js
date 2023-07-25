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
import {MenuBottom} from '../../composants/MenuBottom';
import Styles from '../../../assets/style/Styles';

export const ProfilMeRA = ({route, navigation}) => {
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

          <View style={{flex: 1, flexDirection: 'column'}}>
            <Image
              source={require('../../../assets/images/ico-certified-rose.png')}
              style={{width: 30, height: 30, marginTop: 20}}
            />
            <Text style={{color: '#0019A7', fontSize: 24, marginTop: 5}}>
              Raluca
            </Text>
            <Text style={{color: '#0019A7', fontSize: 16, marginTop: 5}}>
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
                style={{width: 96, height: 24, marginTop: 20}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/préférence_profil.png')}
              style={{width: 38, height: 30, marginTop: 20}}
            />
            <Image
              source={require('../../../assets/images/heart2.png')}
              style={{width: 38, height: 30, marginTop: 20}}
            />
            <Image
              source={require('../../../assets/images/image116.png')}
              style={{width: 38, height: 30, marginTop: 20}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingHorizontal: 20,
            marginTop: 55,
          }}>
          <Text style={{color: '#0019A7', fontSize: 18}}>Ecouter :</Text>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/voix_ondes_profil.png')}
              style={{width: 100, height: 30}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center', // Align items vertically in the center
              justifyContent: 'flex-start',
              paddingHorizontal: 10,
              marginTop: 10,
            }}>
            <Image
              source={require('../../../assets/images/ticket_profil.png')}
              style={{width: 60, height: 60}}
            />
            <Text
              style={{
                textDecorationLine: 'underline',
                color: '#0019A7',
                marginLeft: 10,
                fontSize: 20,
              }}>
              Je prends mon pass
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingHorizontal: 20,
            marginTop: 40,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/Rectangle-40.png')}
              style={{
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0019A7',
                backgroundColor: '#0019A7',
                width: 280,
                height: 124,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              top: 10,
              left: 40,
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 227,
                height: 30,
                flexShrink: 0,
                textShadowColor: 'rgba(0, 0, 0, 0.25)',
                textShadowOffset: {width: 0, height: 4},
                textShadowRadius: 4,
              }}>
              <Text
                style={{
                  color: '#FF84D7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 30,
                }}>
                My Body Date <Text style={{color: 'white'}}>Preemium</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 45,
              left: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 280,
                height: 54,
                flexShrink: 0,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 30,
                }}>
                Un coup de coeur n'attend pas.
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 60,
              left: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 280,
                height: 54,
                flexShrink: 0,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 30,
                }}>
                Vibrez en illimité !
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingHorizontal: 20,
            marginTop: 15,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/Rectangle-40-B.png')}
              style={{
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0019A7',
                width: 280,
                height: 124,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              top: 10,
              left: 40,
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 227,
                height: 30,
                flexShrink: 0,
                textShadowColor: 'rgba(0, 0, 0, 0.25)',
                textShadowOffset: {width: 0, height: 4},
                textShadowRadius: 4,
              }}>
              <Text
                style={{
                  color: '#FF84D7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 30,
                }}>
                Profil à succés
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 45,
              left: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 280,
                height: 54,
                flexShrink: 0,
              }}>
              <Text
                style={{
                  color: '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 30,
                }}>
                Mettez votre profil en avant.
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 60,
              left: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 280,
                height: 54,
                flexShrink: 0,
              }}>
              <Text
                style={{
                  color: '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 30,
                }}>
                Décrochez plus de visiteurs !
              </Text>
            </View>
          </View>
        </View>
        <MenuBottom />
      </ImageBackground>
    </View>
  );
};

ProfilMeRA.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';

export const ProfilMeRP = ({route, navigation}) => {
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
  const rythmeDeVie2 = route.params?.rythmeDeVie2 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';
  const imagePath = route.params?.imagePath ?? '';

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <MenuSlide imagePath={imagePath} />
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{justifyContent: 'center'}}>
          <ImageBackground
            source={require('../../../assets/images/Capture-d-ecran-Raluca.png')}
            style={{
              width: 346,
              height: 313,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: '#E5E5E5',
              alignSelf: 'center',
              top: 10,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 10,
                right: 40,
              }}>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  left: 10,
                }}>
                <Image
                  source={require('../../../assets/images/image-177.png')}
                  style={{
                    top: 5,
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 240,
                left: 10,
              }}>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  left: 10,
                }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: 'Comfortaa',
                    fontWeight: '700',
                    color: '#fff',
                    letterSpacing: 1,
                  }}>
                  Raluca{'     '}
                </Text>
                <Image
                  source={require('../../../assets/images/quality-2-2.png')}
                  style={{
                    top: 5,
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
              <View
                style={{
                  top: 10,
                  left: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Comfortaa',
                    fontWeight: '700',
                    color: '#fff',
                    letterSpacing: 1,
                  }}>
                  43, Paris
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginTop: 25,
            }}>
            <Text
              style={{
                width: 257,
                height: 35,
                color: 'white',
                fontSize: 15,
                left: 10,
              }}>
              ID.20230510.88
            </Text>
            <Image
              source={require('../../../assets/images/bouton_continuer.png')}
              style={{width: 96, height: 30, borderRadius: 30, right: 10}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'white', fontSize: 18, left: 10}}>
              Ecouter :
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
                source={require('../../../assets/images/voix_ondes_profil.png')}
                style={{width: 100, height: 30, left: 10}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <Text
              style={{width: 336, height: 52, color: 'white', fontSize: 15}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu
              neque, tempus sed interdum ut.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 20,
              marginHorizontal: 20,
            }}>
            <Image
              source={require('../../../assets/images/validation-du-ticket1.png')}
              style={{width: 35, height: 35}}
            />
            <Text
              style={{
                textDecorationLine: 'underline',
                color: 'white',
                marginTop: 7,
                marginLeft: 10,
                fontSize: 15,
              }}>
              Je prends mon pass
            </Text>
            <Image
              source={require('../../../assets/images/Group36.png')}
              style={{width: 40, height: 30, marginLeft: 60}}
            />
            <Image
              source={require('../../../assets/images/heart1.png')}
              style={{width: 30, height: 30, marginLeft: 30}}
            />
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: 'white',
              marginVertical: 20,
              marginHorizontal: 20,
            }}
          />
          <Text style={{color: 'white', fontSize: 20, marginHorizontal: 20}}>
            A propos de moi
          </Text>
          <View style={{marginTop: 5}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Image
                    source={require('../../../assets/images/orientation_noir.png')}
                    style={{
                      width: '40%',
                      aspectRatio: 3,
                      resizeMode: 'contain',
                      marginHorizontal: 10,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/alcool_noir.png')}
                    style={{
                      width: '40%',
                      aspectRatio: 3,
                      resizeMode: 'contain',
                      marginHorizontal: 5,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Image
                    source={require('../../../assets/images/fume_noir.png')}
                    style={{
                      width: '40%',
                      aspectRatio: 3,
                      resizeMode: 'contain',
                      marginHorizontal: 10,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/situation_noir.png')}
                    style={{
                      width: '40%',
                      aspectRatio: 3,
                      resizeMode: 'contain',
                      marginHorizontal: 5,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Image
                    source={require('../../../assets/images/Sportif_noir.png')}
                    style={{
                      width: '40%',
                      aspectRatio: 3,
                      resizeMode: 'contain',
                      marginHorizontal: 10,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/GlobeTrotter_noir.png')}
                    style={{
                      width: '40%',
                      aspectRatio: 3,
                      resizeMode: 'contain',
                      marginHorizontal: 5,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 390,
            height: 690,
            marginTop: 50,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/statut.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'black',
              }}>
              Statut
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'black',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/recherche_emploi.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'black',
              }}>
              Recherche
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'black',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/publier__offre.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'black',
              }}>
              Publier une offre
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'black',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/langue_pro.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'black',
              }}>
              Je parle couramment
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'black',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/distinctions.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'black',
              }}>
              Mes distinctions
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'black',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/distinctions.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'black',
              }}>
              Mes soft skills
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'black',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

ProfilMeRP.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

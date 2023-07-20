/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';

export const ProfilMeCA = ({ route, navigation }) => {
  const currentImage = route.params?.currentImage ?? '';
  console.log('currentImage=',currentImage);

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

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <MenuSlide />
      </View>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{justifyContent: 'center'}}>
          <Image
            source={require('../../../assets/images/CaptureDecran2023-03-21.png')}
            style={{
              width: 346,
              height: 313,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: '#0019A7',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginTop: 25,
            }}>
            <Text
              style={{width: 257, height: 35, color: '#0019A7', fontSize: 15}}>
              ID.20230510.88
            </Text>
            <Image
              source={require('../../../assets/images/Rectangle-40-P.png')}
              style={{width: 96, height: 30, borderRadius: 30}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingHorizontal: 20,
            }}>
            <Text style={{color: '#0019A7', fontSize: 18}}>Ecouter :</Text>
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
                style={{width: 100, height: 30}}
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
              style={{width: 336, height: 52, color: '#0019A7', fontSize: 15}}>
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
              source={require('../../../assets/images/validation-du-ticket-1.png')}
              style={{width: 35, height: 35}}
            />
            <Text
              style={{
                textDecorationLine: 'underline',
                color: '#0019A7',
                marginTop: 7,
                marginLeft: 10,
                fontSize: 15,
              }}>
              Je prends mon pass
            </Text>
            <Image
              source={require('../../../assets/images/image-16.png')}
              style={{width: 40, height: 30, marginLeft: 60}}
            />
            <Image
              source={require('../../../assets/images/heart-1.png')}
              style={{width: 30, height: 30, marginLeft: 30}}
            />
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#0019A7',
              marginVertical: 20,
              marginHorizontal: 20,
            }}
          />
          <Text style={{color: '#0019A7', fontSize: 20, marginHorizontal: 20}}>
            A propos de moi
          </Text>
          <View style={{marginTop: 5}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Image
                    source={require('../../../assets/images/genre.png')}
                    style={{
                      width: '40%',
                      aspectRatio: 3,
                      resizeMode: 'contain',
                      marginHorizontal: 10,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/alcool.png')}
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
                    source={require('../../../assets/images/fume.png')}
                    style={{
                      width: '40%',
                      aspectRatio: 3,
                      resizeMode: 'contain',
                      marginHorizontal: 10,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/situation.png')}
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
                    source={require('../../../assets/images/CercleDamis.png')}
                    style={{
                      width: '40%',
                      aspectRatio: 3,
                      resizeMode: 'contain',
                      marginHorizontal: 10,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/Sportif.png')}
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
            height: 720,
            marginTop: 50,
            backgroundColor: 'rgba(138, 16, 250, 0.79)',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/etude.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Niveau d'études...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/sucette1.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Je parle couramment...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/sucette2.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Mon activité favorite...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/sucette3.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Ma cuisine favorite...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/masque1.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Pour moi, le plus important en{'\n'}amitié...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/masque2.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Les films que je ne me lasse{'\n'}pas de revoir...
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/bouche-a-oreille1.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Mes sorties entre ami.es...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

ProfilMeCA.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};



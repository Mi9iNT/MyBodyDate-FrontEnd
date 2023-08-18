/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';

export const ProfilMeCAFirst = ({route, navigation, imagePath}) => {
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

  const [modalVisible, setModalVisible] = useState(false);
  const [addProVisible, setAddProVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleAddProToggle = index => {
    const newArray = [...addProVisible];
    newArray[index] = !newArray[index];
    setAddProVisible(newArray);
  };

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <MenuSlide imagePath={true} />
      <ScrollView>
        <View>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 24,
              color: '#9424FA',
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            Profil édité
          </Text>
        </View>
        <View style={{left: 20, top: 20}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 20,
              color: '#9424FA',
              left: 5,
            }}>
            Photos
          </Text>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 14,
              color: '#9424FA',
              left: 5,
              top: 15,
            }}>
            Ajoutez jusqua 3 photos de vous, pour
          </Text>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              color: '#9424FA',
              top: 15,
            }}>
            agrandir votre cercle social.
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/Raluca-Edit.png')}
            style={{
              width: 129,
              height: 129,
              top: 60,
            }}
          />
          <Image
            source={require('../../../assets/images/Sup.png')}
            style={{
              width: 82,
              height: 82,
              top: 60,
            }}
          />
          <Image
            source={require('../../../assets/images/Plus-Edit.png')}
            style={{
              width: 82,
              height: 82,
              top: 60,
            }}
          />
        </View>
        <Image
          source={require('../../../assets/images/Line133.png')}
          style={{
            width: 310,
            height: 1,
            top: 80,
            alignItems: 'center',
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 14,
            color: '#9424FA',
            top: 85,
            left: 45,
          }}>
          Pour plus de photos sur votre profil,{'\n'}ajoutez votre flux
          Instagram ou Facebook.
        </Text>
        <Image
          source={require('../../../assets/images/Instagrame.png')}
          style={{
            width: 331,
            height: 56,
            top: 110,
            alignItems: 'center',
            alignSelf: 'center',
          }}
        />
        <Image
          source={require('../../../assets/images/Facebook.png')}
          style={{
            width: 331,
            height: 56,
            top: 130,
            alignItems: 'center',
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            top: 160,
            left: 20,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Gilroy',
                fontWeight: '700',
                fontSize: 20,
                color: '#9424FA',
                left: 20,
              }}>
              Quelques mots sur moi
            </Text>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 14,
                color: '#9424FA',
                top: 10,
                left: 20,
              }}>
              Lorem ipsum
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E0BDFF',
                borderRadius: 30,
                alignSelf: 'center',
                top: 30,
                width: 333,
                height: 111,
                right: 20,
              }}>
              <TextInput
                placeholder="Lorem Ipsum"
                style={{
                  left: 20,
                  color: '#9424FA',
                }}
              />
            </View>
          </View>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 20,
              color: '#9424FA',
              top: 50,
              left: 20,
            }}>
            Mes infos de base
          </Text>
          <View
            style={{
              marginTop: 450,
              left: 10,
            }}>
            <View
              style={{
                bottom: 380,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/btn_diplome.png')}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#9424FA',
                  left: 20,
                }}>
                Niveau d'étude
              </Text>
              <TouchableOpacity
                onPress={() => handleAddProToggle(0)}
                style={{width: 35, height: 35, left: 169}}>
                <Image
                  source={
                    addProVisible[0]
                      ? require('../../../assets/images/add_plein.png')
                      : require('../../../assets/images/add_vide.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                bottom: 360,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/images/language.png')} />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#9424FA',
                  left: 20,
                }}>
                Je parle couramment...
              </Text>
              <TouchableOpacity
                onPress={() => handleAddProToggle(1)}
                style={{width: 35, height: 35, left: 112}}>
                <Image
                  source={
                    addProVisible[1]
                      ? require('../../../assets/images/add_plein.png')
                      : require('../../../assets/images/add_vide.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                bottom: 340,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/images/activité.png')} />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#9424FA',
                  left: 25,
                }}>
                Mon activité favorite...
              </Text>
              <TouchableOpacity
                onPress={() => handleAddProToggle(2)}
                style={{width: 35, height: 35, left: 121}}>
                <Image
                  source={
                    addProVisible[2]
                      ? require('../../../assets/images/add_plein.png')
                      : require('../../../assets/images/add_vide.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                bottom: 320,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/images/cuisine.png')} />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#9424FA',
                  left: 25,
                }}>
                Ma cuisine favorite...
              </Text>
              <TouchableOpacity
                onPress={() => handleAddProToggle(3)}
                style={{width: 35, height: 35, left: 131}}>
                <Image
                  source={
                    addProVisible[3]
                      ? require('../../../assets/images/add_plein.png')
                      : require('../../../assets/images/add_vide.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                bottom: 300,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/images/amitié.png')} />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#9424FA',
                  left: 20,
                }}>
                Pour moi le plus important en {'\n'}amitié...
              </Text>
              <TouchableOpacity
                onPress={() => handleAddProToggle(4)}
                style={{width: 35, height: 35, left: 63}}>
                <Image
                  source={
                    addProVisible[4]
                      ? require('../../../assets/images/add_plein.png')
                      : require('../../../assets/images/add_vide.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                bottom: 280,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/images/popcorn.png')} />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#9424FA',
                  left: 20,
                }}>
                Les films que je ne me lasse {'\n'}pas de revoir...
              </Text>
              <TouchableOpacity
                onPress={() => handleAddProToggle(5)}
                style={{width: 35, height: 35, left: 72}}>
                <Image
                  source={
                    addProVisible[5]
                      ? require('../../../assets/images/add_plein.png')
                      : require('../../../assets/images/add_vide.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                bottom: 260,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/images/Spotify.png')} />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#9424FA',
                  left: 20,
                }}>
                Ma playlist Spotify
              </Text>
              <TouchableOpacity
                onPress={() => handleAddProToggle(5)}
                style={{width: 35, height: 35, left: 142}}>
                <Image
                  source={
                    addProVisible[5]
                      ? require('../../../assets/images/add_plein.png')
                      : require('../../../assets/images/add_vide.png')
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

ProfilMeCAFirst.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {ImageBackground, StatusBar, TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';

export const ProfilMeRPfirst = ({route, navigation}) => {
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
    <View style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <MenuSlide />
      </View>
      <ScrollView>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 22,
            lineHeight: 26,
            color: 'black',
            textAlign: 'center',
          }}>
          Progil éditer
        </Text>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 22,
              lineHeight: 26,
              color: 'black',
            }}>
            Photos
          </Text>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 16,
              lineHeight: 18,
              color: 'black',
              marginTop: 10,
            }}>
            Ajoutez jusqu'a 3 photos professionnels de vous pour gagner en
            crédibilité.
          </Text>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              top: 20,
            }}>
            <Image
              source={require('../../../assets/images/Rectangle-69.png')}
              style={{
                width: 129,
                height: 129,
              }}
            />
            <ImageBackground
              source={require('../../../assets/images/Rectangle-71.png')}
              style={{
                width: 82,
                height: 82,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '500',
                  fontSize: 36,
                  color: 'black',
                }}>
                +
              </Text>
            </ImageBackground>
            <ImageBackground
              source={require('../../../assets/images/Rectangle-71.png')}
              style={{
                width: 82,
                height: 82,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '500',
                  fontSize: 36,
                  color: 'black',
                }}>
                +
              </Text>
            </ImageBackground>
          </View>
        </View>
        <View style={{marginTop: 50, marginLeft: 20}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 22,
              lineHeight: 26,
              color: 'black',
            }}>
            A propos de moi
          </Text>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 16,
              lineHeight: 18,
              color: 'black',
              marginTop: 10,
            }}>
            Ecrivez votre intitulé impactant.
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E0BDFF',
              borderRadius: 30,
              marginTop: 10,
              padding: 10,
            }}>
            <TextInput
              placeholder="Partagez le meilleur votre expérience, en résumé..."
              style={{color: 'black', textAlign: 'left'}}
            />
          </View>
        </View>
        <View style={{marginTop: 35, marginLeft: 20}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 22,
              lineHeight: 26,
              color: 'black',
            }}>
            Mes infos de base
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/statut.png')}
              style={{marginRight: 10}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18,
                color: 'black',
              }}>
              Statut
            </Text>
            <TouchableOpacity
              onPress={() => handleAddProToggle(0)}
              style={{marginLeft: 'auto', marginRight: 10}}>
              <Image
                source={
                  addProVisible[0]
                    ? require('../../../assets/images/add_pro_plein.png')
                    : require('../../../assets/images/add_pro_vide.png')
                }
              />
            </TouchableOpacity>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/recherche_emploi.png')}
              style={{marginRight: 10}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18,
                color: 'black',
              }}>
              Recherche
            </Text>
            <TouchableOpacity
              onPress={() => handleAddProToggle(1)}
              style={{marginLeft: 'auto', marginRight: 10}}>
              <Image
                source={
                  addProVisible[1]
                    ? require('../../../assets/images/add_pro_plein.png')
                    : require('../../../assets/images/add_pro_vide.png')
                }
              />
            </TouchableOpacity>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/publier__offre.png')}
              style={{marginRight: 10}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18,
                color: 'black',
              }}>
              Publier une offre
            </Text>
            <TouchableOpacity
              onPress={() => handleAddProToggle(2)}
              style={{marginLeft: 'auto', marginRight: 10}}>
              <Image
                source={
                  addProVisible[2]
                    ? require('../../../assets/images/add_pro_plein.png')
                    : require('../../../assets/images/add_pro_vide.png')
                }
              />
            </TouchableOpacity>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/langue_pro.png')}
              style={{marginRight: 10}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18,
                color: 'black',
              }}>
              Je parle courament
            </Text>
            <TouchableOpacity
              onPress={() => handleAddProToggle(3)}
              style={{marginLeft: 'auto', marginRight: 10}}>
              <Image
                source={
                  addProVisible[3]
                    ? require('../../../assets/images/add_pro_plein.png')
                    : require('../../../assets/images/add_pro_vide.png')
                }
              />
            </TouchableOpacity>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/distinctions.png')}
              style={{marginRight: 10}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18,
                color: 'black',
              }}>
              Mes distinctions
            </Text>
            <TouchableOpacity
              onPress={() => handleAddProToggle(4)}
              style={{marginLeft: 'auto', marginRight: 10}}>
              <Image
                source={
                  addProVisible[4]
                    ? require('../../../assets/images/add_pro_plein.png')
                    : require('../../../assets/images/add_pro_vide.png')
                }
              />
            </TouchableOpacity>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/distinctions.png')}
              style={{marginRight: 10}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 18,
                color: 'black',
              }}>
              Mes softs skils
            </Text>
            <TouchableOpacity
              onPress={() => handleAddProToggle(5)}
              style={{marginLeft: 'auto', marginRight: 10}}>
              <Image
                source={
                  addProVisible[5]
                    ? require('../../../assets/images/add_pro_plein.png')
                    : require('../../../assets/images/add_pro_vide.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

ProfilMeRPfirst.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

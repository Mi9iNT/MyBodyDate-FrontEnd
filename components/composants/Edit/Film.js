/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

export const Film = ({route, navigation}) => {
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

  const [isTransImagePlus, setIsTransImagePlus] = useState(true);
  const [isShiroImagePlus, setIsShiroImagePlus] = useState(true);
  const [isBadBoyImagePlus, setIsBadBoyImagePlus] = useState(true);
  const [isAvengImagePlus, setIsAvengImagePlus] = useState(true);

  /////////////////
  const [isBorderTransVisible, setIsBorderTransVisible] = useState(false);
  const [isBorderShiroVisible, setIsBorderShiroVisible] = useState(false);
  const [isBorderBadBoyVisible, setIsBorderBadBoyVisible] = useState(false);
  const [isBorderAvengVisible, setIsBorderAvengVisible] = useState(false);

  /////////////////

  const toggleTransImage = () => {
    setIsTransImagePlus(!isTransImagePlus);
    setIsBorderTransVisible(!isBorderTransVisible);
  };

  const toggleShiroImage = () => {
    setIsShiroImagePlus(!isShiroImagePlus);
    setIsBorderShiroVisible(!isBorderShiroVisible);
  };

  const toggleBadBoyImage = () => {
    setIsBadBoyImagePlus(!isBadBoyImagePlus);
    setIsBorderBadBoyVisible(!isBorderBadBoyVisible);
  };

  const toggleAvengImage = () => {
    setIsAvengImagePlus(!isAvengImagePlus);
    setIsBorderAvengVisible(!isBorderAvengVisible);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'center',
        height: '100%',
        width: '100%',
      }}>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <Image
          source={require('../../../assets/images/popcorn.png')}
          style={{
            width: 82,
            height: 84,
            top: 30,
            alignItems: 'center',
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 20,
            color: '#9424FA',
            top: 50,
          }}>
          Les films que je ne me lasse{'\n'}pas de revoir...
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 14,
            color: '#9424FA',
            top: 80,
            left: 30,
          }}>
          Sélectionnez vos passe temps favoris.
        </Text>
      </View>
      <ImageBackground
        source={require('../../../assets/images/RectangleActivite.png')}
        style={{
          width: 354,
          height: 40,
          top: 140,
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../../assets/images/Loupe-BB.png')}
            style={{
              width: 30,
              height: 30,
              top: 5,
              left: 10,
            }}
          />
          <TextInput
            style={{
              fontSize: 14,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
              left: 20,
            }}
            defaultValue="Films, genre, ..."
            // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
          />
        </View>
      </ImageBackground>
      <Text
        style={{
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          fontSize: 14,
          color: '#9424FA',
          left: 30,
          top: 170,
        }}>
        Cuisines populaires :
      </Text>
      <View style={{Flex: 1, alignItems: 'center'}}>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            top: 180,
          }}>
          <TouchableOpacity onPress={toggleTransImage}>
            <ImageBackground
              source={require('../../../assets/images/Transform.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: isBorderTransVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderTransVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isTransImagePlus
                    ? require('../../../assets/images/PlusActivite.png')
                    : require('../../../assets/images/MoinActivite.png')
                }
                style={{
                  width: 35,
                  height: 35,
                  left: 135,
                  top: 135,
                }}
              />
            </ImageBackground>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#9424FA',
                top: 10,
                textAlign: 'center',
              }}>
              Transformers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShiroImage}>
            <ImageBackground
              source={require('../../../assets/images/Shiro.png')}
              style={{
                width: 160,
                height: 160,
                Leftt: 10,
                borderWidth: isBorderShiroVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderShiroVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isShiroImagePlus
                    ? require('../../../assets/images/PlusActivite.png')
                    : require('../../../assets/images/MoinActivite.png')
                }
                style={{
                  width: 35,
                  height: 35,
                  left: 135,
                  top: 135,
                }}
              />
            </ImageBackground>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#9424FA',
                top: 10,
                textAlign: 'center',
              }}>
              Le voyage de Shihiro
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            top: 200,
          }}>
          <TouchableOpacity onPress={toggleBadBoyImage}>
            <ImageBackground
              source={require('../../../assets/images/BadBoy.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: isBorderBadBoyVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderBadBoyVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isBadBoyImagePlus
                    ? require('../../../assets/images/PlusActivite.png')
                    : require('../../../assets/images/MoinActivite.png')
                }
                style={{
                  width: 35,
                  height: 35,
                  left: 135,
                  top: 135,
                }}
              />
            </ImageBackground>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#9424FA',
                top: 10,
                textAlign: 'center',
              }}>
              Baby Boy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleAvengImage}>
            <ImageBackground
              source={require('../../../assets/images/Aveng.png')}
              style={{
                width: 160,
                height: 160,
                Left: 10,
                borderWidth: isBorderAvengVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderAvengVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isAvengImagePlus
                    ? require('../../../assets/images/PlusActivite.png')
                    : require('../../../assets/images/MoinActivite.png')
                }
                style={{
                  width: 35,
                  height: 35,
                  left: 135,
                  top: 135,
                }}
              />
            </ImageBackground>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#9424FA',
                top: 10,
                textAlign: 'center',
              }}>
              Avengers
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Film.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

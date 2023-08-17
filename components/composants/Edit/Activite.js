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

export const Activite = ({route, navigation}) => {
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

  const [isMarvelImagePlus, setIsMarvelImagePlus] = useState(true);
  const [isBasketImagePlus, setIsBasketImagePlus] = useState(true);
  const [isHarryPImagePlus, setIsHarryPImagePlus] = useState(true);
  const [isShopImagePlus, setIsShopImagePlus] = useState(true);

  /////////////////
  const [isBorderMarvelVisible, setIsBorderMarvelVisible] = useState(false);
  const [isBorderBasketVisible, setIsBorderBasketVisible] = useState(false);
  const [isBorderHarryPVisible, setIsBorderHarryPVisible] = useState(false);
  const [isBorderShopVisible, setIsBorderShopVisible] = useState(false);

  /////////////////

  const toggleMarvelImage = () => {
    setIsMarvelImagePlus(!isMarvelImagePlus);
    setIsBorderMarvelVisible(!isBorderMarvelVisible);
  };

  const toggleBasketImage = () => {
    setIsBasketImagePlus(!isBasketImagePlus);
    setIsBorderBasketVisible(!isBorderBasketVisible);
  };

  const toggleHarryPImage = () => {
    setIsHarryPImagePlus(!isHarryPImagePlus);
    setIsBorderHarryPVisible(!isBorderHarryPVisible);
  };

  const toggleShopImage = () => {
    setIsShopImagePlus(!isShopImagePlus);
    setIsBorderShopVisible(!isBorderShopVisible);
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
          source={require('../../../assets/images/activité.png')}
          style={{
            width: 78,
            height: 84,
            top: 30,
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
          Mon activité favorite...
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
            defaultValue="Émissions de télé, sports, livres,..."
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
        Intérêts populaires :
      </Text>
      <View style={{Flex: 1, alignItems: 'center'}}>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            top: 180,
          }}>
          <TouchableOpacity onPress={toggleMarvelImage}>
            <ImageBackground
              source={require('../../../assets/images/Marvel.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: isBorderMarvelVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderMarvelVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isMarvelImagePlus
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
              Marvel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleBasketImage}>
            <ImageBackground
              source={require('../../../assets/images/Basket.png')}
              style={{
                width: 160,
                height: 160,
                Leftt: 10,
                borderWidth: isBorderBasketVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderBasketVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isBasketImagePlus
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
              Basket
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
          <TouchableOpacity onPress={toggleHarryPImage}>
            <ImageBackground
              source={require('../../../assets/images/HarryP.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: isBorderHarryPVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderHarryPVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isHarryPImagePlus
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
              Harry Potter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShopImage}>
            <ImageBackground
              source={require('../../../assets/images/Shop.png')}
              style={{
                width: 160,
                height: 160,
                Left: 10,
                borderWidth: isBorderShopVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderShopVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isShopImagePlus
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
              Shopping
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Activite.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

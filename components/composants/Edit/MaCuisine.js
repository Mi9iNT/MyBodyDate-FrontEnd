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

export const MaCuisine = ({route, navigation}) => {
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

  const [isEscargotImagePlus, setIsEscargotImagePlus] = useState(true);
  const [isSuShiImagePlus, setIsSuShiImagePlus] = useState(true);
  const [isSaladeImagePlus, setIsSaladeImagePlus] = useState(true);
  const [isPizzaImagePlus, setIsPizzaImagePlus] = useState(true);

  /////////////////
  const [isBorderEscargotVisible, setIsBorderEscargotVisible] = useState(false);
  const [isBorderSuShiVisible, setIsBorderSuShiVisible] = useState(false);
  const [isBorderSaladeVisible, setIsBorderSaladeVisible] = useState(false);
  const [isBorderPizzaVisible, setIsBorderPizzaVisible] = useState(false);

  /////////////////

  const toggleEscargotImage = () => {
    setIsEscargotImagePlus(!isEscargotImagePlus);
    setIsBorderEscargotVisible(!isBorderEscargotVisible);
  };

  const toggleSuShiImage = () => {
    setIsSuShiImagePlus(!isSuShiImagePlus);
    setIsBorderSuShiVisible(!isBorderSuShiVisible);
  };

  const toggleSaladeImage = () => {
    setIsSaladeImagePlus(!isSaladeImagePlus);
    setIsBorderSaladeVisible(!isBorderSaladeVisible);
  };

  const togglePizzaImage = () => {
    setIsPizzaImagePlus(!isPizzaImagePlus);
    setIsBorderPizzaVisible(!isBorderPizzaVisible);
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
          source={require('../../../assets/images/cuisine.png')}
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
          Ma cuisine favorite...
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
          Sélectionnez vos cuisines favorites.
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
            defaultValue="Cuisine favorite, plats,..."
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
          <TouchableOpacity onPress={toggleEscargotImage}>
            <ImageBackground
              source={require('../../../assets/images/Escargo.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: isBorderEscargotVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderEscargotVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isEscargotImagePlus
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
              Française
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleSuShiImage}>
            <ImageBackground
              source={require('../../../assets/images/Sushi.png')}
              style={{
                width: 160,
                height: 160,
                Leftt: 10,
                borderWidth: isBorderSuShiVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderSuShiVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isSuShiImagePlus
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
              Sushis
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
          <TouchableOpacity onPress={togglePizzaImage}>
            <ImageBackground
              source={require('../../../assets/images/Pizza.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: isBorderPizzaVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderPizzaVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isPizzaImagePlus
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
              Pizza
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleSaladeImage}>
            <ImageBackground
              source={require('../../../assets/images/Salade.png')}
              style={{
                width: 160,
                height: 160,
                left: 10,
                borderWidth: isBorderSaladeVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderSaladeVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isSaladeImagePlus
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
              Végétarien
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

MaCuisine.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

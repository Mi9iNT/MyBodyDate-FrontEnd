/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

export const Competences = ({route, navigation}) => {
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
          source={require('../../../assets/images/Distinct.png')}
          style={{
            width: 70,
            height: 70,
            top: 30,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 20,
            color: '#000',
            top: 50,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          Mes compétences
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 14,
            color: '#000',
            top: 80,
            left: 30,
          }}>
          Entrez vos compétences.
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <ImageBackground
          source={require('../../../assets/images/RectangleRP.png')}
          style={{
            width: 354,
            height: 40,
            top: 150,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              left: 10,
            }}>
            <Image
              source={require('../../../assets/images/Loupe-B-RP.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
            <TextInput
              style={{
                fontSize: 14,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#6D6966',
                padding: 5,
                left: 10,
              }}
              defaultValue="Recherchez une compétences"
              // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
            />
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          top: 190,
        }}>
        <ImageBackground
          source={require('../../../assets/images/LeaderRP.png')}
          style={{
            width: 146,
            height: 42,
          }}>
          <View
            style={{
              flexDirection: 'row',
              left: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#000',
                left: 25,
                top: 10,
              }}>
              Leadership
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/images/EcouteRP.png')}
          style={{
            width: 176,
            height: 42,
            right:20,
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          fontSize: 12,
          color: '#000',
          left: 30,
          top: 450,
        }}>
        Choix multiples.
      </Text>
    </View>
  );
};

Competences.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

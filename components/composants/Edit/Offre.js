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

export const Offre = ({route, navigation}) => {
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
          Publier une offre
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 14,
            color: '#000',
            top: 140,
            left: 30,
          }}>
          Intitulé de l'offre
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <ImageBackground
          source={require('../../../assets/images/RectangleRP.png')}
          style={{
            width: 353,
            height: 40,
            top: 150,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              left: 10,
            }}>
            <TextInput
              style={{
                fontSize: 14,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#6D6966',
                left: 10,
              }}
              defaultValue="Lorem ipsum"
              // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
            />
          </View>
        </ImageBackground>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 14,
            color: '#000',
            top: 190,
            left: 30,
          }}>
          Description de l'offre
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <ImageBackground
          source={require('../../../assets/images/Rectangle-B-RP.png')}
          style={{
            width: 345,
            height: 230,
            top: 200,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              left: 10,
            }}>
            <TextInput
              style={{
                fontSize: 14,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#6D6966',
                left: 20,
                top: 20,
              }}
              defaultValue="Lorem ipsum"
              // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

Offre.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

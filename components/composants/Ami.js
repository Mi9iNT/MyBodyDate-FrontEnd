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
  ScrollView,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';

export const Ami = ({route, navigation}) => {
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/images/amitié.png')}
          style={{
            width: 82,
            height: 84,
            left: 160,
            top: 10,
          }}
        />
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 20,
            color: '#9424FA',
            top: 80,
            textAlign: 'center',
            right: 20,
          }}>
          Pour moi, le plus important en{'\n'}amitié...
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
          Définissez votre définition de l'amitié
        </Text>
      </View>
      <ImageBackground
        source={require('../../../assets/images/RectangleAmi.png')}
        style={{
          width: 354,
          height: 236,
          left: 20,
          top: 140,
        }}>
        <TextInput
          style={{
            fontSize: 14,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#929EDE',
            padding: 5,
            left: 40,
            top: 20,
          }}
          defaultValue="Lorem ipsum"
          // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
        />
      </ImageBackground>
    </View>
  );
};

Ami.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

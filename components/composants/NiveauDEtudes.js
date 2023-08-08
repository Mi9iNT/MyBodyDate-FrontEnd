/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';

export const NiveauDEtudes = ({route, navigation}) => {
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
          left: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            left: 20,
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            top:10,
          }}>
        <Image
          source={require('../../../assets/images/Fleche-G-CA.png')}
          style={{
            width: 10,
            height: 20,
          }}
        />
        <Image
          source={require('../../../assets/images/btn_diplome.png')}
          style={{
            width: 78,
            height: 84,
            left:105,
          }}
        />
        </View>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 20,
            color: '#9424FA',
            top: 80,
          }}>
          Niveau d'études
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
          Votre niveau d'études
        </Text>
      </View>
      <View style={{left: 30}}>
        <View style={{top: 100, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleAddProToggle(0)}>
            <Image
              source={
                addProVisible[0]
                  ? require('../../../assets/images/EllipseVideCA.png')
                  : require('../../../assets/images/EllipsePleineCA.png')
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              left: 20,
            }}>
            CAP, Apprentissage (boulanger,...)
          </Text>
        </View>
        <View style={{top: 120, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleAddProToggle(1)}>
            <Image
              source={
                addProVisible[1]
                  ? require('../../../assets/images/EllipseVideCA.png')
                  : require('../../../assets/images/EllipsePleineCA.png')
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              left: 20,
            }}>
            Lycée
          </Text>
        </View>
        <View style={{top: 140, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleAddProToggle(2)}>
            <Image
              source={
                addProVisible[2]
                  ? require('../../../assets/images/EllipseVideCA.png')
                  : require('../../../assets/images/EllipsePleineCA.png')
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              left: 20,
            }}>
            École commerce/technique
          </Text>
        </View>
        <View style={{top: 160, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleAddProToggle(3)}>
            <Image
              source={
                addProVisible[3]
                  ? require('../../../assets/images/EllipseVideCA.png')
                  : require('../../../assets/images/EllipsePleineCA.png')
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              left: 20,
            }}>
            Étudiant de 1er cycle universitaire
          </Text>
        </View>
        <View style={{top: 180, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleAddProToggle(4)}>
            <Image
              source={
                addProVisible[4]
                  ? require('../../../assets/images/EllipseVideCA.png')
                  : require('../../../assets/images/EllipsePleineCA.png')
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              left: 20,
            }}>
            Licence
          </Text>
        </View>
        <View style={{top: 200, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleAddProToggle(5)}>
            <Image
              source={
                addProVisible[5]
                  ? require('../../../assets/images/EllipseVideCA.png')
                  : require('../../../assets/images/EllipsePleineCA.png')
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              left: 20,
            }}>
            Étudiant de 2e ou 3e cycle{'\n'}universitaire
          </Text>
        </View>
        <View style={{top: 220, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleAddProToggle(6)}>
            <Image
              source={
                addProVisible[6]
                  ? require('../../../assets/images/EllipseVideCA.png')
                  : require('../../../assets/images/EllipsePleineCA.png')
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              left: 20,
            }}>
            Master ou doctorat
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 12,
            color: '#9424FA',
            left: 20,
            top: 250,
          }}>
          Choix unique.
        </Text>
      </View>
    </View>
  );
};

NiveauDEtudes.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

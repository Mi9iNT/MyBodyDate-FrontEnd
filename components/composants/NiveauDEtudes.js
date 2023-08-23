/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

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
    const newArray = addProVisible.map((value, idx) =>
      idx === index ? !value : false,
    );
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            top: 10,
            backgroundColor: 'red',
          }}>
          <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
          <Image
            source={require('../../../assets/images/Fleche-G-CA.png')}
            style={{
              width: 10,
              height: 20,
              right: 150,
            }}
          />
          </TouchableOpacity>
          <View
            style={{
              flex: 1, // Utilisation du flex pour centrer l'image
              alignItems: 'center', // Alignement horizontal au centre
            }}>
            <Image
              source={require('../../../assets/images/btn_diplome.png')}
              style={{
                width: 78,
                height: 84,
                right: 15,
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
        {[
          'CAP, Apprentissage (boulanger,...)',
          'Lycée',
          'École commerce/technique',
          'Étudiant de 1er cycle universitaire',
          'Licence',
          'Étudiant de 2e ou 3e cycle universitaire',
          'Master ou doctorat',
        ].map((label, index) => (
          <View
            key={index}
            style={{
              top: 100 + index * 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => handleAddProToggle(index)}>
              <Image
                source={
                  addProVisible[index]
                    ? require('../../../assets/images/EllipsePleineCA.png')
                    : require('../../../assets/images/EllipseVideCA.png')
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
              {label}
            </Text>
          </View>
        ))}
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

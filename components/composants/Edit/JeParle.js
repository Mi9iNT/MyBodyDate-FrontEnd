/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';

export const JeParle = ({visibleJeParle, closeModalJeParle}) => {
  const [modalJeParlelVisible, setModalJeParlelVisible] = useState(false);
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
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleJeParle}
      onRequestClose={closeModalJeParle}>
      {/* Arrière-plan semi-transparent */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur semi-transparente
          justifyContent: 'center', // Centrer verticalement
          alignItems: 'center', // Centrer horizontalement
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          onPress={() => closeModalJeParle()}
          accessibilityLabel="Ferme la fenêtre"
        />
        {/* Contenu de la modal */}
        <View
          style={{
            top: 40,
            width: 394,
            height: 700,
            backgroundColor: 'white',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <Image
              source={require('../../../assets/images/language.png')}
              style={{
                width: 84,
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
              Je parle couramment...
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
              Sélectionnez vos langues parlées.
            </Text>
          </View>
          <Image
            source={require('../../../assets/images/Francais.png')}
            style={{
              width: 308,
              height: 51,
              left: 50,
              top: 140,
            }}
          />
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 12,
              color: '#9424FA',
              left: 20,
              top: 400,
            }}>
            Choix multiples.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default JeParle;

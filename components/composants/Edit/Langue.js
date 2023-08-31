/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {MyComponentLangue} from './MyComponentLangue';

export const Langue = ({visibleLangue, closeModalLangue}) => {
  const [modalLanguelVisible, setModalLanguelVisible] = useState(false);

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
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleLangue}
      onRequestClose={closeModalLangue}>
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
          onPress={() => closeModalLangue()}
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
              source={require('../../../assets/images/LangueRP.png')}
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
                color: '#000',
                top: 20,
              }}>
              Je parle couramment..
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Gilroy',
                fontWeight: '700',
                fontSize: 14,
                color: '#000',
                top: 25,
                left: 30,
              }}>
              Sélectionnez vos langues parlées.
            </Text>
          </View>
          <MyComponentLangue />
        </View>
      </View>
    </Modal>
  );
};

export default Langue;

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Modal} from 'react-native';
import {MyComponentLinkedIn} from './MyComponentLinkedIn';

export const LinkedIn = ({visibleLinkedIn, closeModalLinkedIn}) => {
  const [modalLinkedInlVisible, setModalLinkedInlVisible] = useState(false);

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
      visible={visibleLinkedIn}
      onRequestClose={closeModalLinkedIn}>
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
          onPress={() => closeModalLinkedIn()}
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
          source={require('../../../assets/images/LinkedIn.png')}
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
          }}>
          Mon compte LinkedIn
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
          Entrez le lien URL de votre compte LinkedIn.
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
            <TextInput
              style={{
                fontSize: 14,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#6D6966',
                padding: 5,
                left: 10,
              }}
              defaultValue="URL"
            />
          </View>
        </ImageBackground>
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
        Choix unique.
      </Text>
    </View>
        </View>
    </Modal>
  );
};

export default LinkedIn;

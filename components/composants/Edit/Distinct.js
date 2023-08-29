/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {MyComponentDistinct} from './MyComponentDistinct';

export const Distinct = ({visibleDistinct, closeModalDistinct}) => {
  const [modalDistinctlVisible, setModalDistinctlVisible] = useState(false);

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
      visible={visibleDistinct}
      onRequestClose={closeModalDistinct}>
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
          onPress={() => closeModalDistinct()}
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
              source={require('../../../assets/images/Distinct.png')}
              style={{
                width: 70,
                height: 70,
                top: 30,
                left: 10,
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
              Mes distinctions
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
              Entrez vos distinctions
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
                  defaultValue="Recherchez une distinction"
                  // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
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
            Choix multiples.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default Distinct;

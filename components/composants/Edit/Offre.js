/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Modal} from 'react-native';
import {MyComponentOffre} from './MyComponentOffre';

export const Offre = ({visibleOffre, closeModalOffre}) => {
  const [modalOffrelVisible, setModalOffrelVisible] = useState(false);

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
      visible={visibleOffre}
      onRequestClose={closeModalOffre}>
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
          onPress={() => closeModalOffre()}
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
                alignSelf: 'center',
                alignItems: 'center',
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
      </View>
    </Modal>
  );
};

export default Offre;

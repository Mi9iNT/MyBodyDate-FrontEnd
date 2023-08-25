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

export const Spotify = ({visibleSpotify, closeModalSpotify}) => {
  const [modalSpotifylVisible, setModalSpotifylVisible] = useState(false);

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
      visible={visibleSpotify}
      onRequestClose={closeModalSpotify}>
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
          onPress={() => closeModalSpotify()}
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
              source={require('../../../assets/images/Spoty.png')}
              style={{
                width: 84,
                height: 84,
                top: 30,
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
              Ma playlist Spotify
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
              Entrez le lien URL de votre playlist.
            </Text>
          </View>
          <ImageBackground
            source={require('../../../assets/images/RectangleActivite.png')}
            style={{
              width: 354,
              height: 40,
              left: 20,
              top: 140,
            }}>
            <View
              style={{
                flexDirection: 'row',
                left: 20,
              }}>
              <TextInput
                style={{
                  fontSize: 14,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#929EDE',
                  padding: 5,
                  left: 20,
                }}
                defaultValue="URL"
                // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
              />
            </View>
          </ImageBackground>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 12,
              color: '#9424FA',
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

export default Spotify;

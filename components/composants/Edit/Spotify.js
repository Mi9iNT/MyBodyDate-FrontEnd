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

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalSpotifylVisible(true);
        }}
        style={{
          bottom: 260,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={require('../../../assets/images/Spotify.png')} />
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 15,
            color: '#9424FA',
            left: 20,
          }}>
          Ma playlist Spotify
        </Text>
        <View style={{width: 35, height: 35, left: 142}}>
          <Image
            source={
              modalSpotifylVisible
                ? require('../../../assets/images/add_plein.png')
                : require('../../../assets/images/add_vide.png')
            }
          />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSpotifylVisible}
        statusBarTranslucent={true}>
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
            onPress={() => {setModalSpotifylVisible(false);}}
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
      </>
  );
};

export default Spotify;

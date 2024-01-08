/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {MyComponentJeParle} from './MyComponentJeParle';

export const JeParle = ({visibleJeParle, closeModalJeParle}) => {
  const [modalJeParlelVisible, setModalJeParlelVisible] = useState(false);

  const [userLanguage, setUserLanguage] = useState(false);


  return (
    <>
      <TouchableOpacity
              onPress={() => {
                setModalJeParlelVisible(true)
              }}
              style={{
                bottom: 360,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/images/language.png')} />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#9424FA',
                  left: 20,
                }}>
                Je parle couramment...
              </Text>
              <View style={{width: 35, height: 35, left: 113}}>
                <Image
                  source={
                    modalJeParlelVisible
                      ? require('../../../assets/images/add_plein.png')
                      : require('../../../assets/images/add_vide.png')
                  }
                />
              </View>
            </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalJeParlelVisible}>
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
            onPress={() => setModalJeParlelVisible(false)}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View
            style={{
              top: 80,
              width: '100%',
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
                  top: 20,
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
                  top: 25,
                  left: 30,
                }}>
                Sélectionnez vos langues parlées.
              </Text>
            </View>
            <MyComponentJeParle />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default JeParle;

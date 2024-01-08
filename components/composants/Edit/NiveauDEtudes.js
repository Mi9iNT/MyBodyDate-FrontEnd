/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';

export const NiveauDEtudes = ({visible, closeModal}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [niveauEtude, setNiveauEtude] = useState(false);

  console.log(niveauEtude);

  const tabEtudes = [
    'CAP, Apprentissage (boulanger,...)',
    'Lycée',
    'École commerce/technique',
    'Étudiant de 1er cycle universitaire',
    'Licence',
    'Étudiant de 2e ou 3e cycle universitaire',
    'Master ou doctorat',
  ];

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
          setModalVisible(true);
        }}
        style={{
          bottom: 380,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/images/btn_diplome.png')}
        />
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 15,
            color: '#9424FA',
            left: 20,
          }}>
          Niveau d'études
        </Text>
        <View style={{width: 35, height: 35, left: 169}}>
          <Image
            source={
              modalVisible
                ? require('../../../assets/images/add_plein.png')
                : require('../../../assets/images/add_vide.png')
            }
          />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
      >
        {/* Arrière-plan semi-transparent */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            onPress={() => setModalVisible(false)}
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  top: 10,
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/images/Fleche-G-CA.png')}
                    style={{
                      width: 10,
                      height: 20,
                      right: 100,
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../../assets/images/btn_diplome.png')}
                    style={{
                      width: 78,
                      height: 84,
                      right: 15,
                      top: 30,
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
              {tabEtudes.map((label, index) => (
                <View
                  key={index}
                  style={{
                    top: 100 + index * 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={() => setNiveauEtude(label)}>
                    <Image
                      source={
                        niveauEtude === label
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
        </View>
      </Modal>
    </>
  );
};

export default NiveauDEtudes;

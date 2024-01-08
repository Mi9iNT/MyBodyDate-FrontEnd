/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image,ImageBackground, TextInput, TouchableOpacity, Modal} from 'react-native';

export const Film = ({visibleFilm, closeModalFilm}) => {
  const [modalFilmlVisible, setModalFilmlVisible] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [isTransImagePlus, setIsTransImagePlus] = useState(true);
  const [isShiroImagePlus, setIsShiroImagePlus] = useState(true);
  const [isBadBoyImagePlus, setIsBadBoyImagePlus] = useState(true);
  const [isAvengImagePlus, setIsAvengImagePlus] = useState(true);

  /////////////////
  const [isBorderTransVisible, setIsBorderTransVisible] = useState(false);
  const [isBorderShiroVisible, setIsBorderShiroVisible] = useState(false);
  const [isBorderBadBoyVisible, setIsBorderBadBoyVisible] = useState(false);
  const [isBorderAvengVisible, setIsBorderAvengVisible] = useState(false);

  /////////////////

  const toggleTransImage = () => {
    setIsTransImagePlus(!isTransImagePlus);
    setIsBorderTransVisible(!isBorderTransVisible);
  };

  const toggleShiroImage = () => {
    setIsShiroImagePlus(!isShiroImagePlus);
    setIsBorderShiroVisible(!isBorderShiroVisible);
  };

  const toggleBadBoyImage = () => {
    setIsBadBoyImagePlus(!isBadBoyImagePlus);
    setIsBorderBadBoyVisible(!isBorderBadBoyVisible);
  };

  const toggleAvengImage = () => {
    setIsAvengImagePlus(!isAvengImagePlus);
    setIsBorderAvengVisible(!isBorderAvengVisible);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalFilmlVisible(true);
        }}
        style={{
          bottom: 280,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
      <Image source={require('../../../assets/images/popcorn.png')} />
      <Text
        style={{
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          fontSize: 15,
          color: '#9424FA',
          left: 20,
        }}>
        Les films que je ne me lasse {'\n'}pas de revoir...
      </Text>
      <View style={{width: 35, height: 35, left: 72}}>
        <Image
          source={
            modalFilmlVisible
              ? require('../../../assets/images/add_plein.png')
              : require('../../../assets/images/add_vide.png')
          }
        />
      </View>
    </TouchableOpacity>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalFilmlVisible}
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
          onPress={() => {setModalFilmlVisible(false);}}
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
          source={require('../../../assets/images/popcorn.png')}
          style={{
            width: 82,
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
            top: 30,
          }}>
          Les films que je ne me lasse{'\n'}pas de revoir...
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 14,
            color: '#9424FA',
            top: 45,
            left: 30,
          }}>
          Sélectionnez vos passe temps favoris.
        </Text>
      </View>
      <ImageBackground
        source={require('../../../assets/images/RectangleActivite.png')}
        style={{
          width: 354,
          height: 40,
          top: 60,
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../../assets/images/Loupe-BB.png')}
            style={{
              width: 30,
              height: 30,
              top: 5,
              left: 10,
            }}
          />
          <TextInput
            style={{
              fontSize: 14,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
              left: 20,
            }}
            defaultValue="Films, genre, ..."
            // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
          />
        </View>
      </ImageBackground>
      <Text
        style={{
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          fontSize: 14,
          color: '#9424FA',
          left: 30,
          top: 80,
        }}>
        Cuisines populaires :
      </Text>
      <View style={{Flex: 1, alignItems: 'center'}}>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            top: 100,
          }}>
          <TouchableOpacity onPress={toggleTransImage}>
            <ImageBackground
              source={require('../../../assets/images/Transform.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: isBorderTransVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderTransVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isTransImagePlus
                    ? require('../../../assets/images/PlusActivite.png')
                    : require('../../../assets/images/MoinActivite.png')
                }
                style={{
                  width: 35,
                  height: 35,
                  left: 135,
                  top: 135,
                }}
              />
            </ImageBackground>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#9424FA',
                top: 10,
                textAlign: 'center',
              }}>
              Transformers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShiroImage}>
            <ImageBackground
              source={require('../../../assets/images/Shiro.png')}
              style={{
                width: 160,
                height: 160,
                Leftt: 10,
                borderWidth: isBorderShiroVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderShiroVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isShiroImagePlus
                    ? require('../../../assets/images/PlusActivite.png')
                    : require('../../../assets/images/MoinActivite.png')
                }
                style={{
                  width: 35,
                  height: 35,
                  left: 135,
                  top: 135,
                }}
              />
            </ImageBackground>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#9424FA',
                top: 10,
                textAlign: 'center',
              }}>
              Le voyage de Shihiro
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            top: 120,
          }}>
          <TouchableOpacity onPress={toggleBadBoyImage}>
            <ImageBackground
              source={require('../../../assets/images/BadBoy.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: isBorderBadBoyVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderBadBoyVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isBadBoyImagePlus
                    ? require('../../../assets/images/PlusActivite.png')
                    : require('../../../assets/images/MoinActivite.png')
                }
                style={{
                  width: 35,
                  height: 35,
                  left: 135,
                  top: 135,
                }}
              />
            </ImageBackground>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#9424FA',
                top: 10,
                textAlign: 'center',
              }}>
              Baby Boy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleAvengImage}>
            <ImageBackground
              source={require('../../../assets/images/Aveng.png')}
              style={{
                width: 160,
                height: 160,
                Left: 10,
                borderWidth: isBorderAvengVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderAvengVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isAvengImagePlus
                    ? require('../../../assets/images/PlusActivite.png')
                    : require('../../../assets/images/MoinActivite.png')
                }
                style={{
                  width: 35,
                  height: 35,
                  left: 135,
                  top: 135,
                }}
              />
            </ImageBackground>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#9424FA',
                top: 10,
                textAlign: 'center',
              }}>
              Avengers
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      </View>
    </Modal>
    </>
    
  );
};

export default Film;

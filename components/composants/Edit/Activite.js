/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image,ImageBackground, TextInput, TouchableOpacity, Modal} from 'react-native';

export const Activite = ({visibleActivite, closeModalActivite}) => {
  const [modalActivitelVisible, setModalActivitelVisible] = useState(false);


  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [isMarvelImagePlus, setIsMarvelImagePlus] = useState(true);
  const [isBasketImagePlus, setIsBasketImagePlus] = useState(true);
  const [isHarryPImagePlus, setIsHarryPImagePlus] = useState(true);
  const [isShopImagePlus, setIsShopImagePlus] = useState(true);

  /////////////////
  const [isBorderMarvelVisible, setIsBorderMarvelVisible] = useState(false);
  const [isBorderBasketVisible, setIsBorderBasketVisible] = useState(false);
  const [isBorderHarryPVisible, setIsBorderHarryPVisible] = useState(false);
  const [isBorderShopVisible, setIsBorderShopVisible] = useState(false);

  /////////////////

  const toggleMarvelImage = () => {
    setIsMarvelImagePlus(!isMarvelImagePlus);
    setIsBorderMarvelVisible(!isBorderMarvelVisible);
  };

  const toggleBasketImage = () => {
    setIsBasketImagePlus(!isBasketImagePlus);
    setIsBorderBasketVisible(!isBorderBasketVisible);
  };

  const toggleHarryPImage = () => {
    setIsHarryPImagePlus(!isHarryPImagePlus);
    setIsBorderHarryPVisible(!isBorderHarryPVisible);
  };

  const toggleShopImage = () => {
    setIsShopImagePlus(!isShopImagePlus);
    setIsBorderShopVisible(!isBorderShopVisible);
  };

  return (
    <>
      
      <TouchableOpacity
        onPress={() => {
          setModalActivitelVisible(true);
        }}
        style={{
          bottom: 340,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={require('../../../assets/images/activité.png')} />
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 15,
            color: '#9424FA',
            left: 25,
          }}>
          Mon activité favorite...
        </Text>
        <View style={{width: 35, height: 35, left: 121}}>
          <Image
            source={
              modalActivitelVisible
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
      visible={modalActivitelVisible}>
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
            onPress={() => { setModalActivitelVisible(false); }}
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
          source={require('../../../assets/images/activité.png')}
          style={{
            width: 78,
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
            top: 30,
          }}>
          Mon activité favorite...
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 14,
            color: '#9424FA',
            top: 45,
            left: 40,
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
            defaultValue="Émissions de télé, sports, livres,..."
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
        Intérêts populaires :
      </Text>
      <View style={{Flex: 1, alignItems: 'center'}}>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            top: 100,
          }}>
          <TouchableOpacity onPress={toggleMarvelImage}>
            <ImageBackground
              source={require('../../../assets/images/Marvel.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: isBorderMarvelVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderMarvelVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isMarvelImagePlus
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
              Marvel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleBasketImage}>
            <ImageBackground
              source={require('../../../assets/images/Basket.png')}
              style={{
                width: 160,
                height: 160,
                Left: 10,
                borderWidth: isBorderBasketVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderBasketVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isBasketImagePlus
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
              Basket
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
          <TouchableOpacity onPress={toggleHarryPImage}>
            <ImageBackground
              source={require('../../../assets/images/HarryP.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: isBorderHarryPVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderHarryPVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isHarryPImagePlus
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
              Harry Potter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShopImage}>
            <ImageBackground
              source={require('../../../assets/images/Shop.png')}
              style={{
                width: 160,
                height: 160,
                Left: 10,
                borderWidth: isBorderShopVisible ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: isBorderShopVisible ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  isShopImagePlus
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
              Shopping
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

export default Activite;

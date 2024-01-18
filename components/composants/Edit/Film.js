/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image,ImageBackground, TextInput, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData, getDatas} from '../../../service/storage';
import StylesFilm from '../../../assets/style/StyleComposants/styleEdit/StyleFilm';

export const Film = ({}) => {

  const [modalFilmlVisible, setModalFilmlVisible] = useState(false);

  const [userFilm, setUserFilm] = useState([]);

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const keysToRetrieve = ['user_film'];

  // Appel de la fonction pour récupérer plusieurs valeurs
  const getMultipleValues = async () => {
  try {
    const retrievedValues = await getDatas(keysToRetrieve);

    if (retrievedValues && Array.isArray(retrievedValues)) {
      const result = {};
      retrievedValues.forEach(item => {
        result[item.key] = item.value;
      });

      setUserFilm(result.user_film || []);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
  };
  
  const handleButtonPress = value => {
    let newUserFilm = [...userFilm];

    if (newUserFilm !== null && newUserFilm.includes(value)) {
      newUserFilm = newUserFilm.filter(item => item !== value);
      handleStoreData('user_film', newUserFilm);
    } else {
      newUserFilm.push(value);
      handleStoreData('user_film', newUserFilm);
    }

    setUserFilm(newUserFilm);
    console.log('user_film : ' + newUserFilm);
  };

  useEffect(() => {
    getMultipleValues();
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalFilmlVisible(true);
        }}
        style={[StylesFilm.btnModal]}
      >
      <Image style={[StylesFilm.icoBtnModal]} source={require('../../../assets/images/popcorn.png')} />
      <Text
        style={[StylesFilm.txtBtnModal]}>
        Les films que je ne me lasse {'\n'}pas de revoir...
      </Text>
        <Image
          style={[StylesFilm.plusBtnModal]}
          source={
            userFilm
              ? require('../../../assets/images/add_plein.png')
              : require('../../../assets/images/add_vide.png')
          }
        />
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
            top: 80,
            width: '100%',
            height: 750,
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
              width: 20,
              height: 20,
              top: 10,
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
          <TouchableOpacity onPress={() => {handleButtonPress('Transformers');}}>
            <ImageBackground
              source={require('../../../assets/images/Transform.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: userFilm.includes('Transformers') ? 2 : 0,
                borderColor: '#9424FA',
                borderRadius: userFilm.includes('Transformers') ? 33 : 0,
              }}>
              <Image
                source={
                  userFilm.includes('Transformers')
                    ? require('../../../assets/images/MoinActivite.png')
                    : require('../../../assets/images/PlusActiviteCA.png')
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
          <TouchableOpacity onPress={() => {handleButtonPress('Le voyage de Shihiro');}}>
            <ImageBackground
              source={require('../../../assets/images/Shiro.png')}
              style={{
                width: 160,
                height: 160,
                Leftt: 10,
                borderWidth: userFilm.includes('Le voyage de Shihiro') ? 2 : 0,
                borderColor: '#9424FA',
                borderRadius: userFilm.includes('Le voyage de Shihiro') ? 33 : 0, 
              }}>
              <Image
                source={
                  userFilm.includes('Le voyage de Shihiro')
                    ? require('../../../assets/images/MoinActivite.png')
                    : require('../../../assets/images/PlusActiviteCA.png')
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
          <TouchableOpacity onPress={() => {handleButtonPress('Baby Boy');}}>
            <ImageBackground
              source={require('../../../assets/images/BadBoy.png')}
              style={{
                width: 160,
                height: 160,
                right: 10,
                borderWidth: userFilm.includes('Baby Boy') ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: userFilm.includes('Baby Boy') ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  userFilm.includes('Baby Boy')
                    ? require('../../../assets/images/MoinActivite.png')
                    : require('../../../assets/images/PlusActiviteCA.png')
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
          <TouchableOpacity onPress={() => {handleButtonPress('Avengers');}}>
            <ImageBackground
              source={require('../../../assets/images/Aveng.png')}
              style={{
                width: 160,
                height: 160,
                Left: 10,
                borderWidth: userFilm.includes('Avengers') ? 2 : 0, // Ajout du border conditionnel
                borderColor: '#9424FA', // Couleur du border (modifiable)
                borderRadius: userFilm.includes('Avengers') ? 33 : 0, // Ajout du border radius conditionnel
              }}>
              <Image
                source={
                  userFilm.includes('Avengers')
                    ? require('../../../assets/images/MoinActivite.png')
                    : require('../../../assets/images/PlusActiviteCA.png')
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

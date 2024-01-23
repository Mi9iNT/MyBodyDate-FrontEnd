/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { MenuSlide } from '../../composants/MenuSlide';
import {launchImageLibrary} from 'react-native-image-picker';
import {Religion} from '../../composants/edit/Religion';
import {Enfant} from '../../composants/edit/Enfant';
import {Morphologie} from '../../composants/edit/Morphologie';
import {Origine} from '../../composants/edit/Origine';
import {Astrologie} from '../../composants/edit/Astrologie';
import {Politique} from '../../composants/edit/Politique';
import {Fumer} from '../../composants/edit/Fumer';
import {Alcool} from '../../composants/edit/Alcool';
import {Sport} from '../../composants/edit/Sport';
import StylesProfileMeRa from '../../../assets/style/styleScreens/styleProfil/StyleProfileMeRa';
import { SafeAreaView } from 'react-native-safe-area-context';
import {storeData, getData, getDatas} from '../../../service/storage';

export const ProfilMeRAfirst = ({ navigation, imagePath }) => {

  const contentDeleteImage = (index, info) => {
    if (info === 'img') {
      setImgPath(prevImg => {
        let newImgPath = [...prevImg];
        newImgPath[index] = null;
        return newImgPath;
      });
    } else {
      setExplicitPath(prevImg => {
        let newImgPath = [...prevImg];
        newImgPath[index] = null;
        return newImgPath;
      });
    };
  };

  let img = 'img';
  let explicit = 'explicit';
  const [imgPath, setImgPath] = useState([null, null, null, null, null, null]);

  const [explicitPath, setExplicitPath] = useState([null, null, null]);

  const [userDescription, setUserDescrition] = useState('');

  console.log(imgPath);

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const keysToRetrieve = ['user_description', 'image_amour', 'image_explicit'];

  // Appel de la fonction pour récupérer plusieurs valeurs
  const getMultipleValues = async () => {
    try {
      const retrievedValues = await getDatas(keysToRetrieve);

      if (retrievedValues) {
        const updatedValues = {};
        retrievedValues.forEach(item => {
          updatedValues[item.key] = item.value;
        });

        // Utilisez les valeurs mises à jour
        // setUserDescrition(updatedValues.user_description ?? 'Description');
        // setImgPath(updatedValues.image_amour ?? imgPath);
        // setExplicitPath(updatedValues.image_explicit ?? explicitPath);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  getMultipleValues();



    const ImagePicker = (index, info) => {
      let options = {
        storageOptions: {
          path: 'image',
        },
      };
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log("L'utilisateur a annulé la sélection de l'image.");
        } else if (response.errorCode) {
          console.log('Erreur : ', response.errorMessage);
        } else {
          let newImg = response.assets[0].uri;
          if (info === 'explicit') {
            let newImgPath = [...explicitPath];
            newImgPath[index] = newImg;
            setExplicitPath(newImgPath);
            // handleStoreData('image_explicit', explicitPath);
            return newImgPath;
          } else {
            let newImgPath = [...imgPath];
            newImgPath[index] = newImg;
            setImgPath(newImgPath);
            // handleStoreData('image_amour', imagePath);
            return newImgPath;
          }
        }
      });
    };

  useEffect(() => {
    getMultipleValues();
    StatusBar.setHidden(true);
    return () => {
        StatusBar.setHidden(false);
      };
    }, []);

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <MenuSlide imagePath={'Amour'} tabPath={'Amour'} />
        <ScrollView style={{height: 1200,}}>
          <View>
            <Text
              style={{
                fontFamily: 'Gilroy',
                fontWeight: '700',
                fontSize: 24,
                color: '#0019A7',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              Profil éditer
            </Text>
          </View>
          <View style={{ left: 20, top: 20 }}>
            <Text
              style={{
                fontFamily: 'Gilroy',
                fontWeight: '700',
                fontSize: 20,
                color: '#0019A7',
                left: 5,
              }}>
              Photos
            </Text>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#0019A7',
                top: 15,
              }}>
              Affichez votre lifestyle. Ajoutez jusqu'à 6{'\n'}photos de vous pour
              gagner en visibilité.
            </Text>
          </View>
          <View
            style={[StylesProfileMeRa.viewPhoto]}>
            {imgPath.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => { item === null ? ImagePicker(index, img) : contentDeleteImage(index, img); }}
                style={[StylesProfileMeRa.btnAddPhoto, {
                  width: index === 0 && item !== null ? 129 : 82,
                  height: index === 0 && item !== null ? 129 : 82,
                }]}>
                {item ? (
                  <View style={[StylesProfileMeRa.viewUserPhoto,
                  {
                    width: index === 0 && item !== null ? 129 : 82,
                    height: index === 0 && item !== null ? 129 : 82
                  }]}>
                    <Image source={{ uri: imgPath[index] }}
                      style={[StylesProfileMeRa.userPhoto,
                      {
                        width: index === 0 && item !== null ? 129 : 82,
                        height: index === 0 && item !== null ? 129 : 82,
                      }]} />
                    <View style={[StylesProfileMeRa.contentDeleteImage, { bottom: index === 0 ? 80 : 55 }]}>
                      <Image source={require('../../../assets/boutons/poubelle.png')} style={[StylesProfileMeRa.imageDelete]} />
                    </View>
                  </View>
                ) : (
                  <Text
                    style={[StylesProfileMeRa.txtAddImage]}
                  >
                    +
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ top: 200 }}>
            <View style={{ top: 10, width: '80%', height: 2, backgroundColor: '#0019A7', alignSelf: 'center' }} />

            <Text
              style={{
                fontFamily: 'Gilory',
                fontWeight: '700',
                fontSize: 20,
                color: '#0019A7',
                top: 40,
                left: 15,
              }}>
              Photos explicites
            </Text>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#0019A7',
                top: 50,
                left: 15,
              }}>
              Photos floues sur profil, visibles sur demande{'\n'}individuelle
              restreinte et révocable.
            </Text>
            <View
              style={[StylesProfileMeRa.viewPhoto2]}>
              {explicitPath.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => { item === null ? ImagePicker(index, explicit) : contentDeleteImage(index, explicit); }}
                  style={[StylesProfileMeRa.btnAddPhoto2, {
                    width: 82,
                    height: 82,
                  }]}>
                  {item ? (
                    <View style={[StylesProfileMeRa.viewUserPhoto,
                    {
                      width: 84,
                      height: 84
                    }]}>
                      <Image blurRadius={8 } source={{ uri: explicitPath[index] }}
                        style={[StylesProfileMeRa.userPhoto,
                        {
                          borderRadius: 30,
                          borderColor: '#D40000',
                          borderWidth: 1,
                          width: 82,
                          height: 82,
                        }]} />
                      <View style={[StylesProfileMeRa.contentDeleteImage, { bottom: 55 }]}>
                        <Image source={require('../../../assets/boutons/cadenas.png')} style={[StylesProfileMeRa.imageDelete]} />
                      </View>
                    </View>
                  ) : (
                    <Text
                      style={[StylesProfileMeRa.txtAddImage2]}
                    >
                      +
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View
            style={{
              top: 260,
              height: 1100,
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Gilroy',
                  fontWeight: '700',
                  fontSize: 20,
                  color: '#0019A7',
                  left: 20,
                }}>
                Quelques mots sur moi
              </Text>
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#0019A7',
                  top: 10,
                  left: 20,
                }}>
                Lorem ipsum
              </Text>
              <SafeAreaView
                style={{
                  alignSelf: 'center',
                  width: '100%',
                }}>
                <TextInput
                  placeholder="Description"
                  multiline={true}
                  scrollEnabled={true}
                  onChangeText={(text) => { setUserDescrition(text); handleStoreData('user_description', text);}}
                  style={{
                    borderWidth: 1,
                    borderColor: '#E0BDFF',
                    borderRadius: 30,
                    alignSelf: 'center',
                    top: 30,
                    width: '90%',
                    maxHeight: 111,
                    padding: 20,
                    color: '#0019A7',
                  }}
                />
              </SafeAreaView>
            </View>
            <Text
              style={{
                fontFamily: 'Gilroy',
                fontWeight: '700',
                fontSize: 20,
                color: '#0019A7',
                top: 50,
                left: 20,
              }}>
              Mes infos de base
            </Text>
            <View
              style={{
                top: 450,
              }}>
              <Religion />
              <Enfant />
              <Morphologie />
              <Origine />
              <Astrologie />
              <Politique />
              <Fumer />
              <Alcool />
              <Sport />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };
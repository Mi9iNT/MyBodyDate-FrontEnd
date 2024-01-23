/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {Statut} from '../../composants/edit/Statut';
import {VotreRecherche} from '../../composants/edit/VotreRecherche';
import {Offre} from '../../composants/edit/Offre';
import {Langue} from '../../composants/edit/Langue';
import {Distinct} from '../../composants/edit/Distinct';
import {Competence} from '../../composants/edit/Competence';
import { LinkedIn } from '../../composants/edit/LinkedIn';
import StylesProfileMeRpfirst from '../../../assets/style/styleScreens/styleProfil/StyleProfileMeRpfirst';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfilMeRPfirst = ({navigation, imagePath}) => {

  const contentDeleteImage = (index) => {
    setImgPath(prevImg => {
      let newImgPath = [...prevImg];
      newImgPath[index] = null;
      return newImgPath;
    });
  };

  const [imgPath, setImgPath] = useState([null, null, null]);

  console.log(imgPath);

  const ImagePicker = (index) => {
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
        let newImgPath = [...imgPath];
        newImgPath[index] = newImg;
        setImgPath(newImgPath);
      }
    });
  };

  const [userIntitulate, SetUserIntitulate] = useState();

  const [userDescription, SetUserDescription] = useState();

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={[StylesProfileMeRpfirst.container]}>
      <MenuSlide
        imagePath={'Professionnel'}
        backButton={'Retour profil pro'}
        tabPath={'Professionnel'}
      />
      <ScrollView>
        <Text
          style={[StylesProfileMeRpfirst.txtTitle]}>
          Profil éditer
        </Text>
        <View style={[StylesProfileMeRpfirst.viewContent]}>
          <Text
            style={[StylesProfileMeRpfirst.txtSubTitle]}>
            Photos
          </Text>
          <Text
            style={[StylesProfileMeRpfirst.txtDescription]}>
            Ajoutez jusqu'à 3 photos professionnelles de{'\n'}vous pour gagner
            en crédibilité.
          </Text>
          <View
            style={[StylesProfileMeRpfirst.viewPhoto]}>
            {imgPath.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {item === null ? ImagePicker(index) : contentDeleteImage(index)}}
                style={[StylesProfileMeRpfirst.btnAddPhoto, {
                  width: index === 0 && item !== null ? 129 : 82,
                  height: index === 0 && item !== null ? 129 : 82,
                }]}>
          {item ? (
            <View style={[StylesProfileMeRpfirst.viewUserPhoto, 
              {
              width: index === 0 && item !== null ? 129 : 82,
              height: index === 0 && item !== null ? 129 : 82,}]}>
              <Image source={{ uri: imgPath[index] }}
                style={[StylesProfileMeRpfirst.userPhoto,
                  {
                    width: index === 0 && item !== null ? 129 : 82,
                    height: index === 0 && item !== null ? 129 : 82,
            }]} />
              <View style={[StylesProfileMeRpfirst.contentDeleteImage, {bottom: index === 0 ? 80 : 55,}]}>
                <Image source={require('../../../assets/boutons/poubelle.png')} style={[StylesProfileMeRpfirst.imageDelete]}/>
              </View>
            </View>
          ) : (
            <Text
              style={[StylesProfileMeRpfirst.txtAddImage]}
              >
              +
            </Text>
          )}
        </TouchableOpacity>
            ))}
          </View>
          </View>
          <SafeAreaView style={[StylesProfileMeRpfirst.viewContent]}>
            <Text
              style={[StylesProfileMeRpfirst.txtSubTitle,]}>
              À propos de moi
            </Text>
            <TextInput
              onSubmitEditing={(event) => SetUserIntitulate(event.nativeEvent.text)}
              placeholder="Écrivez votre intitulé impactant."
              style={[StylesProfileMeRpfirst.intitulateInput]}
            />
            <TextInput
              placeholder="Partagez le meilleur votre expérience, en résumé . . . "
                allowFontScaling={true}
                editable={true}
                multiline={true}
                scrollEnabled={true}
                onSubmitEditing={(event) => SetUserDescription(event.nativeEvent.text)}
              style={[StylesProfileMeRpfirst.descriptionInput]}
            />
              </SafeAreaView>
              <View style={[StylesProfileMeRpfirst.viewContent]}>
                <Text
                  style={[StylesProfileMeRpfirst.txtSubTitle]}>
                  Mes infos de base
                </Text>
                <View
                  style={[StylesProfileMeRpfirst.contentInfo]}>
                  <Statut />
                  <VotreRecherche />
                  <Offre />
                  <Langue />
                  <Distinct />
                  <Competence />
                  <LinkedIn />
                </View>
              </View>
            </ScrollView>
          </View>
        );
      };

ProfilMeRPfirst.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

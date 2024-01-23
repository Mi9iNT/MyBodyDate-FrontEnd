/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {ImageBackground, StatusBar, TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {launchImageLibrary} from 'react-native-image-picker';
import {NiveauDEtudes} from '../../composants/edit/NiveauDEtudes';
import {JeParle} from '../../composants/edit/JeParle';
import {Activite} from '../../composants/edit/Activite';
import {MaCuisine} from '../../composants/edit/MaCuisine';
import {Ami} from '../../composants/edit/Ami';
import {Film} from '../../composants/edit/Film';
import {Spotify} from '../../composants/edit/Spotify';
import StylesProfileMeCafirst from '../../../assets/style/styleScreens/styleProfil/StyleProfileMeCafirst';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfilMeCAfirst = ({navigation, imagePath}) => {

  const [buttonPressed, setButtonPressed] = useState(false);

  const deleteAvatar = (index) => {
    setAvatarPath(prevAvatar => {
      let newAvatarPath = [...prevAvatar];
      newAvatarPath[index] = null;
      return newAvatarPath;
    });
  };

  const [avatarPath, setAvatarPath] = useState([null, null, null]);

  console.log(avatarPath);

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
        let newAvatar = response.assets[0].uri;
        let newAvatarPath = [...avatarPath];
        newAvatarPath[index] = newAvatar;
        setAvatarPath(newAvatarPath);
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
    <View style={[StylesProfileMeCafirst.container]}>
      <MenuSlide imagePath={'Ami'} tabPath={'Ami'} />
      <ScrollView style={{height: 1200,}}>
          <Text
            style={[StylesProfileMeCafirst.txtTitle]}>
            Profil éditer
          </Text>
        <View style={{left: 20, top: 20}}>
          <Text
            style={StylesProfileMeCafirst.txtSubTitle}>
            Photos
          </Text>
          <Text
            style={[StylesProfileMeCafirst.txtDescription]}>
            Ajoutez jusqua 3 photos de vous, pour{'\n'}agrandir votre cercle
            social.
          </Text>
        </View>
        <View
          style={[StylesProfileMeCafirst.viewPhoto]}>
          {avatarPath.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {item === null ? ImagePicker(index) : deleteAvatar(index)}}
              style={[StylesProfileMeCafirst.btnAddPhoto, {
                width: index === 0 && item !== null ? 129 : 82,
                height: index === 0 && item !== null ? 129 : 82,
              }]}>
          {item ? (
            <View style={[StylesProfileMeCafirst.viewUserPhoto, 
              {
              width: index === 0 && item !== null ? 129 : 82,
              height: index === 0 && item !== null ? 129 : 82,}]}>
              <Image source={{ uri: avatarPath[index] }}
                style={[StylesProfileMeCafirst.userPhoto,
                  {
                    width: index === 0 && item !== null ? 129 : 82,
                    height: index === 0 && item !== null ? 129 : 82,
            }]} />
              <View style={[StylesProfileMeCafirst.contentDeleteImage, {bottom: index === 0 ? 80 : 55,}]}>
                <Image source={require('../../../assets/boutons/poubelle.png')} style={[StylesProfileMeCafirst.imageDelete]}/>
              </View>
            </View>
          ) : (
            <Text
              style={[StylesProfileMeCafirst.txtAddImage]}
              >
              +
            </Text>
          )}
        </TouchableOpacity>
            ))}
            </View>

        <View style={[StylesProfileMeCafirst.line,{top: avatarPath[0] !== null ? 90 : 70,}]} />
        <Text
          style={[StylesProfileMeCafirst.txtInfo]}>
          Pour plus de photos sur votre profil,
        </Text>
        <Text
          style={[StylesProfileMeCafirst.txtInfo]}>ajoutez votre flux Instagram ou Facebook.
        </Text>
        <View style={[StylesProfileMeCafirst.viewCol]}>
          <TouchableOpacity
          onPress={()=>{setButtonPressed('Insta')}}
          style={{
            width: 336,
            height: 56,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
            <Image
              style={[StylesProfileMeCafirst.imgBtn]}
              source={
                buttonPressed === 'Go'
                  ? require('../../../assets/boutons/import-insta-rouge.png')
                  : require('../../../assets/boutons/import-insta.png')
              }
            />
            <Text style={[StylesProfileMeCafirst.TxtBtn, {zIndex: 1, bottom: 24, left: 20}]}>
              Importer votre feed Instagram
            </Text>
        </TouchableOpacity>
            <TouchableOpacity
            style={{}}
            onPress={() => {
              setButtonPressed('Meta');
            }}>
            <Text style={[StylesProfileMeCafirst.TxtBtn, {zIndex: 1, top: 57}]}>
             Meta (Facebook)
            </Text>
            <Image
              style={[StylesProfileMeCafirst.imgBtn]}
              source={
                buttonPressed === 'Meta'
                  ? require('../../../assets/boutons/Bouton-Rouge-Meta.png')
                  : require('../../../assets/boutons/Bouton-Noir-Meta.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            top: 100,
            height: 850,
          }}>
          <SafeAreaView style={[StylesProfileMeCafirst.viewContent]}>
            <Text
              style={[StylesProfileMeCafirst.txtSubTitle,]}>
                Quelques mots sur moi
            </Text>
            <Text
              style={[StylesProfileMeCafirst.intitulateInput]}
            >
              Description
            </Text>
            <TextInput
              placeholder="Description"
              placeholderTextColor={'#9424FA'}
              allowFontScaling={true}
              editable={true}
              multiline={true}
              scrollEnabled={true}
              onSubmitEditing={(event) => SetUserDescription(event.nativeEvent.text)}
              style={[StylesProfileMeCafirst.descriptionInput]}
            />
          </SafeAreaView>
          <Text
            style={[StylesProfileMeCafirst.txtSubTitle, {top:45}]}>
            Mes infos de base
          </Text>
          <View
            style={{
              top: 450,
            }}>
            <NiveauDEtudes />
            <JeParle />
            <Activite />
            <MaCuisine />
            <Ami />
            <Film />
            <Spotify />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

ProfilMeCAfirst.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

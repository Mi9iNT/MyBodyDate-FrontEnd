import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Modal,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import {launchCamera} from 'react-native-image-picker';
import Styles from '../../../assets/style/Styles';
import StylesCharteEngagement from '../../../assets/style/styleScreens/styleRegister/StyleCharteEngagement';

export const CharteEngagement = ({route, navigation}) => {
  const {
    routeName = '',
    userConsent = '',
    loveCoach = '',
    userEmail = '',
    userPhone = '',
    userCity = '',
    accesPosition = '',
    genre = '',
    userBirth = '',
    userSize = '',
    userLang = '',
    userSituation = '',
    userOrientation = '',
    userRecherche1 = '',
    userRecherche2 = '',
    userAffinites = '',
    rythmeDeVie1 = '',
    rythmeDeVie2 = '',
    userPrenom = '',
    userVoice = '',
  } = route.params ?? {};

  console.log('Choix de route : ', routeName);
  console.log('Consentement : ', userConsent);
  console.log('Love Coach : ', loveCoach);
  console.log('Email : ', userEmail);
  console.log('Téléphone : ', userPhone);
  console.log('Ville : ', userCity);
  console.log('Accès position : ', accesPosition);
  console.log('Genre : ', genre);
  console.log('Date de naissance : ', userBirth);
  console.log('Taille : ', userSize);
  console.log('Langues : ', userLang);
  console.log('Situation : ', userSituation);
  console.log('Orientation : ', userOrientation);
  console.log('Recherche 1 : ', userRecherche1);
  console.log('Recherche 2 : ', userRecherche2);
  console.log('Affinité(s) : ', userAffinites);
  console.log('Rythme de vie 1 : ', rythmeDeVie1);
  console.log('Rythme de vie 2 : ', rythmeDeVie2);
  console.log('Prénom : ', userPrenom);
  console.log('Voix : ', userVoice);

  const [buttonPressed, setButtonPressed] = useState('');

  const [modalCharteVisible, setModalCharteVisible] = useState(true);

  const [cameraStatus, setCameraStatus] = useState(false);

  const [imagePath, setImagePath] = useState(false);

  console.log(imagePath);

  // console.log('imageVerif =', imageVerif);

  const checkPermissions = () => {
    check(PERMISSIONS.ANDROID.CAMERA)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'MyBodyDate',
          message:
            'Autoriser MY BODY DATE à accéder à la caméra de cet appareil ?',
          buttonNeutral: 'Demander plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'Autoriser',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Accès autorisé à la caméra');
        setCameraStatus(true);
      } else {
        console.log('Accès refusé à la caméra');
        setCameraStatus(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  openCamera = () => {
    if (cameraStatus) {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };

      launchCamera(options, response => {
        if (response.didCancel) {
          console.log("L'utilisateur a annulé la capture.");
        } else if (response.errorCode) {
          console.log('Erreur : ', response.errorMessage);
        } else {
          const source = response.assets[0].uri;
          setImagePath(source);
          setModalCharteVisible(false);
        }
      });
    } else {
      requestCameraPermission();
    }
  };

  return (
    <ImageBackground
      style={[StylesCharteEngagement.bgGradient]}
      source={require('../../../assets/images/Background.png')}>
      <Text style={[StylesCharteEngagement.TxtTitle]}>CHARTE</Text>
      <Text style={[StylesCharteEngagement.TxtTitle]}>D&apos;ENGAGEMENT</Text>
      <View style={[StylesCharteEngagement.ViewCharte]}>
        <ScrollView
          style={[StylesCharteEngagement.ScrollViewCharte]}
          contentContainerStyle={{paddingBottom: 10}}>
          <Text style={[StylesCharteEngagement.textWhite]}>
            <Text style={[StylesCharteEngagement.subTextWhite]}>
              Respect mutuel{'\n'}
            </Text>
            {'\n'}
            C&apos;est la base d&apos;une vraie histoire alors privilégiez les
            échanges respectueux dès le début.
          </Text>
          <Text style={[StylesCharteEngagement.textWhite]}>
            <Text style={[StylesCharteEngagement.subTextWhite]}>
              Soyez sincère{'\n'}
            </Text>
            {'\n'}
            Un profil (photo, âge, infos) qui vous reflète vraiment sera
            toujours plus séduisant.
          </Text>
          <Text style={[StylesCharteEngagement.textWhite]}>
            <Text style={[StylesCharteEngagement.subTextWhite]}>
              Restez prudent{'\n'}
            </Text>
            {'\n'}
            Échangez via les messages, les appels vidéo et audio avant de donner
            vos infos personnelles.
          </Text>
        </ScrollView>
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCharteVisible}
        onRequestClose={() => {
          setModalCharteVisible(!modalCharteVisible);
        }}>
        <View style={[StylesCharteEngagement.ViewModal]}>
          <ScrollView
            style={[StylesCharteEngagement.ScrollViewModal]}
            contentContainerStyle={{paddingBottom: 200, paddingTop: 20}}>
            <View style={[StylesCharteEngagement.ViewModal2]}>
              <Text style={[StylesCharteEngagement.TitleModal]}>
                VÉRIFICATION
              </Text>
              <View style={[StylesCharteEngagement.ViewModal3]}>
                <Image
                  style={[StylesCharteEngagement.ImgVerif]}
                  source={require('../../../assets/images/Kolia-Verif.png')}
                />
                <Image
                  style={[StylesCharteEngagement.IcoVerif]}
                  blurRadius={0}
                  source={require('../../../assets/images/ico-protection.png')}
                />
              </View>
              <View style={[StylesCharteEngagement.ViewModalCol]}>
                <Text style={[StylesCharteEngagement.textBlueBold]}>
                  Prenez cette pose et faites un selfie
                </Text>
                <Text style={[StylesCharteEngagement.textBlueCenter]}>
                  Nous les comparerons avec les photos de profil pour vérifier
                  votre identité.
                </Text>
              </View>

              <TouchableOpacity
                style={{top: 50}}
                onPress={() => {
                  setButtonPressed('Photo');
                  openCamera();
                }}
                accessibilityLabel="Prendre une photo">
                <Text style={[StylesCharteEngagement.textBtnModal]}>
                  Prendre une photo
                </Text>
                <Image
                  style={[StylesCharteEngagement.imgBtn]}
                  source={
                    buttonPressed === 'Photo'
                      ? require('../../../assets/boutons/Bouton-Rouge-Photo.png')
                      : require('../../../assets/boutons/Bouton-Noir-Photo.png')
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[StylesCharteEngagement.rowModal]}
                onPress={() => setModalCharteVisible(false)}
                accessibilityLabel="Politique de Confidentialité">
                <Text style={[StylesCharteEngagement.textBlue]}>
                  Politique de Confidentialité
                </Text>
                <Image
                  style={[StylesCharteEngagement.icoArrow]}
                  source={require('../../../assets/images/flèche-B.png')}
                />
              </TouchableOpacity>
              <View style={[StylesCharteEngagement.line]} />
              <TouchableOpacity
                style={[StylesCharteEngagement.rowModal]}
                onPress={() => setModalCharteVisible(false)}
                accessibilityLabel="Comment MyBodyDate utilise vos photos">
                <Text style={[StylesCharteEngagement.textBlue]}>
                  Comment MyBodyDate utilise vos photos
                </Text>
                <Image
                  style={[StylesCharteEngagement.icoArrow]}
                  source={require('../../../assets/images/flèche-B.png')}
                />
              </TouchableOpacity>
              <View style={[StylesCharteEngagement.line]} />
              <TouchableOpacity
                style={[StylesCharteEngagement.rowModal]}
                onPress={() => setModalCharteVisible(false)}
                accessibilityLabel="Retirer votre consentement via notre équipe d'aide">
                <Text style={[StylesCharteEngagement.textBlue]}>
                  Retirer votre consentement via notre équipe d&apos;aide
                </Text>
                <Image
                  style={[StylesCharteEngagement.icoArrow]}
                  source={require('../../../assets/images/ico-info-B.png')}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <View style={[{top: 180}]}>
        <TouchableOpacity
          onPress={() => {
            setButtonPressed('Aceepter');
            navigation.navigate('Felicitations', {
              userConsent,
              routeName,
              loveCoach,
              userEmail,
              userPhone,
              userCity,
              accesPosition,
              genre,
              userBirth,
              userSize,
              userLang,
              userSituation,
              userOrientation,
              userRecherche1,
              userRecherche2,
              userAffinites,
              rythmeDeVie1,
              rythmeDeVie2,
              userPrenom,
              userVoice,
            });
          }}
          accessibilityLabel="J'accepte">
          <Text style={[StylesCharteEngagement.textBtn]}>J&apos;accepte</Text>
          <Image
            style={[
              {
                bottom: 20,
                height: 56,
                resizeMode: 'contain',
                alignSelf: 'center',
              },
            ]}
            source={
              buttonPressed === 'Accepter'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Bleu.png')
            }
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

CharteEngagement.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default CharteEngagement;

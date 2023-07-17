import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Modal,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';

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

  const [modalCharteVisible, setModalCharteVisible] = useState(true);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={[Styles.bgGradient]}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 100}]}>
          <Text style={[Styles.textWhiteCenter]}>CHARTE</Text>
          <Text style={[Styles.textWhiteCenter]}>D&apos;ENGAGEMENT</Text>
        </View>

        <ScrollView style={[Styles.ViewText, {top: -150, left: 30}]}>
          <Text style={[Styles.textWhite2, {top: 20}]}>
            Respect mutuel{'\n'}
            {'\n'}
            C&apos;est la base d&apos;une vraie histoire alors privilégiez les
            échanges respectueux dès le début.
          </Text>
          <Text style={[Styles.textWhite2]}>
            Soyez sincère{'\n'}
            {'\n'}
            Un profil (photo, âge, infos) qui vous reflète vraiment sera
            toujours plus séduisant.
          </Text>
          <Text style={[Styles.textWhite2]}>
            Restez prudent{'\n'}
            {'\n'}
            Échangez via les messages, les appels vidéo et audio avant de donner
            vos infos personnelles.
          </Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalCharteVisible}
            onRequestClose={() => {
              setModalCharteVisible(!modalCharteVisible);
            }}>
            <View style={Styles.centeredView4}>
              <Text style={[Styles.textBlueCenter3, {top: -80}]}>
                VÉRIFICATION
              </Text>
              <Image
                style={[
                  {
                    width: 100,
                    height: 130,
                    top: -80,
                    resizeMode: 'cover',
                    borderWidth: 2,
                    borderColor: '#0F0BAE',
                    borderRadius: 20,
                  },
                ]}
                blurRadius={10}
                source={require('../../../assets/images/kalvin.png')}
              />
              <Text style={[Styles.textBlueBold, {top: -60}]}>
                Prenez cette pose et faites un selfie
              </Text>
              <Text style={[Styles.textBlueCenter3, {top: -40, width: 320}]}>
                Nous les comparerons avec les photos de profil pour vérifier
                votre identité.
              </Text>
              <TouchableOpacity
                onPress={() => setModalCharteVisible(false)}
                accessibilityLabel="Prendre une photo">
                <Text style={[Styles.textBtn6, {zIndex: 1, top: 25, left: 15}]}>
                  Prendre une photo
                </Text>
                <Image
                  style={[
                    {
                      top: -20,
                      width: 320,
                      height: 60,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    },
                  ]}
                  source={require('../../../assets/boutons/Bouton-Noir-Photo.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[Styles.row]}
                onPress={() => setModalCharteVisible(false)}
                accessibilityLabel="Politique de Confidentialité">
                <Text style={[Styles.textBlue]}>
                  Politique de Confidentialité
                </Text>
              </TouchableOpacity>
              <View style={[Styles.line]} />
              <TouchableOpacity
                style={[Styles.row]}
                onPress={() => setModalCharteVisible(false)}
                accessibilityLabel="Comment MyBodyDate utilise vos photos">
                <Text style={[Styles.textBlue]}>
                  Comment MyBodyDate utilise vos photos
                </Text>
              </TouchableOpacity>
              <View style={[Styles.line]} />
              <TouchableOpacity
                style={[Styles.row]}
                onPress={() => setModalCharteVisible(false)}
                accessibilityLabel="Retirer votre consentement via notre équipe d'aide">
                <Text style={[Styles.textBlue]}>
                  Retirer votre consentement via notre équipe d&apos;aide
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>

        <View style={[{top: -20}]}>
          <TouchableOpacity
            onPress={() =>
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
              })
            }
            accessibilityLabel="J'accepte">
            <Text style={[Styles.textBtn6, {zIndex: 1, top: 25}]}>
              J&apos;accepte
            </Text>
            <Image
              style={[
                {
                  top: -20,
                  width: '90%',
                  height: 60,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={require('../../../assets/boutons/Bouton-Bleu.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

CharteEngagement.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default CharteEngagement;

// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     Modal,
//     Image,
//     ScrollView,
//     ImageBackground,
//     TouchableOpacity,
// } from 'react-native';
// import Styles from '../../assets/style/Styles';

// export const CharteEngagement = ({ route, navigation }) => {

//     // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
//     const routeChoice = route.params?.routeName ?? '';
//     const consentement = route.params?.userConsent ?? '';
//     const loveCoach = route.params?.loveCoach ?? '';
//     const userEmail = route.params?.userEmail ?? '';
//     const userPhone = route.params?.userPhone ?? '';
//     const userCity = route.params?.userCity ?? '';
//     const accesPosition = route.params?.accesPosition ?? '';
//     const genre = route.params?.genre ?? '';
//     const userBirth = route.params?.userBirth ?? '';
//     const userSize = route.params?.userSize ?? '';
//     const userLang = route.params?.userLang ?? '';
//     const userSituation = route.params?.userSituation ?? '';
//     const userOrientation = route.params?.userOrientation ?? '';
//     const userRecherche1 = route.params?.userRecherche1 ?? '';
//     const userRecherche2 = route.params?.userRecherche2 ?? '';
//     const userAffinites = route.params?.userAffinites ?? '';
//     const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
//     const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
//     const userPrenom = route.params?.userPrenom ?? '';
//     const userVoice = route.params?.userVoice ?? '';
//     console.log('Choix de route : ' , routeChoice);
//     console.log('Consentement : ' , consentement);
//     console.log('Love Coach : ', loveCoach);
//     console.log('Email : ', userEmail);
//     console.log('Téléphone : ', userPhone);
//     console.log('Ville : ', userCity);
//     console.log('Accès position : ', accesPosition);
//     console.log('Genre : ', genre);
//     console.log('Date de naissance : ', userBirth);
//     console.log('Taille : ', userSize);
//     console.log('Langues : ', userLang);
//     console.log('Situation : ', userSituation);
//     console.log('Orientation : ', userOrientation);
//     console.log('Recherche 1 : ', userRecherche1);
//     console.log('Recherche 2 : ', userRecherche2);
//     console.log('Affinité(s) : ', userAffinites);
//     console.log('Rythme de vie 1 : ', rythmeDeVie1);
//     console.log('Rythme de vie 2 : ', rythmeDeVie2);
//     console.log('Prénom : ', userPrenom);
//     console.log('Voix : ', userVoice);

//     // Constantes concernant la Modal d'information de l'empreinte vocal
//     const [modalCharteVisible, setModalCharteVisible] = useState(true)

//     return (
//     <View style={Styles.container}>
//             <ImageBackground style={[Styles.bgGradient]} source={require('../../assets/images/Background.png')}>
//             <View style={[Styles.ViewText, { top: 100 }]}>
//                     <Text style={[Styles.textWhiteCenter]}>CHARTE</Text>
//                     <Text style={[Styles.textWhiteCenter]}>D'ENGAGEMENT</Text>
//             </View>

//             <ScrollView style={[Styles.ViewText, {top:-150, left:30}]}>

//                     <Text style={[Styles.textWhite2, {top:20}]}>Respect mutuel{"\n"}{"\n"}C'est la base d'une vraie histoire alors privilégiez les échanges respectueux dès le début.</Text>
//                 <Text style={[Styles.textWhite2]}>Soyez sincère{"\n"}{"\n"}Un profil (photo, âge, infos) qui vous reflète vraiment sera toujours plus séduisant.</Text>
//                 <Text style={[Styles.textWhite2]}>Restez prudent{"\n"}{"\n"}Échangez via les messages, les appels vidéo et audio avant de donner vos infos personnelles.</Text>
//                 <Modal animationType="slide" transparent={true} visible={modalCharteVisible} onRequestClose={() => { setModalCharteVisible(!modalCharteVisible); }}>
//                     <View style={Styles.centeredView4}>
//                         <Text style={[Styles.textBlueCenter3, { top: -80 }]}>VÉRIFICATION</Text>
//                         <Image style={[{ width: 100, height: 130, top: -80, resizeMode: 'cover', borderWidth: 2, borderColor: '#0F0BAE', borderRadius: 20 }]} blurRadius={10} source={require('../../assets/images/kalvin.png')} />
//                         <Text style={[Styles.textBlueBold, { top: -60 }]}>Prenez cette pose et faites un selfie</Text>
//                         <Text style={[Styles.textBlueCenter3, { top: -40, width:320 }]}>Nous les comperons avec les photos de profil pour vérifier votre identité.</Text>
//                          <TouchableOpacity
//                             onPress={() => setModalCharteVisible(false)}
//                             accessibilityLabel="Prendre une photo">
//                                 <Text style={[Styles.textBtn6, { zIndex:1, top:25, left:15}]}>Prendre une photo</Text>
//                                 <Image style={[{ top: -20, width: 320, height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Noir-Photo.png')} />
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={[Styles.row]}
//                             onPress={() => setModalCharteVisible(false)}
//                             accessibilityLabel="Politique de Confidentialité">
//                                 <Text style={[Styles.textBlue]}>Politique de Confidentialité</Text>
//                         </TouchableOpacity>
//                         <View style={[Styles.line]}></View>
//                         <TouchableOpacity
//                             style={[Styles.row]}
//                             onPress={() => setModalCharteVisible(false)}
//                             accessibilityLabel="Comment MyBodyDate utilise vos photos">
//                             <Text style={[Styles.textBlue]}>Comment MyBodyDate utilise vos photos</Text>
//                         </TouchableOpacity>
//                         <View style={[Styles.line]}></View>
//                         <TouchableOpacity
//                             style={[Styles.row]}
//                             onPress={() => setModalCharteVisible(false)}
//                             accessibilityLabel="CRetirer votre consentement via notre équipe d'aide">
//                             <Text style={[Styles.textBlue]}>Retirer votre consentement via notre équipe d'aide</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </Modal>

//             </ScrollView>
//             <View style={[{top:-20}]}>
//                 <TouchableOpacity
//                  onPress={() => navigation.navigate('Felicitations', {
//                      userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1, rythmeDeVie2: rythmeDeVie2, userPrenom: userPrenom, userVoice: userVoice
//                         })}
//                     accessibilityLabel="J'accepte">
//                     <Text style={[Styles.textBtn6, { zIndex:1, top:25}]}>J'accepte</Text>
//                     <Image style={[{ top: -20, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Bleu.png')} />
//                 </TouchableOpacity>
//             </View>
//         </ImageBackground>
//     </View>

//     )
// }

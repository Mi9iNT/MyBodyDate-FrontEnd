import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';

export const Felicitations = ({route, navigation}) => {
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';
  const accesPosition = route.params?.accesPosition ?? '';
  const genre = route.params?.genre ?? '';
  const userBirth = route.params?.userBirth ?? '';
  const userSize = route.params?.userSize ?? '';
  const userLang = route.params?.userLang ?? '';
  const userSituation = route.params?.userSituation ?? '';
  const userOrientation = route.params?.userOrientation ?? '';
  const userRecherche1 = route.params?.userRecherche1 ?? '';
  const userRecherche2 = route.params?.userRecherche2 ?? '';
  const userAffinites = route.params?.userAffinites ?? '';
  const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
  const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';

  // Constantes concernant la Modal d'information de l'empreinte vocale
  const [modalCharteVisible, setModalCharteVisible] = useState(true);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={[Styles.bgGradient]}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 100, left: 0}]}>
          <TouchableOpacity
            style={[{left: 0}]}
            onPress={() =>
              navigation.navigate('Felicitations', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userEmail: userEmail,
                userCity: userCity,
                accesPosition: accesPosition,
                genre: genre,
                userBirth: userBirth,
                userSize: userSize,
                userLang: userLang,
                userSituation: userSituation,
                userOrientation: userOrientation,
                userRecherche1: userRecherche1,
                userRecherche2: userRecherche2,
                userAffinites: userAffinites,
                rythmeDeVie1: rythmeDeVie1,
                rythmeDeVie2: rythmeDeVie2,
                userPrenom: userPrenom,
                userVoice: userVoice,
              })
            }
            accessibilityLabel="Passer">
            <Text style={[Styles.textBtn3, {}]}>Passer</Text>
          </TouchableOpacity>
          <Text style={[Styles.textTitleWhite2, {top: 20, left: 30}]}>
            FÉLICITATIONS !{'\n'}
          </Text>
          <Text style={[Styles.textTitleWhite2, {left: 30, width: '80%'}]}>
            <Text style={[Styles.textBlue2]}>_{userPrenom}_</Text>, VOUS AVEZ 7
            JOURS POUR AVOIR UN PROFIL VÉRIFIÉ
          </Text>
          <Text
            style={[
              Styles.textWhite2,
              {top: 150, width: '80%', alignSelf: 'center'},
            ]}>
            Notre site de rencontre n&apos;accepte que les profils vérifiés
            au-delà de 7 jours. Sinon votre compte sera suspendu.
          </Text>
          <Text
            style={[
              Styles.textWhite2,
              {top: 100, width: '80%', alignSelf: 'center'},
            ]}>
            Nous sommes conformes au RGPD, Règlement Général à la Protection des
            Données.
          </Text>
        </View>
        <View style={[{top: -20}]}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProfilMe', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userEmail: userEmail,
                userPhone: userPhone,
                userCity: userCity,
                accesPosition: accesPosition,
                genre: genre,
                userBirth: userBirth,
                userSize: userSize,
                userLang: userLang,
                userSituation: userSituation,
                userOrientation: userOrientation,
                userRecherche1: userRecherche1,
                userRecherche2: userRecherche2,
                userAffinites: userAffinites,
                rythmeDeVie1: rythmeDeVie1,
                rythmeDeVie2: rythmeDeVie2,
                userPrenom: userPrenom,
                userVoice: userVoice,
              })
            }
            accessibilityLabel="Vérifier mon profil">
            <Text style={[Styles.textBtn9, {zIndex: 1, top: 25}]}>
              Vérifier mon profil
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
              source={require('../../../assets/boutons/Bouton-Blanc.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

Felicitations.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     Image,
//     ImageBackground,
//     TouchableOpacity,
// } from 'react-native';
// import Styles from '../../assets/style/Styles';

// export const Felicitations = ({ route, navigation }) => {

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
//         <ImageBackground style={[Styles.bgGradient]} source={require('../../assets/images/Background.png')}>
//             <View style={[Styles.ViewText, { top: 100, left: 0 }]}>
//                 <TouchableOpacity
//                     style={[{left:0}]}
//                     onPress={() => navigation.navigate('Felicitations', {
//                                     userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1, rythmeDeVie2: rythmeDeVie2, userPrenom: userPrenom, userVoice: userVoice
//                                 })}
//                 accessibilityLabel="Passer">
//                     <Text style={[Styles.textBtn3, {}]}>Passer</Text>
//                 </TouchableOpacity>
//                     <Text style={[Styles.textTitleWhite2, {top:20, left:30}]}>FÉLICITATIONS !{"\n"}</Text>
//                     <Text style={[Styles.textTitleWhite2, {left:30, width:'80%'}]}><Text style={[Styles.textBlue2]}>_{userPrenom}_</Text>, VOUS AVEZ 7 JOURS POUR AVOIR UN PROFIL VÉRIFIÉ</Text>
//                 <Text style={[Styles.textWhite2, { top: 150, width:'80%', alignSelf:'center' }]}>Notre site de rencontre n'accepte que les profils vérifiés au delà de 7 jours. Sinon votre compte sera suspendu.</Text>
//                 <Text style={[Styles.textWhite2, {top:100, width:'80%', alignSelf:'center'}]}>Nous sommes conforme au RGPD, Règlement Générale à la Protection des Données.</Text>
//             </View>
//             <View style={[{top:-20}]}>
//                 <TouchableOpacity
//                  onPress={() => navigation.navigate('Profil', {
//                      userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1, rythmeDeVie2: rythmeDeVie2, userPrenom: userPrenom, userVoice: userVoice
//                                 })}
//                 accessibilityLabel="Vérifier mon profil">
//                     <Text style={[Styles.textBtn9, { zIndex:1, top:25}]}>Vérifier mon profil</Text>
//                     <Image style={[{ top: -20, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//                 </TouchableOpacity>
//             </View>
//         </ImageBackground>
//     </View>

//     )
// }

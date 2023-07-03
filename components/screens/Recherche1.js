import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../assets/style/Styles';

export const Recherche1 = ({ route, navigation }) => {
  const [recherche1, setState] = useState('');

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

  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
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

  const handleRecherche1 = (value) => {
    setState(value);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, { top: 100 }]}>
          <Text style={[Styles.textTitleWhite3]}>VOTRE RECHERCHE ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect, { top: 200 }]}>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt20]}
            onPress={() => handleRecherche1('Homme')}
            accessibilityLabel="Homme"
          >
            <Text style={recherche1 === 'Homme' ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>
              Homme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt20]}
            onPress={() => handleRecherche1('Femme')}
            accessibilityLabel="Femme"
          >
            <Text style={recherche1 === 'Femme' ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>
              Femme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt20]}
            onPress={() => handleRecherche1('Tout le monde')}
            accessibilityLabel="Tout le monde"
          >
            <Text
              style={
                recherche1 === 'Tout le monde' ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected
              }
            >
              Tout le monde
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ top: 280, left: 40 }}>
          <Text style={[Styles.textWhite2]}>Choix unique.</Text>
        </View>

        <View style={[Styles.ViewBtn2, { top: 140 }]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() =>
              navigation.navigate('Recherche2', {
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
                userRecherche1: recherche1,
              })
            }
            accessibilityLabel="Continuer"
          >
            <Text style={[Styles.textBtn9, { zIndex: 1, top: 45 }]}>Continuer</Text>
            <Image
              style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf: 'center' }]}
              source={require('../../assets/boutons/Bouton-Blanc.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

Recherche1.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      routeName: PropTypes.string,
      userConsent: PropTypes.bool,
      loveCoach: PropTypes.string,
      userEmail: PropTypes.string,
      userPhone: PropTypes.string,
      userCity: PropTypes.string,
      accesPosition: PropTypes.bool,
      genre: PropTypes.string,
      userBirth: PropTypes.string,
      userSize: PropTypes.number,
      userLang: PropTypes.string,
      userSituation: PropTypes.string,
      userOrientation: PropTypes.string,
    }),
  }),
  navigation: PropTypes.object,
};


// import React, {useState, useEffect} from 'react';
// import {
//     View,
//     Text,
//     ImageBackground,
//     Image,
//     StyleSheet,
//     SafeAreaView,
//     TextInput,
//     TouchableOpacity,
//     Button,
// } from 'react-native';
// import Styles from '../../assets/style/Styles';

// export const Recherche1 = ({ route, navigation }) => {

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

//     // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
//     const [recherche1, setState] = useState('');
//     if (recherche1.state === 'Tout le monde') {
//         const toutLeMonde = ['Homme', 'Femme'];
//         console.log('Recherche 1 : ', toutLeMonde);
//     } else {
//         console.log('Recherche 1 : ', recherche1.state);
//     }
    


//     return (
//     <View style={Styles.container}>
//         <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
//            <View style={[Styles.ViewText, {top:100}]}>
//                 <Text style={[Styles.textTitleWhite3]}>VOTRE RECHERCHE ?</Text>
//             </View>
             
//             <View style={[Styles.ViewBTNSelect, {top:200}]}>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Homme' })} accessibilityLabel="Homme">
//                      <Text style={(recherche1.state === 'Homme') ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>Homme</Text>
//                 </TouchableOpacity>  
//                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Femme' })} accessibilityLabel="Femme">
//                      <Text style={(recherche1.state === 'Femme') ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>Femme</Text>
//                 </TouchableOpacity>  
//                 <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Tout le monde' })} accessibilityLabel="Tout le monde">
//                      <Text style={(recherche1.state === 'Tout le monde' ) ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>Tout le monde</Text>
//                 </TouchableOpacity>  
//             </View>

//             <View style={{top:280, left:40}}>
//                 <Text style={[Styles.textWhite2]}>Choix unique.</Text>
//             </View>   
            
//             <View style={[Styles.ViewBtn2, { top:140}]}>
//                 <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Recherche2', {
//                     userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: recherche1.state})} accessibilityLabel="Continuer">
//                     <Text style={[Styles.textBtn9, { zIndex:1, top:45}]}>Continuer</Text>
//                     <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//                 </TouchableOpacity>
//             </View>
//         </ImageBackground>
//     </View>
        
//     )
// }
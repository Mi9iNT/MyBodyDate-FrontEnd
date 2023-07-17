import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';

export const Affinite = ({route, navigation}) => {
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
  console.log('Recherche 1 : ', userRecherche1);
  console.log('Recherche 2 : ', userRecherche2);

  const [selectedAffinite, setSelectedAffinite] = useState([]);

  const handleButtonPress = value => {
    let newSelectedAffinite = [...selectedAffinite];

    if (newSelectedAffinite.includes(value)) {
      newSelectedAffinite = newSelectedAffinite.filter(item => item !== value);
    } else {
      newSelectedAffinite.push(value);
    }

    setSelectedAffinite(newSelectedAffinite);
    console.log('Affinité(s) : ' + newSelectedAffinite);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, Styles.mt100]}>
          <Text style={[Styles.textWhiteCenter]}>VOS AFFINITÉS ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect2, {top: 80}]}>
          <TouchableOpacity
            style={[Styles.btn]}
            onPress={() => handleButtonPress('Cuisine & Gourmet')}
            accessibilityLabel="Cuisine & Gourmet">
            <Text
              style={
                selectedAffinite.includes('Cuisine & Gourmet')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Cuisine & Gourmet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt10]}
            onPress={() => handleButtonPress('Globe Trotter')}
            accessibilityLabel="Globe Trotter">
            <Text
              style={
                selectedAffinite.includes('Globe Trotter')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Globe Trotter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt10]}
            onPress={() => handleButtonPress('Fan de Musée & Culture')}
            accessibilityLabel="Fan de Musée & Culture">
            <Text
              style={
                selectedAffinite.includes('Fan de Musée & Culture')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Fan de Musée & Culture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt10]}
            onPress={() => handleButtonPress('Amis.es des Animaux')}
            accessibilityLabel="Rien de très sérieux">
            <Text
              style={
                selectedAffinite.includes('Amis.es des Animaux')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Amis.es des Animaux
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt10]}
            onPress={() => handleButtonPress('Sportif.ve')}
            accessibilityLabel="Sportif.ve">
            <Text
              style={
                selectedAffinite.includes('Sportif.ve')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Sportif.ve
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 240, left: 40}}>
          <Text style={[Styles.textWhite2]}>Choix multiple.</Text>
        </View>

        <View style={[Styles.ViewBtn2, {top: 90}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() =>
              navigation.navigate('Rythme1', {
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
                userAffinites: selectedAffinite,
              })
            }
            accessibilityLabel="Continuer">
            <Text style={[Styles.textBtn9, {zIndex: 1, top: 45}]}>
              Continuer
            </Text>
            <Image
              style={[
                {
                  top: 0,
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

Affinite.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      routeName: PropTypes.string,
      userConsent: PropTypes.string,
      loveCoach: PropTypes.string,
      userEmail: PropTypes.string,
      userPhone: PropTypes.string,
      userCity: PropTypes.string,
      accesPosition: PropTypes.string,
      genre: PropTypes.string,
      userBirth: PropTypes.string,
      userSize: PropTypes.string,
      userLang: PropTypes.string,
      userSituation: PropTypes.string,
      userOrientation: PropTypes.string,
      userRecherche1: PropTypes.string,
      userRecherche2: PropTypes.string,
    }),
  }),
  navigation: PropTypes.object,
};

export default Affinite;

// import React, {useState} from 'react';
// import {
//     View,
//     Text,
//     Image,
//     ImageBackground,
//     TouchableOpacity,
// } from 'react-native';
// import Styles from '../../assets/style/Styles';

// export const Affinite = ({ route, navigation }) => {

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

//     // Constante permettant de récupérer les boutons sélectionnés par l'utilisateur
//     const [selectedAffinite, setSelectedAffinite] = useState([]);

//     const handleButtonPress = (value) => {
//         // Copie le tableau des boutons sélectionnés
//         let newSelectedAffinite = [...selectedAffinite];

//         if (newSelectedAffinite.includes(value)) {
//             // Si la valeur est déjà dans le tableau, la retire
//             newSelectedAffinite = newSelectedAffinite.filter(item => item !== value);
//         } else {
//             // Ajoute la valeur au tableau
//             newSelectedAffinite.push(value);
//         }

//         // Met à jour le tableau des boutons sélectionnés
//         setSelectedAffinite(newSelectedAffinite);
//         console.log('Affinité(s) : '+newSelectedAffinite)
//     }

//     return (
//     <View style={Styles.container}>
//         <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
//            <View style={[Styles.ViewText, Styles.mt100]}>
//                 <Text style={[Styles.textWhiteCenter]}>VOS AFFINITÉS ?</Text>
//             </View>

//                 <View style={[Styles.ViewBTNSelect2, { top:80}]}>
//                 <TouchableOpacity style={[Styles.btn]} onPress={() => handleButtonPress('Cuisine & Gourmet')} accessibilityLabel="Cuisine & Gourmet">
//                     <Text style={selectedAffinite.includes('Cuisine & Gourmet') ? Styles.btnSelected : Styles.btnNotSelected}>Cuisine & Gourmet</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt10]} onPress={() => handleButtonPress('Globe Trotter')} accessibilityLabel="Globe Trotter">
//                     <Text style={selectedAffinite.includes('Globe Trotter') ? Styles.btnSelected : Styles.btnNotSelected}>Globe Trotter</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt10]} onPress={() => handleButtonPress('Fan de Musée & Culture')} accessibilityLabel="Fan de Musée & Culture">
//                     <Text style={selectedAffinite.includes('Fan de Musée & Culture') ? Styles.btnSelected : Styles.btnNotSelected}>Fan de Musée & Culture</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt10]} onPress={() => handleButtonPress('Amis.es des Animaux')} accessibilityLabel="Rien de très sérieux">
//                     <Text style={selectedAffinite.includes('Amis.es des Animaux') ? Styles.btnSelected : Styles.btnNotSelected}>Amis.es des Animaux</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt10]} onPress={() => handleButtonPress('Sportif.ve')} accessibilityLabel="Sportif.ve">
//                     <Text style={selectedAffinite.includes('Sportif.ve') ? Styles.btnSelected : Styles.btnNotSelected}>Sportif.ve</Text>
//                 </TouchableOpacity>

//             </View>

//             <View style={{top:240, left:40}}>
//                 <Text style={[Styles.textWhite2]}>Choix multiple.</Text>
//             </View>

// <View style={[Styles.ViewBtn2, {top:90}]}>
//     <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Rythme1', {
//         userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: selectedAffinite})} accessibilityLabel="Continuer">
//         <Text style={[Styles.textBtn9, { zIndex:1, top:45}]}>Continuer</Text>
//         <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//     </TouchableOpacity>
// </View>
//         </ImageBackground>
//     </View>

//     )
// }

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

export const Recherche2 = ({route, navigation}) => {
  const {
    routeName,
    userConsent,
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
  } = route.params ?? {};

  const [selectedRecherhe2, setSelectedRecherche2] = useState([]);

  const handleButtonPress = value => {
    let newSelectedRecherche2 = [...selectedRecherhe2];

    if (newSelectedRecherche2.includes(value)) {
      newSelectedRecherche2 = newSelectedRecherche2.filter(
        item => item !== value,
      );
    } else {
      newSelectedRecherche2.push(value);
    }

    setSelectedRecherche2(newSelectedRecherche2);
    console.log('Recherche 2 : ' + newSelectedRecherche2);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, Styles.mt100]}>
          <Text style={[Styles.textTitleWhite3]}>VOTRE RECHERCHE ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect2, {top: 30}]}>
          <TouchableOpacity
            style={[Styles.btn]}
            onPress={() => handleButtonPress('Relation amoureuse')}
            accessibilityLabel="Relation amoureuse">
            <Text
              style={
                selectedRecherhe2.includes('Relation amoureuse')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Relation amoureuse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt10]}
            onPress={() => handleButtonPress('Long terme, OK pour court')}
            accessibilityLabel="Long terme, OK pour court">
            <Text
              style={
                selectedRecherhe2.includes('Long terme, OK pour court')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Long terme, OK pour court
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt10]}
            onPress={() => handleButtonPress('Court terme, OK pour long')}
            accessibilityLabel="Court terme, OK pour long">
            <Text
              style={
                selectedRecherhe2.includes('Court terme, OK pour long')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Court terme, OK pour long
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt10]}
            onPress={() => handleButtonPress('Rien de très sérieux')}
            accessibilityLabel="Rien de très sérieux">
            <Text
              style={
                selectedRecherhe2.includes('Rien de très sérieux')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Rien de très sérieux
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt10]}
            onPress={() => handleButtonPress('À me faire des amis.es')}
            accessibilityLabel="À me faire des amis.es">
            <Text
              style={
                selectedRecherhe2.includes('À me faire des amis.es')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              À me faire des amis.es
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt10]}
            onPress={() =>
              handleButtonPress('Développer mon réseau proféssionnel')
            }
            accessibilityLabel="Développer mon réseau proféssionnel">
            <Text
              style={
                selectedRecherhe2.includes(
                  'Développer mon réseau proféssionnel',
                )
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Développer mon réseau proféssionnel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt10]}
            onPress={() => handleButtonPress('Je ne sais pas trop')}
            accessibilityLabel="Je ne sais pas trop">
            <Text
              style={
                selectedRecherhe2.includes('Je ne sais pas trop')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Je ne sais pas trop
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 260, left: 40}}>
          <Text style={[Styles.textWhite2]}>Choix multiple.</Text>
        </View>

        <View style={[Styles.ViewBtn2, {top: 100}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() =>
              navigation.navigate('Affinite', {
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
                userRecherche2: selectedRecherhe2,
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

Recherche2.propTypes = {
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
    }),
  }),
  navigation: PropTypes.object,
};

// import React, {useState} from 'react';
// import {
//     View,
//     Text,
//     Image,
//     ImageBackground,
//     TouchableOpacity,
// } from 'react-native';
// import Styles from '../../assets/style/Styles';

// export const Recherche2 = ({ route, navigation }) => {

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

//     // Constante permettant de récupérer les boutons sélectionnés par l'utilisateur
//     const [selectedRecherhe2, setSelectedRecherche2] = useState([]);

//     const handleButtonPress = (value) => {
//         // Copie le tableau des boutons sélectionnés
//         let newSelectedRecherche2 = [...selectedRecherhe2];

//         if (newSelectedRecherche2.includes(value)) {
//             // Si la valeur est déjà dans le tableau, la retire
//             newSelectedRecherche2 = newSelectedRecherche2.filter(item => item !== value);
//         } else {
//             // Ajoute la valeur au tableau
//             newSelectedRecherche2.push(value);
//         }

//         // Met à jour le tableau des boutons sélectionnés
//         setSelectedRecherche2(newSelectedRecherche2);
//         console.log('Recherche 2 : '+newSelectedRecherche2)
//     }

//     return (
//     <View style={Styles.container}>
//         <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
//            <View style={[Styles.ViewText, Styles.mt100]}>
//                 <Text style={[Styles.textTitleWhite3]}>VOTRE RECHERCHE ?</Text>
//             </View>

//             <View style={[Styles.ViewBTNSelect2, {top:30}]}>
//                 <TouchableOpacity style={[Styles.btn]} onPress={() => handleButtonPress('Relation amoureuse')} accessibilityLabel="Relation amoureuse">
//                     <Text style={selectedRecherhe2.includes('Relation amoureuse') ? Styles.btnSelected : Styles.btnNotSelected}>Relation amoureuse</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt10]} onPress={() => handleButtonPress('Long terme, OK pour court')} accessibilityLabel="Long terme, OK pour court">
//                     <Text style={selectedRecherhe2.includes('Long terme, OK pour court') ? Styles.btnSelected : Styles.btnNotSelected}>Long terme, OK pour court</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt10]} onPress={() => handleButtonPress('Court terme, OK pour long')} accessibilityLabel="Court terme, OK pour long">
//                     <Text style={selectedRecherhe2.includes('Court terme, OK pour long') ? Styles.btnSelected : Styles.btnNotSelected}>Court terme, OK pour long</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt10]} onPress={() => handleButtonPress('Rien de très sérieux')} accessibilityLabel="Rien de très sérieux">
//                     <Text style={selectedRecherhe2.includes('Rien de très sérieux') ? Styles.btnSelected : Styles.btnNotSelected}>Rien de très sérieux</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt10]} onPress={() => handleButtonPress('À me faire des amis.es')} accessibilityLabel="À me faire des amis.es">
//                     <Text style={selectedRecherhe2.includes('À me faire des amis.es') ? Styles.btnSelected : Styles.btnNotSelected}>À me faire des amis.es</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt10]} onPress={() => handleButtonPress('Développer mon réseau proféssionnel')} accessibilityLabel="Développer mon réseau proféssionnel">
//                     <Text style={selectedRecherhe2.includes('Développer mon réseau proféssionnel') ? Styles.btnSelected : Styles.btnNotSelected}>Développer mon réseau proféssionnel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[Styles.btn, Styles.mt10]} onPress={() => handleButtonPress('Je ne sais pas trop')} accessibilityLabel="Je ne sais pas trop">
//                     <Text style={selectedRecherhe2.includes('Je ne sais pas trop') ? Styles.btnSelected : Styles.btnNotSelected}>Je ne sais pas trop</Text>
//                 </TouchableOpacity>

//             </View>

//             <View style={{top:260, left:40}}>
//                 <Text style={[Styles.textWhite2]}>Choix multiple.</Text>
//             </View>

//             <View style={[Styles.ViewBtn2, {top: 100}]}>
//                 <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Affinite', {
//                     userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: selectedRecherhe2})} accessibilityLabel="Continuer">
//                     <Text style={[Styles.textBtn9, { zIndex:1, top:45}]}>Continuer</Text>
//                     <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//                 </TouchableOpacity>
//             </View>
//         </ImageBackground>
//     </View>

//     )
// }

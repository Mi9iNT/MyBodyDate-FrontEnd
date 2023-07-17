import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';

export const RythmeDeVie2 = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
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
  const rythmeDeVie1 = route.params?.rythmeDeVie1.state ?? '';
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
  console.log('Affinité(s) : ', userAffinites);
  console.log('Rythme de vie 1 : ', rythmeDeVie1);

  // Constante permettant de récupérer les boutons sélectionnés par l'utilisateur
  const [selectedRythme2, setSelectedRythme2] = useState([]);

  const handleButtonPress = value => {
    // Copie le tableau des boutons sélectionnés
    let newSelectedRythme2 = [...selectedRythme2];

    if (newSelectedRythme2.includes(value)) {
      // Si la valeur est déjà dans le tableau, la retire
      newSelectedRythme2 = newSelectedRythme2.filter(item => item !== value);
    } else {
      // Ajoute la valeur au tableau
      newSelectedRythme2.push(value);
    }

    // Met à jour le tableau des boutons sélectionnés
    setSelectedRythme2(newSelectedRythme2);
    console.log('Rythme de vies 2 : ' + newSelectedRythme2);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 150}]}>
          <Text style={[Styles.textTitleWhite3]}>VOTRE RYTHME DE VIE ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect2, {top: 200}]}>
          <TouchableOpacity
            style={[Styles.btn]}
            onPress={() => handleButtonPress('Petit déjeuner')}
            accessibilityLabel="Petit déjeuner">
            <Text
              style={
                selectedRythme2.includes('Petit déjeuner')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Petit déjeuner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt20]}
            onPress={() => handleButtonPress('Brunch')}
            accessibilityLabel="Brunch">
            <Text
              style={
                selectedRythme2.includes('Brunch')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Brunch
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt20]}
            onPress={() => handleButtonPress('Déjeuner')}
            accessibilityLabel="Déjeuner">
            <Text
              style={
                selectedRythme2.includes('Déjeuner')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Déjeuner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt20]}
            onPress={() => handleButtonPress('Afterwork')}
            accessibilityLabel="Afterwork">
            <Text
              style={
                selectedRythme2.includes('Afterwork')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Afterwork
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.btn, Styles.mt20]}
            onPress={() => handleButtonPress('Diner')}
            accessibilityLabel="Diner">
            <Text
              style={
                selectedRythme2.includes('Diner')
                  ? Styles.btnSelected
                  : Styles.btnNotSelected
              }>
              Diner
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 300, left: 40}}>
          <Text style={[Styles.textWhite2]}>Choix multiple.</Text>
        </View>

        <View style={[Styles.ViewBtn2, {top: 130}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() =>
              navigation.navigate('Prenom', {
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
                rythmeDeVie2: selectedRythme2,
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

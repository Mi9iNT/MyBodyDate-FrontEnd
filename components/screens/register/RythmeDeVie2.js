import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {BtnNext} from '../../composants/BtnNext';
import StylesRythmeDeVie2 from '../../../assets/style/styleScreens/styleRegister/StyleRythmeDeVie2';

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

  const [buttonPressed, setButtonPressed] = useState();

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
  console.log(selectedRythme2);

  return (
    <View style={StylesRythmeDeVie2.container}>
      <ImageBackground
        style={StylesRythmeDeVie2.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesRythmeDeVie2.TxtTitle]}>VOTRE RYTHME DE VIE ?</Text>
        <View style={[StylesRythmeDeVie2.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesRythmeDeVie2.btnSelect]}
            onPress={() => handleButtonPress('Petit déjeuner')}
            accessibilityLabel="Petit déjeuner">
            <Text
              style={[
                StylesRythmeDeVie2.txtBtnSelect,
                {
                  color: selectedRythme2.includes('Petit déjeuner')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRythme2.includes('Petit déjeuner')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Petit déjeuner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRythmeDeVie2.btnSelect]}
            onPress={() => handleButtonPress('Brunch')}
            accessibilityLabel="Brunch">
            <Text
              style={[
                StylesRythmeDeVie2.txtBtnSelect,
                {
                  color: selectedRythme2.includes('Brunch')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRythme2.includes('Brunch')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Brunch
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRythmeDeVie2.btnSelect]}
            onPress={() => handleButtonPress('Déjeuner')}
            accessibilityLabel="Déjeuner">
            <Text
              style={[
                StylesRythmeDeVie2.txtBtnSelect,
                {
                  color: selectedRythme2.includes('Déjeuner')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRythme2.includes('Déjeuner')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Déjeuner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRythmeDeVie2.btnSelect]}
            onPress={() => handleButtonPress('Afterwork')}
            accessibilityLabel="Afterwork">
            <Text
              style={[
                StylesRythmeDeVie2.txtBtnSelect,
                {
                  color: selectedRythme2.includes('Afterwork')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRythme2.includes('Afterwork')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Afterwork
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRythmeDeVie2.btnSelect]}
            onPress={() => handleButtonPress('Diner')}
            accessibilityLabel="Diner">
            <Text
              style={[
                StylesRythmeDeVie2.txtBtnSelect,
                {
                  color: selectedRythme2.includes('Diner') ? '#0019A7' : '#FFF',
                  fontFamily: selectedRythme2.includes('Diner')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Diner
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesRythmeDeVie2.textWhite]}>Choix multiple.</Text>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Prenom'}
          txt={'Continuer'}
          background={'white'}
          top={150}
        />
      </ImageBackground>
    </View>
  );
};

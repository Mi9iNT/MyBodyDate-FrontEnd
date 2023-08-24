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
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 120}]}>
          <Text style={[Styles.textTitleWhite3]}>VOTRE RYTHME DE VIE ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect2, {top: 140}]}>
          <TouchableOpacity
            style={[
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Petit déjeuner')}
            accessibilityLabel="Petit déjeuner">
            <Text
              style={{
                color: selectedRythme2.includes('Petit déjeuner')
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedRythme2.includes('Petit déjeuner')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Petit déjeuner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Brunch')}
            accessibilityLabel="Brunch">
            <Text
              style={{
                color: selectedRythme2.includes('Brunch') ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily: selectedRythme2.includes('Brunch')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Brunch
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Déjeuner')}
            accessibilityLabel="Déjeuner">
            <Text
              style={{
                color: selectedRythme2.includes('Déjeuner')
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedRythme2.includes('Déjeuner')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Déjeuner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Afterwork')}
            accessibilityLabel="Afterwork">
            <Text
              style={{
                color: selectedRythme2.includes('Afterwork')
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedRythme2.includes('Afterwork')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Afterwork
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Diner')}
            accessibilityLabel="Diner">
            <Text
              style={{
                color: selectedRythme2.includes('Diner') ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily: selectedRythme2.includes('Diner')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Diner
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 280, left: 40}}>
          <Text style={[Styles.textWhite2, {fontSize: 12}]}>
            Choix multiple.
          </Text>
        </View>

        <View style={[Styles.ViewBtn2, {top: 130}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setButtonPressed('Continuer');
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
              });
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                Styles.textBtn9,
                {
                  zIndex: 1,
                  top: 40,
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[
                {
                  height: 56,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

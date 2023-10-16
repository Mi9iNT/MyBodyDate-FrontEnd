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
import StylesRythmeDeVie1 from '../../../assets/style/styleScreens/styleRegister/StyleRythmeDeVie1';

export const RythmeDeVie1 = ({route, navigation}) => {
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

  const [buttonPressed, setButtonPressed] = useState();

  // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
  const [rythmeDeVie1, setState] = useState('');

  const handleRythmeSelection = selectedRythme => {
    setState({state: selectedRythme});
  };

  console.log('Rythme de Vie 1 : ' + rythmeDeVie1.state);

  return (
    <View style={StylesRythmeDeVie1.container}>
      <ImageBackground
        style={StylesRythmeDeVie1.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesRythmeDeVie1.TxtTitle]}>VOTRE RYTHME DE VIE ?</Text>

        <View style={[StylesRythmeDeVie1.ViewBTNSelect]}>
          <Text style={[StylesRythmeDeVie1.textWhite]}>Vous êtes plutôt ?</Text>
          <TouchableOpacity
            style={[StylesRythmeDeVie1.btnSelect]}
            onPress={() => setState({state: 'Matinale'})}
            accessibilityLabel="Matinale">
            <Text
              style={[
                StylesRythmeDeVie1.txtBtnSelect,
                {
                  color: rythmeDeVie1.state === 'Matinale' ? '#0019A7' : '#FFF',
                  fontFamily:
                    rythmeDeVie1.state === 'Matinale'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                },
              ]}>
              Matinale
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRythmeDeVie1.btnSelect]}
            onPress={() => setState({state: 'Couche tard'})}
            accessibilityLabel="Couche tard">
            <Text
              style={[
                StylesRythmeDeVie1.txtBtnSelect,
                {
                  color:
                    rythmeDeVie1.state === 'Couche tard' ? '#0019A7' : '#FFF',
                  fontFamily:
                    rythmeDeVie1.state === 'Couche tard'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                },
              ]}>
              Couche tard
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesRythmeDeVie1.textWhite1]}>Choix unique.</Text>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Rythme2'}
          txt={'Continuer'}
          background={'white'}
          top={340}
        />
      </ImageBackground>
    </View>
  );
};

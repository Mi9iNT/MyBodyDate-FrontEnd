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
import {BtnNext} from '../../composants/BtnNext';
import StylesAffinite from '../../../assets/style/styleScreens/styleRegister/StyleAffinite';

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

  const [buttonPressed, setButtonPressed] = useState();

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
    <View style={StylesAffinite.container}>
      <ImageBackground
        style={StylesAffinite.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesAffinite.TxtTitle]}>VOS AFFINITÉS ?</Text>

        <View style={[StylesAffinite.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Cuisine & Gourmet')}
            accessibilityLabel="Cuisine & Gourmet">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Cuisine & Gourmet')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Cuisine & Gourmet')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Cuisine & Gourmet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Globe Trotter')}
            accessibilityLabel="Globe Trotter">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Globe Trotter')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Globe Trotter')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Globe Trotter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Fan de Musée & Culture')}
            accessibilityLabel="Fan de Musée & Culture">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Fan de Musée & Culture')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes(
                    'Fan de Musée & Culture',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Fan de Musée & Culture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Amis.es des Animaux')}
            accessibilityLabel="Rien de très sérieux">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Amis.es des Animaux')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Amis.es des Animaux')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Amis.es des Animaux
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Sportif.ve')}
            accessibilityLabel="Sportif.ve">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Sportif.ve')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Sportif.ve')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Sportif.ve
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesAffinite.textWhite]}>Choix multiple.</Text>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Rythme1'}
          txt={'Continuer'}
          background={'white'}
          top={170}
        />
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
      userRecherche2: PropTypes.array,
      userAffinites: PropTypes.array,
    }),
  }),
  navigation: PropTypes.object,
};

export default Affinite;

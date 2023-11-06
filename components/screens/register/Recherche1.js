import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import {BtnNext} from '../../composants/BtnNext';
import StylesRecherche1 from '../../../assets/style/styleScreens/styleRegister/StyleRecherche1';

export const Recherche1 = ({route, navigation}) => {
  const [recherche1, setState] = useState('');

  const [buttonPressed, setButtonPressed] = useState();

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
  console.log('Recherche1 : ', recherche1);
  const handleRecherche1 = value => {
    setState(value);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesRecherche1.TxtTitle]}>VOTRE RECHERCHE ?</Text>

        <View style={[StylesRecherche1.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesRecherche1.btnSelect]}
            onPress={() => handleRecherche1('Homme')}
            accessibilityLabel="Homme">
            <Text
              style={[
                StylesRecherche1.txtBtnSelect,
                {
                  color: recherche1 === 'Homme' ? '#0019A7' : '#FFF',
                  fontFamily:
                    recherche1 === 'Homme' ? 'Comfortaa-Bold' : 'Comfortaa',
                },
              ]}>
              Homme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche1.btnSelect]}
            onPress={() => handleRecherche1('Femme')}
            accessibilityLabel="Femme">
            <Text
              style={[
                StylesRecherche1.txtBtnSelect,
                {
                  color: recherche1 === 'Femme' ? '#0019A7' : '#FFF',
                  fontFamily:
                    recherche1 === 'Femme' ? 'Comfortaa-Bold' : 'Comfortaa',
                },
              ]}>
              Femme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche1.btnSelect]}
            onPress={() => handleRecherche1('Tout le monde')}
            accessibilityLabel="Tout le monde">
            <Text
              style={[
                StylesRecherche1.txtBtnSelect,
                {
                  color: recherche1 === 'Tout le monde' ? '#0019A7' : '#FFF',
                  fontFamily:
                    recherche1 === 'Tout le monde'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                },
              ]}>
              Tout le monde
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesRecherche1.textWhite]}>Choix unique.</Text>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Recherche2'}
          txt={'Continuer'}
          background={'white'}
          top={280}
        />
      </ImageBackground>
    </View>
  );
};

Recherche1.propTypes = {
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

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
import StylesFelicitation from '../../../assets/style/styleScreens/styleRegister/StyleFelicitation';

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

  const [buttonPressed, setButtonPressed] = useState('');

  return (
    <ImageBackground
      style={[StylesFelicitation.bgGradient]}
      source={require('../../../assets/images/bg-congrats.png')}>
      <View style={[Styles.ViewText, {top: 100, left: 0}]}>
        <TouchableOpacity
          style={[{left: 0}]}
          onPress={() =>
            navigation.navigate('ProfilMeRA', {
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
          <Text style={[StylesFelicitation.TxtBtn]}>Découvrir les profils</Text>
        </TouchableOpacity>
        <Text style={[StylesFelicitation.TxtTitle]}>FÉLICITATIONS !{'\n'}</Text>
        <Text style={[StylesFelicitation.txtWhite]}>
          <Text style={[{color: '#0019A7'}]}>{userPrenom}</Text>, VOUS AVEZ 7
          JOURS POUR AVOIR UN PROFIL VÉRIFIÉ
        </Text>
        <Text style={[StylesFelicitation.txtWhite2]}>
          Notre site de rencontre n’accepte que des profils vérifiés dans les 7
          jours suivant l’inscription. Au-delà de ce délai, votre compte est
          suspendu
        </Text>
        <Text style={[StylesFelicitation.txtWhite3]}>
          Nous sommes conforme au RGPD, règlement général à la protection des
          données.
        </Text>
      </View>
      <View style={[{top: -20}]}>
        <TouchableOpacity
          onPress={() => {
            setButtonPressed('Continuer');
            navigation.navigate('Tabs', {
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
            });
          }}
          accessibilityLabel="Vérifier mon profil">
          <Text
            style={[
              StylesFelicitation.textBtn2,
              {
                color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
              },
            ]}>
            Vérifier mon profil
          </Text>
          <Image
            style={[StylesFelicitation.imgBtn]}
            source={
              buttonPressed === 'Continuer'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

Felicitations.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

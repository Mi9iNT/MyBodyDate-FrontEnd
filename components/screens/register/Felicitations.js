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
    <View style={Styles.container}>
      <ImageBackground
        style={[Styles.bgGradient]}
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
            <Text
              style={[
                Styles.textBtn3,
                {bottom: 60, fontSize: 16, fontFamily: 'Comfortaa'},
              ]}>
              Découvrir les profils
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              Styles.textTitleWhite2,
              {bottom: 20, left: 30, fontFamily: 'Comfortaa-Bold'},
            ]}>
            FÉLICITATIONS !{'\n'}
          </Text>
          <Text
            style={[
              {
                bottom: 40,
                color: '#FFF',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 24,
                fontStyle: 'normal',
                left: 30,
                width: '80%',
              },
            ]}>
            <Text style={[{color: '#0019A7'}]}>{userPrenom}</Text>, VOUS
            AVEZ 7 JOURS POUR AVOIR UN PROFIL VÉRIFIÉ
          </Text>
          <Text
            style={[
              Styles.textWhite2,
              {top: 150, width: '80%', alignSelf: 'center', fontSize: 13},
            ]}>
            Notre site de rencontre n’accepte que des profils vérifiés dans les
            7 jours suivant l’inscription. Au-delà de ce délai, votre compte est
            suspendu
          </Text>
          <Text
            style={[
              Styles.textWhite2,
              {top: 100, width: '80%', alignSelf: 'center', fontSize: 13},
            ]}>
            Nous sommes conforme au RGPD, règlement général à la protection des
            données.
          </Text>
        </View>
        <View style={[{top: -20}]}>
          <TouchableOpacity
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('ProfilMeRA', {
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
                Styles.textBtn9,
                {
                  zIndex: 1,
                  top: 20,
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Vérifier mon profil
            </Text>
            <Image
              style={[
                {
                  top: -20,
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

Felicitations.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import ConfirmHcaptcha from '@hcaptcha/react-native-hcaptcha';
import Lottie from 'lottie-react-native';
import Styles from '../../../assets/style/Styles';

const siteKey = 'e8489cc3-b124-4243-b0bd-abd6d596e104';
const baseUrl = 'https://hcaptcha.com';

export const ConfirmationCompte = ({route, navigation}) => {
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
  const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
  const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
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
  console.log('Rythme de vie 2 : ', rythmeDeVie2);
  console.log('Prénom : ', userPrenom);

  const [buttonPressed, setButtonPressed] = useState('');

  // Constantes concernant la Modal Recaptcha
  const [modalRecaptchaVisible, setModalRecaptchaVisible] = useState(true);

  const [code, setCode] = useState(null);
  const captchaForm = useRef(null);

  const onMessage = event => {
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        console.log('Verified code:', event.nativeEvent.data);
        captchaForm.current.hide();
        setCode(event.nativeEvent.data);
        return;
      } else {
        setCode(event.nativeEvent.data);
        console.log('Verified code:', event.nativeEvent.data);
        setTimeout(() => {
          captchaForm.current.hide();
          // do whatever you want here
        }, 1000);
      }
    }
  };

  function testReached() {
    if (!code) {
      return (
        <>
          <Lottie
            style={[
              {
                bottom: 5,
                width: '80%',
                alignSelf: 'center',
                resizeMode: 'contain',
              },
            ]}
            source={require('../../../assets/animations/AnimRefuserCaptcha.json')}
            autoPlay
            loop
          />
          <Text
            style={[
              Styles.textWhite2,
              {
                top: 10,
                alignSelf: 'center',
                textAlign: 'center',
                color: '#A70000',
                fontFamily: 'Comfortaa-Bold',
              },
            ]}>
            Test non confirmé
          </Text>
        </>
      );
    } else {
      return (
        <>
          <Lottie
            style={[
              {
                bottom: 30,
                width: '80%',
                alignSelf: 'center',
                resizeMode: 'contain',
              },
            ]}
            source={require('../../../assets/animations/AnimValiderCaptcha.json')}
            autoPlay
            loop
          />
          <Text
            style={[
              Styles.textWhite2,
              {
                bottom: 20,
                alignSelf: 'center',
                textAlign: 'center',
                color: '#0019A7',
                fontFamily: 'Comfortaa-Bold',
              },
            ]}>
            Test confirmé
          </Text>
        </>
      );
    }
  }

  return (
    <View
      innerRef={ref => {
        this.scroll = ref;
      }}
      style={[Styles.container2, {top: 0}]}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 100}]}>
          <Text style={[Styles.textWhiteCenter]}>MON COMPTE</Text>
        </View>
        <View style={[Styles.ViewText2, {top: 100}]}>
          <Text
            style={[
              Styles.textWhite4,
              {top: 0, alignSelf: 'center', width: '80%', fontSize: 15},
            ]}>
            Prouvez que vous n&apos;êtes pas un robot.
          </Text>
          <Text
            style={[
              Styles.textWhite4,
              {top: 10, alignSelf: 'center', width: '80%', fontSize: 15},
            ]}>
            Pour cela, réalisez ce test pour pouvoir poursuivre.
          </Text>
          {!code && (
            <TouchableOpacity
              style={[{top: 50}]}
              onPress={() => {
                captchaForm.current.show();
              }}>
              <Text style={[Styles.textBtn6, {zIndex: 1, top: 15}]}>
                Faire le test
              </Text>
              <Image
                style={[
                  {
                    top: -30,
                    width: '80%',
                    height: 60,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../../assets/boutons/Bouton-Rouge.png')}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={[{top: 130}]}>
          <ConfirmHcaptcha
            ref={captchaForm}
            siteKey={siteKey}
            baseUrl={baseUrl}
            languageCode="fr"
            onMessage={onMessage}
          />
          {testReached()}
          <View style={[{top: -170}]}>
            <TouchableOpacity
              onPress={() => {
                setButtonPressed('Continuer');
                navigation.navigate('Ajouter photo', {
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
                  buttonPressed
                    ? require('../../../assets/boutons/Bouton-Rouge.png')
                    : require('../../../assets/boutons/Bouton-Blanc.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

ConfirmationCompte.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default ConfirmationCompte;

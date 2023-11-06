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
import {BtnNext} from '../../composants/BtnNext';
import StylesConfirmationCompte from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationCompte';

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
            style={[StylesConfirmationCompte.lottie]}
            source={require('../../../assets/animations/AnimRefuserCaptcha.json')}
            autoPlay
            loop
          />
          <Text style={[StylesConfirmationCompte.lottieText]}>
            Test non confirmé
          </Text>
        </>
      );
    } else {
      return (
        <>
          <Lottie
            style={[StylesConfirmationCompte.lottie2]}
            source={require('../../../assets/animations/AnimValiderCaptcha.json')}
            autoPlay
            loop
          />
          <Text style={[StylesConfirmationCompte.lottieText2]}>
            Test confirmé
          </Text>
        </>
      );
    }
  }

  return (
    <ImageBackground
      style={StylesConfirmationCompte.bgGradient}
      source={require('../../../assets/images/Background.png')}>
      <Text style={[StylesConfirmationCompte.TxtTitle]}>MON COMPTE</Text>
      <Text style={[StylesConfirmationCompte.textWhite]}>
        Prouvez que vous n&apos;êtes pas un robot.
      </Text>
      <Text style={[StylesConfirmationCompte.textWhite2]}>
        Pour cela, réalisez ce test pour pouvoir poursuivre.
      </Text>
      <View style={[{top: 280}]}>
        {!code && (
          <TouchableOpacity
            style={[{top: 0}]}
            onPress={() => {
              captchaForm.current.show();
            }}>
            <Text style={[StylesConfirmationCompte.textBtn]}>
              Faire le test
            </Text>
            <Image
              style={[StylesConfirmationCompte.imgBtn]}
              source={require('../../../assets/boutons/Bouton-Rouge.png')}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={[{top: 400}]}>
        <ConfirmHcaptcha
          ref={captchaForm}
          siteKey={siteKey}
          baseUrl={baseUrl}
          languageCode="fr"
          onMessage={onMessage}
        />
        {testReached()}
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Ajouter photo'}
          txt={'Continuer'}
          background={'white'}
          top={code ? 40 : -40}
        />
      </View>
    </ImageBackground>
  );
};

ConfirmationCompte.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default ConfirmationCompte;

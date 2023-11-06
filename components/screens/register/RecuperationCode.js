import {React, findNodeHandle, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import StylesLoginEmail from '../../../assets/style/StyleComposants/styleLogin/StyleLoginEmail';
import StylesRecuperationCode from '../../../assets/style/styleScreens/styleRegister/StyleRecuperationCode';

export const RecuperationCode = ({route, navigation}) => {
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
  const userVoice = route.params?.userVoice ?? '';

  const [userCode, setCode] = useState();
  console.log('Code récupéré: ' + userCode);

  // Condition du contenu de txtCode selon le paramètre de route Connexion numero ou email
  if (routeChoice === 'Connexion numero') {
    txtCode = (
      <Text>
        Si vous n&apos;avez pas reçu votre code,{' '}
        <TouchableOpacity
          style={[{}]}
          onPress={() =>
            navigation.navigate('Compte', {routeName: routeChoice})
          }>
          <Text
            style={[
              Styles.textWhite3,
              {
                position: 'relative',
                top: 4,
                fontSize: 12,
                textDecorationLine: 'underline',
              },
            ]}>
            réessayez
          </Text>
        </TouchableOpacity>
        .
      </Text>
    );
  } else if (routeChoice === "S'inscrire par numero") {
    txtCode = (
      <Text style={{fontSize: 12}}>
        Si vous n&apos;avez pas reçu votre code,{' '}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Compte', {routeName: routeChoice})
          }>
          <Text
            style={[
              Styles.textWhite3,
              {
                position: 'relative',
                top: 4,
                textDecorationLine: 'underline',
                fontSize: 12,
              },
            ]}>
            réessayez
          </Text>
        </TouchableOpacity>
        .
      </Text>
    );
  } else if (routeChoice === "S'inscrire par mail") {
    txtCode = (
      <Text style={{fontSize: 12}}>
        Si vous n&apos;avez pas reçu d&apos;email, consultez vos spams, ou{' '}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Compte', {routeName: routeChoice})
          }>
          <Text
            style={[
              Styles.textWhite3,
              {
                position: 'relative',
                top: 4,
                textDecorationLine: 'underline',
                fontSize: 12,
              },
            ]}>
            réessayez
          </Text>
        </TouchableOpacity>
        .
      </Text>
    );
  } else if (routeChoice === 'Connexion mail') {
    txtCode = (
      <Text style={{fontSize: 12}}>
        Si vous n&apos;avez pas reçu d&apos;email, consultez vos spams, ou{' '}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Compte', {routeName: routeChoice})
          }>
          <Text
            style={[
              Styles.textWhite3,
              {
                position: 'relative',
                top: 4,
                textDecorationLine: 'underline',
                fontSize: 12,
              },
            ]}>
            réessayez
          </Text>
        </TouchableOpacity>
        .
      </Text>
    );
  }

  let selectedRoute;
  switch (routeChoice) {
    case 'Connexion mail':
      selectedRoute = 'Tabs';
      break;
    case "S'inscrire par mail":
      selectedRoute = 'Confirmation compte';
      break;
    case "S'inscrire par numero":
      selectedRoute = 'Confirmation compte';
      break;
    case 'Se connecter':
      selectedRoute = 'Tabs';
      break;
    case 'Connexion numero':
      selectedRoute = 'Tabs';
      break;
    default:
      selectedRoute = 'Confirmation compte';
  }

  return (
    <KeyboardAwareScrollView
      innerRef={ref => {
        this.scroll = ref;
      }}
      style={[StylesRecuperationCode.container]}>
      <ImageBackground
        style={[StylesRecuperationCode.bgGradient]}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesRecuperationCode.TxtTitle]}>VOTRE CODE ?</Text>
        <SafeAreaView style={[StylesRecuperationCode.ViewInput]}>
          <TextInput
            style={StylesRecuperationCode.TextInput}
            keyboardType="numeric"
            placeholder="Votre code"
            placeholderTextColor="#FFF"
            maxLength={10}
            onChangeText={userCode => setCode(userCode)}
            value={userCode}
          />
          <Text style={[StylesRecuperationCode.textWhite]}>{txtCode}</Text>
        </SafeAreaView>

        <TouchableOpacity
          style={[StylesRecuperationCode.btn]}
          onPress={() =>
            navigation.navigate(selectedRoute, {
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
            })
          }
          accessibilityLabel="Continuer">
          <Text style={[StylesRecuperationCode.textBtn]}>Continuer</Text>
          <Image
            style={[StylesRecuperationCode.imgBtn]}
            source={require('../../../assets/boutons/Bouton-Blanc.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};
RecuperationCode.propTypes = {
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
      rythmeDeVie1: PropTypes.string,
      rythmeDeVie2: PropTypes.string,
      userPrenom: PropTypes.string,
    }),
  }),
  navigation: PropTypes.object,
};

import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Styles from '../../../assets/style/Styles';
import PropTypes from 'prop-types';

export const Compte = ({route, navigation}) => {
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

  const [errorMessage, setErrorMessage] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorNumero, setErrorNumero] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [password, setPassword] = useState('');

  const [buttonPressed, setButtonPressed] = useState('');

  const validateEmail = inputEmail => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrorEmail(
      emailRegex.test(inputEmail)
        ? ''
        : 'Veuillez entrer une adresse e-mail valide.',
    );
  };

  const validatePhone = numero => {
    const phoneRegex = /^\+?\d{10}$/;
    setErrorNumero(
      phoneRegex.test(numero)
        ? ''
        : 'Numéro de téléphone invalide. Veuillez respecter le format "+33 0 00 00 00"',
    );
  };

  const validatePassword = inputPassword => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&?!])[A-Za-z\d@#$%^&?!]{8,}$/;
    setErrorPassword(
      passwordRegex.test(inputPassword)
        ? ''
        : 'Le mot de passe doit contenir : au moins une lettre majuscule, au moins une lettre minuscule, au moins un chiffre, au moins un caractère spécial (@#$%^&?!), et au moins huit (8) caractères.',
    );
  };

  let selectedRoute;
  switch (routeChoice) {
    case 'Recuperation code':
      selectedRoute = 'Recuperation code';
      break;
    case "S'inscrire par mail":
      selectedRoute = 'Confirmation compte';
      break;
    case "S'inscrire par numero":
      selectedRoute = 'Recuperation code';
      break;
    case 'Connexion mail':
      selectedRoute = 'Recuperation code';
      break;
    case 'Connexion numero':
      selectedRoute = 'Recuperation code';
      break;
    default:
      selectedRoute = 'Confirmation compte';
  }

  console.log(routeChoice);

  return (
    <KeyboardAwareScrollView
      innerRef={ref => {
        this.scroll = ref;
      }}
      style={[Styles.container2, {top: 0}]}>
      <ImageBackground
        style={[Styles.bgGradient, {top: 0, height: 810}]}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText6]}>
          <Text style={[Styles.textWhiteCenter, {top: 120}]}>MON COMPTE</Text>
        </View>
        {routeChoice === "S'inscrire par numero" ? (
          <SafeAreaView style={[{bottom: 100}]}>
            <TextInput
              style={[Styles.TextInputEmail, {position: 'relative', top: 0}]}
              keyboardType="numeric"
              placeholder="Votre numéro"
              placeholderTextColor="#FFF"
              maxLength={10}
              onChangeText={numero => setNumero(numero)}
              onBlur={() => validatePhone(numero)}
              value={numero}
            />
            {errorNumero ? (
              <Text
                style={[
                  Styles.textError,
                  {top: 10, width: '70%', fontSize: 12},
                ]}>
                {errorNumero}
              </Text>
            ) : (
              <Text
                style={[
                  Styles.textWhite4,
                  {top: 10, width: '70%', fontSize: 12},
                ]}>
                Veuillez entrer un numéro de téléphone valide
              </Text>
            )}
          </SafeAreaView>
        ) : routeChoice === "Connexion numero" ? (
          <SafeAreaView style={[{bottom: 100}]}>
            <TextInput
              style={[Styles.TextInputEmail, {position: 'relative', top: 0}]}
              keyboardType="numeric"
              placeholder="Votre numéro"
              placeholderTextColor="#FFF"
              maxLength={10}
              onChangeText={numero => setNumero(numero)}
              onBlur={() => validatePhone(numero)}
              value={numero}
            />
            {errorNumero ? (
              <Text
                style={[
                  Styles.textError,
                  {top: 10, width: '70%', fontSize: 12},
                ]}>
                {errorNumero}
              </Text>
            ) : (
              <Text
                style={[
                  Styles.textWhite4,
                  {top: 10, width: '70%', fontSize: 12},
                ]}>
                Veuillez entrer un numéro de téléphone valide
              </Text>
            )}
          </SafeAreaView>
        ) : routeChoice === 'Connexion mail' ?(
          <SafeAreaView style={[{bottom: errorEmail ? 50 : 0}]}>
            <TextInput
              style={[Styles.TextInputEmail, {top: 0}]}
              keyboardType="email-address"
              placeholder="Votre email"
              placeholderTextColor="#FFF"
              maxLength={100}
              onChangeText={text => setEmail(text)}
              onBlur={() => validateEmail(email)}
              value={email}
            />
            {errorEmail ? (
              <Text
                style={[
                  Styles.textError,
                  {top: 10, fontFamily: 'Comfortaa-Bold', fontSize: 12},
                ]}>
                {errorEmail}
              </Text>
            ) : (
              <Text
                style={[
                  Styles.textWhite4,
                  {top: 10, left: 30, width: '80%', fontSize: 12},
                ]}>
                Allez dans votre boîte de messagerie pour confirmer votre
                e-mail.
              </Text>
            )}

            <TextInput
              style={[Styles.TextInputPassword, {top: 30}]}
              keyboardType="default"
              placeholder="Votre mot de passe"
              placeholderTextColor="#FFF"
              maxLength={100}
              onBlur={() => validatePassword(password)}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
            {errorPassword ? (
              <Text
                style={[
                  Styles.textError2,
                  {top: 40, right: 20, width: '60%', fontSize: 12},
                ]}>
                {errorPassword}
              </Text>
            ) : (
              <Text
                style={[
                  Styles.textWhite4,
                  {top: 50, left: 30, width: '80%', fontSize: 12},
                ]}>
                Pour garantir la sécurité de votre{'\n'}mot de passe, il doit
                contenir{'\n'}:{'\n'}-au moins une lettre majuscule{'\n'}-au
                moins une lettre minuscule{'\n'}-au moins un chiffre{'\n'}-au
                moins un caractère spéciale{'\n'}(@#$%^&?!){'\n'}-au moins huit
                (8) caractères
              </Text>
            )}
          </SafeAreaView>
        ): routeChoice ===  "S'inscrire par mail" ?(
          <SafeAreaView style={[{bottom: errorEmail ? 50 : 0}]}>
            <TextInput
              style={[Styles.TextInputEmail, {top: 0}]}
              keyboardType="email-address"
              placeholder="Votre email"
              placeholderTextColor="#FFF"
              maxLength={100}
              onChangeText={text => setEmail(text)}
              onBlur={() => validateEmail(email)}
              value={email}
            />
            {errorEmail ? (
              <Text
                style={[
                  Styles.textError,
                  {top: 10, fontFamily: 'Comfortaa-Bold', fontSize: 12},
                ]}>
                {errorEmail}
              </Text>
            ) : (
              <Text
                style={[
                  Styles.textWhite4,
                  {top: 10, left: 30, width: '80%', fontSize: 12},
                ]}>
                Allez dans votre boîte de messagerie pour confirmer votre
                e-mail.
              </Text>
            )}

            <TextInput
              style={[Styles.TextInputPassword, {top: 30}]}
              keyboardType="default"
              placeholder="Votre mot de passe"
              placeholderTextColor="#FFF"
              maxLength={100}
              onBlur={() => validatePassword(password)}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
            {errorPassword ? (
              <Text
                style={[
                  Styles.textError2,
                  {top: 40, right: 20, width: '60%', fontSize: 12},
                ]}>
                {errorPassword}
              </Text>
            ) : (
              <Text
                style={[
                  Styles.textWhite4,
                  {top: 50, left: 30, width: '80%', fontSize: 12},
                ]}>
                Pour garantir la sécurité de votre{'\n'}mot de passe, il doit
                contenir{'\n'}:{'\n'}-au moins une lettre majuscule{'\n'}-au
                moins une lettre minuscule{'\n'}-au moins un chiffre{'\n'}-au
                moins un caractère spéciale{'\n'}(@#$%^&?!){'\n'}-au moins huit
                (8) caractères
              </Text>
            )}
          </SafeAreaView>
        ): (
          <SafeAreaView style={[{bottom: errorEmail ? 50 : 0}]}>
            <TextInput
              style={[Styles.TextInputEmail, {top: 0}]}
              keyboardType="email-address"
              placeholder="Votre email"
              placeholderTextColor="#FFF"
              maxLength={100}
              onChangeText={text => setEmail(text)}
              onBlur={() => validateEmail(email)}
              value={email}
            />
            {errorEmail ? (
              <Text
                style={[
                  Styles.textError,
                  {top: 10, fontFamily: 'Comfortaa-Bold', fontSize: 12},
                ]}>
                {errorEmail}
              </Text>
            ) : (
              <Text
                style={[
                  Styles.textWhite4,
                  {top: 10, left: 30, width: '80%', fontSize: 12},
                ]}>
                Allez dans votre boîte de messagerie pour confirmer votre
                e-mail.
              </Text>
            )}

            <TextInput
              style={[Styles.TextInputPassword, {top: 30}]}
              keyboardType="default"
              placeholder="Votre mot de passe"
              placeholderTextColor="#FFF"
              maxLength={100}
              onBlur={() => validatePassword(password)}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
            {errorPassword ? (
              <Text
                style={[
                  Styles.textError2,
                  {top: 40, right: 20, width: '60%', fontSize: 12},
                ]}>
                {errorPassword}
              </Text>
            ) : (
              <Text
                style={[
                  Styles.textWhite4,
                  {top: 50, left: 30, width: '80%', fontSize: 12},
                ]}>
                Pour garantir la sécurité de votre{'\n'}mot de passe, il doit
                contenir{'\n'}:{'\n'}-au moins une lettre majuscule{'\n'}-au
                moins une lettre minuscule{'\n'}-au moins un chiffre{'\n'}-au
                moins un caractère spéciale{'\n'}(@#$%^&?!){'\n'}-au moins huit
                (8) caractères
              </Text>
            )}
          </SafeAreaView>
        )}

        <View style={{top: 100, left: 40}}>
          <Text style={[Styles.textWhite2, {fontSize: 12}]}>Choix unique.</Text>
        </View>

        <View style={{bottom: 50}}>
          <TouchableOpacity
            accessibilityLabel="Continuer"
            onPress={() => {
              validateEmail(email);
              validatePassword(password);
              validatePhone(numero);
              setButtonPressed('Continuer');
              if ((!errorPassword && !errorEmail) || !errorNumero) {
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
                });
              } else if (errorEmail) {
                setErrorMessage(
                  'Veuillez entrer une adresse e-mail et un mot de passe valide.',
                );
              } else {
                setErrorNumero(
                  'Numéro de téléphone invalide. Veuillez respecter le format "+33 0 00 00 00"',
                );
              }
            }}>
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
              source={buttonPressed === 'Continuer' ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

Compte.propTypes = {
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

export default Compte;

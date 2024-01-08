import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Styles from '../../../assets/style/Styles';
import StylesCompte from '../../../assets/style/styleScreens/styleRegister/StyleCompte';
import RegisterNumero from '../../composants/register/RegisterNumero';
import RegisterEmail from '../../composants/register/RegisterEmail';
import LoginEmail from '../../composants/login/LoginEmail';
import LoginNumero from '../../composants/login/LoginNumero';
import {storeData, getData} from '../../../service/storage';

export const Compte = ({navigation}) => {
  useEffect(() => {
    handleGetRoute();
    handleGetEmail();
    handleGetNumero();
  }, []);

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetRoute = async () => {
    try {
      const routeChoice = await getData('route_choice');
      setRouteChoice(routeChoice || '');
      // console.log('route_choice : ' + routeChoice);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetEmail = async () => {
    try {
      const userEMail = await getData('email');
      setEmail(userEMail || '');
      // console.log('Email : ' + userEmail);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetNumero = async () => {
    try {
      const userPhone = await getData('phone');
      setNumero(userPhone || '');
      // console.log('Téléphone : ' + userPhone);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorNumero, setErrorNumero] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [password, setPassword] = useState('');

  const [routeChoice, setRouteChoice] = useState('');

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
    case 'recuperation code':
      selectedRoute = 'Recuperation code';
      break;
    case 'inscription email':
      selectedRoute = 'Confirmation compte';
      break;
    case 'inscription numero':
      selectedRoute = 'Recuperation code';
      break;
    case 'connexion email':
      selectedRoute = 'Recuperation code';
      break;
    case 'connexion numero':
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
      style={[StylesCompte.container, {top: 0}]}>
      <ImageBackground
        style={[StylesCompte.bgGradient]}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesCompte.ViewText]}>
          <Text style={[StylesCompte.TxtTitle]}>MON COMPTE</Text>
        </View>
        <View style={[{flex: 2, top: 180}]}>
          {routeChoice === 'inscription numero' ? (
            <RegisterNumero
              selectedRoute={selectedRoute}
              navigation={navigation}
            />
          ) : routeChoice === 'connexion numero' ? (
            <LoginNumero
              selectedRoute={selectedRoute}
              navigation={navigation}
            />
          ) : routeChoice === 'connexion email' ? (
            <LoginEmail selectedRoute={selectedRoute} navigation={navigation} />
          ) : routeChoice === 'inscription email' ? (
            <RegisterEmail
              selectedRoute={selectedRoute}
              navigation={navigation}
            />
          ) : null}
        </View>

        {/* <View style={{top: 100, left: 40}}>
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
                navigation.navigate(selectedRoute);
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
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default Compte;

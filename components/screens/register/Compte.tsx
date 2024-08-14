import React, {useState, useEffect, Ref, useRef} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import StylesCompte from '../../../assets/style/styleScreens/styleRegister/StyleCompte';
import RegisterNumero from '../../composants/register/RegisterNumero';
import RegisterEmail from '../../composants/register/RegisterEmail';
import LoginEmail from '../../composants/login/LoginEmail';
import LoginNumero from '../../composants/login/LoginNumero';
import {storeData, getData} from '../../../service/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Compte'>;
};

export const Compte: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetRoute();
    handleGetEmail();
    handleGetNumero();
  }, []);

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

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [errorNumero, setErrorNumero] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [routeChoice, setRouteChoice] = useState<string>('');

  const [buttonPressed, setButtonPressed] = useState<boolean>();

  const scrollRef = useRef<KeyboardAwareScrollView>(null);

  const validateEmail = (inputEmail: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrorEmail(
      emailRegex.test(inputEmail)
        ? ''
        : 'Veuillez entrer une adresse e-mail valide.',
    );
  };

  const validatePhone = (numero: string) => {
    const phoneRegex = /^\+?\d{10}$/;
    setErrorNumero(
      phoneRegex.test(numero)
        ? ''
        : 'Numéro de téléphone invalide. Veuillez respecter le format "+33 0 00 00 00"',
    );
  };

  const validatePassword = (inputPassword: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&?!])[A-Za-z\d@#$%^&?!]{8,}$/;
    setErrorPassword(
      passwordRegex.test(inputPassword)
        ? ''
        : 'Le mot de passe doit contenir : au moins une lettre majuscule, au moins une lettre minuscule, au moins un chiffre, au moins un caractère spécial (@#$%^&?!), et au moins huit (8) caractères.',
    );
  };

  let selectedRoute = '';
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

  // console.log(routeChoice);

  return (
    <KeyboardAwareScrollView
      ref={scrollRef}
      style={[StylesCompte.container, {top: 0}]}>
      <ImageBackground
        style={[StylesCompte.bgGradient]}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesCompte.ViewText]}>
          <Text style={[StylesCompte.TxtTitle]}>MON COMPTE</Text>
        </View>
        <View style={[{flex: 2, top: 180}]}>
          {routeChoice === 'inscription numero' ? (
            <RegisterNumero navigation={navigation} />
          ) : routeChoice === 'connexion numero' ? (
            <LoginNumero navigation={navigation} />
          ) : routeChoice === 'connexion email' ? (
            <LoginEmail navigation={navigation} />
          ) : routeChoice === 'inscription email' ? (
            <RegisterEmail navigation={navigation} />
          ) : null}
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default Compte;

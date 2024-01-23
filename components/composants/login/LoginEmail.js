/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {storeData, getData} from '../../../service/storage';
import {getMethod, postMethod} from '../../../service/axiosInstance';
import StylesLoginEmail from '../../../assets/style/StyleComposants/styleLogin/StyleLoginEmail';

export const LoginEmail = ({navigation}) => {

  const [buttonPressed, setButtonPressed] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [privacyMode, setPrivacyMode] = useState(true);

  const validateEmail = inputEmail => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrorEmail(
      emailRegex.test(inputEmail)
        ? ''
        : 'Veuillez entrer une adresse e-mail valide.',
    );
  };
const validatePassword = inputPassword => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&?!])[A-Za-z\d@#$%^&?!]{12,}$/;
    setErrorPassword(
      passwordRegex.test(inputPassword)
        ? ''
        : 'Le mot de passe doit contenir : au moins une lettre majuscule, au moins une lettre minuscule, au moins un chiffre, au moins un caractère spécial (@#$%^&?!), et au moins douze (12) caractères.',
    );
  };

  const postInfo = async () => {
    const url = '/login';
    const data = {
      'email': email,
      'password': password,
    };
  // console.log(data);
    try {
      const response = await postMethod(url, data);
      console.log('Réponse du serveur après la requête POST :', response);
      if (response) {
        handleStoreData('route_choice', 'connexion email');
        navigation.navigate('Confirmation compte', {user : response});
      }
    } catch (error) {
      console.log('Erreur lors de la requête POST :', error.response.data.message);
    }
  };

  useEffect(() => {
    handleGetEmail();
  }, []);

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
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

  return (
    <>
      <SafeAreaView style={[{bottom: errorEmail ? 50 : 0}]}>
        <TextInput
          style={[StylesLoginEmail.TextInputNumero]}
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
              StylesLoginEmail.textError,
            ]}>
            {errorEmail}
          </Text>
        ) : (
          <Text
            style={[
              StylesLoginEmail.textWhite,
            ]}>
            Email oublié ?
          </Text>
        )}
        <>
          <TextInput
            style={[StylesLoginEmail.TextInputPassword]}
            keyboardType="default"
            placeholder="Votre mot de passe"
            placeholderTextColor="#FFF"
            maxLength={100}
            onBlur={() => validatePassword(password)}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={privacyMode}
          />
          <TouchableOpacity style={{ bottom: 14, right: 70, width: 25, height: 25, alignSelf: 'flex-end' }} onPress={() => { privacyMode ? setPrivacyMode(false) : setPrivacyMode(true); }}>
              <Image source={require('../../../assets/boutons/ico-privacy.png')} style={{width: 25, height: 25, resizeMode:'contain'}} />
          </TouchableOpacity>
          {errorPassword ? (
            <Text
              style={[
                StylesLoginEmail.textError2, {top: 20}
              ]}>
              {errorPassword}
            </Text>
          ) : (
            <Text
              style={[
                StylesLoginEmail.textWhite2, {top: 25}
              ]}>
              Mot de passe oublié ?
            </Text>
          )}
        </>
      </SafeAreaView>
      <View style={{top: 300}}>
        <TouchableOpacity
          accessibilityLabel="Continuer"
          onPress={() => {
            validateEmail(email);
            setButtonPressed('Continuer');
            if ((!errorEmail)) {
              postInfo();
            } else {
              setErrorMessage(
                'Veuillez entrer une adresse e-mail et un mot de passe valide.',
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
      </View>
    </>
  );
};

export default LoginEmail;

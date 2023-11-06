/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import StylesLoginEmail from '../../../assets/style/StyleComposants/styleLogin/StyleLoginEmail';

export const LoginEmail = ({userName}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&?!])[A-Za-z\d@#$%^&?!]{8,}$/;
    setErrorPassword(
      passwordRegex.test(inputPassword)
        ? ''
        : 'Le mot de passe doit contenir : au moins une lettre majuscule, au moins une lettre minuscule, au moins un chiffre, au moins un caractère spécial (@#$%^&?!), et au moins huit (8) caractères.',
    );
  };

  return (
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
          Allez dans votre boîte de messagerie pour confirmer votre
          e-mail.
        </Text>
      )}

      <TextInput
        style={[StylesLoginEmail.TextInputPassword]}
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
            StylesLoginEmail.textError2,
          ]}>
          {errorPassword}
        </Text>
      ) : (
        <Text
          style={[
            StylesLoginEmail.textWhite2,
          ]}>
          Pour garantir la sécurité de votre{'\n'}mot de passe, il doit
          contenir{'\n'}:{'\n'}-au moins une lettre majuscule{'\n'}-au
          moins une lettre minuscule{'\n'}-au moins un chiffre{'\n'}-au
          moins un caractère spéciale{'\n'}(@#$%^&?!){'\n'}-au moins huit
          (8) caractères
        </Text>
      )}
    </SafeAreaView>
  );
};

export default LoginEmail;

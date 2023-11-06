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

export const RegisterEmail = ({userName}) => {
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
            {top: 10, left: 10, width: '70%', fontSize: 12},
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
            {top: 50, left: 20, width: '80%', fontSize: 12},
            ]}>
            Pour garantir la sécurité de votre{'\n'}mot de passe, il doit
            contenir{'\n'}:{'\n'}-au moins une lettre majuscule{'\n'}-au
            moins une lettre minuscule{'\n'}-au moins un chiffre{'\n'}-au
            moins un caractère spéciale{'\n'}(@#$%^&?!){'\n'}-au moins
            huit (8) caractères
        </Text>
        )}
    </SafeAreaView>
  );
};

export default RegisterEmail;

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
import StylesLoginNumero from '../../../assets/style/StyleComposants/styleLogin/StyleLoginNumero';

export const LoginNumero = ({userName}) => {
  const [errorMessage, setErrorMessage] = useState('');
const [errorPassword, setErrorPassword] = useState('');
const [errorNumero, setErrorNumero] = useState('');
const [numero, setNumero] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <SafeAreaView style={[{top: 80}]}>
      <TextInput
        style={[StylesLoginNumero.TextInputNumero]}
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
            StylesLoginNumero.textError,
          ]}>
          {errorNumero}
        </Text>
      ) : (
        <Text
          style={[
            StylesLoginNumero.textWhite,
          ]}>
          Veuillez entrer un numéro de téléphone valide
        </Text>
      )}
    </SafeAreaView>
  );
};

export default LoginNumero;

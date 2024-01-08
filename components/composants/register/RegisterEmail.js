/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {storeData, getData} from '../../../service/storage';
import {getMethod, postMethod} from '../../../service/axiosInstance';
import { Image } from 'react-native-animatable';

export const RegisterEmail = ({ navigation }) => {

  const [errorMessage, setErrorMessage] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [email, setEmail] = useState('');
  const [listEmails, setListEmails] = useState([]);
  const [userPassword, setPassword] = useState();
  const [privacyMode, setPrivacyMode] = useState(true);
  const [buttonPressed, setButtonPressed] = useState('');

  const btnICI = [(
    <TouchableOpacity key="btnIci" style={[{ justifyContent:'center', alignItems:'center', backgroundColor:'red' }]} onPress={() => { navigation.push('Compte'); handleStoreData('route_choice', 'connexion email'); }}>
      <Text style={[{ color: 'white'}]}>ICI !</Text>
    </TouchableOpacity>
  )];

  const validateEmail = inputEmail => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrorEmail(
    emailRegex.test(inputEmail)
      ? setPassword
      : 'Veuillez entrer une adresse e-mail valide.'
    );
  };

  const validatePassword = inputPassword => {

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&?!])[A-Za-z\d@#$%^&?!]{12,}$/;
    const isValidPassword = passwordRegex.test(inputPassword);
    setErrorPassword(
      isValidPassword
        ? ''
        : 'Le mot de passe doit contenir : au moins une lettre majuscule, au moins une lettre minuscule, au moins un chiffre, au moins un caractère spécial (@#$%^&?!), et au moins douze (12) caractères.',
    );
  };

  // const checkEmail = () => {
  //   const url = '/checkEmail';
  //   const data = {
  //     'email': email,
  //   };

  //   try {
  //     const response = postMethod(url, data);
  //     console.log('Réponse du serveur pour la vérification de l\'email :', response);
  //     // Gérez ici la réponse reçue du backend pour l'email
  //     // Par exemple, si l'email n'existe pas déjà, traitez la réponse en conséquence
  //     if (response) {
  //       // Email disponible
  //       console.log("L'email est disponible.");
  //     } else {
  //       // Email déjà utilisé
  //       setErrorEmail(<>{'Cet email est déjà associé à un compte. Veuillez utiliser un autre email.'}{btnICI}</>);
  //     }
  //   } catch (error) {
  //     console.error('Erreur lors de la vérification de l\'email :', error);
  //   }
  // };



  // const checkEmail = () => { // Remplacez cela par la variable contenant l'email à vérifier
  
  //   getMethod(`/checkExists?type=email&value=${email}`)
  //     .then(data => {
  //       console.log('Data :', data);
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la récupération des données :', error);
  //       setErrorEmail('Cet email est déjà utilisé par un utilisateur. Veuillez utiliser un autre email ou connectez-vous.');
  //     });
  // };

  // useEffect(() => {
  //   getMethod('/testUsers')
  //     .then(data => {
  //       console.log('Données récupérées :', data);
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la récupération des données :', error);
  //     });
  // }, []);

  const postInfo = async () => {
    const url = '/register';
    const data = {
      'email': email,
      'password': userPassword,
    };
    console.log(data);

    try {
      const response = await postMethod(url, data);
      console.log('Réponse du serveur après la requête POST :', response);
      if (response) {
        handleStoreData('route_choice', 'connexion email');
        navigation.push('Compte');
      }
    } catch (error) {
      // console.log('Erreur lors de la requête POST :', error);
      setErrorEmail(<>
        <Text
          style={[
          Styles.textError,
          {top: 10, fontFamily: 'Comfortaa-Bold', alignItems:'center', fontSize: 12,},
          ]}>
          Cet email est déjà associé à un compte. Veuillez utiliser un autre email.
        </Text>
        <TouchableOpacity key="btnIci" style={[{ top: 10,justifyContent:'center', alignItems:'center', }]} onPress={() => { navigation.push('Compte'); handleStoreData('route_choice', 'connexion email'); }}>
          <Text style={[{ color: 'white'}]}>ICI !</Text>
        </TouchableOpacity>
      </>);
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

  // console.log('emails : ' + listEmails);

  return (
    <>
      <SafeAreaView style={[{bottom:  0}]}>
        <TextInput
          style={[Styles.TextInputEmail, {top: 0}]}
          keyboardType="email-address"
          placeholder="Votre email"
          placeholderTextColor="#FFF"
          maxLength={100}
          onChangeText={(text) => {
              setEmail(text);
              validateEmail(text);
            }}
          value={email}
          />
          {errorEmail ? (
          errorEmail
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
          <SafeAreaView style={{top: 30,flexDirection:'row', alignItems: 'center', alignSelf: 'center', width: '80%'}} >
            <TextInput
              style={[Styles.TextInputPassword, { width: '100%' }]}
              keyboardType="default"
              placeholder="Votre mot de passe"
              placeholderTextColor="#FFF"
              maxLength={100}
              onChangeText={text => setPassword(text)}
              onBlur={() => validatePassword(userPassword)}
              value={userPassword}
              secureTextEntry={privacyMode}
            />

          <TouchableOpacity style={{ bottom: 18, right: 50, width: 25, height: 25, alignSelf: 'flex-end' }} onPress={() => { privacyMode ? setPrivacyMode(false) : setPrivacyMode(true); }}>
              <Image source={require('../../../assets/boutons/ico-privacy.png')} style={{width: 25, height: 25, resizeMode:'contain'}} />
          </TouchableOpacity>
          </SafeAreaView>

          {errorPassword ? (
          <Text
              style={[
              Styles.textError2,
              {top: 40, alignSelf:'center', width: '80%', fontSize: 12},
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
      <View style={{top: 160, left: 40}}>
        <Text style={[Styles.textWhite2, {fontSize: 12}]}>Choix unique.</Text>
      </View>

      <View style={{bottom: errorPassword ? -50 : 0}}>
        <TouchableOpacity
          accessibilityLabel="Continuer"
          onPress={() => {
            validateEmail(email);
            validatePassword(userPassword);
            setButtonPressed('Continuer');
            if ((!errorEmail && !errorPassword)) {
              postInfo();
            } if (errorEmail) {
              setErrorMessage(
                'Veuillez entrer une adresse e-mail et un mot de passe valide.',
              );
            } else  if (errorPassword){
              setErrorPassword(
                'Le mot de passe doit contenir : au moins une lettre majuscule, au moins une lettre minuscule, au moins un chiffre, au moins un caractère spécial (@#$%^&?!), et au moins huit (12) caractères.',
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

export default RegisterEmail;

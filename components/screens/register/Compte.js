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

  const emailTxt =
    routeChoice === "S'inscrire"
      ? 'Allez dans votre boite de messagerie pour confirmer votre email'
      : '';

  let selectedRoute;
  switch (routeChoice) {
    case 'Recuperation code':
      selectedRoute = 'Recuperation code';
      break;
    case "S'inscrire":
      selectedRoute = 'Confirmation compte';
      break;
    case 'Se connecter':
      selectedRoute = 'Recuperation code';
      break;
    case 'Connexion numero':
      selectedRoute = 'Recuperation code';
      break;
    default:
      selectedRoute = 'Felicitations';
  }

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
          <Text style={[Styles.textWhiteCenter, {top: 100}]}>MON COMPTE</Text>
        </View>
        {routeChoice === 'Connexion numero' ? (
          <SafeAreaView style={[Styles.ViewInputEmail, {top: -50}]}>
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
            {numero ? (
              <Text style={[Styles.textError, {top: 10}]}>{errorNumero}</Text>
            ) : (
              <Text style={[Styles.textWhite4, {top: 10, width: '70%'}]}>
                Veuillez entrer un numéro de téléphone valide
              </Text>
            )}
          </SafeAreaView>
        ) : (
          <SafeAreaView style={[Styles.ViewInputEmail, {top: 30}]}>
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
              <Text style={[Styles.textError, {top: 10}]}>{errorEmail}</Text>
            ) : (
              <Text style={[Styles.textWhite4, {top: 10, width: '80%'}]}>
                {emailTxt}
              </Text>
            )}

            <TextInput
              style={[Styles.TextInputPassword, {top: 30}]}
              keyboardType=""
              placeholder="Votre mot de passe"
              placeholderTextColor="#FFF"
              maxLength={100}
              onBlur={() => validatePassword(password)}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
            {errorPassword ? (
              <Text style={[Styles.textError2, {top: 40}]}>
                {errorPassword}
              </Text>
            ) : (
              <Text style={[Styles.textWhite4, {top: 40, width: '80%'}]}>
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
          <Text style={[Styles.textWhite2]}>Choix unique.</Text>
        </View>

        <View style={{top: -40}}>
          {routeChoice && (
            <TouchableOpacity
              accessibilityLabel="Continuer"
              onPress={() => {
                validateEmail(email);
                validatePassword(password);
                if (!errorPassword && !errorEmail) {
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
                } else {
                  setErrorMessage(
                    'Veuillez entrer une adresse e-mail et un mot de passe valide.',
                  );
                }
              }}>
              <Text style={[Styles.textBtn9, {zIndex: 1, top: 45}]}>
                Continuer
              </Text>
              <Image
                style={[
                  {
                    top: 0,
                    width: '90%',
                    height: 60,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../../assets/boutons/Bouton-Blanc.png')}
              />
            </TouchableOpacity>
          )}
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
      userRecherche2: PropTypes.string,
      userAffinites: PropTypes.string,
      rythmeDeVie1: PropTypes.string,
      rythmeDeVie2: PropTypes.string,
      userPrenom: PropTypes.string,
    }),
  }),
  navigation: PropTypes.object,
};

export default Compte;

// import React, {useState, useEffect} from 'react';
// import {
//     View,
//     Text,
//     ImageBackground,
//     SafeAreaView,
//     TextInput,
//     Image,
//     TouchableOpacity,
// } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
// import Styles from '../../assets/style/Styles';

// export const Compte = ({ route, navigation }) => {

//     // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
//     const routeChoice = route.params?.routeName ?? '';
//     const consentement = route.params?.userConsent ?? '';
//     const loveCoach = route.params?.loveCoach ?? '';
//     const userEmail = route.params?.userEmail ?? '';
//     const userPhone = route.params?.userPhone ?? '';
//     const userCity = route.params?.userCity ?? '';
//     const accesPosition = route.params?.accesPosition ?? '';
//     const genre = route.params?.genre ?? '';
//     const userBirth = route.params?.userBirth ?? '';
//     const userSize = route.params?.userSize ?? '';
//     const userLang = route.params?.userLang ?? '';
//     const userSituation = route.params?.userSituation ?? '';
//     const userOrientation = route.params?.userOrientation ?? '';
//     const userRecherche1 = route.params?.userRecherche1 ?? '';
//     const userRecherche2 = route.params?.userRecherche2 ?? '';
//     const userAffinites = route.params?.userAffinites ?? '';
//     const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
//     const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
//     const userPrenom = route.params?.userPrenom ?? '';
//     const userVoice = route.params?.userVoice ?? '';
//     console.log('Choix de route : ' , routeChoice);
//     console.log('Consentement : ' , consentement);
//     console.log('Love Coach : ', loveCoach);
//     console.log('Email : ', userEmail);
//     console.log('Téléphone : ', userPhone);
//     console.log('Ville : ', userCity);
//     console.log('Accès position : ', accesPosition);
//     console.log('Genre : ', genre);
//     console.log('Date de naissance : ', userBirth);
//     console.log('Taille : ', userSize);
//     console.log('Langues : ', userLang);
//     console.log('Situation : ', userSituation);
//     console.log('Orientation : ', userOrientation);
//     console.log('Recherche 1 : ', userRecherche1);
//     console.log('Recherche 2 : ', userRecherche2);
//     console.log('Affinité(s) : ', userAffinites);
//     console.log('Rythme de vie 1 : ', rythmeDeVie1);
//     console.log('Rythme de vie 2 : ', rythmeDeVie2);
//     console.log('Prénom : ', userPrenom);

//     const [errorMessage, setErrorMessage] = useState('');
//     const [errorEmail, setErrorEmail] = useState('');
//     const [errorPassword, setErrorPassword] = useState('');
//     const [errorNumero, setErrorNumero] = useState('');
//     // Constante permettant de récupérer la valeur du de l'input email renseigné par l'utilisateur
//     const [email, setEmail] = useState('');
//     const [numero, setNumero] = useState('');

//     const validateEmail = (inputEmail) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(inputEmail)) {
//             setErrorEmail('Veuillez entrer une adresse e-mail valide.');
//         } else {
//             setErrorEmail('');
//         }
//     }
//     // Constante permettant de récupérer la valeur de l'input password renseigné par l'utilisateur
//     const [password, setPassword] = useState('');

//     const validatePhone = (numero) => {
//     const phoneRegex = /^\+?\d{10}$/;
//         if (!phoneRegex.test(userPhone)) {
//             setErrorNumero('Numéro de téléphone est invalide. Veuillez respecter le format "+33 0 00 00 00"');
//         } else {
//             setErrorNumero('');
//         }
//   };

//     const validatePassword = (inputPassword) => {
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&?!])[A-Za-z\d@#$%^&?!]{8,}$/;
//         if (!passwordRegex.test(inputPassword)) {
//         setErrorPassword(['Le mot de passe, il doit contenir\n:\n-au moins une lettre majuscule\n-au moins une lettre minuscule\n-au moins un chiffre\n-au moins un caractère spéciale\n(@#$%^&?!)\n-au moins huit (8) caractères']);
//         } else {
//         setErrorPassword('');
//         console.log(password);
//         }
//     };
//     console.log('Email : ' + email);
//     console.log('password : ' + password);

//     // Constante emailTxt permettant de changer le texte sous l'input mail fonction du paramètre de route dans routeChoice ; si Se connecter alors txt1 ; si S'inscrire alors txt2

//     if (routeChoice === 'S\'inscrire') {
//         emailTxt = 'Allez dans votre boite de messagerie pour confirmer votre email';
//     } else {
//         emailTxt = '';
//     }

//     let selectedRoute;
//     if (routeChoice === 'Recuperation code') {
//         selectedRoute = 'Recuperation code';
//     } else if (routeChoice === 'S\'inscrire') {
//         selectedRoute = 'Confirmation compte';
//     } else if (routeChoice === 'Se connecter') {
//         selectedRoute = 'Recuperation code';
//     } else if (routeChoice === 'Connexion numero') {
//         selectedRoute = 'Recuperation code';
//     } else {
//         selectedRoute = 'Felicitations';
//     }

//     return (
//         <KeyboardAwareScrollView innerRef={ref => {this.scroll = ref}} style={[Styles.container2,{top:0}]}>

//         <ImageBackground style={[Styles.bgGradient, { top:0, height:810}]} source={require('../../assets/images/Background.png')}>
//             <View style={[Styles.ViewText6]}>
//                 <Text style={[Styles.textWhiteCenter, {top:100}]}>MON COMPTE</Text>
//             </View>
//             { //Check if message failed
//                 (routeChoice === 'Connexion numero')
//                     ?
//                     <SafeAreaView style={[Styles.ViewInputEmail, {top: -50}]}>

//                         <TextInput
//                             style={[Styles.TextInputEmail, {position:'relative', top: 0 }]}
//                             keyboardType='numeric'
//                             placeholder='Votre numéro'
//                             placeholderTextColor='#FFF'
//                             maxLength={10}
//                             onChangeText={(numero) => setNumero(numero)}
//                             onBlur={() => validatePhone(numero)}
//                             value={numero}
//                             />
//                             {numero ? <Text style={[Styles.textError, { top: 10, }]}>{errorNumero}</Text> : <Text style={[Styles.textWhite4, { top: 10, width: '70%', }]}>Veuillez entrer un numéro de téléphone valide</Text>}

//                     </SafeAreaView>
//                 :
//                     <SafeAreaView style={[Styles.ViewInputEmail, { top: 30 }]}>
//                     <TextInput
//                     style={[Styles.TextInputEmail, {top:0}]}
//                     keyboardType='email-address'
//                     placeholder='Votre email'
//                     placeholderTextColor='#FFF'
//                     maxLength={100}
//                     onChangeText={(text) => setEmail(text)}
//                     onBlur={() => validateEmail(email)}
//                     value={email}
//                     />
//                     {errorEmail ? <Text style={[Styles.textError, { top: 10, }]}>{errorEmail}</Text> : <Text style={[Styles.textWhite4, { top: 10, width: '80%', }]}>{ emailTxt }</Text>}

//                 <TextInput
//                     style={[Styles.TextInputPassword, {top:30}]}
//                     keyboardType=''
//                     placeholder='Votre mot de passe'
//                     placeholderTextColor='#FFF'
//                     maxLength={100}
//                     onBlur={() => validatePassword(password)}
//                     onChangeText={(text) => setPassword(text)}
//                     value={password}
//                     secureTextEntry={true}
//                     />
//                 {errorPassword ? <Text style={ [Styles.textError2, {top:40,}]}>{errorPassword}</Text> : <Text style={[Styles.textWhite4, {top:40, width:'80%',}]}>Pour garantir la sécurité de votre{"\n"}
//                     mot de passe, il doit contenir{"\n"}:{"\n"}
//                     -au moins une lettre majuscule{"\n"}
//                     -au moins une lettre minuscule{"\n"}
//                     -au moins un chiffre{"\n"}
//                     -au moins un caractère spéciale{"\n"}(@#$%^&?!){"\n"}
//                     -au moins huit (8) caractères</Text>}
//                     </SafeAreaView>
//                 }

//             <View style={{top:100, left:40}}>
//                 <Text style={[Styles.textWhite2]}>Choix unique.</Text>
//             </View>

//             <View style={[{ top: -40 }]}>
//                     { //Choix de route selon paramètre de route

//                         <TouchableOpacity accessibilityLabel="Continuer" onPress={() => {
//                             validateEmail(email); validatePassword(password);
//                             if (!errorPassword && !errorEmail) {
//                                 navigation.navigate(selectedRoute, {
//                                     userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1, rythmeDeVie2: rythmeDeVie2, userPrenom: userPrenom
//                                 });
//                             } else {
//                                 setErrorMessage('Veuillez entrer une adresse e-mail et un mot de passe valide.');
//                             }
//                         }}>
//                             <Text style={[Styles.textBtn9, { zIndex: 1, top: 45 }]}>Continuer</Text>
//                             <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf: 'center' }]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//                         </TouchableOpacity>}

//             </View>
//         </ImageBackground>
//     </KeyboardAwareScrollView>

//     )
// }

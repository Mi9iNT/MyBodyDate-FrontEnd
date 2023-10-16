import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import StylesSinscrireMail from '../../../assets/style/styleScreens/styleRegister/StyleSinscrireMail';

export const SignInMail = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);

  const [userEmail, setEmail] = React.useState();
  const [errorEmail, setErrorEmail] = React.useState(null);
  const [buttonPressed, setButtonPressed] = React.useState();

  const errorMessage =
    'L\'email saisi est invalide. Veuillez respecter le format "exemple@email.fr"';

  const validateMessage =
    'Un lien pour connecter à votre ancien compte, va vous être envoyer par email';

  const validateEmail = index => {
    const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const emailAdress = index;
    // const phoneNumber = userPhone;
    if (reg.test(emailAdress)) {
      setEmail(index);
      setErrorEmail(true);
    } else if (!reg.test(emailAdress)) {
      setEmail(index);
      setErrorEmail(false);
    } else {
      setErrorEmail(null);
    }
  };
  console.log(errorEmail);


  console.log('Email: ' + userEmail);
  return (
    <View style={StylesSinscrireMail.container}>
      <ImageBackground
        style={StylesSinscrireMail.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesSinscrireMail.ViewText]}>
          <Text style={[StylesSinscrireMail.TxtTitle]}>S'INSCRIRE</Text>
        </View>
        <SafeAreaView style={[StylesSinscrireMail.ViewInput]}>
          <TextInput
            style={StylesSinscrireMail.TextInput}
            keyboardType="email-address"
            placeholder="Entrez votre Email"
            placeholderTextColor="#FFF"
            maxLength={100}
            onChangeText={text => validateEmail(text)}
            value={userEmail}
          />
          {errorEmail === false ? (
            <Text style={[StylesSinscrireMail.textError]}>{errorMessage}</Text>
          ) : (
            <Text style={[StylesSinscrireMail.textWhite]}>
              {validateMessage}
            </Text>
          )}
        </SafeAreaView>

        <View style={[StylesSinscrireMail.ViewBtn]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              navigation.navigate('Confirmation email', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userEmail: userEmail,
              });
              setButtonPressed(true);
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesSinscrireMail.TxtBtn,
                {color: buttonPressed ? '#fff' : '#0019A7'},
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesSinscrireMail.imgBtn]}
              source={
                buttonPressed
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

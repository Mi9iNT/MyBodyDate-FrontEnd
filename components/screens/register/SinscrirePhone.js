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
import {BtnNext} from '../../composants/BtnNext';
import StylesSinscrirePhone from '../../../assets/style/styleScreens/styleRegister/StyleSinscrirePhone';

export const SignInPhone = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);

  const [userPhone, setPhone] = React.useState();
  const [errorNumero, setErrorNumero] = React.useState(validateMessage);
  const [buttonPressed, setButtonPressed] = React.useState();

  const errorMessage =
    'Numéro de téléphone est invalide. Veuillez respecter le format "+33 000000000"';

  const validateMessage =
    'Un code va vous être envoyé par SMS afin de vous identifier';

  const validatePhone = index => {
    const reg = /^\+33\d{9}$/;
    const phoneNumber = index;
    // const phoneNumber = userPhone;
    if (reg.test(phoneNumber)) {
      setPhone(index);
      setErrorNumero(true);
    } else if (!reg.test(phoneNumber)) {
      setPhone(index);
      setErrorNumero(false);
    } else {
      setErrorNumero(null);
    }
  };
  console.log(errorNumero);

  console.log('Téléphone: ' + userPhone);
  return (
    <View style={StylesSinscrirePhone.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesSinscrirePhone.ViewText]}>
          <Text style={[StylesSinscrirePhone.TxtTitle]}>S'INSCRIRE</Text>
        </View>
        <SafeAreaView style={[StylesSinscrirePhone.ViewInput]}>
          <TextInput
            style={StylesSinscrirePhone.TextInput}
            keyboardType="default"
            placeholder="Entrez votre n° de téléphone"
            placeholderTextColor="#FFF"
            onChangeText={phone => {
              validatePhone(phone);
            }}
            value={userPhone}
          />
          {errorNumero === false ? (
            <Text style={[StylesSinscrirePhone.textError]}>{errorMessage}</Text>
          ) : (
            <Text style={[StylesSinscrirePhone.textWhite]}>
              {validateMessage}
            </Text>
          )}
        </SafeAreaView>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Confirmation numero'}
          txt={'Continuer'}
          background={'white'}
          top={300}
        />
      </ImageBackground>
    </View>
  );
};

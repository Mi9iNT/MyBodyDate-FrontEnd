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

export const SignInPhone = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);

  const [userPhone, setPhone] = React.useState();
  const [errorNumero, setErrorNumero] = React.useState('');

  const validatePhone = numero => {
    const phoneRegex = /^\+?\d{10}$/;
    if (!phoneRegex.test(userPhone)) {
      setErrorNumero(
        'Numéro de téléphone est invalide. Veuillez respecter le format "+33 0 00 00 00"',
      );
    } else {
      setErrorNumero(
        'Un code va vous être envoyer par sms afin, de vous idéntifier',
      );
    }
  };

  console.log('Téléphone: ' + userPhone);
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, Styles.mt50]}>
          <Text style={[Styles.textTitleWhite2, {top: 100, left: 50}]}>
            S'INSCRIRE
          </Text>
        </View>
        <SafeAreaView style={[Styles.ViewInput, {top: 180}]}>
          <TextInput
            style={Styles.TextInput}
            keyboardType="numeric"
            placeholder="Entrez votre n° de téléphone"
            placeholderTextColor="#FFF"
            maxLength={11}
            onChangeText={userPhone => setPhone(userPhone)}
            onSubmitEditing={validatePhone}
            value={userPhone}
          />
          {userPhone ? (
            <Text style={[Styles.textError, {top: 10}]}>{errorNumero}</Text>
          ) : (
            <Text style={[Styles.textWhite4, {top: 10, width: '70%'}]} />
          )}
        </SafeAreaView>

        <View style={[Styles.ViewBtn2, {top: 250}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() =>
              navigation.navigate('Confirmation numero', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userPhone: userPhone,
              })
            }
            accessibilityLabel="Continuer">
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
        </View>
      </ImageBackground>
    </View>
  );
};

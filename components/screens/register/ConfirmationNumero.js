import React, {useState} from 'react';
import PropTypes from 'prop-types';
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
import StylesConfirmationNumero from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationNumero';

export const ConfirmationNumero = ({route, navigation}) => {
  // Constantes récupérant les valeurs données par l'utilisateur
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userPhone = route.params?.userPhone ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);
  console.log('Téléphone : ', userPhone);

  const [userCode, setCode] = useState('');

  const [buttonPressed, setButtonPressed] = useState('');

  return (
    <View style={StylesConfirmationNumero.container}>
      <ImageBackground
        style={StylesConfirmationNumero.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesConfirmationNumero.TxtTitle]}>CONFRIMATION</Text>
        <Text style={[StylesConfirmationNumero.TxtTitle]}>NUMÉRO</Text>
        <SafeAreaView style={[StylesConfirmationNumero.ViewInput]}>
          <TextInput
            style={StylesConfirmationNumero.TextInput}
            keyboardType="numeric"
            placeholder="Entrez le code reçu par sms"
            placeholderTextColor="#FFF"
            maxLength={11}
            onChangeText={text => setCode(text)}
            value={userCode}
          />
        </SafeAreaView>
        <View style={[{bottom: 100}]}>
          <TouchableOpacity
            style={[{bottom: 10}]}
            onPress={() => {
              setButtonPressed('Reessayez');
              navigation.navigate("S'inscrire par numero", {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
              });
            }}
            accessibilityLabel="Récupérer mon compte">
            <Text style={[StylesConfirmationNumero.textBtn]}>Réessayez</Text>
            <Image
              style={[StylesConfirmationNumero.imgBtn]}
              source={
                buttonPressed === 'Reessayez'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Noir.png')
              }
            />
          </TouchableOpacity>
          <Text style={[StylesConfirmationNumero.textWhite]}>
            Si vous n&apos;avez pas reçu d&apos;sms, veuillez rééssayez.
          </Text>
          <TouchableOpacity
            style={[{top: 20}]}
            onPress={() => {
              setButtonPressed('Recup');
              navigation.navigate("S'inscrire par mail", {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
              });
            }}
            accessibilityLabel="Récupérer mon compte">
            <Text style={[StylesConfirmationNumero.textBtn1]}>
              S&apos;inscrire par email
            </Text>
            <Image
              style={[StylesConfirmationNumero.imgBtn1]}
              source={
                buttonPressed === 'Recup'
                  ? require('../../../assets/boutons/Bouton-Noir-Email.png')
                  : require('../../../assets/boutons/Bouton-Rouge-Email.png')
              }
            />
          </TouchableOpacity>
          <Text style={[StylesConfirmationNumero.textWhite1]}>
            Utilisez un autre moyen pour vous inscrire
          </Text>
        </View>
        <View style={[{bottom: 40}]}>
          <TouchableOpacity
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Ville', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userPhone: userPhone,
              });
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesConfirmationNumero.textBtn2,
                {
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesConfirmationNumero.imgBtn2]}
              source={
                buttonPressed === 'Continuer'
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

ConfirmationNumero.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      routeName: PropTypes.string,
      userConsent: PropTypes.string,
      loveCoach: PropTypes.string,
      userPhone: PropTypes.string,
    }),
  }),
  navigation: PropTypes.object,
};

export default ConfirmationNumero;

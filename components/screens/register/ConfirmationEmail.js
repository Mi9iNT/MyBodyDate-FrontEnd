import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import StylesConfirmationEmail from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationEmail';
import StylesSConfirmationEmail from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationEmail';

export const ConfirmationEmail = ({route, navigation}) => {
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);
  console.log('Email : ', userEmail);

  const [buttonPressed, setButtonPressed] = useState();

  return (
    <View style={StylesConfirmationEmail.container}>
      <ImageBackground
        style={StylesConfirmationEmail.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesConfirmationEmail.TxtTitle]}>CONFRIMATION</Text>
        <Text style={[StylesConfirmationEmail.TxtTitle]}>E-MAIL</Text>
        <View style={[StylesConfirmationEmail.BlockImg]}>
          <Image
            style={StylesConfirmationEmail.ImgBulle}
            source={require('../../../assets/images/avion-en-papier.png')}
          />
        </View>
        <Text style={[StylesConfirmationEmail.textWhite]}>
          Si vous n&apos;avez pas reçu d&apos;email, consultez vos spams ou
          rééssayez.
        </Text>
        <TouchableOpacity
          style={[StylesConfirmationEmail.btn]}
          onPress={() => {
            setButtonPressed('Utiliser');
            navigation.navigate('Recuperation email');
          }}
          accessibilityLabel="Récupérer mon compte">
          <Text style={[StylesConfirmationEmail.textBtn]}>
            Utiliser un autre e-mail
          </Text>
          <Image
            style={[StylesConfirmationEmail.imgBtn]}
            source={
              buttonPressed === 'Utiliser'
                ? require('../../../assets/boutons/Bouton-Rouge-Email.png')
                : require('../../../assets/boutons/Bouton-Noir-Email.png')
            }
          />
        </TouchableOpacity>
        <Text style={[StylesConfirmationEmail.textWhite2]}>
          Utilisez un autre moyen de connexion
        </Text>
        {routeChoice === 'Recuperation de compte' ? (
          <TouchableOpacity
            style={[StylesConfirmationEmail.btnUn]}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Felicitations', {});
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesConfirmationEmail.textBtnUn,
                {
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesConfirmationEmail.imgBtn]}
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[StylesConfirmationEmail.btnUn]}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Ville', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userEmail: userEmail,
              });
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesConfirmationEmail.textBtnUn,
                {
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesConfirmationEmail.imgBtn]}
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
};

ConfirmationEmail.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      routeName: PropTypes.string.isRequired,
      userConsent: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
        .isRequired,
      loveCoach: PropTypes.string,
      userEmail: PropTypes.string,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

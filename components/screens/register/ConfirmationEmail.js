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
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText2, Styles.mt100]}>
          <Text
            style={[Styles.textTitleWhite2, {top: 50, left: 30, fontSize: 24}]}>
            CONFRIMATION{'\n'}E-MAIL
          </Text>
        </View>
        <View style={[Styles.ViewImg, Styles.mt50, Styles.mb10]}>
          <View style={[Styles.BlockImg]}>
            <Image
              style={Styles.ImgBulle}
              source={require('../../../assets/images/avion-en-papier.png')}
            />
          </View>
        </View>
        <View style={[Styles.ViewText4, Styles.mt20]}>
          <Text style={[Styles.textWhite3, Styles.mt50, {fontSize: 12}]}>
            Si vous n&apos;avez pas reçu d&apos;email, consultez vos spams ou
            rééssayez.
          </Text>
        </View>
        <View style={[Styles.ViewText5, {alignSelf: 'center'}]}>
          <TouchableOpacity
            style={[Styles.ml_20]}
            onPress={() => {
              setButtonPressed('Utiliser');
              navigation.navigate('Recuperation email');
            }}
            accessibilityLabel="Récupérer mon compte">
            <Text style={[Styles.textBtn6, {zIndex: 2, top: 15, left: 30}]}>
              Utiliser un autre e-mail
            </Text>
            <Image
              style={[
                {
                  top: -30,
                  left: 10,
                  width: '120%',
                  height: 56,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                },
              ]}
              source={
                buttonPressed === 'Utiliser'
                  ? require('../../../assets/boutons/Bouton-Rouge-Email.png')
                  : require('../../../assets/boutons/Bouton-Noir-Email.png')
              }
            />
          </TouchableOpacity>
          <Text style={[Styles.textWhite3, Styles.mt20]}>
            Utilisez un autre moyen de connexion
          </Text>
        </View>
        <View style={[{top: 20}]}>
          {routeChoice === 'Recuperation de compte' ? (
            <TouchableOpacity
              onPress={() => {
                setButtonPressed('Continuer');
                navigation.navigate('Felicitations', {});
              }}
              accessibilityLabel="Continuer">
              <Text
                style={[
                  Styles.textBtn9,
                  {
                    zIndex: 1,
                    top: 5,
                    color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                  },
                ]}>
                Continuer
              </Text>
              <Image
                style={[
                  {
                    top: -40,
                    width: '90%',
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
          ) : (
            <TouchableOpacity
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
                  Styles.textBtn9,
                  {
                    zIndex: 1,
                    color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                  },
                ]}>
                Continuer
              </Text>
              <Image
                style={[
                  {
                    bottom: 40,
                    width: '90%',
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
          )}
        </View>
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
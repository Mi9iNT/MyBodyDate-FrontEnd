import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import Logo from '../../composants/Logo';
import StylesLinksSignIn from '../../../assets/style/styleScreens/styleRegister/StyleLinksSignIn';

export const LinksSignIn = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);

  const [buttonPressed, setButtonPressed] = useState();

  return (
    <View style={StylesLinksSignIn.container}>
      <ImageBackground
        style={StylesLinksSignIn.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Logo />

        <View style={StylesLinksSignIn.ViewText}>
          <Text style={[StylesLinksSignIn.textTitle, Styles.fb]}>
            UN COUP DE COEUR
          </Text>
          <Text style={[StylesLinksSignIn.textTitle, Styles.fb]}>
            N'ATTEND PAS
          </Text>
          <Text style={[StylesLinksSignIn.textTitle2, Styles.fl, {top: 20}]}>
            NE PERDEZ PLUS RIEN...
          </Text>
        </View>

        <View style={[StylesLinksSignIn.ViewBtnLog]}>
          <View style={[{bottom: 40}]}>
            <TouchableOpacity
              style={[StylesLinksSignIn.btn]}
              accessibilityLabel="Se connecter par email"
              onPress={() => {
                navigation.navigate("S'inscrire par mail", {
                  userConsent: consentement,
                  routeName: "S'inscrire par mail",
                  loveCoach: loveCoach,
                });
                setButtonPressed('mail');
              }}>
              <Text style={[StylesLinksSignIn.textBtn]}>
                S'inscrire par email
              </Text>
              <Image
                style={StylesLinksSignIn.imgBtn}
                source={
                  buttonPressed === 'mail'
                    ? require('../../../assets/boutons/Bouton-Rouge-Email.png')
                    : require('../../../assets/boutons/Bouton-Bleu-Email.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[StylesLinksSignIn.btn, Styles.mt20]}
              onPress={() => {
                navigation.navigate("S'inscrire par numero", {
                  userConsent: consentement,
                  routeName: "S'inscrire par numero",
                  loveCoach: loveCoach,
                });
                setButtonPressed('numero');
              }}
              accessibilityLabel="Se connecter avec son numéro de téléphone">
              <Text style={[StylesLinksSignIn.textBtn2]}>
                S'inscrire avec son n°
              </Text>
              <Image
                style={[StylesLinksSignIn.imgBtn]}
                source={
                  buttonPressed === 'numero'
                    ? require('../../../assets/boutons/Bouton-Rouge-Telephone.png')
                    : require('../../../assets/boutons/Bouton-Bleu-Telephone.png')
                }
              />
            </TouchableOpacity>
            <View style={[{top: 20}]}>
              <View>
                <Text
                  style={[StylesLinksSignIn.textWhite, Styles.mb2, Styles.fl]}>
                  Vous n'avez pas de compte ?
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Liens de connexion', {
                      userConsent: consentement,
                      routeName: routeChoice,
                      loveCoach: loveCoach,
                    })
                  }
                  accessibilityLabel="Se connecter">
                  <Text style={[StylesLinksSignIn.linkWhite]}>Se connecter</Text>
                </TouchableOpacity>
                <View style={[StylesLinksSignIn.line]} />
              </View>

              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Recuperation email', {
                      userConsent: consentement,
                      routeName: 'Recuperation de compte',
                      loveCoach: loveCoach,
                    })
                  }
                  accessibilityLabel="Récupération email">
                  <Text style={[StylesLinksSignIn.linkBlue]}>
                    Récupérez mon compte.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

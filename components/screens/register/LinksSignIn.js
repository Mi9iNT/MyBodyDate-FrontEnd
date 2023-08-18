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

export const LinksSignIn = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);

  const [buttonPressed, setButtonPressed] = useState();

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Logo />

        <View style={Styles.ViewText2}>
          <Text style={[Styles.textWhite, Styles.fb, {left: 30, fontSize:24}]}>
            UN COUP DE COEUR
          </Text>
          <Text style={[Styles.textWhite, Styles.fb, {left: 30, fontSize:24}]}>
            N'ATTEND PAS
          </Text>
          <Text style={[Styles.textWhite, Styles.fl, {top: 20, left: 30, fontSize:24}]}>
            NE PERDEZ PLUS RIEN...{' '}
          </Text>
        </View>

        <View style={[Styles.ViewBtnLog, {top: -20, width:'80%', alignSelf:'center'}]}>
          <View style={[{top: -40}]}>
            <TouchableOpacity
              accessibilityLabel="Se connecter par email"
              onPress={() => {
                navigation.navigate("S'inscrire par mail", {
                  userConsent: consentement,
                  routeName: routeChoice,
                  loveCoach: loveCoach,
                });
                setButtonPressed('mail');
              }}>
              <Text style={[Styles.textBtn6, {zIndex: 1, top: 40, fontSize:18}]}>
                S'inscrire par email
              </Text>
              <Image
                style={{
                  width: 331,
                  height: 56,
                  flexShrink: 0,
                  alignSelf: 'center',
                  resizeMode:'contain',
                }}
                source={
                  buttonPressed === 'mail'
                    ? require('../../../assets/boutons/Bouton-Rouge-Email.png')
                    : require('../../../assets/boutons/Bouton-Bleu-Email.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("S'inscrire par numero", {
                  userConsent: consentement,
                  routeName: routeChoice,
                  loveCoach: loveCoach,
                });
                setButtonPressed('numero');
              }}
              accessibilityLabel="Se connecter avec son numéro de téléphone">
              <Text style={[Styles.textBtn6, {zIndex: 2, top: 40, fontSize:18, left: 10}]}>
                S'inscrire avec son n°
              </Text>
              <Image
                style={{
                  width: 331,
                  height: 56,
                  flexShrink: 0,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={
                  buttonPressed === 'numero'
                    ? require('../../../assets/boutons/Bouton-Rouge.png')
                    : require('../../../assets/boutons/Bouton-Bleu-Telephone.png')
                }
              />
            </TouchableOpacity>
            <View style={[{top: 20}]}>
              <View>
                <Text style={[Styles.textBtn, Styles.mb2, Styles.fl]}>
                  {' '}
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
                  <Text
                    style={[
                      Styles.textBtn,
                      Styles.mb,
                      Styles.fb,
                      {top: 5, textDecorationLine: 'underline'},
                    ]}>
                    {' '}
                    Se connecter
                  </Text>
                </TouchableOpacity>
                <View style={[Styles.line, {top:10}]} />
              </View>

              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Recuperation email', {
                      userConsent: consentement,
                      routeName: routeChoice,
                      loveCoach: loveCoach,
                    })
                  }
                  accessibilityLabel="Récupération email">
                  <Text
                    style={[
                      Styles.textBtnBlue,
                      Styles.mb,
                      Styles.underline,
                      Styles.fb,
                    ]}>
                    {' '}
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

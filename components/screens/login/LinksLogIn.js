import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import Logo from '../../composants/Logo';

export const LinksLogIn = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  console.log('Choix de route : ', routeChoice);

  return (
    <View style={[Styles.container]}>
      <ImageBackground
        style={[Styles.bgGradient]}
        source={require('../../../assets/images/Background.png')}>
        <Logo />

        <View style={[Styles.ViewText2, {top: -20}]}>
          <Text style={[Styles.textWhite, {top: 0, left: 50}]}>
            UN COUP DE COEUR
          </Text>
          <Text style={[Styles.textWhite, {top: 10, left: 50}]}>
            N'ATTEND PAS
          </Text>
          <Text style={[Styles.textWhite, Styles.fl, {top: 30, left: 50}]}>
            NE PERDEZ PLUS RIEN...{' '}
          </Text>
        </View>

        <View style={[Styles.ViewBtnLog, {top: -160}]}>
          <View>
            <TouchableOpacity
              style={[{top: -10}]}
              onPress={() =>
                navigation.navigate('Profil', {routeName: 'Se connecter'})
              }
              accessibilityLabel="Connexion avec Apple">
              <Text style={[Styles.textBtn10, {zIndex: 1, top: 45, left: 10}]}>
                Se connecter avec Apple
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
                source={require('../../../assets/boutons/Bouton-Noir-Apple.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[{top: -30}]}
              onPress={() =>
                navigation.navigate('Profil', {routeName: 'Se connecter'})
              }
              accessibilityLabel="Connexion avec Facebook">
              <Text style={[Styles.textBtn10, {zIndex: 2, top: 54, left: 20}]}>
                Se connecter avec Facebook
              </Text>
              <Image
                style={[
                  {
                    top: 10,
                    width: '90%',
                    height: 60,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../../assets/boutons/Bouton-Noir-Facebook.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[{top: -50}]}
              onPress={() =>
                navigation.navigate('Profil', {routeName: 'Se connecter'})
              }
              accessibilityLabel="Connexion avec Google">
              <Text style={[Styles.textBtn10, {zIndex: 3, top: 62, left: 20}]}>
                Se connecter avec Google
              </Text>
              <Image
                style={[
                  {
                    top: 20,
                    width: '90%',
                    height: 60,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../../assets/boutons/Bouton-Noir-Google.png')}
              />
            </TouchableOpacity>

            <View style={[Styles.line, {top: -30}]} />

            <TouchableOpacity
              style={[{top: -80}]}
              onPress={() =>
                navigation.navigate('Compte', {routeName: 'Se connecter'})
              }
              accessibilityLabel="Se connecter par email">
              <Text style={[Styles.textBtn10, {zIndex: 4, top: 62, left: 15}]}>
                Se connecter par e-mail
              </Text>
              <Image
                style={[
                  {
                    top: 20,
                    width: '90%',
                    height: 60,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../../assets/boutons/Bouton-Bleu-Email.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[{top: -50}]}
              onPress={() =>
                navigation.navigate('Compte', {routeName: 'Connexion numero'})
              }
              accessibilityLabel="Se connecter avec son numéro de téléphone">
              <Text style={[Styles.textBtn10, {zIndex: 5, top: 22, left: 15}]}>
                Se connecter avec son n°
              </Text>
              <Image
                style={[
                  {
                    top: -20,
                    width: '90%',
                    height: 60,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../../assets/boutons/Bouton-Bleu-Telephone.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={[{top: -60}]}>
            <Text style={[Styles.textBtn, Styles.mb2, Styles.fl]}>
              {' '}
              Vous n'avez pas de compte ?
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Bienvenue', {routeName: "S'inscrire"})
              }
              accessibilityLabel="Rejoignez-nous">
              <Text
                style={[
                  Styles.textBtnBlue,
                  Styles.mb2,
                  Styles.underline,
                  Styles.fb,
                ]}>
                {' '}
                Rejoignez-nous !
              </Text>
            </TouchableOpacity>

            <View style={[Styles.line]} />
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Recuperation email', {
                    routeName: 'Recuperation de compte',
                  })
                }
                accessibilityLabel="Récupération email">
                <Text
                  style={[
                    Styles.textBtnBlue,
                    Styles.mb,
                    Styles.underline,
                    Styles.fb,
                    {color: '#880808'},
                  ]}>
                  {' '}
                  Récupérez mon compte.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

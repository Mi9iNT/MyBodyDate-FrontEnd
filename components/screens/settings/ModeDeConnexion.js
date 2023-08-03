/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import StyleModeConnexion from '../../../assets/style/styleScreens/styleSettings/StyleModeConnexion';
import PropTypes from 'prop-types';
import MenuSlideSettings from '../../composants/MenuSlideSettings';
import ModeConnexionStyles from '../../../assets/style/styleScreens/styleSettings/StyleModeConnexion';

export const ModeDeConnexion = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  const [buttonPressedNumero, setButtonPressedNumero] = useState(false);
  const [buttonPressedGoogle, setButtonPressedGoogle] = useState(true);
  const [buttonPressedFacebook, setButtonPressedFacebook] = useState(false);
  const [buttonPressedApple, setButtonPressedApple] = useState(false);
  const [buttonPressedBack, setButtonPressedBack] = useState(false);

  return (
    <ImageBackground
      style={StyleModeConnexion.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings settingsNavigation={() => navigation.navigate('Securite et privee')} />
      <Text
        style={StyleModeConnexion.title}>
        Mode de connexion
      </Text>
      <View
        style={StyleModeConnexion.separator}
      />
      <Text
        style={StyleModeConnexion.description}>
        Gérez vos modes de connexions sécurisé ?
      </Text>
      <View
        style={ModeConnexionStyles.ModeConnexionContainer}>
        <Text
          style={[StyleModeConnexion.secondTitle, {top: -20}]}>
          Email actuel
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Email')}>
          <Image
            style={StyleModeConnexion.ModeDeConnexionItem}
            source={require('../../../assets/boutons/bouton-enveloppe-tranparent.png')}
          />
          <Text
            style={[StyleModeConnexion.ModeConnexionItemText, {top: -40, color: '#0019A7',}]}>
            abcd@gmail.com
          </Text>
        </TouchableOpacity>
        <Text
          style={StyleModeConnexion.secondTitle}>
          Autre mode de connexion
        </Text>
      </View>
      <View style={{top: 170}}>
        {/* Se connecter avec son numéro */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("S'inscrire par numero");
            setButtonPressedNumero(true);
            setButtonPressedGoogle(false);
            setButtonPressedFacebook(false);
            setButtonPressedApple(false);
          }}>
          <Image
            style={StyleModeConnexion.ModeConnexionLog}
            source={
              buttonPressedNumero
                ? require('../../../assets/boutons/bouton-telephone-bleu.png')
                : require('../../../assets/boutons/bouton-telephone-transparent.png')
            }
          />
          <Text
            style={[{color: buttonPressedNumero ? 'white' : '#000'}, StyleModeConnexion.ModeConnexionLogText]}>
            Se connecter avec son n°
          </Text>
        </TouchableOpacity>
        {/* Se connecter avec Apple */}
        <TouchableOpacity
          onPress={() => {
            setButtonPressedNumero(false);
            setButtonPressedGoogle(false);
            setButtonPressedFacebook(false);
            setButtonPressedApple(true);
          }}>
          <Image
            style={StyleModeConnexion.ModeConnexionLog}
            source={
              buttonPressedApple
                ? require('../../../assets/boutons/bouton-apple-bleu.png')
                : require('../../../assets/boutons/bouton-apple-transparent.png')
            }
          />
          <Text
            style={[{color: buttonPressedApple ? 'white' : '#000'}, StyleModeConnexion.ModeConnexionLogText]}>
            Connexion avec Apple
          </Text>
        </TouchableOpacity>
        {/* Se connecter avec Facebook */}
        <TouchableOpacity
          onPress={() => {
            setButtonPressedNumero(false);
            setButtonPressedGoogle(false);
            setButtonPressedFacebook(true);
            setButtonPressedApple(false);
          }}>
          <Image
            style={StyleModeConnexion.ModeConnexionLog}
            source={
              buttonPressedFacebook
                ? require('../../../assets/boutons/bouton-facebook-bleu.png')
                : require('../../../assets/boutons/bouton-facebook-transparent.png')
            }
          />
          <Text
            style={[{ color: buttonPressedFacebook ? 'white' : '#000'}, StyleModeConnexion.ModeConnexionLogText]}>
            Connexion avec Facebook
          </Text>
        </TouchableOpacity>
        {/* Se connecter avec Google */}
        <TouchableOpacity
          onPress={() => {
            setButtonPressedGoogle(true);
            setButtonPressedFacebook(false);
            setButtonPressedApple(false);
            setButtonPressedNumero(false);
          }}>
          <Image
            style={StyleModeConnexion.ModeConnexionLog}
            source={
              buttonPressedGoogle
                ? require('../../../assets/boutons/bouton-google-bleu.png')
                : require('../../../assets/boutons/bouton-google-transparent.png')
            }
          />
          <Text
            style={[{color: buttonPressedGoogle ? 'white' : '#000'}, StyleModeConnexion.ModeConnexionLogText]}>
            Connexion avec Google
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Securite et privee')}>
        <Image
          style={StyleModeConnexion.backButton}
          source={
            buttonPressedBack
              ? require('../../../assets/boutons/Bouton-Bleu.png') 
              : require('../../../assets/boutons/Bouton-Blanc-Border.png')
          }
        />
        <Text
          style={[{color: buttonPressedBack ? 'white' : '#0019A7'}, StyleModeConnexion.backButtonText]}>
          Retour sécurité & vie privée
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

ModeDeConnexion.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

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
import {MenuSlide} from '../composants/MenuSlide';
import Styles from '../../assets/style/Styles';
import PropTypes from 'prop-types';

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
  const [buttonPressedGoogle, setButtonPressedGoogle] = useState(false);
  const [buttonPressedFacebook, setButtonPressedFacebook] = useState(false);
  const [buttonPressedApple, setButtonPressedApple] = useState(false);

  return (
    <ImageBackground
      style={Styles.bgGradient}
      source={require('../../assets/images/bg-parametres.png')}>
      <MenuSlide />
      <Text
        style={{
          top: 30,
          color: '#0019A7',
          fontFamily: 'Gilroy',
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 700,
        }}>
        Mode de connexion
      </Text>
      <View
        style={{
          backgroundColor: '#0019A7',
          width: 351,
          height: 1,
          alignSelf: 'center',
          top: 60,
        }}
      />
      <Text
        style={{
          color: '#929EDE',
          top: 100,
          width: 320,
          alignSelf: 'center',
          textAlign: 'center',
          fontFamily: 'Comfortaa',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        Gérez vos modes de connexions sécurisé ?
      </Text>
      <View
        style={{
          flexShrink: 0,
          alignSelf: 'center',
          top: 150,
        }}>
        <Text
          style={{
            color: '#0019A7',
            textAlign: 'left',
            top: -20,
            left: 20,
            fontFamily: 'Gilroy',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Email actuel
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Email')}>
          <Image
            style={{
              width: 327,
              height: 51,
              flexShrink: 0,
              alignSelf: 'center',
            }}
            source={require('../../assets/boutons/bouton-enveloppe-tranparent.png')}
          />
          <Text
            style={{
              top: -40,
              color: '#0019A7',
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
            abcd@gmail.com
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#0019A7',
            textAlign: 'left',
            fontFamily: 'Comfortaa',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
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
            style={{
              width: 331,
              height: 56,
              flexShrink: 0,
              alignSelf: 'center',
            }}
            source={
              buttonPressedNumero
                ? require('../../assets/boutons/bouton-telephone-bleu.png')
                : require('../../assets/boutons/bouton-telephone-transparent.png')
            }
          />
          <Text
            style={{
              top: -40,
              left: 10,
              color: buttonPressedNumero ? 'white' : '#0019A7',
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
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
            style={{
              width: 331,
              height: 56,
              flexShrink: 0,
              alignSelf: 'center',
            }}
            source={
              buttonPressedApple
                ? require('../../assets/boutons/bouton-apple-bleu.png')
                : require('../../assets/boutons/bouton-apple-transparent.png')
            }
          />
          <Text
            style={{
              top: -40,
              color: buttonPressedApple ? 'white' : '#0019A7',
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
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
            style={{
              width: 331,
              height: 56,
              flexShrink: 0,
              alignSelf: 'center',
            }}
            source={
              buttonPressedFacebook
                ? require('../../assets/boutons/bouton-facebook-bleu.png')
                : require('../../assets/boutons/bouton-facebook-transparent.png')
            }
          />
          <Text
            style={{
              top: -40,
              left: 10,
              color: buttonPressedFacebook ? 'white' : '#0019A7',
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
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
            style={{
              width: 331,
              height: 56,
              flexShrink: 0,
              alignSelf: 'center',
            }}
            source={
              buttonPressedGoogle
                ? require('../../assets/boutons/bouton-google-bleu.png')
                : require('../../assets/boutons/bouton-google-transparent.png')
            }
          />
          <Text
            style={{
              top: -40,
              left: 10,
              color: buttonPressedGoogle ? 'white' : '#0019A7',
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
            Connexion avec Google
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image
          style={{
            top: 170,
            width: 331,
            height: 56,
            flexShrink: 0,
            alignSelf: 'center',
          }}
          source={require('../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={{
            top: 130,
            left: 10,
            color: buttonPressedGoogle ? 'white' : '#0019A7',
            textAlign: 'center',
            alignSelf: 'center',
            fontFamily: 'Comfortaa',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Retour paramètres
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

ModeDeConnexion.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

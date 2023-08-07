/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from '../../assets/style/Styles';

//Home Screen
export const HomeStackNext = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState();

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../assets/images/Background2.png')}>
        <View style={[Styles.ViewLogo3]}>
          <Image
            style={Styles.logo3}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={[Styles.ViewText2, {top: 200}]}>
          <Text style={[Styles.textBlue2]}>UN COUP DE COEUR N'ATTEND PAS</Text>
          <Text style={[Styles.textBlue22]}>NE PERDEZ PLUS RIEN... </Text>
        </View>
        <View style={[Styles.ViewBtn, {top: -50}]}>
          <TouchableOpacity
            style={[{top: 0, height: 60, width: '90%', alignSelf: 'center'}]}
            accessibilityLabel="S'inscrire"
            onPress={() => {
              setButtonPressed("S'inscrire");
              navigation.navigate('Date de naissance', {routeName: "S'inscrire"});
            }}>
            <Text style={[Styles.textBtn6, {zIndex: 1, top: 10}]}>
              S'inscrire
            </Text>
            <Image
              style={[
                {
                  top: -34,
                  width: '100%',
                  height: 60,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={
                buttonPressed === "S'inscrire"
                  ? require('../../assets/boutons/Bouton-Rouge.png')
                  : require('../../assets/boutons/Bouton-Bleu.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[{top: 20, height: 60, width: '90%', alignSelf: 'center'}]}
            accessibilityLabel="Se connecter"
            onPress={() => {
              setButtonPressed('Se connecter');
              navigation.navigate('Liens de connexion', {
                routeName: 'Se connecter',
              });
            }}>
            <Text style={[Styles.textBtn6, {zIndex: 2, top: 10}]}>
              Se connecter
            </Text>
            <Image
              style={[
                {
                  top: -34,
                  width: '100%',
                  height: 60,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={
                buttonPressed === 'Se connecter'
                  ? require('../../assets/boutons/Bouton-Rouge.png')
                  : require('../../assets/boutons/Bouton-Bleu.png')
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

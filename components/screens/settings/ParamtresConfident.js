/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Switch,
} from 'react-native';
import PropTypes from 'prop-types';
import StyleAutorisationsNecessaires from '../../../assets/style/styleScreens/styleSettings/StyleParemetresConfident';
import MenuSlideSettings from '../../composants/MenuSlideSettings';
import StyleParemetresConfident from '../../../assets/style/styleScreens/styleSettings/StyleParemetresConfident';

export const ParametresConfident = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  const [isEnabledLocalisation, setIsEnabledLocalisation] = useState(false);
  const toggleSwitchLocalisation = () =>
    setIsEnabledLocalisation(previousState => !previousState);
  const [isEnabledInfoPerso, setIsEnabledInfoPerso] = useState(false);
  const toggleSwitchInfoPerso = () =>
    setIsEnabledInfoPerso(previousState => !previousState);
  const [isEnabledHistorique, setIsEnabledHistorique] = useState(false);
  const toggleSwitchHistorique = () =>
    setIsEnabledHistorique(previousState => !previousState);
  const [buttonPressed, setButtonPressed] = useState();
  return (
    <ImageBackground
      style={StyleAutorisationsNecessaires.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings settingsNavigation={() => navigation.navigate('Securite et privee')} />
      <View style={{flex:6}}>
      <Text
        style={StyleAutorisationsNecessaires.title}>
        Paramètres de confidentialités
      </Text>
      <View
        style={StyleAutorisationsNecessaires.separator}
      />
      <View
        style={StyleAutorisationsNecessaires.parametresConfidentContainer}>
        <View
          style={StyleAutorisationsNecessaires.viewItem}>
          <Text
          style={StyleAutorisationsNecessaires.titleItem}>
          Localisation
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={StyleAutorisationsNecessaires.textItem}>
            Vous pouvez choisir de partager votre localisation ou non.
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabledLocalisation ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitchLocalisation}
            value={isEnabledLocalisation}
            style={{
              top: 0,
              alignSelf: 'end',
              left: 20,
            }}
          />
        </View>
        </View>

        <View
        style={StyleAutorisationsNecessaires.viewItem}>
        <Text
          style={StyleAutorisationsNecessaires.titleItem}>
          Informations personnelles
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={StyleAutorisationsNecessaires.textItem}>
            Masquer certaines informations sensibles.
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabledInfoPerso ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitchInfoPerso}
            value={isEnabledInfoPerso}
            style={{
              top: 0,
              alignSelf: 'end',
              left: 20,
            }}
          />
        </View>
        </View>

        <View
        style={StyleAutorisationsNecessaires.viewItem}>
        <Text
          style={StyleAutorisationsNecessaires.titleItem}>
          Historique des discussions
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={StyleAutorisationsNecessaires.textItem}>
            Supprimer ou d'archiver les conversations précédentes pour garder
            votre messagerie organisée et protéger votre vie privée.
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabledHistorique ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitchHistorique}
            value={isEnabledHistorique}
            style={{
              top: 0,
              alignSelf: 'end',
              left: 20,
            }}
          />
        </View>


        </View>
         <TouchableOpacity
          style={{top:20}}
          accessibilityLabel="Autorisations nécessaires"
          onPress={() => navigation.navigate('Autorisations necessaires')}>
          <View
            style={StyleAutorisationsNecessaires.viewItem2}>
            <Text
              style={StyleAutorisationsNecessaires.textItem2}>
              Autorisations nécessaires
            </Text>
            <Image
              style={StyleAutorisationsNecessaires.imgItem}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>

      </View><View style={{flex:1}}>
        <TouchableOpacity style={StyleParemetresConfident.containerBack} onPress={() => {
          setButtonPressed(true);
          navigation.navigate('Securite et privee');
        }}>
        <Image
          style={StyleParemetresConfident.backButton}
          source={buttonPressed ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={[StyleParemetresConfident.backButtonText, {color: buttonPressed ? '#fff' : '#0019A7'}]}>
          Retour sécurité & vie privée
        </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

ParametresConfident.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

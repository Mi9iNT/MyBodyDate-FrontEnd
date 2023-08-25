/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect,useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import StyleModeVoyage from '../../../assets/style/styleScreens/styleSettings/StyleModeVoyage';
import MenuSlide from '../../composants/MenuSlide';

export const ModeVoyage = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  const [buttonPressed, setButtonPressed] = useState();
  return (
    <ImageBackground
      style={StyleModeVoyage.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide settingsNavigation={'Settings'} backButton={'Retour'} />
      <View style={{flex:7}}>
      <Text
        style={StyleModeVoyage.title}>
        Mode voyage
      </Text>
      <View
        style={StyleModeVoyage.separator}
      />
      <Text
        style={StyleModeVoyage.description}>
        Utilisez le mode voyage pour changez votre emplacement et découvrir de
        nouvelles personnes.
      </Text>
      <View
        style={StyleModeVoyage.boxInfoModeVoyage}>
        <TouchableOpacity
          accessibilityLabel="Changer ma localisation"
          onPress={() => navigation.navigate('Changer localisation')}>
          <View
            style={StyleModeVoyage.boxLinkModeVoyage}>
            <Text
              style={StyleModeVoyage.textLinkModeVoyage}>
              Changer ma localisation
            </Text>
            <Text
              style={StyleModeVoyage.subTextModeVoyage}>
              Paris, FR
            </Text>
            <Image
              style={{
                width: 7,
                height: 15,
                flexShrink: 0,
              }}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={StyleModeVoyage.viewContainerInfo}>
        <Image
          style={StyleModeVoyage.icoInfo}
          source={require('../../../assets/boutons/ico-info-rose-text-bleu.png')}
        />
        <Text style={StyleModeVoyage.textInfo}>
          Si vous avez accepté la géolocalisation, votre recherche est basée d’abord sur la position de votre téléphone. Donc si vous  changez, vous pouvez élargir votre recherche sans être sur place.
        </Text>
        <Text style={StyleModeVoyage.textInfo}>
          Si vous avez bloqué votre géolocalisation, votre recherche est définie exclusivement par la ville que vous aurez déclaré.
        </Text>
        </View>
        </View>
        <View style={{flex:1}}>
      <TouchableOpacity onPress={() => { setButtonPressed(true); navigation.navigate('Settings'); }}>
        <Image
          style={StyleModeVoyage.backButton}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={[StyleModeVoyage.backButtonText, {color: buttonPressed ? '#fff' : '#0019A7'}]}>
          Retour paramètres
        </Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

ModeVoyage.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

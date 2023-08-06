/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import StyleContactAndFAQ from '../../../assets/style/styleScreens/styleSettings/StyleContactAndFAQ';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const ContactAndFAQ = ({navigation}) => {
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
      style={StyleContactAndFAQ.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings />
      <View style={{flex:5}}>
      <Text
        style={StyleContactAndFAQ.title}>
        Contact & FAQ
      </Text>
      <View
        style={StyleContactAndFAQ.separator}
      />
      <Text
        style={StyleContactAndFAQ.description}>
        Gérez vos modes de connexions sécurisé ?
      </Text>
      <View
        style={StyleContactAndFAQ.contactAndFaqContainer}>
        <TouchableOpacity
          accessibilityLabel="Aide"
          onPress={() => navigation.navigate('Aide')}>
          <View
            style={StyleContactAndFAQ.viewItem}>
            <Text
              style={StyleContactAndFAQ.textItem}>
              Aide
            </Text>
            <Image
              style={StyleContactAndFAQ.imgItem}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Centre de sécurité"
          onPress={() => navigation.navigate('Centre de securite')}>
          <View
            style={StyleContactAndFAQ.viewItem}>
            <Text
              style={StyleContactAndFAQ.textItem}>
              Centre de sécurité
            </Text>
            <Image
              style={StyleContactAndFAQ.imgItem}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Nous contactez"
          onPress={() => navigation.navigate('Nous contactez')}>
          <View
            style={StyleContactAndFAQ.viewItem}>
            <Text
              style={StyleContactAndFAQ.textItem}>
              Nous contactez
            </Text>
            <Image
              style={StyleContactAndFAQ.imgItem}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="FAQ"
          onPress={() => navigation.navigate('FAQ')}>
          <View
            style={StyleContactAndFAQ.viewItem}>
            <Text
              style={StyleContactAndFAQ.textItem}>
              FAQ
            </Text>
            <Image
              style={StyleContactAndFAQ.imgItem}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        </View>
        </View><View style={{flex:1}}>
      <TouchableOpacity style={StyleContactAndFAQ.backButtonContainer} onPress={() => navigation.navigate('Settings')}>
        <Image
          style={StyleContactAndFAQ.backButton}
          source={buttonPressed ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={[StyleContactAndFAQ.backButtonText, {color: buttonPressed ? '#fff' : '#0019A7'}]}>
          Retour paramètres
        </Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

ContactAndFAQ.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

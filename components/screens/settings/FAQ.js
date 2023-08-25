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
import StyleFAQ from '../../../assets/style/styleScreens/styleSettings/StyleFAQ';
import MenuSlide from '../../composants/MenuSlide';

export const FAQ = ({navigation}) => {
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
      style={StyleFAQ.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide settingsNavigation={'Contact et FAQ'} backButton={'Retour'} />
      <View style={{flex:5}}>
      <Text
        style={StyleFAQ.title}>
        FAQ
      </Text>
      <View
        style={StyleFAQ.separator}
      />
      <Text
        style={StyleFAQ.description}>
        Trouvez l'FAQ
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={StyleFAQ.backButtonContainer} onPress={() => { setButtonPressed(true); navigation.navigate('Contact et FAQ'); }}>
        <Image
          style={StyleFAQ.backButton}
          source={buttonPressed ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={[StyleFAQ.backButtonText, {color: buttonPressed ? '#fff' : '#0019A7'}]}>
          Retour Contact et FAQ
        </Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

FAQ.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

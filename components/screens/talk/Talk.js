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
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import MenuSlide from '../../composants/MenuSlide';
import MenuBottom from '../../composants/MenuBottom';

export const Talk = ({ navigation, route }) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  const activeTab = route.params?.activeTab ?? '';
  const imagePath = route.params?.imagePath ?? '';
  console.log(imagePath);
  return (
    <View
      style={{backgroundColor:'#fff', height:'100%', width:'auto',}}>
      <MenuSlide imagePath={imagePath} />
      <View>
         <Image
        source={require('../../../assets/images/bg-parametres.png')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '30%',
          left: 0,}}
        resizeMode="contain"
      />
      </View>
      <MenuBottom navigation={navigation} activeTab={activeTab} />
    </View>
  );
};

Talk.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

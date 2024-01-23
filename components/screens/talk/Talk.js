/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import MenuSlide from '../../composants/MenuSlide';
import MenuBottom from '../../composants/MenuBottom';
import MenuTalk from '../../composants/MenuTalk';
import OdlMessage from '../../composants/OldMessage';

export const Talk = ({ navigation, route, imagePath }) => {

  const tabPath = route.params?.tabPath ?? '';
  console.log(tabPath);

  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  const [user, setUser] = useState(user);
  return (
    <View style={{backgroundColor:'#fff', height:'100%', width:'auto'}}>
      <MenuSlide imagePath={imagePath} tabPath={tabPath} />
      <View>
        <MenuTalk user={user}  navigation={navigation} />
      </View>
      <ImageBackground
      source={require('../../../assets/images/bg-parametres.png')}
      style={{top: '10%', resizeMode: 'contain'}}>
        <OdlMessage navigation={ navigation } />
      </ImageBackground>
      {/* <MenuBottom navigation={navigation} /> */}
    </View>
  );
};

Talk.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

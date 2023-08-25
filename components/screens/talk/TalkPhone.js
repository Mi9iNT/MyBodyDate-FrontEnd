/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import MenuSlide from '../../composants/MenuSlide';

export const TalkPhone = ({ navigation, route, imagePath }) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={{backgroundColor:'#fff', height:'100%', width:'auto'}}>
      <MenuSlide imagePath={imagePath} />

      <ImageBackground source={require('../../../assets/images/bg-parametres.png')}
        style={{ height: '100%', resizeMode: 'contain' }}>
        <View style={{ top: 100, width: 390, height: 34 }}>
          <Text style={{ color: '#0019A7', textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 24, fontStyle: 'normal', fontWeight: 700 }}>Appel vers KOLIA</Text>
          <Image style={{ top: 100, alignSelf: 'center', width: 200, height: 200, borderRadius: 100, borderWidth: 2, borderColor: '#0019A7' }} source={require('../../../assets/images/kolia-ellipse-2.png')} />
          <View style={{ top: 200, flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', width: '80%', height: 75 }}>
            <TouchableOpacity style={{ height: 75, width: 75}}  onPress={() => navigation.navigate('TalkPhoneAccept')}>
              <Image style={{ top: 0, alignSelf: 'center', width: 75, height: 75 }} source={require('../../../assets/boutons/accept-call.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 75, width: 75 }} onPress={() => navigation.goBack()}>
              <Image style={{ top: 0, alignSelf: 'center', width: 75, height: 75 }} source={require('../../../assets/boutons/decline-call.png')} />
            </TouchableOpacity>

          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

TalkPhone.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

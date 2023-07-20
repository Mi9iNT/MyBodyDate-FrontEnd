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
      style={{backgroundColor:'#fff', height:'100%', width:'auto'}}>
      <MenuSlide imagePath={imagePath} />
      <View style={{flexDirection:'row', justifyContent: 'space-around', top:30}}>
        <View style={{ flexDirection: 'row', width:200, height:50}}>
          <Image source={require('../../../assets/images/Ellipse44.png')} style={{ position:'absolute', top: -30, width: 50, resizeMode: 'contain' }} />
          <TouchableOpacity style={{backgroundColor:'#fff', position:'absolute', top: 0, left: 40, justifyContent:'center', alignItems:'center', width: 50, height: 50, borderColor:'#0019A7', borderWidth: 2, borderRadius: 50}}>
            <Image source={require('../../../assets/images/add-6.png')} style={{ top: 0, width: 50, resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent:'space-between', width: 150, height: 50 }}>
          <TouchableOpacity style={{justifyContent:'center'}}>
            <Image source={require('../../../assets/images/add-6.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent:'center'}}>
            <Image source={require('../../../assets/images/add-6.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent:'center'}}>
            <Image source={require('../../../assets/images/appel-video-1.png')}/>
          </TouchableOpacity>
        </View>
      </View>
         <ImageBackground source={require('../../../assets/images/bg-parametres.png')}
          style={{top: '10%', resizeMode: 'contain'}}>
        <View style={{
          width: '100%',
          height:'100%',
          alignItems: 'center',
        }}>
          <Image style={{top:'32%'}} source={require('../../../assets/images/ico-conversation.png')} />
          <Text style={{ top:'35%', width: 200, color: '#929EDE', textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 20, fontStyle: 'normal', fontWeight: 700 }}>Vous n'avez pas encore de conversation</Text>
        </View>
        </ImageBackground>

      <MenuBottom navigation={navigation} activeTab={activeTab} />
    </View>
  );
};

Talk.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

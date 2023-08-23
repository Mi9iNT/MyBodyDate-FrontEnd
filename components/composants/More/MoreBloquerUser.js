/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

const MoreBloquerUser = ({userPrenom}) => {

  return (
    <View style={{flexDirection:'column', justifyContent:'space-around', height:'50%', width: '96%', alignSelf:'center',}}>
      <Text style={{color: '#0019A7',textAlign: 'center',fontFamily: 'Comfortaa',fontSize: 24,fontStyle: 'normal',fontWeight: 700 }}>Bloquer {userPrenom} ?</Text>
      <Image source={require('../../../assets/images/ico-like.png')} style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center' }} />
      <Text style={{ color: '#0019A7', textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 24, fontStyle: 'normal', fontWeight: 700 }}>MERCI !</Text>
      <Text style={{color: '#0019A7',textAlign: 'center',fontFamily: 'Comfortaa',fontSize: 24,fontStyle: 'normal',fontWeight: 700, }}>Votre décision a bien été prise en compte ! {userPrenom} ne pourra plus accéder à votre profil ou vous envoyer des messages.</Text>
    </View>
  );
};

export {MoreBloquerUser};

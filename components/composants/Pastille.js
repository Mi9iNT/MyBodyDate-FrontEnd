/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Styles from '../../assets/style/Styles';
import { useNavigation } from '@react-navigation/native';

export const Pastille = ({ imagePath }) => {
  
  const icon = useMemo(() => {
    return imagePath === false
      ? require('../../assets/images/Rencontre_amoureuse.png')
      : require('../../assets/images/cercle_ami.png');
  }, [imagePath]);
  console.log(imagePath);
  return (
   <TouchableOpacity>
      <Image source={require('../../assets/images/cercle_ami.png')} style={{ width: 30, height: 30 }} />
    </TouchableOpacity>
  );
};

export default Pastille;

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const ProgressBar = ({progress, width, height, color}) => {
  const progressBarStyle = {
    width: `${progress}%`,
    height: height || 10,
    backgroundColor: color || '#4CAF50',
  };
  return (
   <View style={{
    borderRadius: 5,
    overflow: 'hidden',
  }} />
  );
};

export default ProgressBar;

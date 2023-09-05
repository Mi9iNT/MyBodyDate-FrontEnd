/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import MenuSlide from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';
import { CheerFlakes } from '../../composants/composants-appsAffinitaires/CheerFlakes';
import { OpenBetween } from '../../composants/composants-appsAffinitaires/OpenBetween';
import { WineGap } from '../../composants/composants-appsAffinitaires/WineGap';
import { GoPride } from '../../composants/composants-appsAffinitaires/GoPride';

export const AppsAffinitaires2 = ({route, navigation}) => {

  const routeAffinite = route.params?.routeAffinite ?? '';
  const activeTab = route.params?.activeTab ?? '';
  const imagePath = route.params?.imagePath ?? '';
  console.log(routeAffinite);

  const [radioValue, setRadioValue] = useState(false);

  const handleRadioChange = value => {
    setRadioValue(value);
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        resizeMode:'contain',
      }}>
      <MenuSlide imagePath={imagePath} backgroundColor={'white'} backButton={'Back'} />
      {routeAffinite === 'WineGap' ?
        <WineGap navigation={navigation}/>
        : routeAffinite === 'GoPride' ?
          <GoPride navigation={navigation}/>
        : routeAffinite === 'CheerFlakes' ?
          <CheerFlakes navigation={navigation}/>
        : routeAffinite === 'OpenBetween' ?
          <OpenBetween navigation={navigation}/>
        : null
      }
    </View>
  );
};

AppsAffinitaires2.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

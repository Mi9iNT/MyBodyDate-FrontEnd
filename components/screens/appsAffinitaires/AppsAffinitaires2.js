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
import { MyBodyDate } from '../../composants/composants-appsAffinitaires/MyBodyDate';

export const AppsAffinitaires2 = ({route, navigation,}) => {

  const routeAffinite = route.params?.routeAffinite ?? '';
  const menu = route.params?.menu ?? '';
  const activeTab = route.params?.activeTab ?? '';
  const imagePath = route.params?.imagePath ?? '';

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
      {menu === true ?
        <MenuSlide imagePath={imagePath} backgroundColor={'white'} backButton={'Back'} />
        :
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{left: 340, width: 30, height:30, position:'absolute', top: 50, 
              zIndex:3,}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity> }
      {routeAffinite === 'WineGap' ?
        <WineGap navigation={navigation} background={'1'} menu={menu} />
        : routeAffinite === 'GoPride' ?
          <GoPride navigation={navigation} background={'1'} menu={menu} />
        : routeAffinite === 'CheerFlakes' ?
            <CheerFlakes navigation={navigation} background={'1'} menu={menu} />
        : routeAffinite === 'OpenBetween' ?
              <OpenBetween navigation={navigation} background={'1'} menu={menu} />
        : routeAffinite === 'MyBodyDate' ?
          <MyBodyDate navigation={navigation}/>
        : null
      }
    </View>
  );
};

AppsAffinitaires2.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

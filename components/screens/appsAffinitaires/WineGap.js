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

export const WineGap = ({navigation}) => {


  const [radioValue, setRadioValue] = useState(false);

  const handleRadioChange = value => {
    setRadioValue(value);
  };

  return (
    <ImageBackground source={require('../../../assets/images/bg-winegap.png')} style={{width: '100%', height:'100%', resizeMode:'contain',}} >
      <Image source={require('../../../assets/images/winegap-card.png')} style={{position:'absolute', top: 50, width: 215, height: 95, alignSelf: 'center', resizeMode: 'cover',zIndex:1  }} />
      <View
          source={require('../../../assets/images/bg-winegap.png')}
          style={{
            width: '100%',
            height: '95%',
            backgroundColor: 'rgba(132, 36, 22, 0.3)',
            position: 'relative',
            zIndex:1,
          }}>
              <Text style={{ top: 220, left:30, color: '#fff', fontFamily: 'Gilory-Bold', textAlign: 'left', fontSize: 48, fontStyle: 'normal', fontWeight:700, }}>WineGap</Text>
            <Text style={[{top: 240, width:'80%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 18,fontStyle: 'normal', }]}>
              À la recherche de rencontres et de liens intemporels : unissons nos cœurs sages !
            </Text>
            <Text style={[{top: 250, width:'80%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 18,fontStyle: 'normal', }]}>
              Que vous cherchiez une amitié complice, une romance vibrante ou simplement un compagnon de vie, notre plateforme facilite les rencontres entre personnes partageant les mêmes valeurs et aspirations.
            </Text>
            <TouchableOpacity onPress={() => handleRadioChange(!radioValue)}>
              <View style={[{top: 300, flexDirection: 'row', width: '80%', alignItems: 'center', marginVertical: 5, alignSelf: 'center',}]}>
                <Image
                  source={
                    radioValue
                      ? require('../../../assets/images/radio_selected.png')
                      : require('../../../assets/images/radio_unselected.png')
                  }
                  style={{width: 20, height: 20}}
                />
                <Text style={[{color: '#FFF', fontSize: 14, padding: 15,}]}>
                  Je souhaite m’inscrire à cette application
                </Text>
              </View>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.goBack(); }} style={{top:300, left:'80%', width:50, height:50, borderRadius:100, backgroundColor:'red',}} >
              <Image source={require('../../../assets/boutons/btn-next-wine.png')} style={{width:50, height:50,resizeMode:'contain', }} />
            </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

WineGap.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

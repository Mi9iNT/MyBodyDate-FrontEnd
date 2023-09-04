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
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import MenuSlide from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';

export const GoPride = ({navigation}) => {


  const [radioValue, setRadioValue] = useState(false);

  const handleRadioChange = value => {
    setRadioValue(value);
  };

  return (
    <ImageBackground source={require('../../../assets/images/bg-gopride.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} >
      <View style={{ backgroundColor: 'rgba(219, 98, 56, 0.5)', width:'100%', height:'100%'}}>
      <Image source={require('../../../assets/images/gopride-card.png')} style={{ position: 'absolute', top: 50, width: 215, height: 95, alignSelf: 'center', resizeMode: 'cover', zIndex: 1 }} />
      <Text style={{ top: 200, left:30, color: '#fff', fontFamily: 'Gilory-Bold', textAlign: 'left', fontSize: 48, fontStyle: 'normal', fontWeight:700 }}>GoPride</Text>
      <View
          style={{
            width: '100%',
            height: '60%',
            top:240,
        }}>
            <Text style={[{top: 50, width:'90%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 15,fontStyle: 'normal' }]}>
               "L'amour ne connaît pas de frontières : embrasse ton voyage arc-en-ciel avec nous !"
            </Text>
            <Text style={[{ top: 80, width: '90%', color: '#FFF', alignSelf: 'center', fontFamily: 'Comfortaa-Bold', fontSize: 15, fontStyle: 'normal' }]}>
              L'amour ne connaît pas de frontières ici, car nous célébrons les couleurs uniques de chaque individu et croyons en l'épanouissement de toutes les histoires d'amour, peu importe qui vous êtes et qui vous aimez. Rejoins-nous et écrivons ensemble un chapitre d'amour, de tolérance et de diversité dans l'univers coloré de nos rencontres LGBT.
            </Text>
            <TouchableOpacity onPress={() => handleRadioChange(!radioValue)}>
              <View style={[{top: 90, flexDirection: 'row', width: '80%', alignItems: 'center', marginVertical: 5, alignSelf: 'center'}]}>
                <Image
                  source={
                    radioValue
                      ? require('../../../assets/images/radio_selected.png')
                      : require('../../../assets/images/radio_unselected.png')
                  }
                  style={{width: 20, height: 20}}
                />
                <Text style={[{color: '#FFF', fontSize: 14, padding: 15}]}>
                  Je souhaite m’inscrire à cette application
                </Text>
              </View>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.goBack(); }} style={{top:80, left:'80%', width:50, height:50, borderRadius:100, backgroundColor:'red'}} >
              <Image source={require('../../../assets/boutons/btn-next-pride.png')} style={{width:50, height:50,resizeMode:'contain' }} />
            </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
  );
};

GoPride.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

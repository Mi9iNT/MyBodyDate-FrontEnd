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
import MenuSlide from '../MenuSlide';
import {MenuBottom} from '../MenuBottom';

export const CheerFlakes = ({navigation}) => {


  const [radioValue, setRadioValue] = useState(false);

  const handleRadioChange = value => {
    setRadioValue(value);
  };

  return (
    <ImageBackground source={require('../../../assets/images/bg-cheerflakes.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} >
      <View style={{ backgroundColor: 'rgba(69, 192, 223, 0.6)', width:'100%', height:'100%'}}>
      <Image source={require('../../../assets/images/cheerflakes-card.png')} style={{ position: 'absolute', top: 50, width: 215, height: 95, alignSelf: 'center', resizeMode: 'cover', zIndex: 1 }} />
      <Text style={{ top: 200, left:30, color: '#fff', fontFamily: 'Gilory-Bold', textAlign: 'left', fontSize: 48, fontStyle: 'normal', fontWeight:700 }}>CheerFlakes</Text>
      <View
          source={require('../../../assets/images/bg-winegap.png')}
          style={{
            width: '100%',
            height: '60%',
            position: 'relative',
        }}>
        <ScrollView
            style={{
              top:200,
              width: '100%',
              height: 600,
              backgroundColor: 'transparent',
              alignSelf:'center',
            }}
            contentContainerStyle={{paddingBottom: 200, paddingTop:10}}>
            <Text style={[{top: 50, width:'90%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 15,fontStyle: 'normal' }]}>
              Parents solos, trouvez l’amour au milieu des exigences de la vie !
            </Text>
            <Text style={[{top: 60, width:'90%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 15,fontStyle: 'normal' }]}>
              Nous comprenons les défis de l’équilibre du quotidien entre la parentalité et la vie personnelle pour un parent solo.
            </Text>
            <Text style={[{top: 90, width:'90%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 15,fontStyle: 'normal' }]}>
              C’est pourquoi nous sommes heureux de vous présenter CheerFlakes, une application de rencontre unique conçue exclusivement pour les mères et les pères célibataires.
            </Text>
            <Text style={[{top: 100, width:'90%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 15,fontStyle: 'normal' }]}>
              Rejoindre notre communauté c’est découvrir que le bonheur peut être multiplié lorsque deux familles s’unissent pour toujours.
            </Text>
            <Text style={[{top: 120, width:'90%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 15,fontStyle: 'normal' }]}>
              Faites le premier pas pour trouver la personne avec laquelle vous écrirez une nouvelle histoire d’amour faite de joies, de compréhension et de soutien inconditionnel.
            </Text>
            <Text style={[{top: 140, width:'90%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa-Bold',fontSize: 15,fontStyle: 'normal' }]}>
              Que vous cherchiez une amitié complice, une romance vibrante ou simplement un compagnon de vie, notre plateforme facilite les rencontres entre personnes partageant les mêmes valeurs et aspirations.
            </Text>
            <TouchableOpacity onPress={() => handleRadioChange(!radioValue)}>
              <View style={[{top: 160, flexDirection: 'row', width: '80%', alignItems: 'center', marginVertical: 5, alignSelf: 'center'}]}>
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
          <TouchableOpacity onPress={() => { navigation.goBack(); }} style={{top:160, left:'80%', width:50, height:50, borderRadius:100, backgroundColor:'red'}} >
              <Image source={require('../../../assets/boutons/btn-next-cheer.png')} style={{width:50, height:50,resizeMode:'contain' }} />
            </TouchableOpacity>
        </ScrollView>
        </View>
      </View>

    </ImageBackground>
  );
};

CheerFlakes.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

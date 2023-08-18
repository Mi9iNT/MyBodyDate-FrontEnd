/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';
import PropTypes from 'prop-types';

export const PulseLike = ({route, navigation}) => {
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';
  const accesPosition = route.params?.accesPosition ?? '';
  const genre = route.params?.genre ?? '';
  const userBirth = route.params?.userBirth ?? '';
  const userSize = route.params?.userSize ?? '';
  const userLang = route.params?.userLang ?? '';
  const userSituation = route.params?.userSituation ?? '';
  const userOrientation = route.params?.userOrientation ?? '';
  const userRecherche1 = route.params?.userRecherche1 ?? '';
  const userRecherche2 = route.params?.userRecherche2 ?? '';
  const userAffinites = route.params?.userAffinites ?? '';
  const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
  const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [boxPressed, setBoxPressed] = useState();
  const [path, setPath] = useState(false);
  const [buttonPressed, setButtonPressed] = useState();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/Background-22.png')}
        style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{left: 350, width: 20, marginTop: 30}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              top: 4,
              width: 20,
              height: 18,
            }}
          />
        </TouchableOpacity>
        <View style={{flexDirection:'row', top:30}}>
          <TouchableOpacity onPress={() => { setPath(true); navigation.navigate('Pulse like'); }} style={{width: '50%', height:40, borderBottomWidth: path ? 1 : 3, borderBottomColor:'#fff'}}>
            <Text style={{color: '#FFF', textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 20, fontStyle: 'normal', fontWeight: path ? 500 : 700}}>Pulse</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setPath(false); navigation.navigate('Pass flash 21'); }} style={{width: '50%', height:40, borderBottomWidth: !path ? 1 : 3, borderBottomColor:'#fff'}}>
            <Text style={{color: '#FFF', textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 20,fontStyle: 'normal', fontWeight: !path ? 500 : 700}}>Pass</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              top: 45,
            }}>
            Pulse like
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              top: 65,
              textAlign: 'center',
            }}>
            Achetez des Pulses pour découvrir qui vous a liké
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              top: 80,
            }}>
            Découvrez nos offres !
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: 100,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {setBoxPressed('1 pulse')}}
            style={{
            width: 165,
            height: 190,
            padding: 5,
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.29)',
            borderRadius: 48,
            borderColor: '#fff',
            borderWidth: boxPressed === '1 pulse' ? 3 : 0,
          }}>
            <View style={{width: '60%', height: '45%',flexDirection:'column', justifyContent:'space-around',alignItems:'center', }}>
              <Text  style={{color: '#FFF',textAlign: 'center',fontFamily: 'Gilroy',fontSize: 32,fontStyle: 'normal',fontWeight: 700, }}>3,99 €</Text>
            <View style={{width: '60%', height: 2, backgroundColor:'#fff', }} />
            <Text  style={{color: '#FFF',textAlign: 'center',fontFamily: 'Gilroy',fontSize: 16,fontStyle: 'normal',fontWeight: 700,}}>1 Pulse</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {setBoxPressed('10 pulse')}}
              style={{
              width: 165,
              height: 190,
              padding: 5,
              justifyContent:'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.29)',
              borderRadius: 48,
              borderColor: '#fff',
              borderWidth: boxPressed === '10 pulse' ? 3 : 0,
            }}>
            <View style={{width: '80%', height: '50%',flexDirection:'column', justifyContent:'space-around',alignItems:'center', }}>
              <Text  style={{color: '#FFF',textAlign: 'center',fontFamily: 'Gilroy',fontSize: 32,fontStyle: 'normal',fontWeight: 700, }}>54,99 €</Text>
              <View style={{width: '60%', height: 2, backgroundColor:'#fff', }} />
              <Text style={{ color: '#FFF', textAlign: 'center', fontFamily: 'Gilroy', fontSize: 16, fontStyle: 'normal', fontWeight: 700, }}>10 Pulse</Text>
              <Text  style={{color: '#FFF',textAlign: 'center',fontFamily: 'Gilroy',fontSize: 16,fontStyle: 'normal',fontWeight: 700,}}>Soit 6,00€/mois</Text>
            </View>
            <View style={{ position: 'absolute', top: 150,left:60, width: 95, height: 95, backgroundColor: boxPressed === '10 pulse' ? '#0019A7' : '#fff', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: boxPressed === '10 pulse' ? '#fff' : '#0019A7', textAlign: 'center', fontFamily: 'Gilroy', fontSize: 13, fontStyle: 'normal', fontWeight: 700, }}>Econonomisez</Text>
              <Text  style={{color: boxPressed === '10 pulse' ? '#fff' : '#0019A7',textAlign: 'center',fontFamily: 'Gilroy',fontSize: 15,fontStyle: 'normal',fontWeight: 700,}}>35%</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', top: 130 }}>
          <TouchableOpacity
            onPress={() => {setBoxPressed('3 pulse')}}
            style={{
              width: 165,
              height: 190,
              padding: 5,
              justifyContent:'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.29)',
              borderRadius: 48,
              borderColor: '#fff',
              borderWidth: boxPressed === '3 pulse' ? 3 : 0,
            }}>
            <View style={{width: '80%', height: '50%',flexDirection:'column', justifyContent:'space-around',alignItems:'center', }}>
              <Text  style={{color: '#FFF',textAlign: 'center',fontFamily: 'Gilroy',fontSize: 32,fontStyle: 'normal',fontWeight: 700, }}>14,99 €</Text>
              <View style={{width: '60%', height: 2, backgroundColor:'#fff', }} />
              <Text style={{ color: '#FFF', textAlign: 'center', fontFamily: 'Gilroy', fontSize: 16, fontStyle: 'normal', fontWeight: 700, }}>3 Pulse</Text>
              <Text  style={{color: '#FFF',textAlign: 'center',fontFamily: 'Gilroy',fontSize: 16,fontStyle: 'normal',fontWeight: 700,}}>Soit 6,66€/mois</Text>
            </View>
            <View style={{ position: 'absolute', top: 150,left:60, width: 95, height: 95, backgroundColor: boxPressed === '3 pulse' ? '#0019A7' : '#fff', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: boxPressed === '3 pulse' ? '#fff' : '#0019A7', textAlign: 'center', fontFamily: 'Gilroy', fontSize: 13, fontStyle: 'normal', fontWeight: 700, }}>Econonomisez</Text>
              <Text  style={{color: boxPressed === '3 pulse' ? '#fff' : '#0019A7',textAlign: 'center',fontFamily: 'Gilroy',fontSize: 15,fontStyle: 'normal',fontWeight: 700,}}>25%</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{top:200}} onPress={() => setButtonPressed(true)}>
          <Image
            style={{
              width: 331,
              height: 56,
              flexShrink: 0,
              alignSelf: 'center',
            }}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              {
                top: -40,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 700,
              },
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Acheter
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

PulseLike.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

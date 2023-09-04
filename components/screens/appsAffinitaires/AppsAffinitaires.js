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

export const AppsAffinitaires = ({route, navigation}) => {
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
  const activeTab = route.params?.activeTab ?? '';
  const imagePath = route.params?.imagePath ?? '';

  const [contentPressed, setContentPressed] = useState();

  return (
    <ImageBackground
        source={require('../../../assets/images/Background.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
      <MenuSlide imagePath={imagePath} backgroundColor={'white'} />
      <Text style={{ top: 50, color: '#fff', fontFamily: 'Comfortaa-Bold', textAlign: 'center', fontSize: 29, fontStyle: 'normal' }}>Apps affinitaires</Text>
       <Text style={[{top: 80, width:'80%', color: '#FFF',alignSelf:'center', fontFamily: 'Comfortaa',fontSize: 18,fontStyle: 'normal',fontWeight: 700 }]}>
        Grâce au profil multipliés, vous bénéficiez gratuitement d’une
        visibilité de votre profil auprès de votre communauté d’affinité :
      </Text>
      <View style={{top:100, flexDirection: 'column', width:'80%',height:120, justifyContent:'space-between', alignSelf:'center' }}>
      <View style={{ flexDirection: 'row' }}>
         <Text style={[{color: '#FFF', alignSelf: 'center', fontFamily: 'Comfortaa', fontSize: 15, fontStyle: 'normal', fontWeight: 700 }]}>Parent célibataire</Text>
        <Text style={[{color: '#0019A7',left:10,alignSelf:'center', fontFamily: 'Gilory-Bold',fontSize: 18,fontStyle: 'normal',fontWeight: 700 }]}>CheerFlakes,</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[{color: '#FFF', alignSelf: 'center', fontFamily: 'Comfortaa', fontSize: 15, fontStyle: 'normal', fontWeight: 700 }]}>Sénior </Text>
        <Text style={[{color: '#0019A7',left:10,alignSelf:'center', fontFamily: 'Gilory-Bold',fontSize: 18,fontStyle: 'normal',fontWeight: 700 }]}>WineGap,</Text>
     </View>
      <View style={{flexDirection:'row'}}>
       <Text style={[{color: '#FFF', alignSelf: 'center', fontFamily: 'Comfortaa', fontSize: 15, fontStyle: 'normal', fontWeight: 700 }]}>Gay/lesbienne </Text>
      <Text style={[{color: '#0019A7',left:10,alignSelf:'center', fontFamily: 'Gilory-Bold',fontSize: 18,fontStyle: 'normal',fontWeight: 700 }]}>GoPride</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={[{color: '#FFF', alignSelf: 'center', fontFamily: 'Comfortaa', fontSize: 15, fontStyle: 'normal', fontWeight: 700 }]}>et libertin </Text>
      <Text style={[{color: '#0019A7',left:10,alignSelf:'center', fontFamily: 'Gilory-Bold',fontSize: 18,fontStyle: 'normal',fontWeight: 700 }]}>OpenBetween.</Text>
      </View>
     </View>


      <View style={{
        top: 130,
        width: '100%',
        height: '30%',
        alignSelf: 'center',
        flexDirection:'column',
        justifyContent:'space-around',
      }}>
      <View style={{
          width: '100%',
          height: '40%',
          alignSelf: 'center',
          flexDirection:'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
            onPress={() => {
              setContentPressed('WineGap'); navigation.navigate('Apps Affinitaires2', {
                routeAffinite: "WineGap",
              }); }}
          style={{
            width:'45%',
            height: 90,
            borderRadius: 30,
            borderWidth: contentPressed === 'WineGap' ? 5 : 2,
            borderColor: '#882b1d',
            backgroundColor: contentPressed === 'WineGap' ? '#0019A7' : '#fff',
            alignSelf:'center',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            elevation: 10,
          }}>
        <Image source={require('../../../assets/images/winegap-card.png')} style={{width:110, resizeMode:'contain' }} />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => { setContentPressed('CheerFlakes'); navigation.navigate('Apps Affinitaires2', {
                routeAffinite: "CheerFlakes",
              }); }}
          style={{
            width:'45%',
            height: 90,
            borderRadius: 30,
            borderWidth: contentPressed === 'CheerFlakes' ? 5 : 2,
            borderColor: '#fff',
            backgroundColor: contentPressed === 'CheerFlakes' ? '#0019A7' : '#000',
            alignSelf:'center',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            elevation: 10,
          }}>
          <Image source={require('../../../assets/images/cheerflakes-card.png')} style={{width:110, resizeMode:'contain' }} />
        </TouchableOpacity>
      </View>
      <View style={{
          width: '100%',
          height: '40%',
          alignSelf: 'center',
          flexDirection:'row',
          justifyContent: 'space-around',
        }}>
      <TouchableOpacity
            onPress={() => { setContentPressed('OpenBetween'); navigation.navigate('Apps Affinitaires2', {
                routeAffinite: "OpenBetween",
              }); }}
        style={{
          width:'45%',
          height: 90,
          borderRadius: 30,
          borderWidth: contentPressed === 'OpenBetween' ? 5 : 2,
          borderColor: '#c43555',
          backgroundColor: contentPressed === 'OpenBetween' ? '#0019A7' : '#fff',
          alignSelf:'center',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          elevation: 10,
        }}>
        <Image source={require('../../../assets/images/openbetween-card.png')} style={{width:110, resizeMode:'contain' }} />
      </TouchableOpacity>
      <TouchableOpacity
            onPress={() => { setContentPressed('GoPride'); navigation.navigate('Apps Affinitaires2', {
                routeAffinite: "GoPride",
              }); }}
        style={{
          width:'45%',
          height: 90,
          borderRadius: 30,
          borderWidth: contentPressed === 'GoPride' ? 5 : 2,
          borderColor: '#db6238',
          backgroundColor: contentPressed === 'GoPride' ? '#0019A7' : '#fff',
          alignSelf:'center',
          alignItems: 'center',
          justifyContent: 'space-around',
          elevation: 10,
        }}>
        <Image source={require('../../../assets/images/gopride-card.png')} style={{width:110, resizeMode:'contain', zIndex:1 }} />
      </TouchableOpacity>
      </View>
    </View>
      <MenuBottom navigation={navigation} activeTab={activeTab} />
    </ImageBackground>
  );
};

AppsAffinitaires.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

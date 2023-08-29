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
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';
import Styles from '../../../assets/style/Styles';

export const ProfilMeRA = ({route, navigation}) => {
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
  // const imagePath = route.params?.imagePath ?? '';
  const activeTab = route.params?.activeTab ?? '';

  const [boxPressed, setBoxPressed] = useState();

  return (
    <ImageBackground
      style={Styles.bgGradient}
      source={require('../../../assets/images/MicrosoftTeams-image.png')}>
      <MenuSlide imagePath={false} />
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginLeft: 20,
            marginTop: 20,
          }}>
          <View>
            <Image
              source={require('../../../assets/images/Ellipse44.png')}
              style={{
                width: 115,
                height: 115,
                borderColor: '#0019A7',
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                top: 5,
                color: '#0019A7',
              }}>
              ID.20230510.88
            </Text>
          </View>
          <View style={{flexDirection: 'column', bottom: 140, left: 125}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../../assets/images/quality-2.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Image
                source={require('../../../assets/images/Médaille.png')}
                style={{
                  left: 20,
                  width: 30,
                  height: 44,
                }}
              />
            </View>
            <Text style={{color: '#0019A7', fontSize: 24, marginTop: 5}}>
              Raluca
            </Text>
            <Text style={{color: '#0019A7', fontSize: 16, marginTop: 5}}>
              43, Paris
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfilMeRAfirst');
              }}>
              <Image
                source={require('../../../assets/images/boutonContinuer2.png')}
                style={{width: 96, height: 24, marginTop: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/images/préférence_profil.png')}
            style={{width: 38, height: 30, marginTop: 20}}
          />
          <ImageBackground
            source={require('../../../assets/images/heart2.png')}
            style={{width: 38, height: 30, marginTop: 20}}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                fontSize: 18,
                left: 35,
                bottom: 15,
              }}>
              21
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../assets/images/image116.png')}
            style={{width: 38, height: 30, marginTop: 20}}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                fontSize: 18,
                left: 35,
                bottom: 15,
              }}>
              7
            </Text>
          </ImageBackground>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingHorizontal: 20,
          bottom: 80,
        }}>
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#0019A7',
            fontSize: 15,
            top: 2,
          }}>
          Écouter :
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/voix_ondes_profil.png')}
            style={{width: 100, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Prend pass', {prendPass: true})}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center', // Align items vertically in the center
            justifyContent: 'flex-start',
            paddingHorizontal: 10,
            bottom: 70,
          }}>
          <Image
            source={require('../../../assets/images/validation-du-ticket-1.png')}
            style={{width: 55, height: 55, bottom: 10}}
          />
          <View style={{bottom: 11}}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                fontSize: 20,
              }}>
              Je prends mon pass
            </Text>
            <View
              style={{
                borderBottomWidth: 1, // Ajustez cette valeur pour l'épaisseur du soulignement
                borderBottomColor: '#0019A7',
                bottom: 1, // Ajustez la distance entre le texte et le soulignement
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={{bottom: 80}}>
      <ScrollView
          style={{
            width: '100%',
            height: 350,
          }}
          contentContainerStyle={{paddingBottom: 20}}>
          <TouchableOpacity
            onPress={() => {
              setBoxPressed('1');
              navigation.navigate('Pulse spotlight');
            }}
            accessibilityLabel="Propulsez vos échanges"
            style={{
              flexDirection: 'column',
              alignSelf: 'center',
              justifyContent: 'space-between',
              width: 280,
              height: 124,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: '#0019A7',
              padding: 5,
              marginBottom: 20,
              backgroundColor: boxPressed === '1' ? '#0019A7' : '#fff',
            }}>
            <Text
              style={{
                color: '#FF84D7',
                textAlign: 'center',
                fontFamily: 'Gilroy',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Propulsez vos échanges
            </Text>
            <Text
              style={{
                color: boxPressed === '1' ? '#fff' : '#0019A7',
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Propulsez votre profil en le mettant en avant grâce au Pulse
              Spolight
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBoxPressed('2');
              navigation.navigate('Pulse profil');
            }}
            accessibilityLabel="Faites-vous remarquer"
            style={{
              flexDirection: 'column',
              alignSelf: 'center',
              justifyContent: 'space-between',
              width: 358,
              height: 151,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: '#0019A7',
              padding: 30,
              marginBottom: 20,
              backgroundColor: boxPressed === '2' ? '#0019A7' : '#fff',
            }}>
            <Text
              style={{
                color: '#FF84D7',
                textAlign: 'center',
                fontFamily: 'Gilroy',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Faites-vous remarquer
            </Text>
            <Text
              style={{
                color: boxPressed === '2' ? '#fff' : '#0019A7',
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Multipliez vos contacts en un clin d'oeil avec le Pulse Profil
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBoxPressed('3');
              navigation.navigate('Pulse recherche');
            }}
            accessibilityLabel="Éclipsez-vous des regards"
            style={{
              flexDirection: 'column',
              alignSelf: 'center',
              justifyContent: 'space-between',
              width: 358,
              height: 151,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: '#0019A7',
              padding: 30,
              marginBottom: 20,
              backgroundColor: boxPressed === '3' ? '#0019A7' : '#fff',
            }}>
            <Text
              style={{
                color: '#FF84D7',
                textAlign: 'center',
                fontFamily: 'Gilroy',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Éclipsez-vous des regards
            </Text>
            <Text
              style={{
                color: boxPressed === '3' ? '#fff' : '#0019A7',
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Éclipsez-vous des regards sur commande.
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <MenuBottom navigation={navigation} activeTab={activeTab} />
    </ImageBackground>
  );
};

ProfilMeRA.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

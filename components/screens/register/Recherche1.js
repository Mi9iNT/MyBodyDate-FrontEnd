import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import { BtnNext } from '../../composants/BtnNext';

export const Recherche1 = ({route, navigation}) => {
  const [recherche1, setState] = useState('');

  const [buttonPressed, setButtonPressed] = useState();

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

  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);
  console.log('Email : ', userEmail);
  console.log('Téléphone : ', userPhone);
  console.log('Ville : ', userCity);
  console.log('Accès position : ', accesPosition);
  console.log('Genre : ', genre);
  console.log('Date de naissance : ', userBirth);
  console.log('Taille : ', userSize);
  console.log('Langues : ', userLang);
  console.log('Situation : ', userSituation);
  console.log('Orientation : ', userOrientation);
  console.log('Recherche1 : ', recherche1);
  const handleRecherche1 = value => {
    setState(value);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 100}]}>
          <Text style={[Styles.textTitleWhite3]}>VOTRE RECHERCHE ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect, {top: 180}]}>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                maxHeight: 70,
                padding: 10,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleRecherche1('Homme')}
            accessibilityLabel="Homme">
            <Text
              style={{
                color: recherche1 === 'Homme' ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  recherche1 === 'Homme' ? 'Comfortaa-Bold' : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Homme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                maxHeight: 70,
                padding: 10,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleRecherche1('Femme')}
            accessibilityLabel="Femme">
            <Text
              style={{
                color: recherche1 === 'Femme' ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  recherche1 === 'Femme' ? 'Comfortaa-Bold' : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Femme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                maxHeight: 70,
                padding: 10,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleRecherche1('Tout le monde')}
            accessibilityLabel="Tout le monde">
            <Text
              style={{
                color: recherche1 === 'Tout le monde' ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  recherche1 === 'Tout le monde'
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Tout le monde
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 280, left: 40}}>
          <Text style={[Styles.textWhite2, {fontSize: 12}]}>Choix unique.</Text>
        </View>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Recherche2'}
          txt={'Continuer'}
          background={'white'}
          top={160}
        />
        {/* <View style={[Styles.ViewBtn2, {top: 140}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Recherche2', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userEmail: userEmail,
                userPhone: userPhone,
                userCity: userCity,
                accesPosition: accesPosition,
                genre: genre,
                userBirth: userBirth,
                userSize: userSize,
                userLang: userLang,
                userSituation: userSituation,
                userOrientation: userOrientation,
                userRecherche1: recherche1,
              });}
            }
            accessibilityLabel="Continuer">
            <Text style={[Styles.textBtn9, {zIndex: 1, top: 40, color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7' }]}>
              Continuer
            </Text>
            <Image
              style={[
                {
                  
                maxHeight: 70,
                padding: 10,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
    </View>
  );
};

Recherche1.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      routeName: PropTypes.string,
      userConsent: PropTypes.string,
      loveCoach: PropTypes.string,
      userEmail: PropTypes.string,
      userPhone: PropTypes.string,
      userCity: PropTypes.string,
      accesPosition: PropTypes.string,
      genre: PropTypes.string,
      userBirth: PropTypes.string,
      userSize: PropTypes.string,
      userLang: PropTypes.string,
      userSituation: PropTypes.string,
      userOrientation: PropTypes.string,
      userRecherche1: PropTypes.string,
    }),
  }),
  navigation: PropTypes.object,
};
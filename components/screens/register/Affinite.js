import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';

export const Affinite = ({route, navigation}) => {
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
  console.log('Recherche 1 : ', userRecherche1);
  console.log('Recherche 2 : ', userRecherche2);

  const [buttonPressed, setButtonPressed] = useState();

  const [selectedAffinite, setSelectedAffinite] = useState([]);

  const handleButtonPress = value => {
    let newSelectedAffinite = [...selectedAffinite];

    if (newSelectedAffinite.includes(value)) {
      newSelectedAffinite = newSelectedAffinite.filter(item => item !== value);
    } else {
      newSelectedAffinite.push(value);
    }

    setSelectedAffinite(newSelectedAffinite);
    console.log('Affinité(s) : ' + newSelectedAffinite);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, Styles.mt100]}>
          <Text style={[Styles.textWhiteCenter]}>VOS AFFINITÉS ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect2, {top: 60}]}>
          <TouchableOpacity
            style={[
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Cuisine & Gourmet')}
            accessibilityLabel="Cuisine & Gourmet">
            <Text
              style={{
                color: selectedAffinite.includes('Cuisine & Gourmet')
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedAffinite.includes('Cuisine & Gourmet')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Cuisine & Gourmet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt10,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Globe Trotter')}
            accessibilityLabel="Globe Trotter">
            <Text
              style={{
                color: selectedAffinite.includes('Globe Trotter')
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedAffinite.includes('Globe Trotter')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Globe Trotter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt10,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Fan de Musée & Culture')}
            accessibilityLabel="Fan de Musée & Culture">
            <Text
              style={{
                color: selectedAffinite.includes('Fan de Musée & Culture')
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedAffinite.includes('Fan de Musée & Culture')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Fan de Musée & Culture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt10,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Amis.es des Animaux')}
            accessibilityLabel="Rien de très sérieux">
            <Text
              style={{
                color: selectedAffinite.includes('Amis.es des Animaux')
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedAffinite.includes('Amis.es des Animaux')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Amis.es des Animaux
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt10,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Sportif.ve')}
            accessibilityLabel="Sportif.ve">
            <Text
              style={{
                color: selectedAffinite.includes('Sportif.ve')
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedAffinite.includes('Sportif.ve')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Sportif.ve
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 220, left: 40}}>
          <Text style={[Styles.textWhite2, {fontSize: 12}]}>
            Choix multiple.
          </Text>
        </View>

        <View style={[Styles.ViewBtn2, {top: 90}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Rythme1', {
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
                userRecherche1: userRecherche1,
                userRecherche2: userRecherche2,
                userAffinites: selectedAffinite,
              });
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                Styles.textBtn9,
                {
                  zIndex: 1,
                  top: 40,
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[
                {
                  height: 56,
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
        </View>
      </ImageBackground>
    </View>
  );
};

Affinite.propTypes = {
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
      userRecherche2: PropTypes.array,
      userAffinites: PropTypes.array,
    }),
  }),
  navigation: PropTypes.object,
};

export default Affinite;

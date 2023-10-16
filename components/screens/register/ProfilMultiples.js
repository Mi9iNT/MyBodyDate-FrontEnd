import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import {BtnNext} from '../../composants/BtnNext';

/* Screen 2 */

export const ProfilMultiples = ({route, navigation}) => {
  // Constantes concernant la Modal d'accès aux Permissions
  const [modalVisible, setModalVisible] = useState(true);

  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
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
  const rythmeDeVie2 = route.params?.rythmeDeVie2 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const pseudo = route.params?.pseudo ?? '';
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
  console.log('Affinité(s) : ', userAffinites);
  console.log('Rythme de vie 1 : ', rythmeDeVie1);
  console.log('Rythme de vie 2 : ', rythmeDeVie2);
  console.log('Prénom : ', userPrenom);
  console.log('Pseudo : ', pseudo);

  const [buttonPressed, setButtonPressed] = useState();

  //Constante permettant de savoir si l'utilisateur à appuyer sur play ou sur pause
  const [isPlaying, setIsPlaying] = React.useState(false);
  // Obtenir et formater la date courante en utilisant la méthode Date()
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
  const day = ('0' + currentDate.getDate()).slice(-2); // jour sur 2 chiffres
  // Constant récupérant l'année, le mois et le jour courant
  const formattedDate = `${year}${month}${day}`;

  const [radioValue, setRadioValue] = useState(false);

  const handleRadioChange = value => {
    setRadioValue(value);
  };
  if (radioValue === false) {
    prenium = 'Non';
  } else {
    prenium = 'Oui';
  }

  console.log('Prenium: ' + prenium);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 100}]}>
          <Text style={[Styles.textWhiteCenter]}>PROFIL MULTIPLIÉS</Text>
          <Text style={[Styles.textWhiteRound, {top: 40, padding: 10}]}>
            {userPrenom}
          </Text>
          {/* Parenthèse (id) à changer par n° id_user de la bdd */}
          <Text
            style={[
              Styles.textBlueCenter,
              {top: 80, fontFamily: 'Comfortaa-Bold'},
            ]}>
            ID.{formattedDate}.(id)
          </Text>
          <Text style={[Styles.textWhite4, {top: 100}]}>
            Grâce au profil multipliés,{'\n'}vous bénéficiez gratuitement d’une
            {'\n'}visibilité de votre profil auprès de{'\n'}votre communauté
            d’affinité ;{'\n'}Parent célibataire, sénior,{'\n'}Gay/lesbienne et
            libertin.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Apps Affinitaires2', {
                  routeAffinite: 'CheerFlakes',
                  menu: false,
                });
              }}>
              <Image
                style={[
                  {top: 120, width: 113, height: 57, resizeMode: 'cover'},
                ]}
                source={require('../../../assets/images/cheerflakes-thumb.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Apps Affinitaires2', {
                  routeAffinite: 'WineGap',
                  menu: false,
                });
              }}>
              <Image
                style={[
                  {top: 120, width: 113, height: 57, resizeMode: 'cover'},
                ]}
                source={require('../../../assets/images/winegap-thmb.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 20, alignSelf: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Apps Affinitaires2', {
                  routeAffinite: 'GoPride',
                  menu: false,
                });
              }}>
              <Image
                style={[
                  {top: 120, width: 113, height: 57, resizeMode: 'cover'},
                ]}
                source={require('../../../assets/images/gopride-thumb.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Apps Affinitaires2', {
                  routeAffinite: 'OpenBetween',
                  menu: false,
                });
              }}>
              <Image
                style={[
                  {top: 120, width: 113, height: 57, resizeMode: 'cover'},
                ]}
                source={require('../../../assets/images/openbetween-thumb.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[Styles.radioInputContainerTwo, {top: 120}]}
            onPress={() => handleRadioChange(!radioValue)}>
            <Image
              source={
                radioValue
                  ? require('../../../assets/images/radio_selected.png')
                  : require('../../../assets/images/radio_unselected.png')
              }
              style={{width: 20, height: 20}}
            />
            <Text style={[Styles.TextInputTwo]}>
              J’accepte le multi-profil GRATUIT.
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              {
                top: 120,
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 700,
              },
            ]}>
            Voir les profils dans les paramètres plus tard
          </Text>
          <BtnNext
            route={route}
            navigation={navigation}
            navigateTo={'Prenium'}
            txt={'Continuer'}
            background={'white'}
            top={150}
          />
          {/* <View style={[{top: 120}]}>
            <TouchableOpacity
              style={Styles.btn}
              onPress={() => {
                setButtonPressed('Continuer');
                navigation.navigate('Prenium', {
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
                  userAffinites: userAffinites,
                  rythmeDeVie1: rythmeDeVie1,
                  rythmeDeVie2: rythmeDeVie2,
                  userPrenom: userPrenom,
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
          </View> */}
        </View>
      </ImageBackground>
    </View>
  );
};
ProfilMultiples.propTypes = {
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
      rythmeDeVie1: PropTypes.string,
      rythmeDeVie2: PropTypes.array,
      userPrenom: PropTypes.string,
      pseudo: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

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
import StylesProfilMultiples from '../../../assets/style/styleScreens/styleRegister/StyleProfilMultiples';

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
    <View style={StylesProfilMultiples.container}>
      <ImageBackground
        style={StylesProfilMultiples.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesProfilMultiples.TxtTitle]}>PROFIL MULTIPLIÉS</Text>
        <Text style={[StylesProfilMultiples.textWhiteRound]}>{userPrenom}</Text>
        {/* Parenthèse (id) à changer par n° id_user de la bdd */}
        <Text style={[StylesProfilMultiples.textBlueCenter]}>
          ID.{formattedDate}.(id)
        </Text>
        <Text style={[StylesProfilMultiples.textWhite]}>
          Grâce au profil multipliés,{'\n'}vous bénéficiez gratuitement d’une
          {'\n'}visibilité de votre profil auprès de{'\n'}votre communauté
          d’affinité ;{'\n'}Parent célibataire, sénior,{'\n'}Gay/lesbienne et
          libertin.
        </Text>
        <View style={[StylesProfilMultiples.ViewRow]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Apps Affinitaires2', {
                routeAffinite: 'CheerFlakes',
                menu: false,
              });
            }}>
            <Image
              style={[StylesProfilMultiples.btnImgApp]}
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
              style={[StylesProfilMultiples.btnImgApp]}
              source={require('../../../assets/images/winegap-thmb.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesProfilMultiples.ViewRow]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Apps Affinitaires2', {
                routeAffinite: 'GoPride',
                menu: false,
              });
            }}>
            <Image
              style={[StylesProfilMultiples.btnImgApp]}
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
              style={[StylesProfilMultiples.btnImgApp]}
              source={require('../../../assets/images/openbetween-thumb.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[StylesProfilMultiples.radioInputContainerTwo]}
          onPress={() => handleRadioChange(!radioValue)}>
          <Image
            source={
              radioValue
                ? require('../../../assets/images/radio_selected.png')
                : require('../../../assets/images/radio_unselected.png')
            }
            style={{width: 20, height: 20}}
          />
          <Text style={[StylesProfilMultiples.TextInput]}>
            J’accepte le multi-profil GRATUIT.
          </Text>
        </TouchableOpacity>
        <Text style={[StylesProfilMultiples.textWhite2]}>
          Voir les profils dans les paramètres plus tard
        </Text>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Prenium'}
          txt={'Continuer'}
          background={'white'}
          top={280}
        />
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

import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {BtnNext} from '../../composants/BtnNext';

/* Screen 2 */

export const Prenium = ({route, navigation}) => {
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
  const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
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
          <Text style={[Styles.textWhiteCenter]}>ABONNEMENT PRENIUM</Text>
          <Text style={[Styles.textWhiteRound, {top: 50, padding: 10}]}>
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
            Grâce à l&apos;abonnement, obtenez{'\n'}
            notre carte de visite avec votre {'\n'}
            numéro d&apos;identification.{'\n'}
            Donnez cette carte à un.e{'\n'}
            inconnu.e dans le rue pour qu&apos;il{'\n'}
            vous retouve sur notre application.
          </Text>
          <TouchableOpacity style={[Styles.imgCard, {top: 110}]}>
            <Image
              style={[Styles.imgCard]}
              source={require('../../../assets/images/carte-visite.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleRadioChange(!radioValue)}
            style={[Styles.radioInputContainerTwo, {top: 120}]}>
            <Image
              source={
                radioValue
                  ? require('../../../assets/images/radio_selected.png')
                  : require('../../../assets/images/radio_unselected.png')
              }
              style={{width: 20, height: 20}}
            />
            <Text style={[Styles.TextInputTwo]}>
              Cocher, pour obtenir votre abnnement Prenium
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
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
            accessibilityLabel="Voir les conditions d'abonnement Prenium<">
            <Text style={[Styles.textBtn8, {top: 120}]}>
              Voir les conditions d&apos;abonnement Prenium
            </Text>
          </TouchableOpacity>
          <BtnNext
            route={route}
            navigation={navigation}
            navigateTo={'Compte'}
            txt={'Continuer'}
            background={'white'}
            top={150}
          />
          {/* <View style={[{top: 110}]}>
            <TouchableOpacity
              style={Styles.btn}
              onPress={() => {
                setButtonPressed('Continuer');
                navigation.navigate('Compte', {
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

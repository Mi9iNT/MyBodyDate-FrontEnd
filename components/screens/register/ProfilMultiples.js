import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from '../../../assets/style/Styles';

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
          <Text style={[Styles.textWhiteRound, {top: 50}]}>{userPrenom}</Text>
          {/* Parenthèse (id) à changer par n° id_user de la bdd */}
          <Text style={[Styles.textBlueCenter, {top: 80}]}>
            ID.{formattedDate}.(id)
          </Text>
          <Text style={[Styles.textWhite4, {top: 100}]}>
            Grâce au profil multipliés,{'\n'}vous bénéficiez gratuitement d’une{'\n'}visibilité de votre profil auprès de{'\n'}votre communauté d’affinité ;{'\n'}Parent célibataire, sénior,{'\n'}Gay/lesbienne et libertin.
          </Text>
          <View style={{flexDirection:'row', gap:20, alignSelf:'center', marginBottom:20}}>
            <Image
              style={[{top: 120,width: 113,height: 57,resizeMode:'cover'}]}
              source={require('../../../assets/images/cheerflakes-thumb.png')}
            />
            <Image
              style={[{top: 120,width: 113,height: 57,resizeMode:'cover'}]}
              source={require('../../../assets/images/winegap-thmb.png')}
            />
          </View>
          <View style={{flexDirection:'row', gap:20, alignSelf:'center'}}>
            <Image
              style={[{top: 120,width: 113,height: 57,resizeMode:'cover'}]}
              source={require('../../../assets/images/gopride-thumb.png')}
            />
            <Image
              style={[{top: 120,width: 113,height: 57,resizeMode:'cover'}]}
              source={require('../../../assets/images/openbetween-thumb.png')}
            />
          </View>
          <TouchableOpacity onPress={() => handleRadioChange(!radioValue)}>
            <View style={[Styles.radioInputContainerTwo, {top: 120}]}>
              <Image
                source={
                  radioValue
                    ? require('../../../assets/images/radio_selected_noir.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
                style={{width: 20, height: 20}}
              />
              <Text style={[Styles.TextInputTwo]}>
                J’accepte le multi-profil GRATUIT.
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={[{top: 120,color: '#FFF',textAlign: 'center',fontFamily: 'Comfortaa',fontSize: 12,fontStyle: 'normal',fontWeight: 700, }]}>
            Voir les profils dans les paramètres plus tard
          </Text>
          <View style={[{top: 110}]}>
            <TouchableOpacity
              style={Styles.btn}
              onPress={() =>
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
                })
              }
              accessibilityLabel="Continuer">
              <Text style={[Styles.textBtn9, {zIndex: 1, top: 45}]}>
                Continuer
              </Text>
              <Image
                style={[
                  {
                    top: 0,
                    width: '90%',
                    height: 60,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../../assets/boutons/Bouton-Blanc.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

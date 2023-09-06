import * as React from 'react';
import {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../../assets/style/Styles';

//Home Screen
export const BtnNext = ({
  route,
  navigation,
  navigateTo,
  txt,
  background,
  top,
}) => {
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

  const [buttonPressed, setButtonPressed] = useState();

  let btnColor =
    background === 'white'
      ? require('../../assets/boutons/Bouton-Blanc.png')
      : background === 'Blue'
      ? require('../../assets/boutons/Bouton-Bleu.png')
      : background === 'black'
      ? require('../../assets/boutons/Bouton-Noir.png')
      : require('../../assets/boutons/Bouton-Blanc.png');

  return (
    <View style={[Styles.ViewBtn2, {top: top}]}>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => {
          setButtonPressed('Continuer');
          navigation.navigate(navigateTo, {
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
            userVoice: userVoice,
          });
        }}
        accessibilityLabel={txt}>
        <ImageBackground
          style={[
            {
              top: 0,
              width: 350,
              height: 58,
              resizeMode: 'contain',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent:'center',
            },
          ]}
          source={
            buttonPressed === txt
              ? require('../../assets/boutons/Bouton-Rouge.png')
              : btnColor
          }>
          <Text
            style={[
              Styles.textBtn9,
              {
                zIndex: 1,
                color: buttonPressed === txt ? '#fff' : '#0019A7',
              },
            ]}>
            {txt}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
    // <View style={[Styles.ViewBtn1, {top: top}]}>
    //   <TouchableOpacity
    //     style={Styles.btn}
    //     onPress={() => {
    //       if (routeChoice === 'Se connecter') {
    //         navigation.navigate('Liens de connexion', {
    //           userConsent: consentement,
    //           routeName: routeChoice,
    //           loveCoach: loveCoach,
    //           userEmail: userEmail,
    //           userPhone: userPhone,
    //           userCity: userCity,
    //           accesPosition: accesPosition,
    //           genre: genre,
    //           userBirth: userBirth,
    //           userSize: userSize,
    //           userLang: userLang,
    //           userSituation: userSituation,
    //           userOrientation: userOrientation,
    //           userRecherche1: userRecherche1,
    //           userRecherche2: userRecherche2,
    //           userAffinites: userAffinites,
    //           rythmeDeVie1: rythmeDeVie1,
    //           rythmeDeVie2: rythmeDeVie2,
    //           userPrenom: userPrenom,
    //           userVoice: userVoice,
    //         });
    //       } else {
    //         navigation.navigate("Liens d'inscription", {
    //           userConsent: consentement,
    //           routeName: routeChoice,
    //           loveCoach: loveCoach,
    //           userEmail: userEmail,
    //           userPhone: userPhone,
    //           userCity: userCity,
    //           accesPosition: accesPosition,
    //           genre: genre,
    //           userBirth: userBirth,
    //           userSize: userSize,
    //           userLang: userLang,
    //           userSituation: userSituation,
    //           userOrientation: userOrientation,
    //           userRecherche1: userRecherche1,
    //           userRecherche2: userRecherche2,
    //           userAffinites: userAffinites,
    //           rythmeDeVie1: rythmeDeVie1,
    //           rythmeDeVie2: rythmeDeVie2,
    //           userPrenom: userPrenom,
    //           userVoice: userVoice,
    //         });
    //       }
    //       setButtonPressed(true);
    //     }}
    //     accessibilityLabel="Continuer">
    //     <ImageBackground
    //       style={{
    //         width: 350,
    //         height: 58,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         flexShrink: 0,
    //         alignSelf: 'center',
    //         resizeMode: 'cover',
    //       }}
    //       source={
    //         buttonPressed
    //           ? require('../../assets/boutons/Bouton-Rouge.png')
    //           : btnColor
    //       }>
    //       <Text
    //         style={[
    //           Styles.textBtn9,
    //           {
    //             zIndex: 1,
    //             fontSize: 18,
    //             color: buttonPressed ? '#fff' : '#0019A7',
    //           },
    //         ]}>
    //         {txt}
    //       </Text>
    //     </ImageBackground>
    //   </TouchableOpacity>
    // </View>
  );
};

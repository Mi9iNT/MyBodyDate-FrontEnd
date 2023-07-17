import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';

export const Prenom = ({route, navigation}) => {
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

  // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
  // const [prenom, setPrenom] = React.useState();
  // console.log('Prénom : '+ prenom);

  // Obtenir et formater la date courante en utilisant la méthode Date()
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
  const day = ('0' + currentDate.getDate()).slice(-2); // jour sur 2 chiffres

  const formattedDate = `${year}${month}${day}`; // Constant récupérant l'année, le mois et le jour courant

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 100}]}>
          <Text style={[Styles.textTitleWhite3]}>PRÉNOM</Text>
          <Text style={[Styles.textWhite7, {top: 100}]}>
            Sur MyBodyDate votre vrai prénom est visible de tous les membres.
            {'\n'}
            {'\n'}Il est bon de faire une bonne première impression, en ne
            commençant pas par un mensonge ni aller trop vite.{'\n'}
            {'\n'}Vous pouvez donner votre identifiant à un(e) inconnu(e) et,
            il/elle vous retrouvera sur notre moteur de recherche car votre ID
            est unique !{'\n'}
            {'\n'}C'est déjà un excellent départ.
          </Text>
        </View>
        {/* <SafeAreaView style={[Styles.ViewInputPrenom, {top:350}]}>
                <TextInput
                    style={Styles.TextInput}
                    keyboardType='default'
                    placeholder='Votre Prénom'
                    placeholderTextColor='#FFF'
                    maxLength={100}
                    onChangeText={(prenom)=>setPrenom(prenom)}
                    value={prenom}
                    />*/}
        {/* Parenthèse (id) à changer par n° id_user de la bdd */}
        <Text style={[Styles.textBlueCenter, {top: 450}]}>
          ID.{formattedDate}.(id)
        </Text>
        {/*</SafeAreaView> */}
        {/* <View style={{top:280, left:40}}>
                <Text style={[Styles.textWhite2]}>Choix unique.</Text>
            </View>    */}

        <View style={[Styles.ViewBtn2, {top: 450}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('Confirmation prenom', {
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
              });
            }}
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
      </ImageBackground>
    </View>
  );
};

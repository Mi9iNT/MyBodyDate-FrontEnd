import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import PropTypes from 'prop-types';
import Styles from '../../assets/style/Styles';

export const ConfirmationPrenom = ({ route, navigation }) => {
  const {
    routeName,
    userConsent,
    loveCoach,
    userEmail,
    userPhone,
    userCity,
    accesPosition,
    genre,
    userBirth,
    userSize,
    userLang,
    userSituation,
    userOrientation,
    userRecherche1,
    userRecherche2,
    userAffinites,
    rythmeDeVie1,
    rythmeDeVie2,
    userPrenom,
  } = route.params;

  const [prenom, setPrenom] = useState(userPrenom);
  const [modalVisible, setModalVisible] = useState(false);

  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const day = ('0' + currentDate.getDate()).slice(-2);
  const formattedDate = `${year}${month}${day}`;

  return (
    <KeyboardAwareScrollView innerRef={(ref) => { this.scroll = ref; }} style={[Styles.container2, { top: 0 }]}>
      <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
        <View style={Styles.ViewText}>
          <Text style={[Styles.textTitleWhite3, { top: 150 }]}>PRÉNOM</Text>
        </View>
        <SafeAreaView style={[Styles.ViewInputPrenom2, { top: 280, height: 480 }]}>
          <TextInput
            style={Styles.TextInput}
            keyboardType="default"
            placeholder="Entrez votre Prénom"
            placeholderTextColor="#FFF"
            maxLength={100}
            onChangeText={(prenom) => setPrenom(prenom)}
            value={prenom}
          />
          <Text style={[Styles.textBlueCenter, { top: 20 }]}>ID.{formattedDate}.(id)</Text>
        </SafeAreaView>
        <View style={{ top: 100, left: 40 }}>
          <Text style={[Styles.textWhite2]}>Choix unique.</Text>
        </View>
        <View style={{ top: -200 }}>
          <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible); }}>
            <View style={[Styles.centeredView2, { top: 350 }]}>
              <Image style={[Styles.imgPrenomAdv, { top: -260 }]} source={require('../../assets/images/avertissement.png')} />
              <Text style={[Styles.textBlueCenter2, { top: -200 }]}>Vous vous appelez {prenom} ?</Text>
              <Text style={[Styles.textBlueCenter3, { top: -180 }]}>
                Vérifiez bien votre prénom,{"\n"}
                il ne pourra plus être{"\n"}
                modifié par la suite.
              </Text>
            </View>
            <View style={[Styles.ViewBtnRow, { top: -50 }]}>
              <TouchableOpacity accessibilityLabel="Modifier" onPress={() => { setModalVisible(false); }}>
                <Text style={[Styles.textBtn9, { zIndex: 2, top: 40 }]}>Modifier</Text>
                <Image style={[{ top: 0, width: 150, height: 50, resizeMode: 'contain' }]} source={require('../../assets/boutons/Bouton-Trans-Court.png')} />
              </TouchableOpacity>
              <TouchableOpacity accessibilityLabel="Accepter" onPress={() => {
                navigation.navigate('Prenium', {
                  userConsent,
                  routeName,
                  loveCoach,
                  userEmail,
                  userPhone,
                  userCity,
                  accesPosition,
                  genre,
                  userBirth,
                  userSize,
                  userLang,
                  userSituation,
                  userOrientation,
                  userRecherche1,
                  userRecherche2,
                  userAffinites,
                  rythmeDeVie1,
                  rythmeDeVie2,
                  userPrenom: prenom,
                });
              }}>
                <Text style={[Styles.textBtn6, { zIndex: 2, top: 40 }]}>Accepter</Text>
                <Image style={[{ top: 0, width: 150, height: 50, resizeMode: 'contain' }]} source={require('../../assets/boutons/Bouton-Bleu-Court.png')} />
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <View style={[Styles.ViewBtn2, { top: -40 }]}>
          <TouchableOpacity onPress={() => { setModalVisible(true); }} accessibilityLabel="Continuer">
            <Text style={[Styles.textBtn9, { zIndex: 1, top: 45 }]}>Continuer</Text>
            <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf: 'center' }]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

ConfirmationPrenom.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      routeName: PropTypes.string,
      userConsent: PropTypes.bool,
      loveCoach: PropTypes.string,
      userEmail: PropTypes.string,
      userPhone: PropTypes.string,
      userCity: PropTypes.string,
      accesPosition: PropTypes.bool,
      genre: PropTypes.string,
      userBirth: PropTypes.string,
      userSize: PropTypes.string,
      userLang: PropTypes.string,
      userSituation: PropTypes.string,
      userOrientation: PropTypes.string,
      userRecherche1: PropTypes.string,
      userRecherche2: PropTypes.string,
      userAffinites: PropTypes.string,
      rythmeDeVie1: PropTypes.string,
      rythmeDeVie2: PropTypes.string,
      userPrenom: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};


// import React, {useState, useEffect} from 'react';
// import {
//     View,
//     Text,
//     ImageBackground,
//     SafeAreaView,
//     TextInput,
//     Modal,
//     Image,
//     TouchableOpacity,
// } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
// import Styles from '../../assets/style/Styles';

// export const ConfirmationPrenom = ({ route, navigation }) => {



//     // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
//     const routeChoice = route.params?.routeName ?? '';
//     const consentement = route.params?.userConsent ?? '';
//     const loveCoach = route.params?.loveCoach ?? '';
//     const userEmail = route.params?.userEmail ?? '';
//     const userPhone = route.params?.userPhone ?? '';
//     const userCity = route.params?.userCity ?? '';
//     const accesPosition = route.params?.accesPosition ?? '';
//     const genre = route.params?.genre ?? '';
//     const userBirth = route.params?.userBirth ?? '';
//     const userSize = route.params?.userSize ?? '';
//     const userLang = route.params?.userLang ?? '';
//     const userSituation = route.params?.userSituation ?? '';
//     const userOrientation = route.params?.userOrientation ?? '';
//     const userRecherche1 = route.params?.userRecherche1 ?? '';
//     const userRecherche2 = route.params?.userRecherche2 ?? '';
//     const userAffinites = route.params?.userAffinites ?? '';
//     const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
//     const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
//     const userPrenom = route.params?.userPrenom ?? '';
//     console.log('Choix de route : ' , routeChoice);
//     console.log('Consentement : ' , consentement);
//     console.log('Love Coach : ', loveCoach);
//     console.log('Email : ', userEmail);
//     console.log('Téléphone : ', userPhone);
//     console.log('Ville : ', userCity);
//     console.log('Accès position : ', accesPosition);
//     console.log('Genre : ', genre);
//     console.log('Date de naissance : ', userBirth);
//     console.log('Taille : ', userSize);
//     console.log('Langues : ', userLang);
//     console.log('Situation : ', userSituation);
//     console.log('Orientation : ', userOrientation);
//     console.log('Recherche 1 : ', userRecherche1);
//     console.log('Recherche 2 : ', userRecherche2);
//     console.log('Affinité(s) : ', userAffinites);
//     console.log('Rythme de vie 1 : ', rythmeDeVie1);
//     console.log('Rythme de vie 2 : ', rythmeDeVie2);

//      // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
//     const [prenom, setPrenom] = React.useState();
//     console.log('Prénom : ' + prenom);
    
//     // Constantes concernant la Modal d'accès à la validation du prénom
//     const [modalVisible, setModalVisible] = useState(false);

//     // Obtenir et formater la date courante en utilisant la méthode Date()
//     const currentDate = new Date();
//     const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
//     const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
//     const day = ("0" + currentDate.getDate()).slice(-2); // jour sur 2 chiffres

//     const formattedDate = `${year}${month}${day}`; // Constant récupérant l'année, le mois et le jour courant

//     return (
//     <KeyboardAwareScrollView innerRef={ref => {this.scroll = ref}} style={[Styles.container2,{top:0}]}>
//         <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
//            <View style={Styles.ViewText}>
//                 <Text style={[Styles.textTitleWhite3, {top:150}]}>PRÉNOM</Text>
//             </View>
//             <SafeAreaView style={[Styles.ViewInputPrenom2, {top:280, height:480}]}>
//                 <TextInput
//                     style={Styles.TextInput}
//                     keyboardType='default'
//                     placeholder='Entrez votre Prénom'
//                     placeholderTextColor='#FFF'   
//                     maxLength={100}       
//                     onChangeText={(prenom)=>setPrenom(prenom)}   
//                     value={prenom}
//                     />
//                     {/* Parenthèse (id) à changer par n° id_user de la bdd */}
//                     <Text style={[Styles.textBlueCenter, {top:20}]}>ID.{formattedDate}.(id)</Text>
//             </SafeAreaView>
//              <View style={{top:100, left:40}}>
//                 <Text style={[Styles.textWhite2]}>Choix unique.</Text>
//             </View>

//                 <View style={{ top: -200 }}>
//                 <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible);}}>
//                     <View style={[Styles.centeredView2, { top:350}]}>
//                         <Image style={[Styles.imgPrenomAdv,{top:-260}]} source={require('../../assets/images/avertissement.png')} />
//                         <Text style={[Styles.textBlueCenter2, {top:-200}]}>Vous vous appelez {prenom} ?</Text>
//                         <Text style={[Styles.textBlueCenter3, {top:-180}]}>
//                             Vérifiez bien votre prénom,{"\n"}
//                             il ne pourra plus être{"\n"}
//                             modifier par la suite.
//                         </Text>
//                     </View> 
//                     <View style={[Styles.ViewBtnRow, {top:-50}]}>
//                         <TouchableOpacity accessibilityLabel="Modifier" onPress={() => {setModalVisible(false)}}>
//                             <Text style={[Styles.textBtn9, {zIndex:2, top:40}]}>Modifier</Text>
//                             <Image style={[{top:0, width:150, height:50, resizeMode:'contain'}]} source={require('../../assets/boutons/Bouton-Trans-Court.png')} />
//                         </TouchableOpacity>
//                         <TouchableOpacity accessibilityLabel="Accepter" onPress={() => {
//                             navigation.navigate('Prenium', {
//                             userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1, rythmeDeVie2: rythmeDeVie2, userPrenom: prenom});
//                         }}>
//                             <Text style={[Styles.textBtn6, {zIndex:2, top:40}]}>Accepter</Text>
//                             <Image style={[{top:0, width:150, height:50, resizeMode:'contain'}]} source={require('../../assets/boutons/Bouton-Bleu-Court.png')} />
//                         </TouchableOpacity>
//                     </View>    
//                 </Modal>
//             </View>    
            
//             <View style={[Styles.ViewBtn2, {top:-40}]}>
//                 <TouchableOpacity onPress={() => { setModalVisible(true)}} accessibilityLabel="Continuer">
//                     <Text style={[Styles.textBtn9, { zIndex:1, top:45}]}>Continuer</Text>
//                     <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//                 </TouchableOpacity>
//             </View>    
//         </ImageBackground>
//     </KeyboardAwareScrollView>
        
//     )
// }
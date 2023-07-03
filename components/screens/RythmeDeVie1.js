import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import Styles from '../../assets/style/Styles';

export const RythmeDeVie1 = ({ route, navigation }) => {


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
    console.log('Choix de route : ' , routeChoice);
    console.log('Consentement : ' , consentement);
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
  
    // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
    const [rythmeDeVie1, setState] = useState('');

    const handleRythmeSelection = (selectedRythme) => {
        setRythme({ state: selectedRythme });
    }
   
    console.log('Rythme de Vie 1 : '+rythmeDeVie1.state);


    return (
    <View style={Styles.container}>
        <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
           <View style={[Styles.ViewText, {top:150}]}>
                <Text style={[Styles.textTitleWhite3]}>VOTRE RYTHME DE VIE ?</Text>
            </View>
             
            <View style={[Styles.ViewBTNSelect, {top: 250}]}>
                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Matinale' })} accessibilityLabel="Matinale">
                     <Text style={(rythmeDeVie1.state === 'Matinale') ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>Matinale</Text>
                </TouchableOpacity>      
               <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Couche Tard' })} accessibilityLabel="Couche Tard">
                     <Text style={(rythmeDeVie1.state === 'Couche Tard') ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>Couche Tard</Text>
                </TouchableOpacity>
            </View>

            <View style={{top:280, left:40}}>
                <Text style={[Styles.textWhite2]}>Choix unique.</Text>
            </View>   
            
            <View style={[Styles.ViewBtn2, {top:140}]}>
                <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Rythme2', {
                        userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1})} accessibilityLabel="Continuer">
                    <Text style={[Styles.textBtn9, { zIndex:1, top:45}]}>Continuer</Text>
                    <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
        
    )
}
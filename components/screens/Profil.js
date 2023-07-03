import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import Styles from '../../assets/style/Styles';
import { RythmeDeVie1 } from './RythmeDeVie1';

export const Profil = ({ route, navigation }) => {


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
    const userVoice = route.params?.userVoice ?? '';
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
    console.log('Rythme de vie 1 : ', rythmeDeVie1);
    console.log('Rythme de vie 2 : ', rythmeDeVie2);
    console.log('Prénom : ', userPrenom);
    console.log('Voix : ', userVoice);


    // Constantes concernant la Modal d'information de l'empreinte vocal
    const [modalCharteVisible, setModalCharteVisible] = useState(true)


    return (
    <View style={Styles.container}>
        <ImageBackground style={[Styles.bgGradient]} source={require('../../assets/images/Background.png')}>
            <View style={[Styles.ViewText, { top: 100, left: 0 }]}>
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Prénom : {userPrenom}</Text>    
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Consentement : {consentement}</Text>
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>LoveCoach : {loveCoach}</Text>
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Email : {userEmail}</Text> 
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Téléphone : { userPhone }</Text>    
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Localisation : {userCity}</Text>    
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Accès localisation (position) : {accesPosition}</Text> 
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Genre : {genre}</Text>        
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Date de naissance : {userBirth}</Text>    
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Taille : {userSize}</Text>
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Langues : {userLang}</Text>
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Situation : {userSituation}</Text>   
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Orientation : {userOrientation}</Text>
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Recherche : {userRecherche1} {"\n"} et {userRecherche2}</Text> 
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Affinité : {userAffinites}</Text> 
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Rythme de vie : {rythmeDeVie1}{"\n"} et {rythmeDeVie2}</Text>
                <Text style={[Styles.textTitleWhite2, { left: 30 }]}>Type de voix : {userVoice}</Text>        
            </View>    
        </ImageBackground>
    </View>
        
    )
}
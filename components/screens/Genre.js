import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import Styles from '../../assets/style/Styles';

export const Genre = ({ route, navigation }) => {

   // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
    const routeChoice = route.params?.routeName ?? '';
    const consentement = route.params?.userConsent ?? '';
    const loveCoach = route.params?.loveCoach ?? '';
    const userEmail = route.params?.userEmail ?? '';
    const userPhone = route.params?.userPhone ?? '';
    const userCity = route.params?.userCity ?? '';
    const accesPosition = route.params?.accesPosition ?? '';
    console.log('Choix de route : ' , routeChoice);
    console.log('Consentement : ' , consentement);
    console.log('Love Coach : ', loveCoach);
    console.log('Email : ', userEmail);
    console.log('Téléphone : ', userPhone);
    console.log('Ville : ', userCity);
    console.log('Accès position : ', accesPosition);
  
    // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
    const [genre, setState] = useState('');
   
    console.log('Genre: '+genre.state);


    return (
    <View style={Styles.container}>
        <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
           <View style={[Styles.ViewText, {top:100}]}>
                <Text style={[Styles.textTitleWhite3]}>VOTRE GENRE ?</Text>
            </View>
            
           
            <View style={[Styles.ViewBTNSelect, {top: 250}]}>      
               <TouchableOpacity style={Styles.btn } onPress={() => setState({ state: 'Femme' })} accessibilityLabel="Femme">
                    <Text style={(genre.state == 'Femme')?Styles.btnSelected:Styles.btnNotSelected}>Femme</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Homme' })} accessibilityLabel="Homme">
                    <Text style={( genre.state == 'Homme')?Styles.btnSelected:Styles.btnNotSelected}>Homme</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Non Binaire' })} accessibilityLabel="Non Binaire">
                    <Text style={( genre.state == 'Non Binaire')?Styles.btnSelected:Styles.btnNotSelected}>Non Binaire</Text>
                </TouchableOpacity>        
            </View>

            <View style={[Styles.ViewTextChoice,{top:280, left:30}]}>
                <Text style={[Styles.textWhite2]}>Choix unique.</Text>
            </View>   
            
            <View style={[Styles.ViewBtn1, {top:40}]}>
                <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Date de naissance', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre.state })} accessibilityLabel="Continuer">
                    <Text style={[Styles.textBtn9, { zIndex:1, top:40}]}>Continuer</Text>
                    <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
        
    )
}
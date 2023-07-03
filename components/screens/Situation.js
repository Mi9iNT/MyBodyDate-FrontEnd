import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import Styles from '../../assets/style/Styles';

export const Situation = ({ route, navigation }) => {

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
  
    // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
    const [situation, setState] = useState('');

    const handleSituationSelection = (selectedSituation) => {
        setSituation({ state: selectedSituation });
    }
   
    console.log('Situation : '+situation.state);


    return (
    <View style={Styles.container}>
        <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
           <View style={[Styles.ViewText, {top:100}]}>
                <Text style={[Styles.textTitleWhite3]}>VOTRE SITUATION</Text>
                <Text style={[Styles.textTitleWhite3]}>ACTUELLE ?</Text>
            </View>
             
            <View style={[Styles.ViewBTNSelect, {top:150}]}>      
               <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Célibataire' })} accessibilityLabel="Célibataire">
                    <Text style={(situation.state === 'Célibataire') ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>Célibataire</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Séparé.e' })} accessibilityLabel="Séparé(e)">
                    <Text style={(situation.state === 'Séparé.e') ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>Séparé.e</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Divorcé.e' })} accessibilityLabel="Divorcé.e">
                    <Text style={(situation.state === 'Divorcé.e') ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>Divorcé.e</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'Veuf' })} accessibilityLabel="Veuf">
                    <Text style={(situation.state === 'Veuf') ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>Veuf</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => setState({ state: 'C\'est compliqué' })} accessibilityLabel="C\'est compliqué">
                    <Text style={(situation.state === 'C\'est compliqué') ? [Styles.btnSelected, { color: '#0F0BAE' }] : Styles.btnNotSelected}>C'est compliqué</Text>
                </TouchableOpacity>    
            </View>

            <View style={{top:280, left:40}}>
                <Text style={[Styles.textWhite2]}>Choix unique.</Text>
            </View>   
            
            <View style={[Styles.ViewBtn2, {top:130}]}>
                <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Orientation', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang : userLang, userSituation: situation.state })} accessibilityLabel="Continuer">
                    <Text style={[Styles.textBtn9, { zIndex:1, top:45}]}>Continuer</Text>
                    <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
        
    )
}
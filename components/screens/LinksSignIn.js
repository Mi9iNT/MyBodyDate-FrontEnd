import * as React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Styles from '../../assets/style/Styles';
import Logo from '../composants/Logo';

export const LinksSignIn = ({ route, navigation }) => {

    // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
    const routeChoice = route.params?.routeName ?? '';
    const consentement = route.params?.userConsent ?? '';
    const loveCoach = route.params?.loveCoach ?? '';
    console.log('Choix de route : ' , routeChoice);
    console.log('Consentement : ' , consentement);
    
    return (
    <View style={Styles.container}>
        <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
            <Logo/>

            <View style={Styles.ViewText2}>
                <Text style={[Styles.textWhite, Styles.fb, {left:30}]}>UN COUP DE COEUR</Text>
                <Text style={[Styles.textWhite, Styles.fb, {left:30}]}>N'ATTEND PAS</Text>    
                <Text style={[Styles.textWhite, Styles.fl, {top: 20, left:30}]}>NE PERDEZ PLUS RIEN... </Text>
            </View>

            <View style={Styles.ViewBtnLog}>
                <View style={[{top:-20}]}>     
                    <TouchableOpacity accessibilityLabel="Se connecter par email" onPress={() => navigation.navigate('S\'inscrire par mail', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach })}>
                        <Text style={[Styles.textBtn6, {zIndex:1, top:55}]}>S'inscrire par email</Text>
                        <Image style={[{ top: 10, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Rouge-Email.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('S\'inscrire par numero', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach })} accessibilityLabel="Se connecter avec son numéro de téléphone">
                        <Text style={[Styles.textBtn6, {zIndex:2, top:45, left:10,}]}>S'inscrire avec son n°</Text>        
                        <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Bleu-Telephone.png')} />
                    </TouchableOpacity> 
                <View style={[{ top: 10 }]}>
                        <View style={[Styles.line]} ></View>
                        <View>
                        <Text style={[Styles.textBtn, Styles.mb2, Styles.fl]}> Vous n'avez pas de compte ?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Liens de connexion', {userConsent : consentement, routeName : routeChoice, loveCoach : loveCoach})} accessibilityLabel="Se connecter" >
                        <Text style={[Styles.textBtn, Styles.mb, Styles.fb, {top:5, textDecorationLine: 'underline',}]}> Se connecter</Text>
                    </TouchableOpacity> 
                    <View style={[Styles.line]} ></View>
                </View>        
                    
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Recuperation email', {userConsent : consentement, routeName : routeChoice, loveCoach : loveCoach})} accessibilityLabel="Récupération email" >
                        <Text style={[Styles.textBtnBlue, Styles.mb, Styles.underline, Styles.fb]}> Récupérez mon compte.
                        </Text>
                    </TouchableOpacity>    
                </View>
                </View>   
                </View>
                
               </View> 
            </ImageBackground>
            
    </View>
        
    )
}



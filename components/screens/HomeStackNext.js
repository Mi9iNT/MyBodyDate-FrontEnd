/* eslint-disable react/prop-types */
import * as React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';
import Styles from '../../assets/style/Styles';

//Home Screen
export const HomeStackNext = ({ navigation }) => {
    return (
        <View style={Styles.container}>
        <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background2.png')}>

                <View style={[Styles.ViewLogo3]}>
                <Image style={Styles.logo3} source={require('../../assets/images/logo.png')}/>    
            </View>  
            <View style={[Styles.ViewText2, { top:200}]}>
                <Text style={[Styles.textBlue2]}>UN COUP DE COEUR N'ATTEND PAS</Text>
                <Text style={[Styles.textBlue2,]}>NE PERDEZ PLUS RIEN... </Text>
            </View>
            <View style={[Styles.ViewBtn, { top:-50}]}>
                <TouchableOpacity style={[{top:0}]} accessibilityLabel="S'inscrire" onPress={() => navigation.navigate('Bienvenue', { routeName: 'S\'inscrire' })}>
                    <Text style={[Styles.textBtn6, {zIndex:1, top:45}]}>S'inscrire</Text>        
                    <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Bleu.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[{top:-20}]} accessibilityLabel="Se connecter" onPress={() => navigation.navigate('Liens de connexion', { routeName: 'Se connecter' })}>
                    <Text style={[Styles.textBtn6, {zIndex:2, top:55}]}>Se connecter</Text>         
                   <Image style={[{ top: 10, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Rouge.png')} />
                </TouchableOpacity> 
            </View>
                
            
            </ImageBackground>
        </View>
    );
}


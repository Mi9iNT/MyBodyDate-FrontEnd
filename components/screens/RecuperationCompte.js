import React, {Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import Styles from '../../assets/style/Styles';

export const RecuperationCompte = ({ route, navigation }) => {

    // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
    const routeChoice = route.params?.routeName ?? '';
    console.log('Choix de route : ' , routeChoice);
    
    const [text, setEmail] = React.useState();
    console.log('Email: '+ text);

    return (
    <View style={Styles.container}>
        <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
           <View style={[Styles.ViewText, {top:50}]}>
                <Text style={[Styles.textWhite, {top:50,left:30}]}>RÉCUPÉRATION DE</Text>
                <Text style={[Styles.textWhite, {top:50,left:30}]}>COMPTE</Text>
            </View>
            <SafeAreaView style={Styles.ViewInput}>
                <TextInput
                    style={Styles.TextInput}
                    keyboardType='email-address'
                    placeholder='Entrez votre email'
                    placeholderTextColor='#FFF'   
                    maxLength={100}       
                    onChangeText={(text)=>setEmail(text)}   
                    value={text}
                />
                <Text style={[Styles.textWhite3]}>Un lien pour vous connecter à votre ancien compte va vous être envoyer.</Text>
            </SafeAreaView>
                 
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Confirmation email', {routeName: routeChoice})}>
                    <Image style={[{ top: -20, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Recuperer-mon-compte.png')} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
        
    )
}



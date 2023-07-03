import {React, findNodeHandle, useState} from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Styles from '../../assets/style/Styles';

export const RecuperationCode = ({ route, navigation }) => {
    
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

    const [userCode, setCode] = useState();
    console.log('Code récupéré: ' + userCode);

    // Condition du contenu de txtCode selon le paramètre de route Connexion numero ou email
    if (routeChoice === 'Connexion numero') {
    txtCode = (
        <Text>
            Si vous n&apos;avez pas reçu votre code,{' '}
            <TouchableOpacity style={[{}]} onPress={() => navigation.navigate('Compte')}>
                <Text style={[Styles.textWhite3, { position:'relative', top:4, textDecorationLine: 'underline'}]}>réessayez</Text>
            </TouchableOpacity>
            .
        </Text>
    );
} else {
    txtCode = (
        <Text>
            Si vous n&apos;avez pas reçu votre code,{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Compte')}>
                <Text style={[Styles.textWhite3, { position:'relative', top:4, textDecorationLine: 'underline'}]}>réessayez</Text>
            </TouchableOpacity>
            .{'\n\n'}
            Si vous n&apos;avez pas reçu d&apos;email, consultez vos spams, ou{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Compte')}>
                <Text style={[Styles.textWhite3, { position:'relative', top:4, textDecorationLine: 'underline'}]}>réessayez</Text>
            </TouchableOpacity>
            .
        </Text>
    );
    }

    return (
     <KeyboardAwareScrollView innerRef={ref => {this.scroll = ref}} style={[Styles.container2, { top: 0,  height:1000 }]}>
        <ImageBackground tyle={[Styles.bgGradient, { top:0, height:0}]} source={require('../../assets/images/Background.png')}>
           <View style={[Styles.ViewText, {top:100}]}>
                <Text style={[Styles.textWhiteCenter]}>VOTRE CODE ?</Text>
            </View>
            <SafeAreaView style={[Styles.ViewInput, {top:300, height:700}]}>
                <TextInput
                    style={Styles.TextInput}
                    keyboardType='numeric'
                    placeholder='Votre code'
                    placeholderTextColor='#FFF'   
                    maxLength={10}       
                    onChangeText={(userCode)=>setCode(userCode)}   
                    value={userCode}
                />
                    <Text style={[Styles.textWhite3, {top:20, width:'70%'}]}>{txtCode}</Text>
            </SafeAreaView>
                 
            
                <View style={[Styles.ViewBtn2, { top:-50}]}>
                <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Profil', {
                    userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1, rythmeDeVie2: rythmeDeVie2, userPrenom: userPrenom})} accessibilityLabel="Continuer">
                    <Text style={[Styles.textBtn9, { zIndex:1, top:45}]}>Continuer</Text>
                    <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </KeyboardAwareScrollView>
        
    )
}



import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    ImageBackground,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Styles from '../../assets/style/Styles';

export const ConfirmationNumero = ({ route, navigation }) => {

    // Constantes récupérant les valeurs données par l'utilisateur
    const routeChoice = route.params?.routeName ?? '';
    const consentement = route.params?.userConsent ?? '';
    const loveCoach = route.params?.loveCoach ?? '';
    const userPhone = route.params?.userPhone ?? '';
    console.log('Choix de route : ', routeChoice);
    console.log('Consentement : ', consentement);
    console.log('Love Coach : ', loveCoach);
    console.log('Téléphone : ', userPhone);

    const [userCode, setCode] = React.useState('');

    return (
        <View style={Styles.container}>
            <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
                <View style={[Styles.ViewText2, { top: 100 }]}>
                    <Text style={[Styles.textTitleWhite3]}>CONFRIMATION</Text>
                    <Text style={[Styles.textTitleWhite3]}>NUMÉRO</Text>
                </View>
                <SafeAreaView style={[Styles.ViewInput, { top: 20 }]}>
                    <TextInput
                        style={Styles.TextInput}
                        keyboardType='numeric'
                        placeholder='Entrez le code reçu par sms'
                        placeholderTextColor='#FFF'
                        maxLength={11}
                        onChangeText={(userCode) => setCode(userCode)}
                        value={userCode}
                    />
                </SafeAreaView>
                <View style={[{ top: -100 }]}>
                    <TouchableOpacity style={[{ top: -10 }]} onPress={() => navigation.navigate("S'inscrire par numero", { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach })} accessibilityLabel="Récupérer mon compte">
                        <Text style={[Styles.textBtn6, { top: 45, zIndex: 2 }]}>Réessayez</Text>
                        <Image style={[{ width: '80%', height: 60, alignSelf: 'center', resizeMode: 'contain' }]} source={require('../../assets/boutons/Bouton-Noir.png')} />
                    </TouchableOpacity>
                    <Text style={[Styles.textWhite3, { top: 20 }]}>Si vous n&apos;avez pas reçu d&apos;sms, veuillez rééssayez.</Text>
                    <TouchableOpacity style={[{ top: 20 }]} onPress={() => navigation.navigate("S'inscrire par mail", { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach })} accessibilityLabel="Récupérer mon compte">
                        <Text style={[Styles.textBtn6, { top: 45, zIndex: 3 }]}>S&apos;inscrire par email</Text>
                        <Image style={[{ width: '80%', height: 60, alignSelf: 'center', resizeMode: 'contain' }]} source={require('../../assets/boutons/Bouton-Rouge-Email.png')} />
                    </TouchableOpacity>
                    <Text style={[Styles.textWhite3, { top: 40 }]}>Utilisez un autre moyen pour vous inscrire</Text>
                </View>
                <View style={[{ top: -20 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Ville', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userPhone: userPhone })} accessibilityLabel="Continuer">
                        <Text style={[Styles.textBtn9, { zIndex: 1, top: 45 }]}>Continuer</Text>
                        <Image style={[{ width: '100%', height: 60, alignSelf: 'center', resizeMode: 'contain' }]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

ConfirmationNumero.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            routeName: PropTypes.string,
            userConsent: PropTypes.string,
            loveCoach: PropTypes.string,
            userPhone: PropTypes.string,
        }),
    }),
    navigation: PropTypes.object,
};

export default ConfirmationNumero;


// import * as React from 'react';
// import {
//     View,
//     Text,
//     ImageBackground,
//     Image,
//     SafeAreaView,
//     TextInput,
//     TouchableOpacity,
// } from 'react-native';
// import Styles from '../../assets/style/Styles';

// export const ConfirmationNumero = ({ route, navigation }) => {

//     // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
//     const routeChoice = route.params?.routeName ?? '';
//     const consentement = route.params?.userConsent ?? '';
//     const loveCoach = route.params?.loveCoach ?? '';
//     const userPhone = route.params?.userPhone ?? '';
//     console.log('Choix de route : ' , routeChoice);
//     console.log('Consentement : ' , consentement);
//     console.log('Love Coach : ', loveCoach);
//     console.log('Téléphone : ', userPhone);

//     const [userCode, setCode] = React.useState();


//     return (
//     <View style={Styles.container}>
//         <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
//            <View style={[Styles.ViewText2, {top:100}]}>
//                 <Text style={[Styles.textTitleWhite3]}>CONFRIMATION</Text>
//                 <Text style={[Styles.textTitleWhite3]}>NUMÉRO</Text>
//             </View>
//             <SafeAreaView style={[Styles.ViewInput, {top: 20}]}>
//                 <TextInput
//                     style={Styles.TextInput}
//                     keyboardType='numeric'
//                     placeholder='Entrez le code reçu par sms'
//                     placeholderTextColor='#FFF'   
//                     maxLength={11}       
//                     onChangeText={(userCode) => setCode(userCode)} 
//                     value={userCode}
//                 />
                
//             </SafeAreaView>
//                 <View style={[{ top: -100 }]}>
                    
//                 <TouchableOpacity style={[{top:-10}]} onPress={() => navigation.navigate('S\'inscrire par numero', {userConsent : consentement, routeName : routeChoice, loveCoach : loveCoach})} accessibilityLabel="Récupérer mon compte">
//                     <Text style={[Styles.textBtn6, {top:45, zIndex:2}]}>Réessayez</Text>
//                     <Image style={[{ width: '80%', height: 60, alignSelf:'center', resizeMode: 'contain'}]} source={require('../../assets/boutons/Bouton-Noir.png')} />
//                 </TouchableOpacity>
//                 <Text style={[Styles.textWhite3, { top: 20 }]}>Si vous n'avez pas reçu d'sms, veuillez rééssayez.</Text>
//                 <TouchableOpacity style={[{ top: 20 }]} onPress={() => navigation.navigate('S\'inscrire par mail', {userConsent : consentement, routeName : routeChoice, loveCoach : loveCoach})} accessibilityLabel="Récupérer mon compte">
//                     <Text style={[Styles.textBtn6, {top:45, zIndex:3}]}>S'inscrire par email</Text>
//                     <Image style={[{ width: '80%', height: 60, alignSelf:'center', resizeMode: 'contain'}]} source={require('../../assets/boutons/Bouton-Rouge-Email.png')} />
//                 </TouchableOpacity>  
                  
//                 <Text style={[Styles.textWhite3,{top:40}]}>Utilisez un autre moyen pour vous inscrire</Text>

                     
//             </View>    
                
          
//             <View style={[{ top: -20 }]}>
//                 <TouchableOpacity onPress={() => navigation.navigate('Ville', {userConsent : consentement, routeName : routeChoice, loveCoach : loveCoach, userPhone: userPhone})} accessibilityLabel="Continuer">
//                     <Text style={[Styles.textBtn9, { zIndex:1, top:45}]}>Continuer</Text>
//                     <Image style={[{ width: '100%', height: 60, alignSelf:'center', resizeMode: 'contain'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//                 </TouchableOpacity>   
        
//             </View>
//         </ImageBackground>
//     </View>
        
//     )
// }



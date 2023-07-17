/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react';
import {
    View,
    ScrollView,
    Text,
    Modal,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';
import Logo from '../composants/Logo';
import Lottie from 'lottie-react-native';
import Styles from '../../assets/style/Styles';
/* Screen 3 */
    
export const Creation = ({ route, navigation }) => {

    // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
    const routeChoice = route.params?.routeName ?? '';
    console.log('Choix de route : ' , routeChoice);
    
    //Constante permettant de savoir si l'utilisateur à appuyer sur play ou sur pause
    const [isPlaying, setIsPlaying] = useState(false);
    // const btnOpacity = useRef(new Animated.Value(0));

    // Constantes concernant la Modal d'accès au consentement
    const [modalVisible, setModalVisible] = useState(false);

     //Constante permettant de savoir si l'utilisateur à appuyer sur Accepter ou sur Refuser
    const [consentement, setConsentement] = useState();
    // console.log('Consentement : ', consentement);


//     useEffect(() => {
//     Animated.timing(btnOpacity, {
//       toValue: 1,
//       duration: 10000,
//       useNativeDriver: false,
//     }).start();
//   }, [btnOpacity]);

    

    return (
        <View style={Styles.container}>
            <ImageBackground
                style={Styles.bgGradient}
                source={require('../../assets/images/Background.png')}>
            <Logo/>

            <View style={[Styles.ViewText, {top:50, left:30}]}>
                <Text style={[Styles.textWhite]}>CRÉATION ET</Text>
                <Text style={Styles.textWhite}>DÉVELOPPEMENT.</Text>
            </View>
            
            <View style={[Styles.ViewVideo, { top: 0, height: 100, height: 100 }]}>    
                <Lottie source={require('../../assets/animations/Animation-credits.json')} autoPlay loop />
            </View>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {requestLocationPermission, setModalVisible(!modalVisible); }}>
                <View style={[Styles.centeredView5, {top:200}]}>
                    <ScrollView style={[{width:400,alignSelf:'center',top:20}]}>
                             {/* <Icon name="location-dot" size={19} color="#fff" /> */}
                        <Text style={[Styles.textBlue3]}>CONSENTEMENT</Text>
                        <Text style={[Styles.textBlue4]}>Nous respectons la vie privée de nos utilisateurs. Vos données, vos choix.{"\n"}MyBodyDate utilise des cookies et des informations non sensibles pour assurer le bon fonctionnement de son application, mesurer l&apos;audience et les contenus consultés ou personnaliser les contenus affichés.{"\n"}Pour en savoir plus sur les cookies, les données utilisées et leur traitement vous pouvez consulter <Text style={[Styles.textBtnBlue2]}>notre politique en matière de cookies et nos engagements en matière de sécurité et de Confidentialité de données personnelles.</Text>{"\n"}</Text>
                        <Text style={[Styles.textBlack2, { top: -10, width: 320, left: 40 }]}>Notre site n&apos;accepte que des profils vérifiés au delà de 7 jours.{"\n"}Sinon votre compte sera suspendu.</Text>
                        <Text style={[Styles.textBlue4, { top: -20, left: 0 }]}>Nous sommes conforme RGPD, règlement générale à la règlementation de la protection des données</Text>
                    </ScrollView>
                       
                </View>
                    
                <View style={[Styles.ViewBtnRow, {top: -20}]}>
                    <TouchableOpacity accessibilityLabel="Refuser" onPress={() => { navigation.navigate('Love Coach', { userConsent: 'Refuser', routeName: routeChoice }); setModalVisible(false); }}>
                        <Text style={[Styles.textBtn9, {zIndex:1, top:40}]}>Refuser</Text>
                        <Image style={[{top:0, width:150, height:50, resizeMode:'contain'}]} source={require('../../assets/boutons/Bouton-Trans-Court.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityLabel="Accepter" onPress={() => { navigation.navigate('Love Coach', { userConsent: 'Accepter', routeName: routeChoice }); setModalVisible(false); }}>
                        <Text style={[Styles.textBtn6, {zIndex:2, top:40}]}>Accepter</Text>
                        <Image style={[{top:0, width:150, height:50, resizeMode:'contain'}]} source={require('../../assets/boutons/Bouton-Bleu-Court.png')} />
                    </TouchableOpacity>
                </View> 
            </Modal>
            <View style={[Styles.row, {width:'100%', top:10}]}>
                <TouchableOpacity style={[{}]} onPress={() => setModalVisible(true)} accessibilityLabel="Passer">
                    <Image style={[{ top: -50, width: 80, height: 80, resizeMode: 'contain', left: 150}]} source={require('../../assets/boutons/Passer.png')} />
                    <Text style={[Styles.textBtn4, {top:-110, left:260}]}>Passer</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        );
    }
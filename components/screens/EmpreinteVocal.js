import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import Styles from '../../assets/style/Styles';

export const EmpreinteVocal = ({ route, navigation }) => {


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
    console.log('Choix de route : ' , routeChoice);
    console.log('Consentement : ' , consentement);
    console.log('Love Coach : ', loveCoach);
    console.log('Téléphone : ', userPhone);
    console.log('Email : ', userEmail);
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

  
    // Constantes concernant la Modal d'information de l'empreinte vocal
    const [modalRecaptchaVisible, setModalInfoVocaVisible] = useState(false);
    
    // Constante permettant de savoir quel input radio a été sélectionné par l'utilisateur
    const [selectedVoice, setSelectedVoice] = useState();
    console.log('Voix sélectionnée : ',selectedVoice);


    return (
    <View style={Styles.container}>
        <ImageBackground style={[Styles.bgGradient]} source={require('../../assets/images/Background.png')}>
            <View style={[Styles.ViewText, {top:100}]}>
                <Text style={[Styles.textWhiteCenter]}>EMPREINTE VOCAL</Text>
                <Text style={[Styles.textWhite2, { top: 10, alignSelf: 'center', width: '90%' }]}>Enregistrer un mesage vocale introductif à l'attention des personnes que vous croisez, et émouvoir votre futur match</Text>    
                <View style={[{ top:-70, backgroundColor: 'white', borderRadius: 100, height: 120, width:120, alignSelf:'center', borderWidth:3, borderColor:'#0F0BAE' }]}>
                    <Image style={[{ top: 20, width:50, height:90, alignSelf:'center', resizeMode:'contain'}]} source={require('../../assets/images/micro.png')} />     
                </View>
                <Text style={[Styles.textWhiteCenter2, { top: -60 }]}>30 secondes</Text>
                <View style={[{top:-40, alignSelf:'center', width:'100%'}]}>
                    <TouchableOpacity
                    style={[{top:-70}]}        
                    onPress={() => setModalInfoVocaVisible(true)}
                    accessibilityLabel="Découvrez votre type de voix ">
                            <Text style={[Styles.textBtn2, { top:60}]}>Découvrez votre type de voix  <Image style={[{ width:30, height:30, resizeMode:'contain'}]} source={require('../../assets/images/info.png')} /></Text>
                    </TouchableOpacity>
                         <View style={[{flexDirection: 'row', marginLeft: 50, top: -10,}]}>
                            <View style={{ flex: 2 }}>
                                <TouchableOpacity style={Styles.btnInputLang} onPress={() => setSelectedVoice('Soprano')} accessibilityLabel="Soprano">
                                    <Image style={Styles.SelectedImage} source={selectedVoice === 'Soprano' ? require('../../assets/images/radio_selected_noir.png') : require('../../assets/images/radio_unselected.png')} />
                                    <Text style={Styles.textBtnInputLang}>Soprona</Text>
                                </TouchableOpacity> 
                                <TouchableOpacity style={Styles.btnInputLang} onPress={() => setSelectedVoice('Mezzo')} accessibilityLabel="Mezzo">
                                    <Image style={Styles.SelectedImage} source={selectedVoice === 'Mezzo' ? require('../../assets/images/radio_selected_noir.png') : require('../../assets/images/radio_unselected.png')} />
                                    <Text style={Styles.textBtnInputLang}>Mezzo{"\n"}Soprano</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.btnInputLang} onPress={() => setSelectedVoice('Alto')} accessibilityLabel="Alto">
                                    <Image style={Styles.SelectedImage} source={selectedVoice === 'Alto' ? require('../../assets/images/radio_selected_noir.png') : require('../../assets/images/radio_unselected.png')} />
                                    <Text style={Styles.textBtnInputLang}>Alto</Text>
                                </TouchableOpacity>    
                            </View>
                            <View style={{ flex: 2 }}>
                                <TouchableOpacity style={Styles.btnInputLang} onPress={() => setSelectedVoice('Baryton')} accessibilityLabel="Baryton">
                                    <Image style={Styles.SelectedImage} source={selectedVoice === 'Baryton' ? require('../../assets/images/radio_selected_noir.png') : require('../../assets/images/radio_unselected.png')} />
                                    <Text style={Styles.textBtnInputLang}>Baryton</Text>
                                </TouchableOpacity> 
                                <TouchableOpacity style={[Styles.btnInputLang, {top: 10}]} onPress={() => setSelectedVoice('Ténor')} accessibilityLabel="Ténor">
                                    <Image style={Styles.SelectedImage} source={selectedVoice === 'Ténor' ? require('../../assets/images/radio_selected_noir.png') : require('../../assets/images/radio_unselected.png')} />
                                    <Text style={Styles.textBtnInputLang}>Ténor</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity style={[Styles.btnInputLang, {top:22}]} onPress={() => setSelectedVoice('Basse')} accessibilityLabel="Basse">
                                    <Image style={Styles.SelectedImage} source={selectedVoice === 'Basse' ? require('../../assets/images/radio_selected_noir.png') : require('../../assets/images/radio_unselected.png')} />
                                    <Text style={Styles.textBtnInputLang}>Basse</Text>
                                </TouchableOpacity>      
                            </View>
                        </View>
                    <View style={{top:10}}>
                        <Text style={[Styles.textWhite3]}>Choix unique.</Text>
                         <TouchableOpacity
                        style={[Styles.btn, {top:10}]}
                                onPress={() => navigation.navigate('Charte d\'engagement', {
                                    userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1, rythmeDeVie2: rythmeDeVie2, userPrenom: userPrenom, userVoice: selectedVoice
                                })}
                        accessibilityLabel="Enregistrer plus tard">
                            <Text style={Styles.textBtnBlue}>Enregistrer plus tard</Text>
                        </TouchableOpacity>    
                    </View>
                </View>     
            </View>
            <View>
                <Modal animationType="slide" transparent={true} visible={modalRecaptchaVisible} onRequestClose={() => { setModalInfoVocaVisible(!modalRecaptchaVisible); }}>
                    <View style={[Styles.centeredView3, {top:200}]}>
                        <Text style={[Styles.textBlueCenter3, { top: -200 }]}>VOTRE TYPE DE VOIX</Text>
                        <Image style={[{ top:-160, width:30, height:30, resizeMode:'contain', alignSelf:'center'}]} source={require('../../assets/images/info.png')} />
                            <Text style={[Styles.textBlue, { top: -130 }]}><Text style={[Styles.textBlueBold]}>Soprano</Text> est la voix la plus aigue de femme.</Text>
                        <Text style={[Styles.textBlue, { top: -130 }]}><Text style={[Styles.textBlueBold]}>Mezzo Soprona</Text> est la voix médium.</Text>
                        <Text style={[Styles.textBlue, { top: -130 }]}><Text style={[Styles.textBlueBold]}>Alto (contralto)</Text> est la voix de femme la plus grave et est très rare.</Text>
                        <Text style={[Styles.textBlue, { top: -130 }]}>Pour les hommes la voix la plus aigue est <Text style={[Styles.textBlueBold]}>Ténor</Text>.</Text>  
                        <Text style={[Styles.textBlue, { top: -130 }]}><Text style={[Styles.textBlueBold]}>Baryton</Text> est la voix médium.</Text>
                        <Text style={[Styles.textBlue, { top: -130 }]}><Text style={[Styles.textBlueBold]}>Basse</Text> est la plus grave.</Text>
                    </View>
                </Modal>
                <View style={[Styles.ViewBtn, {top: -40}]}>
                    <TouchableOpacity
                    style={Styles.btn}
                            onPress={() => navigation.navigate('Charte d\'engagement', {
                        userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1, rythmeDeVie2: rythmeDeVie2, userPrenom: userPrenom, userVoice: selectedVoice})}
                    accessibilityLabel="Continuer">
                        <Text style={[Styles.textBtn9, { zIndex:4, top:45}]}>Continuer</Text>
                        <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
                    </TouchableOpacity>
                </View> 
            </View>    
              
        </ImageBackground>
    </View>
        
    )
}
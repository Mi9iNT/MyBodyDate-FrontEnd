import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    Modal,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import Styles from '../../assets/style/Styles';

export const AjoutPhoto = ({ route, navigation }) => {

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
    console.log('Choix de route : ', routeChoice);
    console.log('Consentement : ', consentement);
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

    // Constantes concernant la Modal de prevention pour les images
    const [modalRecaptchaVisible, setModalPreventImageaVisible] = useState(false);

    return (
        <View style={Styles.container}>
            <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
                <View style={[Styles.ViewText, { top: 100 }]}>
                    <Text style={[Styles.textTitleWhite3]}>AJOUTEZ UNE PHOTO</Text>
                    <Text style={[Styles.textWhiteCenter2, { top: 10, width: '100%' }]}>Affichez votre lifestyle.(6 photos publiques)</Text>
                    <Image style={[Styles.imgPhoto, { top: 20 }]} source={require('../../assets/images/image.png')} />
                    <TouchableOpacity accessibilityLabel="Importer une image">
                        <Text style={[Styles.textBtn6, { zIndex: 1, top: 62, left: 20 }]}>Importer une image</Text>
                        <Image style={[{ top: 20, width: '90%', height: 60, resizeMode: 'contain', alignSelf: 'center' }]} source={require('../../assets/boutons/Bouton-Noir-Image.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityLabel="Prendre une photo">
                        <Text style={[Styles.textBtn6, { zIndex: 2, top: 45, left: 20 }]}>Prendre une photo</Text>
                        <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf: 'center' }]} source={require('../../assets/boutons/Bouton-Noir-Photo.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity accessibilityLabel="Meta - Facebook">
                        <Text style={[Styles.textBtn6, { zIndex: 3, top: 22, left: 10 }]}>Meta (Facebook)</Text>
                        <Image style={[{ top: -20, width: '90%', height: 60, resizeMode: 'contain', alignSelf: 'center' }]} source={require('../../assets/boutons/Bouton-Noir-Meta.png')} />
                    </TouchableOpacity>
                    <Text style={[Styles.textWhiteCenter2, { top: 0, width: '100%' }]}>Puis cliquer sur &quot;Photos&quot; {"\n"}et &quot;Toutes les photos&quot;</Text>
                    <TouchableOpacity
                        style={[Styles.btn, { top: 0 }]}
                        onPress={() => navigation.navigate('Empreinte vocal')}
                        accessibilityLabel="Enregistrer plus tard">
                        <Text style={Styles.textBtnBlue}>Enregistrer plus tard</Text>
                    </TouchableOpacity>
                    <Modal animationType="slide" transparent={true} visible={modalRecaptchaVisible} onRequestClose={() => { setModalPreventImageaVisible(!modalRecaptchaVisible); }}>
                        <View style={[Styles.centeredView3, { top: 200 }]}>
                            <Image style={[Styles.btnCadenas, { width: 100, height: 100, top: -60, resizeMode: 'contain' }]} source={require('../../assets/images/cadenas.png')} />
                            <Text style={[Styles.textBlueCenter3, { top: -50 }]}>À MONTRER{"\n"}SOUS RÉSERVE !</Text>
                            <View style={[Styles.row, { top: -140 }]}>
                                <Image style={[Styles.btnCadenas, { width: 100, height: 130, top: 100, resizeMode: 'cover', borderWidth: 2, borderColor: '#0F0BAE', borderRadius: 10 }]} blurRadius={10} source={require('../../assets/images/alex.png')} />
                                <Image style={[Styles.btnCadenas, Styles.mx20, { width: 100, height: 130, top: 100, resizeMode: 'cover', borderWidth: 2, borderColor: '#0F0BAE', borderRadius: 10 }]} blurRadius={10} source={require('../../assets/images/celine.png')} />
                                <Image style={[Styles.btnCadenas, { width: 100, height: 130, top: 100, resizeMode: 'cover', borderWidth: 2, borderColor: '#0F0BAE', borderRadius: 10 }]} source={require('../../assets/images/julia.jpg')} />
                            </View>
                            <Text style={[Styles.textBlueCenter3, { top: -30 }]}>Les profils dénudés ou les visages{"\n"}masqués peu reconnaissables ne{"\n"}sont pas autorisés sur votre profil{"\n"}public. Vous pouvez ajouter ces{"\n"}à votre dossier dédié et{"\n"}confidentiel plus tard.</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Empreinte vocal', {
                                    userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1, rythmeDeVie2: rythmeDeVie2, userPrenom: userPrenom
                                })}
                                accessibilityLabel="Continuer">
                                <Image style={[{ top: -80, width: 320, resizeMode: 'contain', alignSelf: 'center' }]} source={require('../../assets/boutons/Continuer-Bleu.png')} />
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <View style={[{ top: 0 }]}>
                        <TouchableOpacity
                            style={Styles.btn}
                            onPress={() => setModalPreventImageaVisible(true)}
                            accessibilityLabel="Continuer">
                            <Text style={[Styles.textBtn9, { zIndex: 4, top: 45 }]}>Continuer</Text>
                            <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf: 'center' }]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        </View>

    )
}

AjoutPhoto.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            routeName: PropTypes.string,
            userConsent: PropTypes.bool,
            loveCoach: PropTypes.string,
            userEmail: PropTypes.string,
            userPhone: PropTypes.string,
            userCity: PropTypes.string,
            accesPosition: PropTypes.bool,
            genre: PropTypes.string,
            userBirth: PropTypes.string,
            userSize: PropTypes.string,
            userLang: PropTypes.string,
            userSituation: PropTypes.string,
            userOrientation: PropTypes.string,
            userRecherche1: PropTypes.string,
            userRecherche2: PropTypes.string,
            userAffinites: PropTypes.string,
            rythmeDeVie1: PropTypes.string,
            rythmeDeVie2: PropTypes.string,
            userPrenom: PropTypes.string,
        }),
    }),
    navigation: PropTypes.object,
};

export default AjoutPhoto;







// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     Image,
//     Modal,
//     ImageBackground,
//     TouchableOpacity,
// } from 'react-native';
// import Styles from '../../assets/style/Styles';

// export const AjoutPhoto = ({ route, navigation }) => {

//     // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
//     const routeChoice = route.params?.routeName ?? '';
//     const consentement = route.params?.userConsent ?? '';
//     const loveCoach = route.params?.loveCoach ?? '';
//     const userEmail = route.params?.userEmail ?? '';
//     const userPhone = route.params?.userPhone ?? '';
//     const userCity = route.params?.userCity ?? '';
//     const accesPosition = route.params?.accesPosition ?? '';
//     const genre = route.params?.genre ?? '';
//     const userBirth = route.params?.userBirth ?? '';
//     const userSize = route.params?.userSize ?? '';
//     const userLang = route.params?.userLang ?? '';
//     const userSituation = route.params?.userSituation ?? '';
//     const userOrientation = route.params?.userOrientation ?? '';
//     const userRecherche1 = route.params?.userRecherche1 ?? '';
//     const userRecherche2 = route.params?.userRecherche2 ?? '';
//     const userAffinites = route.params?.userAffinites ?? '';
//     const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
//     const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
//     const userPrenom = route.params?.userPrenom ?? '';
//     console.log('Choix de route : ' , routeChoice);
//     console.log('Consentement : ' , consentement);
//     console.log('Love Coach : ', loveCoach);
//     console.log('Email : ', userEmail);
//     console.log('Téléphone : ', userPhone);
//     console.log('Ville : ', userCity);
//     console.log('Accès position : ', accesPosition);
//     console.log('Genre : ', genre);
//     console.log('Date de naissance : ', userBirth);
//     console.log('Taille : ', userSize);
//     console.log('Langues : ', userLang);
//     console.log('Situation : ', userSituation);
//     console.log('Orientation : ', userOrientation);
//     console.log('Recherche 1 : ', userRecherche1);
//     console.log('Recherche 2 : ', userRecherche2);
//     console.log('Affinité(s) : ', userAffinites);
//     console.log('Rythme de vie 1 : ', rythmeDeVie1);
//     console.log('Rythme de vie 2 : ', rythmeDeVie2);
//     console.log('Prénom : ', userPrenom);

  
//     // Constantes concernant la Modal de prevention pour les images
//     const [modalRecaptchaVisible, setModalPreventImageaVisible]=useState(false);



//     return (
//     <View style={Styles.container}>
//         <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
//             <View style={[Styles.ViewText, {top:100}]}>
//                 <Text style={[Styles.textTitleWhite3]}>AJOUTEZ UNE PHOTO</Text>
//                 <Text style={[Styles.textWhiteCenter2, {top:10, width:'100%'}]}>Affichez votre lifestyle.(6 photos publiques)</Text>
//                 <Image style={[Styles.imgPhoto, { top: 20 }]} source={require('../../assets/images/image.png')} /> 
//                 <TouchableOpacity accessibilityLabel="Importer une image">
//                     <Text style={[Styles.textBtn6, { zIndex:1, top:62, left:20}]}>Importer une image</Text>    
//                     <Image style={[{ top: 20, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Noir-Image.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity accessibilityLabel="Prendre une photo">
//                     <Text style={[Styles.textBtn6, { zIndex:2, top:45, left:20}]}>Prendre une photo</Text>      
//                     <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Noir-Photo.png')} />
//                 </TouchableOpacity>   
//                 <TouchableOpacity accessibilityLabel="Meta - Facebook">
//                     <Text style={[Styles.textBtn6, { zIndex:3, top:22, left:10}]}>Meta (Facebook)</Text>      
//                     <Image style={[{ top: -20, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Noir-Meta.png')} />
//                 </TouchableOpacity>
//                 <Text style={[Styles.textWhiteCenter2, { top: 0, width: '100%' }]}>Puis cliquer sur "Photos" {"\n"}et "Toutes les photos"</Text>
//                 <TouchableOpacity
//                     style={[Styles.btn, {top:0}]}
//                     onPress={() => navigation.navigate('Empreinte vocal')}
//                     accessibilityLabel="Enregistrer plus tard">
//                     <Text style={Styles.textBtnBlue}>Enregistrer plus tard</Text>
//                 </TouchableOpacity>
//                     <Modal animationType="slide" transparent={true} visible={modalRecaptchaVisible} onRequestClose={() => { setModalPreventImageaVisible(!modalRecaptchaVisible); }}>
//                     <View style={[Styles.centeredView3, {top:200}]}>
//                         <Image style={[Styles.btnCadenas, { width: 100, height: 100, top: -60, resizeMode: 'contain' }]} source={require('../../assets/images/cadenas.png')} />
//                         <Text style={[Styles.textBlueCenter3, { top: -50 }]}>À MONTRER{"\n"}SOUS RÉSERVE !</Text>
//                         <View style={[Styles.row, { top: -140 }]}>
//                             <Image style={[Styles.btnCadenas, { width: 100, height: 130, top: 100, resizeMode: 'cover', borderWidth: 2, borderColor: '#0F0BAE', borderRadius: 10 }]} blurRadius={10} source={require('../../assets/images/alex.png')} />
//                             <Image style={[Styles.btnCadenas, Styles.mx20, { width: 100, height: 130, top: 100, resizeMode: 'cover', borderWidth: 2, borderColor: '#0F0BAE', borderRadius: 10 }]} blurRadius={10} source={require('../../assets/images/celine.png')} />
//                             <Image style={[Styles.btnCadenas, { width: 100, height: 130, top: 100, resizeMode: 'cover', borderWidth: 2, borderColor: '#0F0BAE', borderRadius: 10 }]} source={require('../../assets/images/julia.jpg')} />
//                         </View>
//                         <Text style={[Styles.textBlueCenter3, { top: -30 }]}>Les profils dénudés ou les visages{"\n"}masqués peu reconnaissables ne{"\n"}sont pas autorisés sur votre profil{"\n"}public. Vous pouvez ajouter ces{"\n"}à votre dossier dédié et{"\n"}confidentiel plus tard.</Text>
//                         <TouchableOpacity
//                         onPress={() => navigation.navigate('Empreinte vocal', {
//                         userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: userSize, userLang: userLang, userSituation: userSituation, userOrientation: userOrientation, userRecherche1: userRecherche1, userRecherche2: userRecherche2, userAffinites: userAffinites, rythmeDeVie1: rythmeDeVie1, rythmeDeVie2: rythmeDeVie2, userPrenom: userPrenom})}
//                         accessibilityLabel="Continuer">
//                             <Image style={[{ top:-80, width:320, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Continuer-Bleu.png')} />
//                         </TouchableOpacity>
//                     </View>
//                 </Modal>
//                 <View style={[{top:0}]}>
//                     <TouchableOpacity
//                     style={Styles.btn}
//                     onPress={() => setModalPreventImageaVisible(true)}
//                     accessibilityLabel="Continuer">
//                         <Text style={[Styles.textBtn9, { zIndex:4, top:45}]}>Continuer</Text>
//                         <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//                     </TouchableOpacity>
//                 </View>     
//             </View>     
              
//         </ImageBackground>
//     </View>
        
//     )
// }
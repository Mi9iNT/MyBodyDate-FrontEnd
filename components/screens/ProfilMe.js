import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../assets/style/Styles';



export const ProfilMe = ({ route, navigation }) => {
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

    // Constantes concernant la Modal d'information de l'empreinte vocale
    const [modalCharteVisible, setModalCharteVisible] = useState(true);
  
    return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Image
        source={require('../../assets/images/MicrosoftTeams-image.png')}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/retour_flèche_bleu.png')} style={{ width: 10, height: 20 }} />
          </TouchableOpacity>
          <Image source={require('../../assets/images/home_1.png')} style={{ width: 20, height: 20, marginHorizontal: 15 }} />
          <Text style={{ fontFamily: 'Comfortaa', fontWeight: '700', fontSize: 18, color: '#0019A7' }}>Accueil</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/cercle_ami.png')} style={{ width: 30, height: 30, marginHorizontal: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/notification_icons.png')} style={{ width: 30, height: 30, marginHorizontal: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/menu_mobile.png')} style={{ width: 30, height: 30, marginLeft: 5 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 20, marginTop: 20 }}>
          <Image source={require('../../assets/images/Ellipse44.png')} style={{ width: 115, height: 115, borderColor: '#0019A7' }} />
          <Text style={{ color: '#0019A7', fontSize: 17 }}>ID.20230510.88</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <Image source={require('../../assets/images/quality3.png')} style={{ width: 30, height: 30, marginTop: 20 }} />
          <Text style={{ color: '#0019A7', fontSize: 17, marginTop: 5 }}>Raluca</Text>
          <Text style={{ color: '#0019A7', fontSize: 17, marginTop: 5 }}>43, Paris</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Felicitations', { userConsent: '', routeName: '', loveCoach: '', userEmail: '', userPhone: '', userCity: '', accesPosition: '', genre: '', userBirth: '', userSize: '', userLang: '', userSituation: '', userOrientation: '', userRecherche1: '', userRecherche2: '', userAffinites: '', rythmeDeVie1: '', rythmeDeVie2: '', userPrenom: '', userVoice: '', userPhoto: '' })}>
            <Image source={require('../../assets/images/boutonContinuer2.png')} style={{ width: 100, height: 30, marginTop: 25 }} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <Image source={require('../../assets/images/préférence_profil.png')} style={{ width: 30, height: 30, marginTop: 20 }} />
          <Image source={require('../../assets/images/heart2.png')} style={{ width: 30, height: 30, marginTop: 35 }} />
          <Image source={require('../../assets/images/image116.png')} style={{ width: 30, height: 30, marginTop: 35 }} />
        </View>
      </View>

      <Image
        source={require('../../assets/images/menu.png')}
        style={{ width: '100%', height: 100, position: 'absolute', bottom: 0 }}
      />
    </View>
  );
};

ProfilMe.propTypes = {
    route: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};
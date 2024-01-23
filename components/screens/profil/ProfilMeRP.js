/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, ImageBackground, TouchableOpacity,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { MenuSlide } from '../../composants/MenuSlide';
import StylesProfileMeRp from '../../../assets/style/styleScreens/styleProfil/StyleProfileMeRp';
import BtnReadRecord from '../../composants/BtnReadRecord';

export const ProfilMeRP = ({route, navigation}) => {
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
  const rythmeDeVie2 = route.params?.rythmeDeVie2 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';
  const imagePath = route.params?.imagePath ?? '';
  const tabPath = route.params?.tabPath ?? 'Professionnel';

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const skills = [
    'Relations publiques', 'Arts visuels', 'Arts de la scène', 'Prise de parole', 'Coaching', 'Actrice',
  ];

  return (
    <View style={StylesProfileMeRp.container}>
      <MenuSlide imagePath={'Professionnel-Clair'} tabPath={tabPath} />
      <ScrollView>
          <ImageBackground
            source={require('../../../assets/images/Capture-d-ecran-Raluca.png')}
            style={StylesProfileMeRp.background}>
            <TouchableOpacity
              style={StylesProfileMeRp.boxPreference}>
                <Image
                  source={require('../../../assets/images/image-177.png')}
                  style={StylesProfileMeRp.icoPreference}
              />
            </TouchableOpacity>
            <View
              style={StylesProfileMeRp.viewCol}>
              <View
                style={StylesProfileMeRp.viewRow}>
                <Text
                  style={StylesProfileMeRp.userName}>
                  {userPrenom ? userPrenom : 'Raluca'}
                </Text>
                <Image
                  source={require('../../../assets/images/quality-2-2.png')}
                  style={StylesProfileMeRp.icoQuality}
                />
                <Image
                  source={require('../../../assets/images/Médaille.png')}
                  style={StylesProfileMeRp.icoMedaille}
                />
              </View>
              <Text
                style={StylesProfileMeRp.userCity}>
                {userBirth ? userBirth : '43'}, { userCity ? userCity : 'Paris' }
              </Text>
            </View>
          </ImageBackground>
          <View
            style={StylesProfileMeRp.viewRow2}>
            <Text
              style={StylesProfileMeRp.userId}>
              ID.20230510.88
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfilMeRPfirst');
              }}>
              <ImageBackground
                source={require('../../../assets/images/bouton_continuer.png')}
                style={StylesProfileMeRp.boxEdit}>
                <Text
                  style={StylesProfileMeRp.txtEdit}>
                  Éditer
                </Text>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <>
          <BtnReadRecord tabPath={tabPath} top={0} left={20} />
        </>
          <Text
            style={StylesProfileMeRp.txtTitleAbout}>
            À propos de moi
          </Text>
          <View
            style={StylesProfileMeRp.viewRow4}>
            <Text
              style={StylesProfileMeRp.txtAbout}>
              Lorem ipsum dolor sit amet, consectetur
            </Text>
          </View>
          <View
            style={StylesProfileMeRp.viewRow4}>
            <Image
              source={require('../../../assets/images/validation-du-ticket1.png')}
              style={StylesProfileMeRp.icoPass}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Prend pass', { prendPass: true })} style={{top: 5}}>
              <Text
                style={StylesProfileMeRp.txtPass}>
                Je prends mon pass
              </Text>
              <View
                style={StylesProfileMeRp.line}
              />
            </TouchableOpacity>
           <TouchableOpacity style={StylesProfileMeRp.boxCommunity}>
              <Image
                source={require('../../../assets/images/icoCommunity.png')}
                style={StylesProfileMeRp.icoCommunity}
              />
              <Text style={StylesProfileMeRp.txtCommunity}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StylesProfileMeRp.boxHeart}>
              <Image
                source={require('../../../assets/images/heart1.png')}
                style={StylesProfileMeRp.icoHeart}
              />
            </TouchableOpacity>
          </View>
          <View
            style={StylesProfileMeRp.line2}
          />
          <Text
            style={StylesProfileMeRp.skillTitle}>
            Mes Compétences
          </Text>
          <View style={StylesProfileMeRp.viewGap}>
          {skills.map((skill, index) => (
              <Text
                key={index}
                style={StylesProfileMeRp.txtSkill}
                >
                {skill}
              </Text>
          ))}
          </View>
        <View
          style={StylesProfileMeRp.viewDetails}>
          <View
            style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/statut.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text
              style={StylesProfileMeRp.titleDetails}>
              Statut
            </Text>
          </View>
          <Text
            style={StylesProfileMeRp.txtDetails}>
            Libéral
          </Text>
          <View
            style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/recherche_emploi.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text
              style={StylesProfileMeRp.titleDetails}>
              Recherche
            </Text>
          </View>
          <Text
            style={StylesProfileMeRp.txtDetails}>
            Recherche d'un.e salarié.e
          </Text>
          <View
            style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/publier__offre.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text
              style={StylesProfileMeRp.titleDetails}>
              Mon offre
            </Text>
          </View>
          <Text
            style={StylesProfileMeRp.txtDetails}>
            RH H/F
          </Text>
          <Text
            style={StylesProfileMeRp.txtDetails2}>
            Le responsable des ressources humaines est chargé(e){'\n'}de gérer
            l'ensemble des activités liées aux ressources humaines{'\n'}au sein
            de l'entreprise. Il/elle joue un rôle clé dans le{'\n'}développement
            et la mise en œuvre des politiques RH pour{'\n'}soutenir les
            objectifs organisationnels tout en veillant au{'\n'}bien-être des
            employés...
          </Text>
          <View
            style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/langue_pro.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text
              style={StylesProfileMeRp.titleDetails}>
              Je parle couramment
            </Text>
          </View>
          <Text
            style={StylesProfileMeRp.txtDetails}>
            Français, Anglais
          </Text>
          <View
            style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/distinctions.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text
              style={StylesProfileMeRp.titleDetails}>
              Mes distinctions
            </Text>
          </View>
          <Text
            style={StylesProfileMeRp.txtDetails}>
            Lorem ipsum
          </Text>
          <View
            style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/distinctions.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text
              style={StylesProfileMeRp.titleDetails}>
              Mes offres d'emploi
            </Text>
          </View>
          <Text
            style={StylesProfileMeRp.txtDetails}>
            Lorem ipsum
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

ProfilMeRP.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';
import Styles from '../../../assets/style/Styles';
import StylesProfileMeRa from '../../../assets/style/styleScreens/styleProfil/StyleProfileMeRa';
import BtnReadRecord from '../../composants/BtnReadRecord';

export const ProfilMeRA = ({ route, navigation, imagePath }) => {
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
  const user = route.params?.user ?? '';
  const prenium = route.params?.prenium ?? '';
  const tabPath = route.params?.tabPath ?? 'Amour';

  // console.log("user : ".user);

  const [boxPressed, setBoxPressed] = useState();

  // Obtenir et formater la date courante en utilisant la méthode Date()
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
  const day = ('0' + currentDate.getDate()).slice(-2); // jour sur 2 chiffres

  const formattedDate = `${year}${month}${day}`; // Constant récupérant l'année, le mois et le jour courant

  return (
    <ImageBackground
      style={StylesProfileMeRa.bgGradient}
      source={require('../../../assets/images/MicrosoftTeams-image.png')}>
      <MenuSlide imagePath={tabPath} tabPath={tabPath} />
      <View style={StylesProfileMeRa.userInfo}>
        <View
          style={StylesProfileMeRa.viewCol}>
          <Image
            accessibilityLabel="Avatar"
              source={require('../../../assets/images/Ellipse44.png')}
              style={StylesProfileMeRa.userAvatar}
            />
            <Text
              style={StylesProfileMeRa.userId}>
              ID.{formattedDate}.(id)
            </Text>
          <View style={StylesProfileMeRa.viewCol2}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../../assets/images/quality-2.png')}
                style={StylesProfileMeRa.userQuality}
              />
              <Image
                source={require('../../../assets/images/Médaille.png')}
                style={StylesProfileMeRa.userMedaille}
              />
            </View>
            <Text style={StylesProfileMeRa.userName}>
              {!user ? 'Raluca' : user}
            </Text>
            <Text style={StylesProfileMeRa.userBC}>
              { !userBirth ? '43' : userBirth}, { !userCity ? 'Paris' : userCity}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfilMeRAfirst');
              }}
              style={StylesProfileMeRa.boxEditBtn}>
              <Image
                source={require('../../../assets/boutons/Bouton-Bleu-Court.png')}
                style={StylesProfileMeRa.imgEditBtn}
              />
              <Text style={StylesProfileMeRa.txtEditBtn}>
              Éditer
            </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={StylesProfileMeRa.viewCol3}>
          <TouchableOpacity style={StylesProfileMeRa.boxBtn}>
            <Image
            source={require('../../../assets/images/préférence_profil.png')}
            style={StylesProfileMeRa.icoBtn}
          />
          </TouchableOpacity >
          <TouchableOpacity
            style={StylesProfileMeRa.boxBtn}>
            <Image
              source={require('../../../assets/images/heart2.png')}
              style={StylesProfileMeRa.icoBtn}
            />
            <Text
              style={StylesProfileMeRa.txtBtn}>
              21
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={StylesProfileMeRa.boxBtn}>
            <Image
               source={require('../../../assets/images/image116.png')}
              style={StylesProfileMeRa.icoBtn}
            />
            <Text
              style={StylesProfileMeRa.txtBtn}>
              7
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <BtnReadRecord tabPath={tabPath} top={100} left={20} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Prend pass', { prendPass: true })}
        style={StylesProfileMeRa.boxPass}>
          <Image
            source={require('../../../assets/images/validation-du-ticket-1.png')}
            style={StylesProfileMeRa.imgPass}
          />
          <View style={{bottom: 11}}>
            <Text
              style={StylesProfileMeRa.txtPass}>
              Je prends mon pass
            </Text>
            <View
              style={StylesProfileMeRa.line}
            />
          </View>
      </TouchableOpacity>
      <ScrollView style={StylesProfileMeRa.scrollView} contentContainerStyle={{paddingVertical: 20}}>
        <View style={StylesProfileMeRa.viewCol4}>
          <TouchableOpacity
            onPress={() => {
              setBoxPressed('1');
              navigation.navigate('Pulse spotlight');
            }}
            accessibilityLabel="Vibrez en illimité"
            style={[StylesProfileMeRa.boxOffre,{
              backgroundColor: boxPressed === '1' ? '#0019A7' : '#fff',
            }]}>
            <View
              style={StylesProfileMeRa.titleOffre}>
              <Text
                style={StylesProfileMeRa.txtTitle1}>
                My Body Date
              </Text>
              <Text
                style={[StylesProfileMeRa.txtTitle12,{
                  color: boxPressed === '1' ? '#fff' : '#0019A7',
                }]}>
                Premium
              </Text>
            </View>
            <Text
              style={[StylesProfileMeRa.txtTitle13,{
                color: boxPressed === '1' ? '#fff' : '#0019A7',
              }]}>
              Un coup de coeur n'attend pas.{'\n'}Vibrez en illimité !
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBoxPressed('2');
              navigation.navigate('Pulse profil');
            }}
            accessibilityLabel="Décrochez plus de visiteurs"
            style={[StylesProfileMeRa.boxOffre2,{
              backgroundColor: boxPressed === '2' ? '#0019A7' : '#fff',
            }]}>
            <Text
              style={StylesProfileMeRa.txtTitle2}>
              Profil à succès
            </Text>
            <Text
              style={[StylesProfileMeRa.txtTitle22,{
                color: boxPressed === '2' ? '#fff' : '#0019A7',
              }]}>
              Mettez votre profil en avant. Décrochez plus de visiteurs !
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBoxPressed('3');
              navigation.navigate('Pulse recherche');
            }}
            accessibilityLabel="Éclipsez-vous des regards"
            style={[StylesProfileMeRa.boxOffre3,{
              backgroundColor: boxPressed === '3' ? '#0019A7' : '#fff',
            }]}>
            <Text
              style={StylesProfileMeRa.txtTitle3}>
              Éclipsez-vous des regards
            </Text>
            <Text
              style={[StylesProfileMeRa.txtTitle22,{color: boxPressed === '3' ? '#fff' : '#0019A7',}]}>
              Éclipsez-vous des regards sur commande.
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <MenuBottom navigation={navigation} tabPath={'Amour'} active={'Moi'} />
    </ImageBackground>
  );
};

ProfilMeRA.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

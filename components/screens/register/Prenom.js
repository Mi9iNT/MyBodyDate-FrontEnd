import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import {BtnNext} from '../../composants/BtnNext';
import StylesPrenom from '../../../assets/style/styleScreens/styleRegister/StylePrenom';

export const Prenom = ({route, navigation}) => {
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
  const rythmeDeVie2 = route.params?.rythmeDeVie2 ?? '';
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

  const [buttonPressed, setButtonPressed] = useState();

  // Obtenir et formater la date courante en utilisant la méthode Date()
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
  const day = ('0' + currentDate.getDate()).slice(-2); // jour sur 2 chiffres

  const formattedDate = `${year}${month}${day}`; // Constant récupérant l'année, le mois et le jour courant
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [prenom, setPrenom] = useState();
  const [pseudo, setPseudo] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={StylesPrenom.container}>
      <ImageBackground
        style={StylesPrenom.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesPrenom.ViewText]}>
          <Text style={[StylesPrenom.TxtTitle]}>IDENTIFIANT</Text>
          <Text style={[StylesPrenom.textWhite]}>
            Sur MyBodyDate votre vrai prénom est visible de tous les membres
            sauf si vous préférez afficher votre pseudo. Les modérateurs passent
            tous les pseudos en revue.
          </Text>
          <Text style={[StylesPrenom.textBlue]}>Règle des pseudos</Text>
          <View style={StylesPrenom.ViewRow}>
            <Text style={[StylesPrenom.textWhite2]}>
              Afficher mon pseudo (par défaut)
            </Text>
            <Switch
              trackColor={{false: '#BEC8FF', true: '#17ff58'}}
              thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
              ios_backgroundColor="#f4f3f4"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{}}
            />
          </View>
          <SafeAreaView style={{top: 200}}>
            <TextInput
              style={[StylesPrenom.inputPrenom]}
              onChangeText={setPrenom}
              value={prenom}
              placeholder="Votre Prénom"
              placeholderTextColor={'#fff'}
              keyboardType="default"
            />
            <TextInput
              style={[StylesPrenom.inputPseudo]}
              onChangeText={setPseudo}
              value={pseudo}
              placeholder="Votre Pseudo "
              placeholderTextColor={'#fff'}
              keyboardType="default"
            />
          </SafeAreaView>
          <Text style={[StylesPrenom.textBlue2]}>ID.{formattedDate}.(id)</Text>
          <Text style={[StylesPrenom.textWhite3]}>Choix unique.</Text>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={[StylesPrenom.Btn]}
            onPress={() => {
              setButtonPressed('Continuer');
              setModalVisible(true);
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesPrenom.TxtBtn,
                {
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesPrenom.ImgBtn]}
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        </View>
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={[StylesPrenom.ViewModal]}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={[StylesPrenom.BtnCloseModal]}
            />
            <View>
              <Image
                source={require('../../../assets/images/avertissement.png')}
                style={[StylesPrenom.icoModal]}
              />
              <View style={[StylesPrenom.ViewTextModal]}>
                <Text style={StylesPrenom.titleModal}>
                  Règles concernant le pseudo ?
                </Text>
                <Text style={[StylesPrenom.textModalBlue]}>
                  Pour vérifiez que votre pseudo soit bien approuvé
                </Text>
                <View style={[StylesPrenom.ViewModalCol]}>
                  <View style={[StylesPrenom.ViewModalRow]}>
                    <Text style={[StylesPrenom.BlueDot]}>•</Text>
                    <Text style={[StylesPrenom.SubTextBlue]}>
                      Pour vérifiez que votre pseudo soit bien approuvé
                    </Text>
                  </View>
                  <View style={[StylesPrenom.ViewModalRow]}>
                    <Text style={[StylesPrenom.BlueDot]}>•</Text>
                    <Text style={[StylesPrenom.SubTextBlue]}>
                      N’incluez pas votre nom complet N’incluez pas vos
                      coordonnées
                    </Text>
                  </View>
                  <View style={[StylesPrenom.ViewModalRow]}>
                    <Text style={[StylesPrenom.BlueDot]}>•</Text>
                    <Text style={[StylesPrenom.SubTextBlue]}>
                      N’incluez aucune remarque sexuelle explicite ni vulgaire
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{bottom: 80}}
                onPress={() => {
                  setButtonPressed('Compris');
                  setModalVisible(false);
                  navigation.navigate('Confirmation prenom', {
                    userConsent: consentement,
                    routeName: routeChoice,
                    loveCoach: loveCoach,
                    userEmail: userEmail,
                    userPhone: userPhone,
                    userCity: userCity,
                    accesPosition: accesPosition,
                    genre: genre,
                    userBirth: userBirth,
                    userSize: userSize,
                    userLang: userLang,
                    userSituation: userSituation,
                    userOrientation: userOrientation,
                    userRecherche1: userRecherche1,
                    userRecherche2: userRecherche2,
                    userAffinites: userAffinites,
                    rythmeDeVie1: rythmeDeVie1,
                    rythmeDeVie2: rythmeDeVie2,
                    userPrenom: prenom,
                    pseudo: pseudo,
                  });
                }}>
                <Image
                  source={
                    buttonPressed === 'Compris'
                      ? require('../../../assets/boutons/Bouton-Rouge-Court.png')
                      : require('../../../assets/boutons/Bouton-Bleu-Court.png')
                  }
                  style={[StylesPrenom.ImgBtnModal]}
                />
                <Text style={[StylesPrenom.TextBtnModal]}>Compris</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};
Prenom.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      routeName: PropTypes.string,
      userConsent: PropTypes.string,
      loveCoach: PropTypes.string,
      userEmail: PropTypes.string,
      userPhone: PropTypes.string,
      userCity: PropTypes.string,
      accesPosition: PropTypes.string,
      genre: PropTypes.string,
      userBirth: PropTypes.string,
      userSize: PropTypes.string,
      userLang: PropTypes.string,
      userSituation: PropTypes.string,
      userOrientation: PropTypes.string,
      userRecherche1: PropTypes.string,
      userRecherche2: PropTypes.array,
      userAffinites: PropTypes.array,
      rythmeDeVie1: PropTypes.string,
      rythmeDeVie2: PropTypes.array,
      userPrenom: PropTypes.string,
      pseudo: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

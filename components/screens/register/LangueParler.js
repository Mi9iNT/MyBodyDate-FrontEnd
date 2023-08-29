import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Styles from '../../../assets/style/Styles';
import {NativeModules} from 'react-native';

//Home Screen
export const LangueParler = ({route, navigation}) => {
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

  const [buttonPressed, setButtonPressed] = useState();

  // La constante currentLocale permet de récupérer la/les langues selectionné(s) dans les paramètres du téléphone au travers des NativesModules
  const {I18nManager} = NativeModules;
  const currentLocale = I18nManager.localeIdentifier;

  if (currentLocale === 'fr_FR') {
    localeLang = 'Français';
  } else if (currentLocale === 'es_ES') {
    localeLang = 'Espagnol';
  } else if (currentLocale === 'nl_NL') {
    localeLang = 'Néerlandais';
  } else if (currentLocale === 'pt_PT') {
    localeLang = 'Portugais';
  } else if (currentLocale === 'pl_PL') {
    localeLang = 'Polonais';
  } else if (currentLocale === 'zh_CN') {
    localeLang = 'Chinois';
  } else if (currentLocale === 'en_US') {
    localeLang = 'Anglais';
  } else if (currentLocale === 'de_DE') {
    localeLang = 'Allemand';
  } else if (currentLocale === 'it_IT') {
    localeLang = 'Italien';
  } else if (currentLocale === 'ar_SA') {
    localeLang = 'Arabe';
  } else if (currentLocale === 'el_GR') {
    localeLang = 'Grec';
  } else if (currentLocale === 'ja_JP') {
    localeLang = 'Japonais';
  }

  // Constante permettant de récupérer et changer l'état ouvert ou fermer de la modal
  const [modalVisible, setModalVisible] = useState(false);

  // Constante permettant de savoir quel input radio a été sélectionné par l'utilisateur
  const [selectedValue, setSelectedLang] = useState();

  // Constante permettant de récupérer les input radio qui ont été sélectionnés par l'utilisateur
  const [selectedValues, setSelectedValues] = useState([]);

  // Constante permettant de récupérer les valeurs des inputs sélectionnés
  const handleSelection = value => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter(val => val !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }

    if (value == [1]) {
      inputValue = 'Français';
    } else if (value == [2]) {
      inputValue = 'Espagnol';
    } else if (value == [3]) {
      inputValue = 'Néerlandais';
    } else if (value == [4]) {
      inputValue = 'Portugais';
    } else if (value == [5]) {
      inputValue = 'Polonais';
    } else if (value == [6]) {
      inputValue = 'Chinois';
    } else if (value == [7]) {
      inputValue = 'Anglais';
    } else if (value == [8]) {
      inputValue = 'Allemand';
    } else if (value == [9]) {
      inputValue = 'Italien';
    } else if (value == [10]) {
      inputValue = 'Arabe';
    } else if (value == [11]) {
      inputValue = 'Grec';
    } else if (value == [12]) {
      inputValue = 'Japonais';
    }
    // console.log(selectedValues);
  };
  const lang =
    'Natif ICU: ' +
    currentLocale +
    '; Langue: ' +
    localeLang +
    '; Langues choisi: ' +
    [selectedValues];
  console.log(lang);

  const styles = StyleSheet.create({
    modal: {
      backgroundColor: 'transparent',
      borderRadius: 10,
      padding: 10,
      width: '60%',
      alignSelf: 'center',
      marginTop: '50%',
      top: 340,
    },
    item: {
      fontSize: 18,
      padding: 10,
    },
    btnModal: {
      backgroundColor: 'transparent',
      borderRadius: 50,
      borderWidth: 2,
      bottom: 120,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#cacaca',
      alignSelf: 'center',
      height: 60,
      width: '80%',
    },
    blurView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    absolute: {
      position: 'absolute',
      top: 510,
      height: 90,
      width: '100%',
      alignSelf: 'center',
      borderRadius: 50,
    },
    textGray: {
      color: '#cacaca',
      fontSize: 16,
    },
  });

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 100}]}>
          <Text style={[Styles.textWhiteCenter]}>LANGUE PARLÉES ?</Text>
        </View>
        <View style={[Styles.ViewInputRadioLang, {bottom: 140}]}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Français')}
              accessibilityLabel="Français">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Français')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Français</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Espagnol')}
              accessibilityLabel="Espagnol">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Espagnol')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Espagnol Castillan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Néerlandais')}
              accessibilityLabel="Néerlandais">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Néerlandais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Néerlandais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Portugais')}
              accessibilityLabel="Portugais">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Portugais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Portugais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Polonais')}
              accessibilityLabel="Poonais">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Polonais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Polonais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Chinois')}
              accessibilityLabel="Chinois mandarin">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Chinois')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Chinois mandarin</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Anglais')}
              accessibilityLabel="Anglais">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Anglais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Anglais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Allemand')}
              accessibilityLabel="Allemand">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Allemand')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Allemand</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Italien')}
              accessibilityLabel="Italien">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Italien')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Italien</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Arabe')}
              accessibilityLabel="Arabe">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Arabe')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Arabe</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Grec')}
              accessibilityLabel="Grec">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Grec')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Grec</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnInputLang}
              onPress={() => handleSelection('Japonnais')}
              accessibilityLabel="Japonnais">
              <Image
                style={Styles.SelectedImage}
                source={
                  selectedValues.includes('Japonnais')
                    ? require('../../../assets/images/radio_selected_noir.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={Styles.textBtnInputLang}>Japonnais</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{bottom: 100}}>
          <Text style={[Styles.textWhite3, {left: 30,fontSize:12}]}>Choix multiples.</Text>
          <View style={[Styles.line]} />
        </View>

        <View style={[{top: 60}]}>
          <TouchableOpacity
            style={[Styles.row, styles.btnModal]}
            onPress={() => setModalVisible(false)}
            accessibilityLabel="Afficher Modal">
            <Text style={[styles.item, Styles.textGrayCenter]}>
              {localeLang}
            </Text>
            <Image
              style={[Styles.SelectedImage, Styles.ml20]}
              source={require('../../../assets/images/arrow-down.png')}
            />
          </TouchableOpacity>
          <Text style={[Styles.textWhiteCenter2, {bottom: 100}]}>
            Langue de votre appareil.
          </Text>
        </View>
        <View style={[{bottom: 30}]}>
          <TouchableOpacity
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Situation', {
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
                userLang: lang,
              });}
            }
            accessibilityLabel="Continuer">
            <Text style={[Styles.textBtn9, {zIndex: 1, top: 40, color:buttonPressed === 'Continuer' ? '#fff' : '#0019A7'}]}>
              Continuer
            </Text>
            <Image
              style={[
                {
                  height: 56,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={buttonPressed === 'Continuer' ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc.png')}
            />
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            accessibilityLabel="Fermer Modal">
            <Image key={'blurryImage'} style={styles.absolute} />
            <BlurView
              style={styles.absolute}
              blurType="light"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
            <View style={styles.modal}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedLang(localeLang);
                  setModalVisible(false);
                }}>
                <Text style={[styles.item, Styles.textWhiteCenter]}>
                  {localeLang}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </ImageBackground>
    </View>
  );
};

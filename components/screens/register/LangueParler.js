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
import {BtnNext} from '../../composants/BtnNext';
import StylesLangParler from '../../../assets/style/styleScreens/styleRegister/StyleLangParler';

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

  const styles = StyleSheet.create({});

  return (
    <View style={StylesLangParler.container}>
      <ImageBackground
        style={StylesLangParler.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesLangParler.ViewText]}>
          <Text style={[StylesLangParler.TxtTitle]}>LANGUE PARLÉES ?</Text>
        </View>
        <View style={[StylesLangParler.ViewInputRadioLang]}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Français')}
              accessibilityLabel="Français">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Français')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Français</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Espagnol')}
              accessibilityLabel="Espagnol">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Espagnol')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Espagnol Castillan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Néerlandais')}
              accessibilityLabel="Néerlandais">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Néerlandais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Néerlandais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Portugais')}
              accessibilityLabel="Portugais">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Portugais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Portugais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Polonais')}
              accessibilityLabel="Poonais">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Polonais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Polonais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Chinois')}
              accessibilityLabel="Chinois mandarin">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Chinois')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Chinois mandarin</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Anglais')}
              accessibilityLabel="Anglais">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Anglais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Anglais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Allemand')}
              accessibilityLabel="Allemand">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Allemand')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Allemand</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Italien')}
              accessibilityLabel="Italien">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Italien')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Italien</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Arabe')}
              accessibilityLabel="Arabe">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Arabe')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Arabe</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Grec')}
              accessibilityLabel="Grec">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Grec')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Grec</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Japonnais')}
              accessibilityLabel="Japonnais">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Japonnais')
                    ? require('../../../assets/images/radio_selected_noir.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Japonnais</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{top: 120}}>
          <Text style={[StylesLangParler.textWhite]}>Choix multiples.</Text>
          <View style={[StylesLangParler.line]} />
        </View>

        <View style={[{top: 280}]}>
          <TouchableOpacity
            style={[Styles.row, StylesLangParler.btnModal]}
            onPress={() => setModalVisible(false)}
            accessibilityLabel="Afficher Modal">
            <Text
              style={[StylesLangParler.item, StylesLangParler.textGrayCenter]}>
              {localeLang}
            </Text>
          </TouchableOpacity>
          <Text style={[StylesLangParler.textWhiteCenter2]}>
            Langue de votre appareil.
          </Text>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            accessibilityLabel="Fermer Modal">
            <Image key={'blurryImage'} />
            <BlurView
              style={StylesLangParler.absoluteBlur}
              blurType="light"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
            <View style={StylesLangParler.modal}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedLang(localeLang);
                  setModalVisible(false);
                }}>
                <Text
                  style={[
                    StylesLangParler.item,
                    StylesLangParler.textWhiteCenter,
                  ]}>
                  {localeLang}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Situation'}
          txt={'Continuer'}
          background={'white'}
          top={260}
        />
      </ImageBackground>
    </View>
  );
};

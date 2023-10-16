import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import StylesConfirmationPrenom from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationPrenom';

export const ConfirmationPrenom = ({route, navigation}) => {
  const {
    routeName,
    userConsent,
    loveCoach,
    userEmail,
    userPhone,
    userCity,
    accesPosition,
    genre,
    userBirth,
    userSize,
    userLang,
    userSituation,
    userOrientation,
    userRecherche1,
    userRecherche2,
    userAffinites,
    rythmeDeVie1,
    rythmeDeVie2,
    userPrenom,
    pseudo,
  } = route.params ?? '';

  const [prenom, setPrenom] = useState(userPrenom);
  const [modalVisible, setModalVisible] = useState(false);

  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const day = ('0' + currentDate.getDate()).slice(-2);
  const formattedDate = `${year}${month}${day}`;

  const [buttonPressed, setButtonPressed] = useState();

  return (
    <ImageBackground
      style={Styles.bgGradient}
      source={require('../../../assets/images/Background.png')}>
      <Text style={[StylesConfirmationPrenom.TxtTitle]}>PRÉNOM</Text>
      <SafeAreaView style={[StylesConfirmationPrenom.ViewInputPrenom, {}]}>
        <TextInput
          style={Styles.TextInput}
          keyboardType="default"
          placeholder="Entrez votre Prénom"
          placeholderTextColor="#FFF"
          maxLength={100}
          onChangeText={prenom => setPrenom(prenom)}
          value={prenom}
        />
        <Text style={[StylesConfirmationPrenom.textBlue]}>
          ID.{formattedDate}.(id)
        </Text>
      </SafeAreaView>
      <Text style={[StylesConfirmationPrenom.textWhite]}>Choix unique.</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={[StylesConfirmationPrenom.BtnCloseModal]}
        />
        <View style={[StylesConfirmationPrenom.ViewModal]}>
          <Image
            style={[StylesConfirmationPrenom.icoModal,]}
            source={require('../../../assets/images/avertissement.png')}
          />
          <Text style={[StylesConfirmationPrenom.textModalBlue]}>
            Vous vous appelez {prenom} ?
          </Text>
          <Text style={[StylesConfirmationPrenom.textModalBlue2]}>
            Vérifiez bien votre prénom,{'\n'}
            il ne pourra plus être{'\n'}
            modifié par la suite.
          </Text>
        </View>
        <View style={[StylesConfirmationPrenom.ViewBtnModalRow]}>
          <TouchableOpacity
            accessibilityLabel="Modifier"
            onPress={() => {
              setButtonPressed('Modifier');
              setModalVisible(false);
            }}>
            <Text
              style={[
                StylesConfirmationPrenom.TextBtnModal,
                {
                  color: buttonPressed === 'Modifier' ? '#A70000' : '#0019A7',
                },
              ]}>
              Modifier
            </Text>
            <Image
              style={[StylesConfirmationPrenom.ImgBtnModal]}
              source={
                buttonPressed === 'Modifier'
                  ? require('../../../assets/boutons/Bouton-Trans-Court-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Trans-Court.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Accepter"
            onPress={() => {
              setButtonPressed('Accepter');
              setModalVisible(false);
              navigation.navigate('Profil multiples', {
                userConsent,
                routeName,
                loveCoach,
                userEmail,
                userPhone,
                userCity,
                accesPosition,
                genre,
                userBirth,
                userSize,
                userLang,
                userSituation,
                userOrientation,
                userRecherche1,
                userRecherche2,
                userAffinites,
                rythmeDeVie1,
                rythmeDeVie2,
                userPrenom: prenom,
                pseudo,
              });
            }}>
            <Text style={[StylesConfirmationPrenom.TextBtnModal2,]}>
              Accepter
            </Text>
            <Image
              style={[StylesConfirmationPrenom.ImgBtnModal2]}
              source={
                buttonPressed === 'Accepter'
                  ? require('../../../assets/boutons/Bouton-Rouge-Court.png')
                  : require('../../../assets/boutons/Bouton-Bleu-Court.png')
              }
            />
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        style={[StylesConfirmationPrenom.Btn]}
        onPress={() => {
          setButtonPressed('Continuer');
          setModalVisible(true);
        }}
        accessibilityLabel="Continuer">
        <Text style={[StylesConfirmationPrenom.TxtBtn]}>Continuer</Text>
        <Image
          style={[StylesConfirmationPrenom.ImgBtn]}
          source={
            buttonPressed === 'Continuer'
              ? require('../../../assets/boutons/Bouton-Rouge.png')
              : require('../../../assets/boutons/Bouton-Blanc.png')
          }
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

ConfirmationPrenom.propTypes = {
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

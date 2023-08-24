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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';

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
    <KeyboardAwareScrollView
      innerRef={ref => {
        this.scroll = ref;
      }}
      style={[Styles.container2, {top: 0}]}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={Styles.ViewText}>
          <Text style={[Styles.textTitleWhite3, {top: 150}]}>PRÉNOM</Text>
        </View>
        <SafeAreaView
          style={[Styles.ViewInputPrenom2, {top: 280, height: 480}]}>
          <TextInput
            style={Styles.TextInput}
            keyboardType="default"
            placeholder="Entrez votre Prénom"
            placeholderTextColor="#FFF"
            maxLength={100}
            onChangeText={prenom => setPrenom(prenom)}
            value={prenom}
          />
          <Text style={[Styles.textBlueCenter, {top: 20}]}>
            ID.{formattedDate}.(id)
          </Text>
        </SafeAreaView>
        <View style={{top: 100, left: 40}}>
          <Text style={[Styles.textWhite2]}>Choix unique.</Text>
        </View>
        <View style={{bottom: 200}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={[Styles.centeredView2, {top: 350}]}>
              <Image
                style={[Styles.imgPrenomAdv, {bottom: 240}]}
                source={require('../../../assets/images/avertissement.png')}
              />
              <Text style={[Styles.textBlueCenter2, {bottom: 180}]}>
                Vous vous appelez {prenom} ?
              </Text>
              <Text style={[Styles.textBlueCenter3, {bottom: 160}]}>
                Vérifiez bien votre prénom,{'\n'}
                il ne pourra plus être{'\n'}
                modifié par la suite.
              </Text>
            </View>
            <View style={[Styles.ViewBtnRow, {top: -50}]}>
              <TouchableOpacity
                accessibilityLabel="Modifier"
                onPress={() => {
                  setButtonPressed('Modifier');
                  setModalVisible(false);
                }}>
                <Text
                  style={[
                    Styles.textBtn9,
                    {
                      zIndex: 2,
                      top: 42,
                      color:
                        buttonPressed === 'Modifier' ? '#A70000' : '#0019A7',
                    },
                  ]}>
                  Modifier
                </Text>
                <Image
                  style={[{width: 150, height: 56, resizeMode: 'contain'}]}
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
                <Text style={[Styles.textBtn6, {zIndex: 2, top: 42}]}>
                  Accepter
                </Text>
                <Image
                  style={[{width: 150, height: 56, resizeMode: 'contain'}]}
                  source={
                    buttonPressed === 'Accepter'
                      ? require('../../../assets/boutons/Bouton-Rouge-Court.png')
                      : require('../../../assets/boutons/Bouton-Bleu-Court.png')
                  }
                />
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <View style={[Styles.ViewBtn2, {bottom: 40}]}>
          <TouchableOpacity
            onPress={() => {
              setButtonPressed('Continuer');
              setModalVisible(true);
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                Styles.textBtn9,
                {
                  zIndex: 1,
                  top: 40,
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
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
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
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

import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Logo from '../composants/Logo';
import Lottie from 'lottie-react-native';
import Styles from '../../assets/style/Styles';
import StylesCreationEtDeveloppement from '../../assets/style/styleScreens/styleRegister/StyleCreationEtDeveloppement';
import StylesBienvenue from '../../assets/style/styleScreens/styleRegister/StyleBienvenue';
/* Screen 3 */

export const Creation = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  console.log('Choix de route : ', routeChoice);

  //Constante permettant de savoir si l'utilisateur à appuyer sur play ou sur pause
  const [isPlaying, setIsPlaying] = useState(false);
  // const btnOpacity = useRef(new Animated.Value(0));

  // Constantes concernant la Modal d'accès au consentement
  const [modalVisible, setModalVisible] = useState(false);

  //Constante permettant de savoir si l'utilisateur à appuyer sur Accepter ou sur Refuser
  const [consentement, setConsentement] = useState();
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <View style={StylesCreationEtDeveloppement.container}>
      <ImageBackground
        style={StylesCreationEtDeveloppement.bgGradient}
        source={require('../../assets/images/Background.png')}>
        <Logo />

        <View style={[Styles.ViewText, {top: 50, left: 30}]}>
          <Text style={[StylesCreationEtDeveloppement.TxtTitle]}>
            CRÉATION ET
          </Text>
          <Text style={[StylesCreationEtDeveloppement.TxtTitle2]}>
            DÉVELOPPEMENT.
          </Text>
        </View>

        <View style={[StylesCreationEtDeveloppement.ViewVideo]}>
          <Lottie
            source={require('../../assets/animations/Animation-credits.json')}
            autoPlay
            loop
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={[StylesCreationEtDeveloppement.CenteredView, {top: 200}]}>
            <ScrollView style={[StylesBienvenue.ScrollView]}>
              {/* <Icon name="location-dot" size={19} color="#fff" /> */}
              <Text style={[StylesCreationEtDeveloppement.textBlue]}>
                CONSENTEMENT
              </Text>
              <Text style={[StylesCreationEtDeveloppement.textBlue2]}>
                Nous respectons la vie privée de nos utilisateurs. Vos données,
                vos choix.{'\n'}MyBodyDate utilise des cookies et des
                informations non sensibles pour assurer le bon fonctionnement de
                son application, mesurer l&apos;audience et les contenus
                consultés ou personnaliser les contenus affichés.{'\n'}Pour en
                savoir plus sur les cookies, les données utilisées et leur
                traitement vous pouvez consulter{' '}
                <Text style={[StylesCreationEtDeveloppement.textBlueUnder]}>
                  notre politique en matière de cookies et nos engagements en
                  matière de sécurité et de Confidentialité de données
                  personnelles.
                </Text>
                {'\n'}
              </Text>
              <Text style={[StylesCreationEtDeveloppement.textBlack]}>
                Notre site n&apos;accepte que des profils vérifiés au delà de 7
                jours.{'\n'}Sinon votre compte sera suspendu.
              </Text>
              <Text style={[StylesCreationEtDeveloppement.textBlue3]}>
                Nous sommes conforme RGPD, règlement générale à la
                règlementation de la protection des données
              </Text>
            </ScrollView>
          </View>

          <View style={[StylesCreationEtDeveloppement.ViewBtnRow]}>
            <TouchableOpacity
              accessibilityLabel="Refuser"
              onPress={() => {
                navigation.navigate('Bienvenue', {
                  userConsent: 'Refuser',
                  routeName: routeChoice,
                });
                setButtonPressed('Refuser');
                setModalVisible(false);
              }}>
              <Text
                style={[
                  StylesCreationEtDeveloppement.textBtn,
                  {
                    color: buttonPressed === 'Refuser' ? '#A70000' : '#0019A7',
                  },
                ]}>
                Refuser
              </Text>
              <Image
                style={[StylesCreationEtDeveloppement.ImgBtn]}
                source={
                  buttonPressed === 'Refuser'
                    ? require('../../assets/boutons/Bouton-Trans-Court-Rouge.png')
                    : require('../../assets/boutons/Bouton-Trans-Court.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityLabel="Accepter"
              onPress={() => {
                navigation.navigate('Love Coach', {
                  userConsent: 'Accepter',
                  routeName: routeChoice,
                });
                setButtonPressed('Accepter');
                setModalVisible(false);
              }}>
              <Text style={[StylesCreationEtDeveloppement.textBtn2]}>
                Accepter
              </Text>
              <Image
                style={[StylesCreationEtDeveloppement.ImgBtn2]}
                source={
                  buttonPressed === 'Accepter'
                    ? require('../../assets/boutons/Bouton-Rouge-Court.png')
                    : require('../../assets/boutons/Bouton-Bleu-Court.png')
                }
              />
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={[StylesCreationEtDeveloppement.Row]}>
          <TouchableOpacity
            style={[{}]}
            onPress={() => {
              setModalVisible(true);
              setButtonPressed(true);
            }}
            accessibilityLabel="Passer">
            <Image
              style={[StylesCreationEtDeveloppement.ImgBtn3]}
              source={
                buttonPressed
                  ? require('../../assets/boutons/Passer-Rouge.png')
                  : require('../../assets/boutons/Passer.png')
              }
            />
            <Text style={[StylesCreationEtDeveloppement.textBtn3]}>Passer</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

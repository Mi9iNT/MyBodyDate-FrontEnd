import React, {useEffect, useState} from 'react';
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
import {storeData, getData} from '../../service/storage';

export const Creation = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState();
  const [userConsent, setUserConsent] = useState('');
  console.log(userConsent);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const consent = await getData('user_consent');
      setUserConsent(consent || '');
      // console.log(consent);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // useEffect(() => {
  //   axios
  //     .get('http://10.0.2.2:9088/api/testUsers')
  //     .then(response => {
  //       setUsers(response.data);
  //       // console.log(response.data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  // useEffect(() => {
  //   // Utilisation de la méthode GET
  //   getMethod('/testUsers')
  //     .then(data => {
  //       console.log('Données récupérées:', data);
  //       // Faites quelque chose avec les données reçues
  //     })
  //     .catch(error => {
  //       console.error('Erreur de récupération des données:', error);
  //       // Gérez les erreurs ici
  //     });

  //   // const getUser = async () => {
  //   //   try {
  //   //     const response = await fetch('http://localhost:9088/');
  //   //     const json = await response.json();
  //   //     setUser(json);
  //   //     console.log(user);
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // };

  //   // Utilisation de la méthode POST
  //   // postMethod('/{subscriptionId}', {paramètre: 'valeur'})
  //   //   .then(data => {
  //   //     console.log('Réponse POST:', data);
  //   //     // Faites quelque chose avec la réponse
  //   //   })
  //   //   .catch(error => {
  //   //     console.error('Erreur lors de la requête POST:', error);
  //   //     // Gérez les erreurs ici
  //   //   });
  // }, []);

  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route

  // Constantes concernant la Modal d'accès au consentement
  const [modalVisible, setModalVisible] = useState(false);

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
                setButtonPressed('refuser');
                handleStoreData('user_consent', 'refuser');
                setModalVisible(false);
              }}>
              <Text
                style={[
                  StylesCreationEtDeveloppement.textBtn,
                  {
                    color:
                      buttonPressed === 'refuser' || userConsent === 'refuser'
                        ? '#A70000'
                        : '#0019A7',
                  },
                ]}>
                Refuser
              </Text>
              <Image
                style={[StylesCreationEtDeveloppement.ImgBtn]}
                source={
                  buttonPressed === 'refuser' || userConsent === 'refuser'
                    ? require('../../assets/boutons/Bouton-Trans-Court-Rouge.png')
                    : require('../../assets/boutons/Bouton-Trans-Court.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityLabel="Accepter"
              onPress={() => {
                navigation.navigate('Love Coach');
                setButtonPressed('accepter');
                handleStoreData('user_consent', 'accepter');
                setModalVisible(false);
              }}>
              <Text style={[StylesCreationEtDeveloppement.textBtn2]}>
                Accepter
              </Text>
              <Image
                style={[StylesCreationEtDeveloppement.ImgBtn2]}
                source={
                  buttonPressed === 'accepter' || userConsent === 'accepter'
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
              setButtonPressed('passer');
            }}
            accessibilityLabel="Passer">
            <Image
              style={[StylesCreationEtDeveloppement.ImgBtn3]}
              source={
                buttonPressed === 'passer' || userConsent === 'passer'
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

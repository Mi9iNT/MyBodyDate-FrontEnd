import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  PermissionsAndroid,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {
  PERMISSIONS,
  checkMultiple,
  request,
  RESULTS,
} from 'react-native-permissions';

export const AccesPosition = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';

  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);
  console.log('Email : ', userEmail);
  console.log('Téléphone : ', userPhone);
  console.log('Ville : ', userCity);

  const [buttonPressed, setButtonPressed] = useState('');
  const [buttonPerm, setButtonPerm] = useState('Exact');

  // La constante checkMultiplePermissions vérifie que tous les accès à la localisation soient garantis ou non
  const checkMultiplePermissions = () => {
    checkMultiple([
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    ]).then(statuses => {
      console.log(statuses);
      if (
        statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] ===
          RESULTS.GRANTED ||
        statuses[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION] ===
          RESULTS.GRANTED ||
        statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] === RESULTS.GRANTED
      ) {
        console.log('Vous pouvez utiliser la géolocalisation');
      } else {
        console.log('Accès refusé à la géolocalisation');
      }
    });
  };

  // La constante requestLocationPermission permet de récupérer le choix de l'utilisateur au travers de react-native-permissions
  const requestLocationPermission = async permission => {
    const permissionStatus = await request(permission);
    console.log('Permission Localisation:', permissionStatus);
    setModalVisible(false);
    if (permissionStatus === RESULTS.GRANTED) {
      console.log('Vous pouvez utiliser la géolocalisation');
    } else {
      console.log('Accès refusé à la géolocalisation');
    }
  };

  // La constante requestLocationFinePermission permet de récupérer le choix de l'utilisateur au travers de PermissionAndroid qui est natif pour l'accès ACCESS_FINE_LOCATION dans mybodydateapp\android\app\src\main\AndroidManifest.xml
  const requestLocationFinePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'MyBodyDate',
          message:
            'Autoriser MY BODY DATE à accéder à la position de cet appareil ?',
          buttonNeutral: 'Demander plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'Autoriser',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setModalVisible(false);
        console.log('Vous pouvez utiliser la position exacte');
        navigation.navigate('Genre', {
          userConsent: consentement,
          routeName: routeChoice,
          loveCoach: loveCoach,
          userEmail: userEmail,
          userPhone: userPhone,
          userCity: userCity,
          accesPosition: granted,
        });
      } else {
        setModalVisible(false);
        navigation.navigate('Genre', {
          userConsent: consentement,
          routeName: routeChoice,
          loveCoach: loveCoach,
          userEmail: userEmail,
          userPhone: userPhone,
          userCity: userCity,
          accesPosition: granted,
        });
        console.log('Accès refusé à la géolocalisation');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // La constante requestLocationCoarsePermission permet de récupérer le choix de l'utilisateur au travers de PermissionAndroid qui est natif pour l'accès ACCESS_FINE_LOCATION dans mybodydateapp\android\app\src\main\AndroidManifest.xml
  const requestLocationCoarsePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'MyBodyDate',
          message:
            'Autoriser MY BODY DATE à accéder à la position de cet appareil ?',
          buttonNeutral: 'Demander plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'Autoriser',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setModalVisible(false);
        console.log('Vous pouvez utiliser la position approximative');
        navigation.navigate('Genre', {
          userConsent: consentement,
          routeName: routeChoice,
          loveCoach: loveCoach,
          userEmail: userEmail,
          userPhone: userPhone,
          userCity: userCity,
          accesPosition: granted,
        });
      } else {
        setModalVisible(false);
        navigation.navigate('Genre', {
          userConsent: consentement,
          routeName: routeChoice,
          loveCoach: loveCoach,
          userEmail: userEmail,
          userPhone: userPhone,
          userCity: userCity,
          accesPosition: granted,
        });
        console.log('Accès refusé à la géolocalisation');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    checkMultiplePermissions();
  }, []);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText]}>
          <Text style={[Styles.textTitleWhite2, {top: 130, left: 30}]}>
            AUTORISEZ L&apos;ACCÈS À{'\n'}VOTRE POSITION
          </Text>
        </View>

        <View style={[Styles.ViewImg, {top: 50}]}>
          <View style={[Styles.BlockImg]}>
            <Image
              style={Styles.ImgBulle}
              source={require('../../../assets/images/emplacement.png')}
            />
          </View>
          <Text
            style={[
              {
                top: 50,
                width: '90%',
                alignSelf: 'center',
                color: '#FFF',
                fontFamily: 'Comfortaa',
                fontSize: 12,
                fontWeight: 700,
              },
            ]}>
            Pour retrouver les personnes que vous croisez, nous avons besoin de
            savoir où vous êtes .
          </Text>
          <Text
            style={[
              {
                top: 150,
                width: '90%',
                alignSelf: 'center',
                color: '#FFF',
                fontFamily: 'Comfortaa',
                fontSize: 12,
                fontWeight: 700,
              },
            ]}>
            Choisissez “ Lorsque vous utilisez l&apos;application” pour ne rater
            aucune rencontre.
          </Text>
        </View>

        <View style={[{top: -20}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setModalVisible(true);
              setButtonPressed('Go');
            }}>
            <Text style={[Styles.textBtn, {zIndex: 1, top: 40}]}>
              C&apos;est parti
            </Text>
            <Image
              style={[
                {
                  width: '100%',
                  height: 56,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                },
              ]}
              source={
                buttonPressed === 'Go'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Noir.png')
              }
            />
          </TouchableOpacity>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              requestLocationPermission;
              setModalVisible(!modalVisible);
            }}>
            <View style={[Styles.centeredView, {top: 200}]}>
              <Image
                style={[
                  {
                    bottom: 180,
                    width: 40,
                    resizeMode: 'contain',
                  },
                ]}
                source={require('../../../assets/boutons/ico-position.png')}
              />
              <Text
                style={[
                  Styles.textBlack,
                  {bottom: 160, width: '90%', textAlign: 'center'},
                ]}>
                Autoriser MY BODY DATE à accéder à la position de cet appareil ?
              </Text>
              <View
                style={[
                  {bottom: 140, width: '90%', justifyContent: 'space-around'},
                  Styles.row,
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    requestLocationFinePermission();
                    setButtonPerm('Exact');
                  }}>
                  <Image
                    source={require('../../../assets/images/position-exacte.png')}
                    style={{
                      width: 140,
                      height: 140,
                      resizeMode: 'contain',
                      borderRadius: 100,
                      borderColor: '#0019A7',
                      borderWidth: buttonPerm === 'Exact' ? 2 : 0,
                    }}
                  />
                  <Text
                    style={[
                      Styles.textBlackBold2,
                      {top: 10, fontWeight: buttonPerm === 'Exact' ? 700 : 500},
                    ]}>
                    Exacte
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    requestLocationCoarsePermission();
                    setButtonPerm('Approximative');
                  }}>
                  <Image
                    source={require('../../../assets/images/position-approximative.png')}
                    style={{
                      width: 140,
                      height: 140,
                      resizeMode: 'contain',
                      borderRadius: 100,
                      borderColor: '#0019A7',
                      borderWidth: buttonPerm === 'Approximative' ? 2 : 0,
                    }}
                  />
                  <Text
                    style={[
                      Styles.textBlackBold2,
                      {
                        top: 10,
                        fontWeight: buttonPerm === 'Approximative' ? 700 : 500,
                      },
                    ]}>
                    Approximative
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => requestLocationFinePermission()}>
                  <Text style={[Styles.textBlack, {bottom: 100}]}>
                    Lorsque vous utilisez l&apos;application
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => requestLocationFinePermission()}>
                  <Text style={[Styles.textBlackBold, {bottom: 80}]}>
                    Uniquement cette fois-ci
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('Genre', {
                      userConsent: consentement,
                      routeName: routeChoice,
                      loveCoach: loveCoach,
                      userEmail: userEmail,
                      userCity: userCity,
                      accesPosition: 'denied',
                    });
                  }}>
                  <Text style={[Styles.textBlackBold, {bottom: 60}]}>
                    Ne pas autoriser
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </View>
  );
};
AccesPosition.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

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
          <Text style={[Styles.textTitleWhite2, {top: 150, left: 30}]}>
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
          <Text style={[Styles.textWhite3, {top: 50}]}>
            Pour retrouver les personnes que vous croisez, nous avons besoin de
            savoir où vous êtes
          </Text>
          <Text style={[Styles.textWhite3, {top: 100}]}>
            Choisissez Lorsque vous utilisez l&apos;application pour ne rater
            aucune rencontre
          </Text>
        </View>

        <View style={[{top: -20}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => setModalVisible(true)}>
            <Text style={[Styles.textBtn, {zIndex: 1, top: 40}]}>
              C&apos;est parti
            </Text>
            <Image
              style={[
                {
                  width: '100%',
                  height: 60,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                },
              ]}
              source={require('../../../assets/boutons/Bouton-Noir.png')}
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
                    top: -250,
                    width: 40,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  },
                ]}
                source={require('../../../assets/images/ico-position.png')}
              />
              <Text
                style={[
                  Styles.textBlack,
                  {top: -200, width: '90%', textAlign: 'center'},
                ]}>
                Autoriser MY BODY DATE à accéder à la position de cet appareil ?
              </Text>
              <View style={[{top: -80}, Styles.row]}>
                <TouchableOpacity
                  onPress={() => requestLocationCoarsePermission()}>
                  <Text style={[Styles.textBlackBold2, Styles.mx10]}>
                    Position approximative
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => requestLocationFinePermission()}>
                  <Text style={[Styles.textBlackBold2, Styles.mx10]}>
                    Position exacte
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => requestLocationFinePermission()}>
                  <Text style={[Styles.textBlack, {top: -20}]}>
                    Lorsque vous utilisez l&apos;application
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => requestLocationFinePermission()}>
                  <Text style={[Styles.textBlackBold, {top: 10}]}>
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
                  <Text style={[Styles.textBlackBold, {top: 30}]}>
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
  // Add other prop validations here
};

// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     ImageBackground,
//     Image,
//     TouchableOpacity,
//     Modal,
//     PermissionsAndroid,
// } from 'react-native';
// import Styles from '../../assets/style/Styles';
// import {PERMISSIONS, checkMultiple, check, request, requestMultiple, RESULTS} from 'react-native-permissions';
// export const AccesPosition = ({ route, navigation }) => {

//   // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
//     const routeChoice = route.params?.routeName ?? '';
//     const consentement = route.params?.userConsent ?? '';
//     const loveCoach = route.params?.loveCoach ?? '';
//     const userEmail = route.params?.userEmail ?? '';
//     const userPhone = route.params?.userPhone ?? '';
//     const userCity = route.params?.userCity ?? '';

//     console.log('Choix de route : ' , routeChoice);
//     console.log('Consentement : ' , consentement);
//     console.log('Love Coach : ', loveCoach);
//     console.log('Email : ', userEmail);
//     console.log('Téléphone : ', userPhone);
//     console.log('Ville : ', userCity);

//   // Constantes concernant la Modal d'accès aux Permissions
//   const [modalVisible, setModalVisible] = useState(false);
//   const show = () => setModalVisible(true);
//   const hide = () => setModalVisible(false);

//   // Constantes concernant les requêtes permissions ANdroid (request(PERMISSIONS)) et les vérifications (check(PERMISSIONS)) de permission

//   //La constante checkMultiplePermissions vérifie que tous les accès à la localisation soient garantie ou non
//   const checkMultiplePermissions = () => {
//     checkMultiple([PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION, PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION]).then((statuses) => {
//       console.log(statuses);
//       if (statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'granted') {
//         console.log('Vous posez utiliser la geolocalisation');
//       }else if (statuses[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION] === 'granted') {
//         console.log('Vous posez utiliser la geolocalisation');
//       }else if (statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] === 'granted') {
//          console.log('Vous posez utiliser la geolocalisation');
//       } else {
//         console.log('Accès refuser à la géolocalisation purette');
//       }
//     })
//   }
//   // La constante requestLocationPermission permet de récupérer le choix de l'utilisateur au travers de react-native-permissions
//   const requestLocationPermission = async (permission) => {

//     const permissionStatus = await request(permission);
//     console.log('Permission Localisation:', permissionStatus);
//     setModalVisible(false);
//       if (permissionStatus === 'granted') {
//           console.log('Vous posez utiliser la geolocalisation');
//       } else {
//         console.log('Accès refuser à la géolocalisation');
//       }
//     };

//   // La constante requestLocationFinePermission permet de récupérer le choix de l'utilisateur au travers de PermissionAndroid qui est natif pour l'accès ACCESS_FINE_LOCATION dans mybodydateapp\android\app\src\main\AndroidManifest.xml
//   const requestLocationFinePermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'MyBodyDate',
//         message:
//           'Autoriser MY BODY DATE à accéder à la position de cet appareil ?',
//         buttonNeutral: 'Demander plus tard',
//         buttonNegative: 'Annuler',
//         buttonPositive: 'Autoriser',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         setModalVisible(false);
//         console.log('Vous posez utiliser la position exacte');
//       navigation.navigate('Genre', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone:userPhone, userCity : userCity, accesPosition : granted});
//       } else {
//         setModalVisible(false);
//         navigation.navigate('Genre', {userConsent : consentement, routeName : routeChoice, loveCoach : loveCoach, userEmail: userEmail, userPhone: userPhone, userCity : userCity, accesPosition : granted});
//         console.log('Accès refuser à la géolocalisation');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   // La constante requestLocationCoarsePermission permet de récupérer le choix de l'utilisateur au travers de PermissionAndroid qui est natif pour l'accès ACCESS_FINE_LOCATION dans mybodydateapp\android\app\src\main\AndroidManifest.xml
//   const requestLocationCoarsePermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'MyBodyDate',
//         message:
//           'Autoriser MY BODY DATE à accéder à la position de cet appareil ?',
//         buttonNeutral: 'Demander plus tard',
//         buttonNegative: 'Annuler',
//         buttonPositive: 'Autoriser',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         setModalVisible(false);
//         console.log('Vous posez utiliser la position approximative');
//         navigation.navigate('Genre', {userConsent : consentement, routeName : routeChoice, loveCoach : loveCoach, userEmail: userEmail, userPhone: userPhone, userCity : userCity, accesPosition : granted});
//       } else {
//         setModalVisible(false);
//         navigation.navigate('Genre', {userConsent : consentement, routeName : routeChoice, loveCoach : loveCoach, userEmail: userEmail, userPhone:userPhone,userCity : userCity, accesPosition : granted});
//         console.log('Accès refuser à la géolocalisation');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
// };

// React.useEffect(() => {
//   checkMultiplePermissions();
// }, []);

//     return (
//   <View style={Styles.container}>
//     <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
//       <View style={[Styles.ViewText]}>
//               <Text style={[Styles.textTitleWhite2, {top:150, left:30}]}>AUTORISEZ L'ACCÈS À{"\n"}VOTRE POSITION</Text>
//       </View>

//       <View style={[Styles.ViewImg, {top:50}]}>
//           <View style={[Styles.BlockImg]}>
//               <Image style={Styles.ImgBulle} source={require('../../assets/images/emplacement.png')} />
//           </View>
//           <Text style={[Styles.textWhite3, {top:50}]}>Pour retrouver les personnes que vous croisez, nous avons besoin de savoir où vous êtes</Text>
//           <Text style={[Styles.textWhite3, {top:100}]}>Choisissez "Lorsque vous utilisez l'application" pour ne rater aucune rencontre</Text>
//       </View>

//       <View style={[{top:-20}]}>
//           <TouchableOpacity style={Styles.btn} onPress={() => setModalVisible(true)} >
//             <Text style={[Styles.textBtn, { zIndex:1, top:40}]}>C'est parti</Text>
//             <Image style={[{ width: '100%', height: 60, alignSelf:'center', resizeMode: 'contain'}]} source={require('../../assets/boutons/Bouton-Noir.png')} />
//         </TouchableOpacity>
//       </View>

//       <View >
//         <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {requestLocationPermission, setModalVisible(!modalVisible); }}>
//           <View style={[Styles.centeredView, {top:200}]}>
//                 {/* <Icon name="location-dot" size={19} color="#fff" /> */}
//             <Image style={[{ top:-250, width: 40, alignSelf:'center', resizeMode: 'contain'}]} source={require('../../assets/images/ico-position.png')} />
//             <Text style={[Styles.textBlack, {top:-200, width:'90%', textAlign:'center'}]}>Autoriser MY BODY DATE à accéder à la position de cet appareil ?</Text>
//             <View style={[{top:-80}, Styles.row]}>
//               <TouchableOpacity onPress={() => requestLocationCoarsePermission()}>
//                 <Text style={[Styles.textBlackBold2, Styles.mx10]}>Position approximative</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => requestLocationFinePermission()}>
//                 <Text style={[Styles.textBlackBold2, Styles.mx10]}>Position exacte</Text>
//               </TouchableOpacity>
//             </View>
//             <View>
//               <TouchableOpacity onPress={() => requestLocationFinePermission()}>
//                 <Text style={[Styles.textBlack, {top:-20}]}>Lorsque vous utilisez l'application</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => requestLocationFinePermission()}>
//                 <Text style={[Styles.textBlackBold, {top:10}]}>Uniquement cette fois-ci</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => { setModalVisible(false); navigation.navigate('Genre', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userCity: userCity, accesPosition: 'denied' }) }}>
//                 <Text style={[Styles.textBlackBold, {top:30}]}>Ne pas autoriser</Text>
//               </TouchableOpacity>
//             </View>

//           </View>
//         </Modal>
//       </View>
//     </ImageBackground>
//   </View>

//     )
// }

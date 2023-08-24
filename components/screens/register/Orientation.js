import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';

export const Orientation = ({route, navigation}) => {
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

  // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
  const [orientation, setState] = useState('');

  const [buttonPressed, setButtonPressed] = useState();

  const handleOrientationSelection = selectedOrientation => {
    setOrientation({state: selectedOrientation});
  };

  console.log('Orientation : ' + orientation.state);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 100}]}>
          <Text style={[Styles.textTitleWhite3]}>VOTRE ORIENATION ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect, {top: 160}]}>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => setState({state: 'HétérosexeLle'})}
            accessibilityLabel="HétérosexeLle">
            <Text
              style={{
                color:
                  orientation.state === 'HétérosexeLle' ? '#0019A7' : '#fff',
                textAlign: 'center',
                fontFamily:
                  orientation.state === 'HétérosexeLle'
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: orientation.state === 'HétérosexeLle' ? 700 : 500,
              }}>
              HétérosexeLle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => setState({state: 'HomosexueLle'})}
            accessibilityLabel="HomosexueLle">
            <Text
              style={{
                color:
                  orientation.state === 'HomosexueLle' ? '#0019A7' : '#fff',
                textAlign: 'center',
                fontFamily:
                  orientation.state === 'HomosexueLle'
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: orientation.state === 'HomosexueLle' ? 700 : 500,
              }}>
              HomosexueLle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                height: 56,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => setState({state: 'BisexueLle'})}
            accessibilityLabel="BisexueLle">
            <Text
              style={{
                color: orientation.state === 'BisexueLle' ? '#0019A7' : '#fff',
                textAlign: 'center',
                fontFamily:
                  orientation.state === 'BisexueLle'
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: orientation.state === 'BisexueLle' ? 700 : 500,
              }}>
              BisexueLle
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 280, left: 40}}>
          <Text style={[Styles.textWhite2, {fontSize: 12}]}>Choix unique.</Text>
        </View>

        <View style={[Styles.ViewBtn2, {top: 130}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Recherche1', {
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
                userOrientation: orientation.state,
              });
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
                  top: 0,
                  width: '90%',
                  height: 60,
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
    </View>
  );
};

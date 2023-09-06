import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import { BtnNext } from '../../composants/BtnNext';

export const Situation = ({route, navigation}) => {
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

  // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
  const [situation, setState] = useState('');

  const [buttonPressed, setButtonPressed] = useState();

  const handleSituationSelection = selectedSituation => {
    setSituation({state: selectedSituation});
  };

  console.log('Situation : ' + situation.state);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 100}]}>
          <Text style={[Styles.textTitleWhite3]}>VOTRE SITUATION</Text>
          <Text style={[Styles.textTitleWhite3]}>ACTUELLE ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect, {top: 120}]}>
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
            onPress={() => setState({state: 'Célibataire'})}
            accessibilityLabel="Célibataire">
            <Text
              style={{
                color: situation.state === 'Célibataire' ? '#0019A7' : '#fff',
                textAlign: 'center',
                fontFamily:
                  situation.state === 'Célibataire'
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: situation.state === 'Célibataire' ? 700 : 500,
              }}>
              Célibataire
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
            onPress={() => setState({state: 'Séparé.e'})}
            accessibilityLabel="Séparé(e)">
            <Text
              style={{
                color: situation.state === 'Séparé.e' ? '#0019A7' : '#fff',
                textAlign: 'center',
                fontFamily:
                  situation.state === 'Séparé.e'
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: situation.state === 'Séparé.e' ? 700 : 500,
              }}>
              Séparé.e
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
            onPress={() => setState({state: 'Divorcé.e'})}
            accessibilityLabel="Divorcé.e">
            <Text
              style={{
                color: situation.state === 'Divorcé.e' ? '#0019A7' : '#fff',
                textAlign: 'center',
                fontFamily:
                  situation.state === 'Divorcé.e'
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: situation.state === 'Divorcé.e' ? 700 : 500,
              }}>
              Divorcé.e
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
            onPress={() => setState({state: 'Veuf'})}
            accessibilityLabel="Veuf">
            <Text
              style={{
                color: situation.state === 'Veuf' ? '#0019A7' : '#fff',
                textAlign: 'center',
                fontFamily:
                  situation.state === 'Veuf' ? 'Comfortaa-Bold' : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: situation.state === 'Veuf' ? 700 : 500,
              }}>
              Veuf
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
            onPress={() => setState({state: "C'est compliqué"})}
            accessibilityLabel="C\'est compliqué">
            <Text
              style={{
                color:
                  situation.state === "C'est compliqué" ? '#0019A7' : '#fff',
                textAlign: 'center',
                fontFamily:
                  situation.state === "C'est compliqué"
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: situation.state === "C'est compliqué" ? 700 : 500,
              }}>
              C'est compliqué
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 260, left: 40}}>
          <Text style={[Styles.textWhite2, {fontSize: 12, top: 20}]}>
            Choix unique.
          </Text>
        </View>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Orientation'}
          txt={'Continuer'}
          background={'white'}
          top={140}
        />
        {/* <View style={[Styles.ViewBtn2, {top: 120}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Orientation', {
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
                userSituation: situation.state,
              });
            }}
            accessibilityLabel="Continuer">
            <Text style={[Styles.textBtn9, {zIndex: 1, top: 40, color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7'}]}>
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
        </View> */}
      </ImageBackground>
    </View>
  );
};

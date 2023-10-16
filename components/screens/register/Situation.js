import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {BtnNext} from '../../composants/BtnNext';
import StylesSituation from '../../../assets/style/styleScreens/styleRegister/StyleSituation';

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
    <View style={StylesSituation.container}>
      <ImageBackground
        style={StylesSituation.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesSituation.TxtTitle]}>VOTRE SITUATION</Text>
        <Text style={[StylesSituation.TxtTitle]}>ACTUELLE ?</Text>

        <View style={[StylesSituation.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setState({state: 'Célibataire'})}
            accessibilityLabel="Célibataire">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation.state === 'Célibataire' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation.state === 'Célibataire'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: situation.state === 'Célibataire' ? 700 : 500,
                },
              ]}>
              Célibataire
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setState({state: 'Séparé.e'})}
            accessibilityLabel="Séparé(e)">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation.state === 'Séparé.e' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation.state === 'Séparé.e'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: situation.state === 'Séparé.e' ? 700 : 500,
                },
              ]}>
              Séparé.e
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setState({state: 'Divorcé.e'})}
            accessibilityLabel="Divorcé.e">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation.state === 'Divorcé.e' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation.state === 'Divorcé.e'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: situation.state === 'Divorcé.e' ? 700 : 500,
                },
              ]}>
              Divorcé.e
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setState({state: 'Veuf'})}
            accessibilityLabel="Veuf">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation.state === 'Veuf' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation.state === 'Veuf' ? 'Comfortaa-Bold' : 'Comfortaa',
                  fontWeight: situation.state === 'Veuf' ? 700 : 500,
                },
              ]}>
              Veuf
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setState({state: "C'est compliqué"})}
            accessibilityLabel="C\'est compliqué">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color:
                    situation.state === "C'est compliqué" ? '#0019A7' : '#fff',
                  fontFamily:
                    situation.state === "C'est compliqué"
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: situation.state === "C'est compliqué" ? 700 : 500,
                },
              ]}>
              C'est compliqué
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[StylesSituation.textWhite]}>Choix unique.</Text>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Orientation'}
          txt={'Continuer'}
          background={'white'}
          top={80}
        />
      </ImageBackground>
    </View>
  );
};

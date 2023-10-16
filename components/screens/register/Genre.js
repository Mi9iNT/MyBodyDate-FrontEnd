import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {BtnNext} from '../../composants/BtnNext';
import StylesGenre from '../../../assets/style/styleScreens/styleRegister/StyleGenre';

export const Genre = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';
  const accesPosition = route.params?.accesPosition ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);
  console.log('Email : ', userEmail);
  console.log('Téléphone : ', userPhone);
  console.log('Ville : ', userCity);
  console.log('Accès position : ', accesPosition);

  // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
  const [genre, setState] = useState('');

  console.log('Genre: ' + genre.state);

  const [buttonPressed, setButtonPressed] = useState('');

  return (
    <View style={StylesGenre.container}>
      <ImageBackground
        style={StylesGenre.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesGenre.TxtTitle]}>VOTRE GENRE ?</Text>

        <View style={[StylesGenre.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesGenre.BtnSelect]}
            onPress={() => setState({state: 'Femme'})}
            accessibilityLabel="Femme">
            <Text
              style={[
                StylesGenre.TextSelect,
                {
                  color: genre.state === 'Femme' ? '#0019A7' : '#FFF',
                  fontFamily:
                    genre.state === 'Femme' ? 'Comfortaa-Bold' : 'Comfortaa',
                },
              ]}>
              Femme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesGenre.BtnSelect]}
            onPress={() => setState({state: 'Homme'})}
            accessibilityLabel="Homme">
            <Text
              style={[
                StylesGenre.TextSelect,
                {
                  color: genre.state === 'Homme' ? '#0019A7' : '#FFF',
                  fontFamily:
                    genre.state === 'Homme' ? 'Comfortaa-Bold' : 'Comfortaa',
                },
              ]}>
              Homme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesGenre.BtnSelect]}
            onPress={() => setState({state: 'Non binaire'})}
            accessibilityLabel="Non binaire">
            <Text
              style={[
                StylesGenre.TextSelect,
                {
                  color: genre.state === 'Non binaire' ? '#0019A7' : '#FFF',
                  fontFamily:
                    genre.state === 'Non binaire'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                },
              ]}>
              Non binaire
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[StylesGenre.textWhite]}>Choix unique.</Text>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Date de naissance'}
          txt={'Continuer'}
          background={'white'}
          top={300}
        />
      </ImageBackground>
    </View>
  );
};

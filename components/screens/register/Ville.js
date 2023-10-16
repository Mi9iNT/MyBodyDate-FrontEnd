import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BtnNext} from '../../composants/BtnNext';
import Styles from '../../../assets/style/Styles';
import StylesVille from '../../../assets/style/styleScreens/styleRegister/StyleVille';

export const Ville = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);
  console.log('Email : ', userEmail);
  console.log('Téléphone : ', userPhone);

  const [userCity, setVille] = React.useState();
  console.log('Ville: ' + userCity);

  const [buttonPressed, setButtonPressed] = React.useState('');

  return (
    <View style={StylesVille.container}>
      <ImageBackground
        style={StylesVille.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesVille.TxtTitle]}>VOTRE VILLE ?</Text>
        <SafeAreaView style={[StylesVille.ViewInput]}>
          <TextInput
            style={StylesVille.TextInput}
            keyboardType="default"
            placeholder="Entrez votre ville"
            placeholderTextColor="#FFF"
            maxLength={100}
            onChangeText={userCity => setVille(userCity)}
            value={userCity}
          />
          <Text
            style={[
              {
                top: 170,
                left: 40,
                color: '#FFF',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 12,
              },
            ]}>
            Faites des rencontres locales.
          </Text>
        </SafeAreaView>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Accès Position'}
          txt={'Continuer'}
          background={'white'}
          top={380}
        />
      </ImageBackground>
    </View>
  );
};

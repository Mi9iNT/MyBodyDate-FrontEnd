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
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 150, left: 50}]}>
          <Text style={[Styles.textTitleWhite2]}>VOTRE VILLE ?</Text>
        </View>
        <SafeAreaView style={[Styles.ViewInput, {top: 250}]}>
          <TextInput
            style={Styles.TextInput}
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
                top: 60,
                left: 55,
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
          top={280}
        />

        {/* <View style={[Styles.ViewBtn2, {top: 280}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Accès Position', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userEmail: userEmail,
                userPhone: userPhone,
                userCity: userCity,
              });
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                Styles.textBtn9,
                {
                  zIndex: 1,
                  top: 42,
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
        </View> */}
      </ImageBackground>
    </View>
  );
};

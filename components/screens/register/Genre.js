import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import { BtnNext } from '../../composants/BtnNext';

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
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 150}]}>
          <Text style={[Styles.textTitleWhite3]}>VOTRE GENRE ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect, {top: 200}]}>
          <TouchableOpacity
            style={[
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
            onPress={() => setState({state: 'Femme'})}
            accessibilityLabel="Femme">
            <Text
              style={{
                color: genre.state === 'Femme' ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  genre.state === 'Femme' ? 'Comfortaa-Bold' : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Femme
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
            onPress={() => setState({state: 'Homme'})}
            accessibilityLabel="Homme">
            <Text
              style={{
                color: genre.state === 'Homme' ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  genre.state === 'Homme' ? 'Comfortaa-Bold' : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Homme
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
            onPress={() => setState({state: 'Non binaire'})}
            accessibilityLabel="Non binaire">
            <Text
              style={{
                color: genre.state === 'Non binaire' ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  genre.state === 'Non binaire' ? 'Comfortaa-Bold' : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Non binaire
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[Styles.ViewTextChoice, {top: 280, left: 30}]}>
          <Text style={[Styles.textWhite2, {fontSize: 12}]}>Choix unique.</Text>
        </View>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Date de naissance'}
          txt={'Continuer'}
          background={'white'}
          top={100}
        />
        {/* <View style={[Styles.ViewBtn1, {top: 40}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userEmail: userEmail,
                userPhone: userPhone,
                userCity: userCity,
                accesPosition: accesPosition,
                genre: genre.state,
              });
}
            }
            accessibilityLabel="Continuer">
            <Text style={[Styles.textBtn9, {zIndex: 1, top: 42, color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7'}]}>
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

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

export const CarteBriseGlace = ({route, navigation}) => {
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
  const userOrientation = route.params?.userOrientation ?? '';
  const userRecherche1 = route.params?.userRecherche1 ?? '';
  const userRecherche2 = route.params?.userRecherche2 ?? '';
  const userAffinites = route.params?.userAffinites ?? '';
  const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
  const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';

  const [buttonSelected, setButtonSelected] = useState();

  return (
    <ImageBackground
      source={require('../../../assets/images/bg-game.png')}
      style={{flex: 1}}>
      <View style={{flex: 8}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            left: 330,
            top: 50,
            width: 20,
          }}>
          <Image
            source={require('../../../assets/images/CroixB.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            top: 80,
            color: '#0019A7',
            textAlign: 'center',
            fontFamily: 'Gilroy-Bold',
            fontSize: 32,
            fontStyle: 'normal',
          }}>
          Carte magique
        </Text>
        <Text
          style={{
            top: 100,
            width: '80%',
            color: '#0019A7',
            alignSelf: 'center',
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontSize: 20,
            fontStyle: 'normal',
          }}>
          Félicitations, vous avez trouvé la personne qui vous porte de
          l'intérêt en secret !{' '}
        </Text>
        <Text
          style={{
            top: 140,
            width: '80%',
            color: '#0019A7',
            alignSelf: 'center',
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontSize: 20,
            fontStyle: 'normal',
          }}>
          Brisez la glace !
        </Text>
        <View
          style={{
            alignItems: 'center',
            top: 110,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 190,
              height: 251,
              top: 70,
              borderRadius: 50,
              borderEndWidth: 5,
              borderBottomWidth: 5,
              borderColor: '#aa75e9',
            }}>
            <Image
              source={require('../../../assets/images/Claire.png')}
              style={{
                width: 185,
                height: 246,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
              top: 70,
            }}>
            Claire, Paris
          </Text>
        </View>
      </View>
      <View
        style={{flex: 2, alignItems: 'center', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={{height: 56, alignItems: 'center'}}
          onPress={() => {
            setButtonSelected('Découvrir');
          }}>
          <Image
            source={
              buttonSelected === 'Découvrir'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Bleu.png')
            }
            style={{
              height: 56,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              bottom: 45,
              color: '#FFF',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              fontStyle: 'normal',
            }}>
            Découvrir son profil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{height: 56, alignItems: 'center'}}
          onPress={() => {
            setButtonSelected('Quitter');
            navigation.navigate('TabDiscover');
          }}>
          <Image
            source={
              buttonSelected === 'Quitter'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
            style={{
              height: 56,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              bottom: 45,
              color: buttonSelected === 'Quitter' ? '#fff' : '#0019A7',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              fontStyle: 'normal',
            }}>
            Quitter
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

CarteBriseGlace.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

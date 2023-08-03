/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import MenuSlide from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';
import {MyComponentTer} from '../../composants/MyComponentTer';

export const CarteMagique = ({route, navigation}) => {
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

  //Première
  const [imageSourceFirst, setImageSourceFirst] = useState(
    require('../../../assets/images/Guess.png'),
  );

  const handleImageClickFirst = () => {
    setImageSourceFirst(require('../../../assets/images/GuessLoose.png'));
  };

  //Deuxième
  const [imageSourceTwo, setImageSourceTwo] = useState(
    require('../../../assets/images/Guess.png'),
  );

  const handleImageClickTwo = () => {
    setImageSourceTwo(require('../../../assets/images/GuessLoose.png'));
  };

  //Troixième
  const [imageSourceTree, setImageSourceTree] = useState(
    require('../../../assets/images/Guess.png'),
  );

  const handleImageClickTree = () => {
    setImageSourceTree(require('../../../assets/images/GuessLoose.png'));
  };

  //Quatrième
  const [imageSource, setImageSource] = useState(
    require('../../../assets/images/Guess.png'),
  );

  const handleImageClick = () => {
    setImageSource(require('../../../assets/images/GuessClaire.png'));
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/Backround-Game.png')}
        style={{flex: 1}}>
      {/* <Image
        source={require('../../../assets/images/BackgroudWin.png')} // Ajoutez le chemin de votre image de fond
        style={{
          position: 'absolute',
          bottom:160,
          left: 0,
          width: '100%',
          height: '100%',
          resizeMode: 'cover', // Ajustez le mode de redimensionnement selon vos besoins
        }}
      /> */}
        <Image
          source={require('../../../assets/images/CroixB.png')}
          style={{
            width: 20,
            height: 18,
            left: 330,
            top: 30,
          }}
        />
        <View style={{Flex: 1, alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              top: 180,
            }}>
            <TouchableOpacity onPress={handleImageClickFirst}>
              <Image
                source={imageSourceFirst}
                style={{
                  width: 154,
                  height: 200,
                  left: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleImageClickTwo}>
              <Image
                source={imageSourceTwo}
                style={{
                  width: 154,
                  height: 200,
                  left: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              top: 180,
            }}>
            <TouchableOpacity onPress={handleImageClickTree}>
              <Image
                source={imageSourceTree}
                style={{
                  width: 154,
                  height: 200,
                  left: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleImageClick}>
              <Image
                source={imageSource}
                style={{
                  width: 154,
                  height: 200,
                  left: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              top: 250,
            }}>
            <Image
              source={require('../../../assets/images/Bouton-Passer.png')}
              style={{
                width: 331,
                height: 56,
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

CarteMagique.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

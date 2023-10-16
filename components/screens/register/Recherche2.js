import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {BtnNext} from '../../composants/BtnNext';
import StylesRecherche2 from '../../../assets/style/styleScreens/styleRegister/StyleRecherche2';

export const Recherche2 = ({route, navigation}) => {
  const {
    routeName,
    userConsent,
    loveCoach,
    userEmail,
    userPhone,
    userCity,
    accesPosition,
    genre,
    userBirth,
    userSize,
    userLang,
    userSituation,
    userOrientation,
    userRecherche1,
  } = route.params ?? {};

  const [selectedRecherhe2, setSelectedRecherche2] = useState([]);

  const [buttonPressed, setButtonPressed] = useState();

  const handleButtonPress = value => {
    let newSelectedRecherche2 = [...selectedRecherhe2];

    if (newSelectedRecherche2.includes(value)) {
      newSelectedRecherche2 = newSelectedRecherche2.filter(
        item => item !== value,
      );
    } else {
      newSelectedRecherche2.push(value);
    }

    setSelectedRecherche2(newSelectedRecherche2);
    console.log('Recherche 2 : ' + newSelectedRecherche2);
  };

  return (
    <View style={StylesRecherche2.container}>
      <ImageBackground
        style={StylesRecherche2.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesRecherche2.TxtTitle]}>VOTRE RECHERCHE ?</Text>

        <View style={[StylesRecherche2.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Relation amoureuse')}
            accessibilityLabel="Relation amoureuse">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Relation amoureuse')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes('Relation amoureuse')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Relation amoureuse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Long terme, OK pour court')}
            accessibilityLabel="Long terme, OK pour court">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Long terme, OK pour court')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'Long terme, OK pour court',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Long terme, OK pour court
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Court terme, OK pour long')}
            accessibilityLabel="Court terme, OK pour long">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Court terme, OK pour long')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'Court terme, OK pour long',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Court terme, OK pour long
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Rien de très sérieux')}
            accessibilityLabel="Rien de très sérieux">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Rien de très sérieux')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes('Rien de très sérieux')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Rien de très sérieux
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('À me faire des amis.es')}
            accessibilityLabel="À me faire des amis.es">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('À me faire des amis.es')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'À me faire des amis.es',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              À me faire des amis.es
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() =>
              handleButtonPress('Développer mon réseau proféssionnel')
            }
            accessibilityLabel="Développer mon réseau proféssionnel">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes(
                    'Développer mon réseau proféssionnel',
                  )
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'Développer mon réseau proféssionnel',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Développer mon réseau proféssionnel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Je ne sais pas trop')}
            accessibilityLabel="Je ne sais pas trop">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Je ne sais pas trop')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes('Je ne sais pas trop')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Je ne sais pas trop
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesRecherche2.textWhite]}>Choix multiple.</Text>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Affinite'}
          txt={'Continuer'}
          background={'white'}
          top={50}
        />
      </ImageBackground>
    </View>
  );
};

Recherche2.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      routeName: PropTypes.string,
      userConsent: PropTypes.string,
      loveCoach: PropTypes.string,
      userEmail: PropTypes.string,
      userPhone: PropTypes.string,
      userCity: PropTypes.string,
      accesPosition: PropTypes.string,
      genre: PropTypes.string,
      userBirth: PropTypes.string,
      userSize: PropTypes.string,
      userLang: PropTypes.string,
      userSituation: PropTypes.string,
      userOrientation: PropTypes.string,
      userRecherche1: PropTypes.string,
      userRecherche2: PropTypes.array,
    }),
  }),
  navigation: PropTypes.object,
};

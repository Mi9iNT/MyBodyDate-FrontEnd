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
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, Styles.mt100]}>
          <Text style={[Styles.textTitleWhite3]}>VOTRE RECHERCHE ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect2, {top: 20}]}>
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
            onPress={() => handleButtonPress('Relation amoureuse')}
            accessibilityLabel="Relation amoureuse">
            <Text
              style={{
                color: selectedRecherhe2.includes('Relation amoureuse') ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  selectedRecherhe2.includes('Relation amoureuse')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Relation amoureuse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
             Styles.mt10,
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
            onPress={() => handleButtonPress('Long terme, OK pour court')}
            accessibilityLabel="Long terme, OK pour court">
            <Text
              style={{
                color: selectedRecherhe2.includes('Long terme, OK pour court') ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  selectedRecherhe2.includes('Long terme, OK pour court')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Long terme, OK pour court
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
             Styles.mt10,
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
            onPress={() => handleButtonPress('Court terme, OK pour long')}
            accessibilityLabel="Court terme, OK pour long">
            <Text
              style={{
                color: selectedRecherhe2.includes('Court terme, OK pour long') ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  selectedRecherhe2.includes('Court terme, OK pour long')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Court terme, OK pour long
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
             Styles.mt10,
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
            onPress={() => handleButtonPress('Rien de très sérieux')}
            accessibilityLabel="Rien de très sérieux">
            <Text
              style={{
                color: selectedRecherhe2.includes('Rien de très sérieux') ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  selectedRecherhe2.includes('Rien de très sérieux')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Rien de très sérieux
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
             Styles.mt10,
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
            onPress={() => handleButtonPress('À me faire des amis.es')}
            accessibilityLabel="À me faire des amis.es">
            <Text
              style={{
                color: selectedRecherhe2.includes('À me faire des amis.es') ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  selectedRecherhe2.includes('À me faire des amis.es')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              À me faire des amis.es
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
             Styles.mt10,
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
            onPress={() =>
              handleButtonPress('Développer mon réseau proféssionnel')
            }
            accessibilityLabel="Développer mon réseau proféssionnel">
            <Text
              style={{
                color: selectedRecherhe2.includes('Développer mon réseau proféssionnel') ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  selectedRecherhe2.includes('Développer mon réseau proféssionnel')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Développer mon réseau proféssionnel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
             Styles.mt10,
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
            onPress={() => handleButtonPress('Je ne sais pas trop')}
            accessibilityLabel="Je ne sais pas trop">
            <Text
              style={{
                color: selectedRecherhe2.includes('Je ne sais pas trop') ? '#0019A7' : '#FFF',
                textAlign: 'center',
                fontFamily:
                  selectedRecherhe2.includes('Je ne sais pas trop')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Je ne sais pas trop
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 280, left: 40}}>
          <Text style={[Styles.textWhite2, {fontSize:12}]}>Choix multiple.</Text>
        </View>

        <View style={[Styles.ViewBtn2, {top: 100}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Objectifs', {
                userConsent,
                routeName,
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
                userRecherche2: selectedRecherhe2,
              });
}
            }
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
        </View>
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
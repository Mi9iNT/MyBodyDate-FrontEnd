import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';

export const Objectifs = ({route, navigation}) => {
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
    userRecherche2,
  } = route.params ?? {};

  const [buttonPressed, setButtonPressed] = useState();
  // Constante permettant de récupérer les boutons sélectionnés par l'utilisateur
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonPress = value => {
    // Copie le tableau des boutons sélectionnés
    let newSelectedButtons = [...selectedButtons];

    if (newSelectedButtons.includes(value)) {
      // Si la valeur est déjà dans le tableau, la retire
      newSelectedButtons = newSelectedButtons.filter(item => item !== value);
    } else {
      // Ajoute la valeur au tableau
      newSelectedButtons.push(value);
    }

    // Met à jour le tableau des boutons sélectionnés
    setSelectedButtons(newSelectedButtons);
    console.log('Objectifs : ' + newSelectedButtons);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 100}]}>
          <Text style={[Styles.textTitleWhite3]}>VOS OBJECTIFS ?</Text>
        </View>

        <View style={[Styles.ViewBTNSelect, {top: 150}]}>
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
            onPress={() => handleButtonPress('Relation amoureuse')}
            accessibilityLabel="Relation amoureuse">
            <Text
              style={{
                color: selectedButtons.includes('Relation amoureuse')
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedButtons.includes('Relation amoureuse')
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
            onPress={() => handleButtonPress("Cercle d'amis.es")}
            accessibilityLabel="Cercle d\'amis.es">
            <Text
              style={{
                color: selectedButtons.includes("Cercle d'amis.es")
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedButtons.includes("Cercle d'amis.es")
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Cercle d'amis.es
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
            onPress={() =>
              handleButtonPress('Développer mon réseau professionnel')
            }
            accessibilityLabel="Développer mon réseau professionnel">
            <Text
              style={{
                color: selectedButtons.includes(
                  'Développer mon réseau professionnel',
                )
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedButtons.includes(
                  'Développer mon réseau professionnel',
                )
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Développer mon réseau professionnel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 200, left: 40}}>
          <Text style={[Styles.textWhite2, {fontSize: 12}]}>
            Choix multiple.
          </Text>
        </View>

        <View style={[Styles.ViewBtn2, {top: 120}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Affinite', {
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
                userRecherche2,
              });
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                Styles.textBtn9,
                {
                  zIndex: 1,
                  top: 40,
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
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
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

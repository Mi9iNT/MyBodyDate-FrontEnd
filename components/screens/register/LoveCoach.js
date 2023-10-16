import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Logo from '../../composants/Logo';
import Styles from '../../../assets/style/Styles';
import StylesLoveCoach from '../../../assets/style/styleScreens/styleRegister/StyleLoveCoach';

//Home Screen
export const LoveCoach = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);

  const RadioInput = ({label, selected, onPress}) => {
    const icon = selected
      ? require('../../../assets/images/radio_selected.png')
      : require('../../../assets/images/radio_unselected.png');

    return (
      <TouchableOpacity
        style={[StylesLoveCoach.radioInputContainer]}
        onPress={onPress}>
        <Image source={icon} style={StylesLoveCoach.radioInputIcon} />
        <Text style={[StylesLoveCoach.textInput]}>{label}</Text>
      </TouchableOpacity>
    );
  };
  const [selectedOption, setSelectedOption] = useState('Oui');
  const [buttonPressed, setButtonPressed] = useState();

  console.log('Love Coach: ' + selectedOption);

  return (
    <View style={StylesLoveCoach.container}>
      <ImageBackground
        style={StylesLoveCoach.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Logo />
        <View style={StylesLoveCoach.ViewText}>
          <Text style={[StylesLoveCoach.textWhite]}>LOVE COACH</Text>
          <Text style={[StylesLoveCoach.textWhite2]}>
            Nous sommes heureux de vous accompagner pour augmenter vos chances
            de matchs. En choisissant le programme gratuit LOVE COACH, nous vous
            proposerons des profils personnalisés de célibataires correspondant
            à vos attentes. Vous recevrez également des invitations aux
            événements près de chez vous et/ou dans la ville de votre choix.
          </Text>
        </View>
        <View style={[StylesLoveCoach.ViewRadio, Styles.ml40]}>
          <RadioInput
            label="Non, je peux me débrouiller"
            selected={selectedOption === 'Non'}
            onPress={() => setSelectedOption('Non')}
          />
          <RadioInput
            label="Oui, c'est parfait"
            selected={selectedOption === 'Oui'}
            onPress={() => setSelectedOption('Oui')}
          />
        </View>
        <View style={{left: 40}}>
          <Text style={[StylesLoveCoach.textInfo]}>
            Création du compte gratuit.
          </Text>
          <Text style={[StylesLoveCoach.textInfo2]}>Choix unique.</Text>
        </View>
        {/* <BtnNext route={route} navigation={navigation} txt={'Continuer'} background={'white'} top={30} /> */}
        <View style={[StylesLoveCoach.ViewBtn]}>
          <TouchableOpacity
            style={[]}
            onPress={() => {
              if (routeChoice === 'Se connecter') {
                navigation.navigate('Liens de connexion', {
                  userConsent: consentement,
                  routeName: routeChoice,
                  LoveCoach: selectedOption,
                });
              } else {
                navigation.navigate("Liens d'inscription", {
                  userConsent: consentement,
                  routeName: routeChoice,
                  loveCoach: selectedOption,
                });
              }
              setButtonPressed(true);
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesLoveCoach.textBtn9,
                {
                  color: buttonPressed ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesLoveCoach.imgBtn]}
              source={
                buttonPressed
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

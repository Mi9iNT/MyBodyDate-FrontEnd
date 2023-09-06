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
      <TouchableOpacity style={[Styles.radioInputContainer, {alignItems:'center'}]} onPress={onPress}>
        <Image source={icon} style={Styles.radioInputIcon} />
        <Text style={[Styles.textWhite6, {fontSize:13, marginBottom:10}]}>{label}</Text>
      </TouchableOpacity>
    );
  };
  const [selectedOption, setSelectedOption] = useState('Oui');
  const [buttonPressed, setButtonPressed] = useState();

  console.log('Love Coach: ' + selectedOption);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Logo />
        {/* // radio_props={items} initial={1} onPress={(value) => setValue(value)} buttonColor='#fff' labelColor='#fff' selectedButtonColor='#fff' selectedLabelColor='#fff'  */}
        <View style={Styles.ViewText}>
          <Text style={[Styles.textWhite, {top: 50, left: 30, fontSize:24}]}>
            LOVE COACH
          </Text>
          <Text style={[Styles.textWhite2, {top: 100, width: '80%', height: 230, alignSelf:'center', fontSize:15}]}>
            Nous sommes heureux de vous accompagner pour augmenter vos chances
            de matchs. En choisissant le programme gratuit LOVE COACH, nous vous
            proposerons des profils personnalisés de célibataires correspondant
            à vos attentes. Vous recevrez également des invitations aux
            événements près de chez vous et/ou dans la ville de votre choix.
          </Text>
        </View>
        <View style={[Styles.ViewRadio, Styles.ml40, {top: 100}]}>
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
          <Text
            style={{
              color: '#FFF',
              fontFamily: 'Comfortaa',
              fontSize: 13,
              fontStyle: 'normal',
              fontWeight: 700,
              marginBottom: 20,
            }}>
            Création du compte gratuit.
          </Text>
          <Text
            style={{
              color: '#FFF',
              fontFamily: 'Comfortaa',
              fontSize: 13,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
            Choix unique.
          </Text>
        </View>
        {/* <BtnNext route={route} navigation={navigation} txt={'Continuer'} background={'white'} top={30} /> */}
        <View style={[Styles.ViewBtn1, {top: 30}]}>
          <TouchableOpacity
            style={Styles.btn}
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
                Styles.textBtn9,
                {zIndex: 1, top: 40, fontSize:18, color: buttonPressed ? '#fff' : '#0019A7'},
              ]}>
              Continuer
            </Text>
            <Image
              style={{
                height: 56,
                flexShrink: 0,
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
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

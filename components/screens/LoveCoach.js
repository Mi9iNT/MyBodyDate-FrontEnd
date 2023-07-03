/* eslint-disable react/prop-types */
import * as React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';
import Logo from '../composants/Logo';
import Styles from '../../assets/style/Styles';

//Home Screen
export const LoveCoach = ({ route, navigation }) => {

  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
    const routeChoice = route.params?.routeName ?? '';
    const consentement = route.params?.userConsent ?? '';
    console.log('Choix de route : ' , routeChoice);
    console.log('Consentement : ' , consentement);
  
  const RadioInput = ({ label, selected, onPress }) => {
  const icon = selected ? require('../../assets/images/radio_selected_noir.png') : require('../../assets/images/radio_unselected.png');

  return (
    <TouchableOpacity style={Styles.radioInputContainer} onPress={onPress}>
      <Image source={icon} style={Styles.radioInputIcon} />
      <Text style={[Styles.textWhite6]}>{label}</Text>
    </TouchableOpacity>
    );
  };
const [selectedOption, setSelectedOption] = useState('Oui');
  
 
console.log('Love Coach: ' + selectedOption);

  

return (
<View style={Styles.container}>
  <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
    <Logo/>
              {/* // radio_props={items} initial={1} onPress={(value) => setValue(value)} buttonColor='#fff' labelColor='#fff' selectedButtonColor='#fff' selectedLabelColor='#fff'  */}
    <View style={Styles.ViewText}>
      <Text style={[Styles.textWhite, {top:50, left:30}]}>LOVE COACH</Text>
      <Text style={[Styles.textWhite2, {top: 100, left:30}]}>Nous sommes heureux de vous accompagner pour augmenter vos chances de Match en vous proposant des offres</Text>
      <Text style={[Styles.textWhite2, {left: 30}]}>personnalisées de célibataires : parent solo, etc ; et des invitations aux évènements près de chez vous et sur la ville de votre choix.</Text>
    </View>
    <View style={[Styles.ViewRadio, Styles.ml40, {top: 80}]}> 
      <RadioInput
        label="Non, je peux me débrouiller"
        selected={selectedOption === "Non"}
        onPress={() => setSelectedOption("Non")}
      />
      <RadioInput
        label="Oui, c'est parfait"
        selected={selectedOption === "Oui"}
        onPress={() => setSelectedOption("Oui")} 
      />
      
  </View>
    <View style={[Styles.ViewBtn1, {top:50}]}>
      <TouchableOpacity style={Styles.btn} onPress={() => {routeChoice === 'Se connecter' ? 
        navigation.navigate('Liens de connexion', {userConsent : consentement, routeName : routeChoice, LoveCoach : selectedOption}) : 
        navigation.navigate('Liens d\'inscription', {userConsent : consentement, routeName : routeChoice, loveCoach : selectedOption})
        }}
        accessibilityLabel="Continuer">
        <Text style={[Styles.textBtn9, {zIndex:1, top:45}]}>Continuer</Text>  
        <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
      </TouchableOpacity>
        
    </View>
        
      </ImageBackground>
    </View>
  );
}


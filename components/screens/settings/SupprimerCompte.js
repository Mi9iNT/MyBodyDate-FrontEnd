/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import StyleSupprimerCompte from '../../../assets/style/styleScreens/styleSettings/StyleSupprimerCompte';
import PropTypes from 'prop-types';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const SupprimerCompte = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [text, onChangeText] = useState();



  return (
    <ImageBackground
      style={StyleSupprimerCompte.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings />
      <Text style={StyleSupprimerCompte.title}>
        Supprimer mon compte
      </Text>
      <View style={StyleSupprimerCompte.separator} />
      <Text style={StyleSupprimerCompte.description}>
        Vous pouvez suspendre votre compte quand vous le souhaitez. Votre compte sera mis en pause et vous pourrez le réactiver quand vous le voudrez.
      </Text>
      <View style={StyleSupprimerCompte.mettreEnPauseContainer}>
        <Text style={StyleSupprimerCompte.confirmText}>
          Confirmer suppression de compte
        </Text>
    <SafeAreaView>
      <TextInput
        style={StyleSupprimerCompte.inputNumber}
        placeholder='Entrez votre mot de passe' 
        placeholderTextColor={'#0019A7'}    
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Compte non trouve')}
        style={{top:0}}>
        <Image
          style={StyleSupprimerCompte.confirmButton}
          source={require('../../../assets/boutons/bouton-rouge-deux.png')}
        />
       <Text style={StyleSupprimerCompte.confirmButtonText}>Je confirme</Text>
      </TouchableOpacity>
    </SafeAreaView>
      </View>
      

      <View style={StyleSupprimerCompte.viewContainerInfo}>
        <Image
          style={StyleSupprimerCompte.icoInfo}
          source={require('../../../assets/boutons/ico-info-rose-text-bleu.png')}
        />
        <Text style={StyleSupprimerCompte.textInfo}>
          Si vous voulez vraiment nous quitter, nous espérons que vous avez trouvé ce que vous cherchiez.
        </Text>
        <TouchableOpacity>
          <Text style={StyleSupprimerCompte.linkInfo}>
            C'est comme vous voulez, cela décale simplement votre période de fin
            de contrat.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={StyleSupprimerCompte.linkInfo}>
           Laissez-nous votre avis ou Racontez-nous votre histoire.
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={{top: 120}}>
        <Image
          style={StyleSupprimerCompte.backButton}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text style={StyleSupprimerCompte.backButtonText}>Retour paramètres</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

SupprimerCompte.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default SupprimerCompte;

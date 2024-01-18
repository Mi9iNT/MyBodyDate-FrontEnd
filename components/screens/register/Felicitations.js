import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {storeData, getData} from '../../../service/storage';
import StylesFelicitation from '../../../assets/style/styleScreens/styleRegister/StyleFelicitation';

export const Felicitations = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState('');
  const [userPrenom, setUserPrenom] = useState();

  const handleGetData = async () => {
    try {
      const prenom = await getData('firstname');
      setUserPrenom(prenom);
      // console.log(prenom);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <ImageBackground
      style={[StylesFelicitation.bgGradient]}
      source={require('../../../assets/images/bg-congrats.png')}>
      <View style={[Styles.ViewText, {top: 100, left: 0}]}>
        <TouchableOpacity
          style={[{left: 0}]}
          onPress={() => navigation.navigate('ProfilMeRA')}
          accessibilityLabel="Passer">
          <Text style={[StylesFelicitation.TxtBtn]}>Découvrir les profils</Text>
        </TouchableOpacity>
        <Text style={[StylesFelicitation.TxtTitle]}>FÉLICITATIONS !{'\n'}</Text>
        <Text style={[StylesFelicitation.txtWhite]}>
          {userPrenom}, VOUS AVEZ 7 JOURS POUR AVOIR UN PROFIL VÉRIFIÉ
        </Text>
        <Text style={[StylesFelicitation.txtWhite2]}>
          Notre site de rencontre n’accepte que des profils vérifiés dans les 7
          jours suivant l’inscription. Au-delà de ce délai, votre compte est
          suspendu
        </Text>
        <Text style={[StylesFelicitation.txtWhite3]}>
          Nous sommes conforme au RGPD, règlement général à la protection des
          données.
        </Text>
      </View>
      <View style={[{top: -20}]}>
        <TouchableOpacity
          onPress={() => {
            setButtonPressed('Continuer');
            navigation.navigate('Tabs', {tabPath: 'Amour'});
          }}
          accessibilityLabel="Vérifier mon profil">
          <Text
            style={[
              StylesFelicitation.textBtn2,
              {
                color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
              },
            ]}>
            Vérifier mon profil
          </Text>
          <Image
            style={[StylesFelicitation.imgBtn]}
            source={
              buttonPressed === 'Continuer'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
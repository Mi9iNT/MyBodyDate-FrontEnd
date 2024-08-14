import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import StylesPrenium from '../../../assets/style/styleScreens/styleRegister/StylePrenium';
import {storeData, getData} from '../../../service/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Prenium'>;
};

/* Screen 2 */

export const Prenium: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetFirstname();
    handleGetUsername();
    handleGetShowFirstname();
    handleGetPrenium();
    handleGetRoute();
  }, []);

  const handleStoreData = async (key: string, value: boolean) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetFirstname = async () => {
    try {
      const firstname = await getData('firstname');
      setPrenom(firstname || '');
      // console.log('firstname : ' + firstname);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetUsername = async () => {
    try {
      const username = await getData('username');
      setUsername(username || '');
      // console.log('username : ' + username);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetRoute = async () => {
    try {
      const route = await getData('route_choice');
      console.log('route : ' + route);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetPrenium = async () => {
    try {
      const userPrenium = await getData('prenium');
      setRadioValue(userPrenium || '');
      // console.log('prenium : ' + userPrenium);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetShowFirstname = async () => {
    try {
      const showFistrname = await getData('show_firstname');
      setShowFirstname(showFistrname || '');
      // console.log('username : ' + username);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [prenom, setPrenom] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [showFirstname, setShowFirstname] = useState<boolean>();

  const [buttonPressed, setButtonPressed] = useState<boolean>();

  // Obtenir et formater la date courante en utilisant la méthode Date()
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
  const day = ('0' + currentDate.getDate()).slice(-2); // jour sur 2 chiffres
  // Constant récupérant l'année, le mois et le jour courant
  const formattedDate = `${year}${month}${day}`;

  const [radioValue, setRadioValue] = useState<boolean>(false);

  return (
    <View style={StylesPrenium.container}>
      <ImageBackground
        style={StylesPrenium.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesPrenium.TxtTitle]}>ABONNEMENT PRENIUM</Text>
        <Text style={[StylesPrenium.textWhiteRound]}>
          {showFirstname ? prenom : username}
        </Text>
        {/* Parenthèse (id) à changer par n° id_user de la bdd */}
        <Text style={[StylesPrenium.textBlueCenter]}>
          ID.{formattedDate}.(id)
        </Text>
        <Text style={[StylesPrenium.textWhite]}>
          Grâce à l&apos;abonnement, obtenez{'\n'}
          notre carte de visite avec votre {'\n'}
          numéro d&apos;identification.{'\n'}
          Donnez cette carte à un.e{'\n'}
          inconnu.e dans le rue pour qu&apos;il{'\n'}
          vous retouve sur notre application.
        </Text>
        <TouchableOpacity style={[StylesPrenium.ViewImgCard]}>
          <Image
            style={[StylesPrenium.imgCard]}
            source={require('../../../assets/images/carte-visite.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            radioValue ? setRadioValue(false) : setRadioValue(true);
          }}
          style={[StylesPrenium.radioInputContainer]}>
          <Image
            source={
              radioValue
                ? require('../../../assets/images/radio_selected.png')
                : require('../../../assets/images/radio_unselected.png')
            }
            style={{width: 20, height: 20}}
          />
          <Text style={[StylesPrenium.TextInput]}>
            Cocher, pour obtenir votre abnnement Prenium
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[]}
          onPress={() => {
            navigation.navigate('Prenium');
          }}
          accessibilityLabel="Voir les conditions d'abonnement Prenium<">
          <Text style={[StylesPrenium.textWhite2]}>
            Voir les conditions d&apos;abonnement Prenium
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StylesPrenium.ViewBtn}
          onPress={() => {
            navigation.navigate('Compte');
            handleStoreData('prenium', radioValue);
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesPrenium.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesPrenium.imgBtn]}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

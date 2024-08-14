import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {storeData, getData} from '../../service/storage';
import Styles from '../../assets/style/Styles';
import {RouteType} from '../../types/RouteType';
import {NavigationProp} from '@react-navigation/native';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'HomeNext'>;
};

export const HomeStackNext: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>();
  // const [routeChoice, setRouteChoice] = useState<string>();

  useEffect(() => {
    handleGetData();
  }, []);

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const key = await getData('route_choice');
      // setRouteChoice(key || '');
      // console.log(consent);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../assets/images/Background2.png')}>
        <View style={[Styles.ViewLogo3]}>
          <Image
            style={Styles.logo3}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={[Styles.ViewText2, {top: 200}]}>
          <Text style={[Styles.textBlue2]}>UN COUP DE COEUR N'ATTEND PAS</Text>
          <Text style={[Styles.textBlue22, {top: 20}]}>
            NE PERDEZ PLUS RIEN...{' '}
          </Text>
        </View>
        <View style={[Styles.ViewBtn, {top: -50}]}>
          <TouchableOpacity
            style={[{top: 0, height: 60, width: '90%', alignSelf: 'center'}]}
            accessibilityLabel="S'inscrire"
            onPress={() => {
              setButtonPressed('inscription');
              handleStoreData('route_choice', 'inscription');
              navigation.navigate('Bienvenue');
            }}>
            <Text style={[Styles.textBtn6, {zIndex: 1, top: 10}]}>
              S'inscrire
            </Text>
            <Image
              style={[
                {
                  top: -34,
                  width: '100%',
                  height: 60,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={
                buttonPressed === 'inscription'
                  ? require('../../assets/boutons/Bouton-Rouge.png')
                  : require('../../assets/boutons/Bouton-Bleu.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[{top: 20, height: 60, width: '90%', alignSelf: 'center'}]}
            accessibilityLabel="Se connecter"
            onPress={() => {
              setButtonPressed('connexion');
              handleStoreData('route_choice', 'connexion');
              navigation.navigate('LinksLogIn', {
                LoginRoute: 'Liens de connexion',
              });
            }}>
            <Text style={[Styles.textBtn6, {zIndex: 2, top: 10}]}>
              Se connecter
            </Text>
            <Image
              style={[
                {
                  top: -34,
                  width: '100%',
                  height: 60,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={
                buttonPressed === 'connexion'
                  ? require('../../assets/boutons/Bouton-Rouge.png')
                  : require('../../assets/boutons/Bouton-Bleu.png')
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

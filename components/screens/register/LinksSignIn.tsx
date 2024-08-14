import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import Logo from '../../composants/Logo';
import StylesLinksSignIn from '../../../assets/style/styleScreens/styleRegister/StyleLinksSignIn';
import {storeData, getData} from '../../../service/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'LinksSignIn'>;
};

export const LinksSignIn: React.FC<HomeProps> = ({navigation}) => {
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
      const routeChoice = await getData('route_choice');
      setRouteChoice(routeChoice || '');
      // console.log('route_choice : ' + routeChoice);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [routeChoice, setRouteChoice] = useState<string>();
  const [buttonPressed, setButtonPressed] = useState<string>();

  return (
    <View style={StylesLinksSignIn.container}>
      <ImageBackground
        style={StylesLinksSignIn.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Logo />

        <View style={StylesLinksSignIn.ViewText}>
          <Text style={[StylesLinksSignIn.textTitle, Styles.fb]}>
            UN COUP DE COEUR
          </Text>
          <Text style={[StylesLinksSignIn.textTitle, Styles.fb]}>
            N'ATTEND PAS
          </Text>
          <Text style={[StylesLinksSignIn.textTitle2, Styles.fl, {top: 20}]}>
            NE PERDEZ PLUS RIEN...
          </Text>
        </View>

        <View style={[StylesLinksSignIn.ViewBtnLog]}>
          <View style={[{bottom: 40}]}>
            <TouchableOpacity
              style={[StylesLinksSignIn.btn]}
              accessibilityLabel="Se connecter par email"
              onPress={() => {
                handleStoreData('route_choice', 'inscription email' ?? '');
                navigation.navigate('S_inscrire_par_mail');
                setButtonPressed('mail');
              }}>
              <Text style={[StylesLinksSignIn.textBtn]}>
                S'inscrire par email
              </Text>
              <Image
                style={StylesLinksSignIn.imgBtn}
                source={
                  buttonPressed === 'mail'
                    ? require('../../../assets/boutons/Bouton-Rouge-Email.png')
                    : require('../../../assets/boutons/Bouton-Bleu-Email.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[StylesLinksSignIn.btn, Styles.mt20]}
              onPress={() => {
                handleStoreData('route_choice', 'inscription numero');
                navigation.navigate('S_inscrire_par_numero');
                setButtonPressed('numero');
              }}
              accessibilityLabel="S'inscrire avec son numéro de téléphone">
              <Text style={[StylesLinksSignIn.textBtn2]}>
                S'inscrire avec son n°
              </Text>
              <Image
                style={[StylesLinksSignIn.imgBtn]}
                source={
                  buttonPressed === 'numero'
                    ? require('../../../assets/boutons/Bouton-Rouge-Telephone.png')
                    : require('../../../assets/boutons/Bouton-Bleu-Telephone.png')
                }
              />
            </TouchableOpacity>
            <View style={[{top: 20}]}>
              <View>
                <Text style={[StylesLinksSignIn.textWhite, Styles.fl]}>
                  Vous n'avez pas de compte ?
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('LinksLogIn', {
                      LoginRoute: 'Liens de connexion',
                    })
                  }
                  accessibilityLabel="Se connecter">
                  <Text style={[StylesLinksSignIn.linkWhite]}>
                    Se connecter
                  </Text>
                </TouchableOpacity>
                <View style={[StylesLinksSignIn.line]} />
              </View>

              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('LinksLogIn', {
                      LoginRoute: 'Recuperation_email',
                    })
                  }
                  accessibilityLabel="Récupération email">
                  <Text style={[StylesLinksSignIn.linkBlue]}>
                    Récupérez mon compte.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import ConfirmHcaptcha from '@hcaptcha/react-native-hcaptcha';
import Lottie from 'lottie-react-native';
import {getMethod, postMethod} from '../../../service/axiosInstance';
import {storeData, getData} from '../../../service/storage';
import {BtnNext} from '../../composants/BtnNext';
import StylesConfirmationCompte from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationCompte';

const siteKey = 'e8489cc3-b124-4243-b0bd-abd6d596e104';
const baseUrl = 'https://hcaptcha.com';

export const ConfirmationCompte = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const user = route.params?.user ?? '';
  console.log('user : ', user);

  const [buttonPressed, setButtonPressed] = useState('');

  // Constantes concernant la Modal Recaptcha
  const [modalRecaptchaVisible, setModalRecaptchaVisible] = useState(true);

  const [code, setCode] = useState(null);
  const captchaForm = useRef(null);
  console.log(code);

  const onMessage = event => {
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        console.log('Verified code:', event.nativeEvent.data);
        captchaForm.current.hide();
        setCode(event.nativeEvent.data);
        return;
      } else {
        setCode(event.nativeEvent.data);
        console.log('Verified code:', event.nativeEvent.data);
        setTimeout(() => {
          captchaForm.current.hide();
          // do whatever you want here
        }, 1000);
      }
    }
  };

  function testReached() {
    if (!code) {
      return (
        <>
          <Lottie
            style={[StylesConfirmationCompte.lottie]}
            source={require('../../../assets/animations/AnimRefuserCaptcha.json')}
            autoPlay
            loop
          />
          <Text style={[StylesConfirmationCompte.lottieText]}>
            Test non confirmé
          </Text>
        </>
      );
    } else {
      return (
        <>
          <Lottie
            style={[StylesConfirmationCompte.lottie2]}
            source={require('../../../assets/animations/AnimValiderCaptcha.json')}
            autoPlay
            loop
          />
          <Text style={[StylesConfirmationCompte.lottieText2]}>
            Test confirmé
          </Text>
        </>
      );
    }
  }

  useEffect(() => {
    getMethod('/currentUser')
      .then(data => {
        console.log('Données récupérées :', data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  const postInfo = async () => {
    const url = '/register';
    const data = {
      // email: email,
    };
    console.log(data);

    try {
      const response = await postMethod(url, data);
      console.log('Réponse du serveur après la requête POST :', response);
      if (response) {
        handleStoreData('confirmation_compte', code);
        navigation.push('Compte');
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST :', error);
    }
  };

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  return (
    <ImageBackground
      style={StylesConfirmationCompte.bgGradient}
      source={require('../../../assets/images/Background.png')}>
      <Text style={[StylesConfirmationCompte.TxtTitle]}>MON COMPTE</Text>
      <Text style={[StylesConfirmationCompte.textWhite]}>
        Prouvez que vous n&apos;êtes pas un robot.
      </Text>
      <Text style={[StylesConfirmationCompte.textWhite2]}>
        Pour cela, réalisez ce test pour pouvoir poursuivre.
      </Text>
      <View style={[{top: 280}]}>
        {!code && (
          <TouchableOpacity
            style={[{top: 0}]}
            onPress={() => {
              captchaForm.current.show();
            }}>
            <Text style={[StylesConfirmationCompte.textBtn]}>
              Faire le test
            </Text>
            <Image
              style={[StylesConfirmationCompte.imgBtn]}
              source={require('../../../assets/boutons/Bouton-Rouge.png')}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={[{top: 400}]}>
        <ConfirmHcaptcha
          ref={captchaForm}
          siteKey={siteKey}
          baseUrl={baseUrl}
          languageCode="fr"
          onMessage={onMessage}
        />
        {testReached()}
        <TouchableOpacity
          style={[StylesConfirmationCompte.ViewBtn, {top: code ? 50 : 0}]}
          accessibilityLabel="Continuer"
          onPress={() => {
            code == null
              ? navigation.navigate('confirmation compte')
              : navigation.navigate('Ajouter photo');
            setButtonPressed('Continuer');
          }}>
          <Image
            style={[StylesConfirmationCompte.imgBtn2]}
            source={
              buttonPressed === 'Continuer'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
          />
          <Text
            style={[
              StylesConfirmationCompte.TxtBtn,
              {
                color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
              },
            ]}>
            Continuer
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

ConfirmationCompte.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default ConfirmationCompte;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {getMethod, postMethod} from '../../../service/axiosInstance';
import {storeData, getData, getDatas} from '../../../service/storage';
import StylesSinscrirePhone from '../../../assets/style/styleScreens/styleRegister/StyleSinscrirePhone';

export const SignInPhone = ({navigation}) => {
  const [userPhone, setPhone] = useState();
  const [errorNumero, setErrorNumero] = useState(validateMessage);
  const [buttonPressed, setButtonPressed] = useState();

  const errorMessage =
    'Numéro de téléphone est invalide. Veuillez respecter le format "+33 000000000"';

  const validateMessage =
    'Un code va vous être envoyé par SMS afin de vous identifier';

  const validatePhone = index => {
    const reg = /^\+33\d{9}$/;
    const phoneNumber = index;

    if (reg.test(phoneNumber)) {
      setPhone(phoneNumber);
      setErrorNumero(true);
    } else {
      setPhone(phoneNumber);
      setErrorNumero(false);
    }
  };
  console.log(errorNumero);

  console.log('Téléphone: ' + userPhone);

  useEffect(() => {
    handleGetData();
    handleGetRoute();
  }, []);

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const phone = await getData('phone');
      setPhone(phone || '');
      // console.log(phone);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetRoute = async () => {
    try {
      const route = await getData('route_choice');
      // console.log(route);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const postInfo = async () => {
    const url = '/verificationNumero';
    const data = {
      phoneNumber: userPhone,
    };
    // console.log(data);
    try {
      const response = await postMethod(url, data);
      console.log('Réponse du serveur après la requête POST :', response);
      if (response) {
        handleStoreData('route_choice', 'inscription numero');
        navigation.navigate('Confirmation numero', {user: response});
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST :', error);
    }
  };

  return (
    <View style={StylesSinscrirePhone.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesSinscrirePhone.ViewText]}>
          <Text style={[StylesSinscrirePhone.TxtTitle]}>S'INSCRIRE</Text>
        </View>
        <SafeAreaView style={[StylesSinscrirePhone.ViewInput]}>
          <TextInput
            style={StylesSinscrirePhone.TextInput}
            keyboardType="phone-pad"
            placeholder="Entrez votre n° de téléphone"
            placeholderTextColor="#FFF"
            onChangeText={phone => {
              validatePhone(phone);
            }}
            value={userPhone}
          />
          {errorNumero === false ? (
            <Text style={[StylesSinscrirePhone.textError]}>{errorMessage}</Text>
          ) : (
            <Text style={[StylesSinscrirePhone.textWhite]}>
              {validateMessage}
            </Text>
          )}
        </SafeAreaView>
        <TouchableOpacity
          style={{bottom: 50}}
          onPress={() => {
            errorNumero
              ? [handleStoreData('phone', userPhone ?? ''), postInfo()]
              : navigation.navigate("S'inscrire par numero");
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesSinscrirePhone.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesSinscrirePhone.imgBtn]}
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

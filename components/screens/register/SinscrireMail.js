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
import {storeData, getData, getDatas} from '../../../service/storage';
import StylesSinscrireMail from '../../../assets/style/styleScreens/styleRegister/StyleSinscrireMail';

export const SignInMail = ({navigation}) => {

  const [userEmail, setEmail] = useState(userEmail ?? '');
  const [errorEmail, setErrorEmail] = useState(null);
  const [buttonPressed, setButtonPressed] = useState();

  const errorMessage =
    'L\'email saisi est invalide. Veuillez respecter le format "exemple@email.fr"';

  const validateMessage =
    'Un lien pour connecter à votre ancien compte, va vous être envoyer par email';

  const validateEmail = index => {
    const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const emailAdress = index;
    // const phoneNumber = userPhone;
    if (reg.test(emailAdress)) {
      setEmail(index);
      setErrorEmail(true);
    } else if (!reg.test(emailAdress)) {
      setEmail(index);
      setErrorEmail(false);
    } else {
      setErrorEmail(null);
    }
  };
  console.log(errorEmail);

  useEffect(() => {
    handleGetData();
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
      const email = await getData('email');
      setEmail(email || '');
      // console.log(consent);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  console.log('Email: ' + userEmail);
  return (
    <View style={StylesSinscrireMail.container}>
      <ImageBackground
        style={StylesSinscrireMail.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesSinscrireMail.ViewText]}>
          <Text style={[StylesSinscrireMail.TxtTitle]}>S'INSCRIRE</Text>
        </View>
        <SafeAreaView style={[StylesSinscrireMail.ViewInput]}>
          <TextInput
            style={StylesSinscrireMail.TextInput}
            keyboardType="email-address"
            placeholder="Entrez votre Email"
            placeholderTextColor="#FFF"
            maxLength={100}
            onChangeText={text => validateEmail(text)}
            value={userEmail}
          />
          {errorEmail === false ? (
            <Text style={[StylesSinscrireMail.textError]}>{errorMessage}</Text>
          ) : (
            <Text style={[StylesSinscrireMail.textWhite]}>
              {validateMessage}
            </Text>
          )}
        </SafeAreaView>

        <View style={[StylesSinscrireMail.ViewBtn]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              navigation.navigate('Confirmation email');
              handleStoreData('email', userEmail ?? '');
              setButtonPressed(true);
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesSinscrireMail.TxtBtn,
                {color: buttonPressed ? '#fff' : '#0019A7'},
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesSinscrireMail.imgBtn]}
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

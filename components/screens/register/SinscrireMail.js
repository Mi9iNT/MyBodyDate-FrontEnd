import * as React from 'react';
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

export const SignInMail = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);

  const [userEmail, setEmail] = React.useState();
  const [buttonPressed, setButtonPressed] = React.useState();

  console.log('Email: ' + userEmail);
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, Styles.mt50]}>
          <Text style={[Styles.textTitleWhite2, {top: 100, left: 50, fontSize:24}]}>
            S'INSCRIRE
          </Text>
        </View>
        <SafeAreaView style={[Styles.ViewInput, {top: 140}]}>
          <TextInput
            style={Styles.TextInput}
            keyboardType="email-address"
            placeholder="Entrez votre Email"
            placeholderTextColor="#FFF"
            maxLength={100}
            onChangeText={userEmail => setEmail(userEmail)}
            value={userEmail}
          />
          <Text style={[Styles.textWhite8, {top: 10}]}>
            Un lien pour connecter à votre ancien compte, va vous être envoyer
            par email
          </Text>
        </SafeAreaView>

        <View style={[Styles.ViewBtn2, {top: 250}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              navigation.navigate('Confirmation email', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userEmail: userEmail,
              });
              setButtonPressed(true);
            }}
            accessibilityLabel="Continuer">
            <Text style={[Styles.textBtn9, {zIndex: 1, top: 42, color: buttonPressed?'#fff':'#0019A7'}]}>
              Continuer
            </Text>
            <Image
              style={{
                height: 56,
                flexShrink: 0,
                alignSelf: 'center',
                resizeMode:'contain',
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

import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';

export const ConfirmationEmail = ({route, navigation}) => {
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);
  console.log('Email : ', userEmail);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText2, Styles.mt100]}>
          <Text style={[Styles.textTitleWhite2, {top: 50, left: 30, fontSize:24}]}>
            CONFRIMATION{'\n'}E-MAIL
          </Text>
        </View>
        <View style={[Styles.ViewImg, Styles.mt50, Styles.mb10]}>
          <View style={[Styles.BlockImg]}>
            <Image
              style={Styles.ImgBulle}
              source={require('../../../assets/images/avion-en-papier.png')}
            />
          </View>
        </View>
        <View style={[Styles.ViewText4, Styles.mt20]}>
          <Text style={[Styles.textWhite3, Styles.mt50, {fontSize:12}]}>
            Si vous n&apos;avez pas reçu d&apos;email, consultez vos spams ou
            rééssayez.
          </Text>
        </View>
        <View style={[Styles.ViewText5, {alignSelf: 'center'}]}>
          <TouchableOpacity
            style={[Styles.ml_20]}
            onPress={() => navigation.navigate('Recuperation email')}
            accessibilityLabel="Récupérer mon compte">
            <Text style={[Styles.textBtn6, {zIndex: 2, top: 15, left: 30}]}>
              Utiliser un autre e-mail
            </Text>
            <Image
              style={[
                {
                  top: -30,
                  left: 10,
                  width: '120%',
                  height: 60,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                },
              ]}
              source={require('../../../assets/boutons/Bouton-Noir-Email.png')}
            />
          </TouchableOpacity>
          <Text style={[Styles.textWhite3, Styles.mt20]}>
            Utilisez un autre moyen de connexion
          </Text>
        </View>
        <View style={[{top: 20}]}>
          {routeChoice === 'Recuperation de compte' ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Felicitations', {})}
              accessibilityLabel="Continuer">
              <Text style={[Styles.textBtn9, {zIndex: 1, top: 5}]}>
                Continuer
              </Text>
              <Image
                style={[
                  {
                    top: -40,
                    width: '90%',
                    height: 60,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../../assets/boutons/Bouton-Blanc.png')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Ville', {
                  userConsent: consentement,
                  routeName: routeChoice,
                  loveCoach: loveCoach,
                  userEmail: userEmail,
                })
              }
              accessibilityLabel="Continuer">
              <Text style={[Styles.textBtn9, {zIndex: 1, top: 5}]}>
                Continuer
              </Text>
              <Image
                style={[
                  {
                    top: -40,
                    width: '90%',
                    height: 60,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../../assets/boutons/Bouton-Blanc.png')}
              />
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

ConfirmationEmail.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      routeName: PropTypes.string.isRequired,
      userConsent: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
        .isRequired,
      loveCoach: PropTypes.string.isRequired,
      userEmail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

// import * as React from 'react';
// import {
//     View,
//     Text,
//     ImageBackground,
//     Image,
//     SafeAreaView,
//     TextInput,
//     TouchableOpacity,
// } from 'react-native';
// import Styles from '../../assets/style/Styles';

// export const ConfirmationEmail = ({ route, navigation }) => {

//     // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
//     const routeChoice = route.params?.routeName ?? '';
//     const consentement = route.params?.userConsent ?? '';
//     const loveCoach = route.params?.loveCoach ?? '';
//     const userEmail = route.params?.userEmail ?? '';
//     console.log('Choix de route : ' , routeChoice);
//     console.log('Consentement : ' , consentement);
//     console.log('Love Coach : ', loveCoach);
//     console.log('Email : ', userEmail);

//     return (
//     <View style={Styles.container}>
//         <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
//            <View style={[Styles.ViewText2, Styles.mt100]}>
//                 <Text style={[Styles.textTitleWhite2, {top:50, left: 30}]}>CONFRIMATION{"\n"}E-MAIL</Text>
//             </View>
//             <View style={[Styles.ViewImg, Styles.mt50, Styles.mb10]}>
//                 <View style={[Styles.BlockImg]}>
//                     <Image style={Styles.ImgBulle} source={require('../../assets/images/avion-en-papier.png')} />
//                 </View>
//             </View>
//             <View style={[Styles.ViewText4, Styles.mt20]}>
//                 <Text style={[Styles.textWhite3, Styles.mt50]}>Si vous n'avez pas reçu d'email, consultez vos spams ou rééssayez.</Text>
//             </View>
//             <View style={[Styles.ViewText5, {alignSelf:'center'}]}>
//                 <TouchableOpacity style={[Styles.ml_20]} onPress={() => navigation.navigate('Recuperation email')} accessibilityLabel="Récupérer mon compte">
//                     <Text style={[Styles.textBtn6,{zIndex:2, top:15, left:30}]}>Utiliser un autre e-mail</Text>
//                     <Image style={[{ top: -30, left: 10, width: '120%', height: 60, alignSelf:'center', resizeMode: 'contain'}]} source={require('../../assets/boutons/Bouton-Noir-Email.png')} />
//                 </TouchableOpacity>
//                 <Text style={[Styles.textWhite3, Styles.mt20]}>Utilisez un autre moyen de connexion</Text>
//             </View>
//             <View style={[{top:20}]}>
//                 {routeChoice === 'Recuperation de compte' ? (
//                     <TouchableOpacity onPress={() => navigation.navigate('Felicitations', {})} accessibilityLabel="Continuer">
//                         <Text style={[Styles.textBtn9, {zIndex:1, top:5}]}>Continuer</Text>
//                         <Image style={[{ top: -40, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//                     </TouchableOpacity>
//                 ) : (
//                     <TouchableOpacity onPress={() => navigation.navigate('Ville', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail })} accessibilityLabel="Continuer">
//                         <Text style={[Styles.textBtn9, {zIndex:1, top:5}]}>Continuer</Text>
//                         <Image style={[{ top: -40, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//                     </TouchableOpacity>
//                 )
//             }

//             </View>
//         </ImageBackground>
//     </View>

//     )
// }

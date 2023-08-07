import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
} from 'react-native';
import Styles from '../../../assets/style/Styles';

export const Prenom = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';
  const accesPosition = route.params?.accesPosition ?? '';
  const genre = route.params?.genre ?? '';
  const userBirth = route.params?.userBirth ?? '';
  const userSize = route.params?.userSize ?? '';
  const userLang = route.params?.userLang ?? '';
  const userSituation = route.params?.userSituation ?? '';
  const userOrientation = route.params?.userOrientation ?? '';
  const userRecherche1 = route.params?.userRecherche1 ?? '';
  const userRecherche2 = route.params?.userRecherche2 ?? '';
  const userAffinites = route.params?.userAffinites ?? '';
  const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
  const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);
  console.log('Email : ', userEmail);
  console.log('Téléphone : ', userPhone);
  console.log('Ville : ', userCity);
  console.log('Accès position : ', accesPosition);
  console.log('Genre : ', genre);
  console.log('Date de naissance : ', userBirth);
  console.log('Taille : ', userSize);
  console.log('Langues : ', userLang);
  console.log('Situation : ', userSituation);
  console.log('Orientation : ', userOrientation);
  console.log('Recherche 1 : ', userRecherche1);
  console.log('Recherche 2 : ', userRecherche2);
  console.log('Affinité(s) : ', userAffinites);
  console.log('Rythme de vie 1 : ', rythmeDeVie1);
  console.log('Rythme de vie 2 : ', rythmeDeVie2);

  // Obtenir et formater la date courante en utilisant la méthode Date()
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
  const day = ('0' + currentDate.getDate()).slice(-2); // jour sur 2 chiffres

  const formattedDate = `${year}${month}${day}`; // Constant récupérant l'année, le mois et le jour courant
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [prenom, setPrenom] = useState();
  const [pseudo, setPseudo] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={{flex: 6}}>
          <View
            style={{
              top: 50,
              flexDirection: 'column',
              width: '80%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                top: 50,
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 24,
                fontStyle: 'normal',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}>
              PRÉNOM
            </Text>
            <Text
              style={{
                top: 100,
                color: '#FFF',
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
                letterSpacing: 1,
              }}>
              Sur MyBodyDate votre vrai prénom est visible de tous les membres
              sauf si vous préférez afficher votre pseudo. Les modérateurs
              passent tout les pseudo en revue.
            </Text>
            <Text
              style={{
                top: 140,
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
                letterSpacing: 1,
                textDecorationLine: 'underline',
              }}>
              Règle des pseudos
            </Text>
            <View
              style={{
                top: 180,
                left: 10,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Afficher mon pseudo (par défaut)
              </Text>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{}}
              />
            </View>
            <SafeAreaView style={{top: 200}}>
              <TextInput
                style={{
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  textAlign: 'center',
                  fontSize: 15,
                  borderRadius: 50,
                  borderColor: '#fff',
                }}
                onChangeText={setPrenom}
                value={prenom}
                placeholder="Votre Prénom"
                placeholderTextColor={'#fff'}
                keyboardType="default"
              />
              <TextInput
                style={{
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  textAlign: 'center',
                  fontSize: 15,
                  borderRadius: 50,
                  borderColor: '#fff',
                }}
                onChangeText={setPseudo}
                value={pseudo}
                placeholder="Votre Pseudo "
                placeholderTextColor={'#fff'}
                keyboardType="default"
              />
            </SafeAreaView>
            <Text
              style={[
                {
                  top: 220,
                  color: '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 18,
                  fontStyle: 'normal',
                  fontWeight: 700,
                },
              ]}>
              ID.{formattedDate}.(id)
            </Text>
            <View style={{top: 240, left: 20}}>
              <Text style={[Styles.textWhite2]}>Choix unique.</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', height: 56}}
            onPress={() => {
              setModalVisible(true);
              /* 1. Navigate to the Details route with params */
              // navigation.navigate('Confirmation prenom', {
              //   userConsent: consentement,
              //   routeName: routeChoice,
              //   loveCoach: loveCoach,
              //   userEmail: userEmail,
              //   userPhone: userPhone,
              //   userCity: userCity,
              //   accesPosition: accesPosition,
              //   genre: genre,
              //   userBirth: userBirth,
              //   userSize: userSize,
              //   userLang: userLang,
              //   userSituation: userSituation,
              //   userOrientation: userOrientation,
              //   userRecherche1: userRecherche1,
              //   userRecherche2: userRecherche2,
              //   userAffinites: userAffinites,
              //   rythmeDeVie1: rythmeDeVie1,
              //   rythmeDeVie2: rythmeDeVie2,
              // });
            }}
            accessibilityLabel="Continuer">
            <Text style={[Styles.textBtn9, {zIndex: 1, top: 25}]}>
              Continuer
            </Text>
            <Image
              style={[
                {
                  top: -18,
                  width: '90%',
                  height: 60,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={require('../../../assets/boutons/Bouton-Blanc.png')}
            />
          </TouchableOpacity>
        </View>
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View
            style={{
              position: 'absolute',
              top: 200,
              width: 390,
              height: 582,
              backgroundColor: '#FFFFFF',
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                top: -200,
                backgroundColor: 'transparent',
                height: '34%',
                width: '100%',
                position: 'relative',
              }}
            />
            <View>
              <Image
                source={require('../../../assets/images/avertissement.png')}
                style={{
                  top: -160,
                  width: 70,
                  height: 70,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />
              <View style={{top: -160, width: '80%', alignSelf: 'center'}}>
                <Text
                  style={{
                    color: '#0019A7',
                    textAlign: 'center',
                    fontFamily: 'Gilroy',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight:100,
                  }}>
                  Règles concernant le pseudo ?
                </Text>
                <Text
                  style={{
                    color: '#0019A7',
                    textAlign: 'left',
                    fontFamily: 'Gilroy',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom:20,
                  }}>
                  Pour vérifiez que votre pseudo soit bien approuvé
                </Text>
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#0019A7',
                        textAlign: 'left',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 16,
                        marginRight: 8,
                      }}>
                      •
                    </Text>
                    <Text
                      style={{
                        color: '#0019A7',
                        textAlign: 'left',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 16,
                      }}>
                      Pour vérifiez que votre pseudo soit bien approuvé
                    </Text>
                    <View style={{flexDirection: 'column'}} />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#0019A7',
                        textAlign: 'left',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 16,
                        marginRight: 8,
                      }}>
                      •
                    </Text>
                    <Text
                      style={{
                        color: '#0019A7',
                        textAlign: 'left',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 16,
                      }}>
                      N’incluez pas votre nom complet N’incluez pas vos
                      coordonnées
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#0019A7',
                        textAlign: 'left',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 16,
                        marginRight: 8,
                      }}>
                      •
                    </Text>
                    <Text
                      style={{
                        color: '#0019A7',
                        textAlign: 'left',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 16,
                        lineHeight: 24,
                        marginBottom: 8,
                      }}>
                      N’incluez aucune remarque sexuelle explicite ni vulgaire
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={{ top: -100 }} onPress={() => { setModalVisible(false); navigation.navigate('Confirmation prenom'); }}>
                <Image
                  source={require('../../../assets/boutons/Bouton-Bleu-Court.png')}
                  style={{
                    width: 148,
                    height: 56,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    top: -40,
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Compris
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

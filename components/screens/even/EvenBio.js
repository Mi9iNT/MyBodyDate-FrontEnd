/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import MenuSlide from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';

export const EvenBio = ({route, navigation}) => {
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
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';
  const imagePath = route.params?.imagePath ?? '';
  const activeTab = route.params?.activeTab ?? '';

  const [selectedImage, setSelectedImage] = useState(null);

  const [eventPath, setEvenPath] = useState(true);

  return (
    <View style={{flex: 1}}>
      <MenuSlide imagePath={imagePath} />
      <View
        style={{
          height: 75,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../../assets/images/Line-113.png')}
          style={{
            width: 145,
            height: 1,
            top: 45,
            position: 'absolute',
            right: 30,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
          }}>
          Événements
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              fontSize: 12,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
              padding: 5,
            }}
            defaultValue="Rechercher un évent"
            // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
          />
          <Image
            source={require('../../../assets/images/Loupe.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      </View>
      <ImageBackground
        source={require('../../../assets/images/bg-parametres.png')}
        style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            justifyContent:'space-between',
            alignItems: 'center',
            top: 20,
            flexDirection: 'row',
          }}>
            <TouchableOpacity
            onPress={() => { setEvenPath(true); }}
              style={{
                width: '50%',
                height: 40,
                borderBottomWidth: eventPath ? 2 : 0,
                borderColor: '#0019A7',
              }}
            >
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                textAlign:'center',
              }}>
              Événements à venir
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { setEvenPath(false); }}
            style={{
              width: '50%',
              height: 40,
              borderBottomWidth: !eventPath ? 2 : 0,
              borderColor: '#0019A7',
            }}>
            <Text
            style={{
              fontSize: 16,
              fontFamily: 'Comfortaa',
              textAlign: 'center',
              fontWeight: '700',
              color: '#0019A7',
            }}>
             Mes événements
            </Text>
          </TouchableOpacity>
        </View>
         {eventPath ? (<>
          <TouchableOpacity
          onPress={() => {navigation.navigate('Evenements')}}
          style={{
            top: 50,
            left: 30,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../../assets/images/fléche-P-G.png')}
            style={{
              width: 10,
              height: 20,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              marginLeft: 10,
            }}>
            Voir tous les évenements
          </Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            top: 80,
            justifyContent: 'space-around',
          }}>
          <View>
            <Image
              source={require('../../../assets/images/Event11.png')}
              style={{
                width: 351,
                height: 152,
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                top: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#0019A7',
                  marginBottom: 5,
                  marginRight: 120,
                }}>
                SpeedDating
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FF84D7',
                  marginBottom: 5,
                }}>
                30 Juin 2023
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#FF84D7',
                marginBottom: 5,
                top: 10,
                marginRight: 320,
              }}>
              Paris
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Gilory',
                fontWeight: '500',
                color: '#0019A7',
                marginBottom: 45,
                top: 30,
              }}>
              Ajoutez les critères essentiels pour vous{'\n'}et affinez vos
              recherches. Trouvez la{'\n'}qui vous correspond vraiment.
            </Text>
            <View
              style={{
                left: 120,
              }}>
              <TouchableOpacity
                onPress={() => { navigation.navigate('Evenements') }}>
                <Image
                source={require('../../../assets/images/Reserver.png')}
                style={{
                  width: 115,
                  height: 33,
                }}
              />
            </TouchableOpacity>
            </View>
          </View>
          </View>
        </>
        ) : (
            <>
               <View
      style={{
        left: 30,
        top: 50,
        justifyContent: 'space-around',
      }}>
      <Text
        style={{
          fontSize: 24,
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          color: '#0019A7',
        }}>
        Mes événements
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          color: '#929EDE',
        }}>
        Mes prochaines dates
      </Text>
    </View>
    <View
      style={{
        alignItems: 'center',
        top: 80,
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <View>
        <Image
          source={require('../../../assets/images/Event1.png')}
          style={{
            width: 187,
            height: 152,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 0, // Définir la marge supérieure pour remonter le bloc
          marginBottom: 10, // Définir la marge inférieure pour espacer le bloc
        }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#FF84D7',
            marginBottom: 5,
          }}>
          Paris
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            marginBottom: 5,
          }}>
          Soire rouge
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#FF84D7',
            marginBottom: 45,
          }}>
          30 Juin 2023
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#929EDE',
            textAlign: 'right',
          }}>
          Complet
        </Text>
      </View>
    </View>
            </>
        )}
       
        
      <MenuBottom navigation={navigation} activeTab={activeTab} />
      </ImageBackground>
    </View>
  );
};

EvenBio.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

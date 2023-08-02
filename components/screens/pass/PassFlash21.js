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
} from 'react-native';
import PropTypes from 'prop-types';

export const PassFlash21 = ({route, navigation}) => {
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

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = imageId => {
    setSelectedImage(imageId);
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/bg-parametres.png')}
        style={{flex: 1}}>
        <View style={{left: 350, marginTop: 30}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              top: 4,
              width: 20,
              height: 18,
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            top: 20,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
            }}>
            Pulse
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
            }}>
            Pass
          </Text>
        </View>
        <Image
          source={require('../../../assets/images/Line-131.png')}
          style={{
            width: 195,
            height: 3,
            top: 107,
            position: 'absolute',
            right: 0,
          }}
        />
        <Image
          source={require('../../../assets/images/Line-130.png')}
          style={{
            width: 390,
            height: 1,
            top: 30,
          }}
        />
        <View
          style={{
            alignItems: 'center',
            top: 230,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
            }}>
            Flash
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
            }}>
            Premium
          </Text>
        </View>
        <Image
          source={require('../../../assets/images/Line-107.png')}
          style={{
            width: 195,
            height: 3,
            top: 250,
          }}
        />
        <Image
          source={require('../../../assets/images/Line-106.png')}
          style={{
            width: 390,
            height: 1,
            top: 250,
          }}
        />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
              top: 20,
              textAlign: 'center',
            }}>
            Flash pour démarrer en toute{'\n'}sérénité
          </Text>
          <Text
            style={{
              fontSize: 32,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FF84D7',
              top: 30,
              textAlign: 'center',
            }}>
            21,99€ /mois**
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Gilory',
              fontWeight: '400',
              color: '#0019A7',
              top: 30,
            }}>
            <Text style={{textDecorationLine: 'underline'}}>
              Disponible en 6 mois
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
              top: 30,
            }}>
            FLASH
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Gilory',
              fontWeight: '400',
              color: '#0019A7',
              top: 30,
            }}>
            Pendant 1 MOIS*
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: 30,
          }}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              position: 'absolute',
              left: 10, // Déplace l'image vers la gauche
            }}>
            <Image
              source={require('../../../assets/images/Group-54.png')}
              style={{
                width: 25,
                height: 25,
                top: 80,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#0019A7',
                top: 80,
                marginLeft: 20, // Crée un espace entre l'image et le texte
              }}>
              Echangez sans limite avec qui vous voulez
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              position: 'absolute',
              left: 10, // Déplace l'image vers la gauche
            }}>
            <Image
              source={require('../../../assets/images/Group-54.png')}
              style={{
                width: 25,
                height: 25,
                top: 110,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#0019A7',
                top: 110,
                marginLeft: 20, // Crée un espace entre l'image et le texte
              }}>
              Accédez a vos liste de Likes et Visites
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              position: 'absolute',
              left: 10, // Déplace l'image vers la gauche
            }}>
            <Image
              source={require('../../../assets/images/Group-54.png')}
              style={{
                width: 25,
                height: 25,
                top: 140,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#0019A7',
                top: 140,
                marginLeft: 20, // Crée un espace entre l'image et le texte
              }}>
              Décidez qui peut vous contacter
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              position: 'absolute',
              left: 10, // Déplace l'image vers la gauche
            }}>
            <Image
              source={require('../../../assets/images/Group-54.png')}
              style={{
                width: 25,
                height: 25,
                top: 170,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#0019A7',
                top: 170,
                marginLeft: 20, // Crée un espace entre l'image et le texte
              }}>
              Accédez aux filtres avancé de la recherche
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: 190,
          }}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              position: 'absolute',
              left: 10, // Déplace l'image vers la gauche
            }}>
            <Image
              source={require('../../../assets/images/Group-59.png')}
              style={{
                width: 25,
                height: 25,
                top: 50,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#A3B0FF',
                top: 50,
                marginLeft: 20, // Crée un espace entre l'image et le texte
              }}>
              Rejouer les profils que vous avez passé
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              position: 'absolute',
              left: 10, // Déplace l'image vers la gauche
            }}>
            <Image
              source={require('../../../assets/images/Group-59.png')}
              style={{
                width: 25,
                height: 25,
                top: 80,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#A3B0FF',
                top: 80,
                marginLeft: 20, // Crée un espace entre l'image et le texte
              }}>
              Permettez à tous les profils de vous contacter
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              position: 'absolute',
              left: 10, // Déplace l'image vers la gauche
            }}>
            <Image
              source={require('../../../assets/images/Group-59.png')}
              style={{
                width: 25,
                height: 25,
                top: 110,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#A3B0FF',
                top: 110,
                marginLeft: 20, // Crée un espace entre l'image et le texte
              }}>
              Démarquez vous avec l'icône Premium
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              position: 'absolute',
              left: 10, // Déplace l'image vers la gauche
            }}>
            <Image
              source={require('../../../assets/images/Group-59.png')}
              style={{
                width: 25,
                height: 25,
                top: 140,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#A3B0FF',
                top: 140,
                marginLeft: 20, // Crée un espace entre l'image et le texte
              }}>
              Découvrez quand vos messages sont lus
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              position: 'absolute',
              left: 10, // Déplace l'image vers la gauche
            }}>
            <Image
              source={require('../../../assets/images/Group-59.png')}
              style={{
                width: 25,
                height: 25,
                top: 170,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#A3B0FF',
                top: 170,
                marginLeft: 20, // Crée un espace entre l'image et le texte
              }}>
              Repliez le bandeau spotlight pendant 1{'\n'}minute
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              position: 'absolute',
              left: 10, // Déplace l'image vers la gauche
            }}>
            <Image
              source={require('../../../assets/images/Group-59.png')}
              style={{
                width: 25,
                height: 25,
                top: 210,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#A3B0FF',
                top: 210,
                marginLeft: 20, // Crée un espace entre l'image et le texte
              }}>
              Propulsez votre profil : 5 mises en avant/{'\n'}mois
            </Text>
          </View>
        </View>
        <Image
          source={require('../../../assets/images/selectionner.png')}
          style={{
            width: 356,
            height: 60,
            top: 450,
            alignSelf: 'center',
          }}
        />
      </ImageBackground>
    </View>
  );
};

PassFlash21.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

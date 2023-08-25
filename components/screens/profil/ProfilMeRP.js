/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, ImageBackground, TouchableOpacity,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';

export const ProfilMeRP = ({route, navigation}) => {
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
  const rythmeDeVie2 = route.params?.rythmeDeVie2 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';
  const imagePath = route.params?.imagePath ?? '';

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <MenuSlide imagePath={'Professionnel'} />
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{justifyContent: 'center'}}>
          <ImageBackground
            source={require('../../../assets/images/Capture-d-ecran-Raluca.png')}
            style={{
              width: 346,
              height: 313,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: '#E5E5E5',
              alignSelf: 'center',
              top: 10,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 10,
                right: 40,
              }}>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  left: 10,
                }}>
                <Image
                  source={require('../../../assets/images/image-177.png')}
                  style={{
                    top: 5,
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 240,
                left: 10,
              }}>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  left: 10,
                }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: 'Comfortaa',
                    fontWeight: '700',
                    color: '#fff',
                    letterSpacing: 1,
                  }}>
                  Raluca
                </Text>
                <Image
                  source={require('../../../assets/images/quality-2-2.png')}
                  style={{
                    top: 5,
                    width: 30,
                    height: 30,
                    left: 35,
                  }}
                />
                <Image
                  source={require('../../../assets/images/Médaille.png')}
                  style={{
                    top: 5,
                    left: 45,
                    width: 30,
                    height: 44,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#fff',
                  letterSpacing: 1,
                  left: 10,
                }}>
                43, Paris
              </Text>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginTop: 25,
            }}>
            <Text
              style={{
                width: 257,
                height: 35,
                color: '#fff',
                fontSize: 15,
                left: 30,
              }}>
              ID.20230510.88
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfilMeRPfirst');
              }}>
              <ImageBackground
                source={require('../../../assets/images/bouton_continuer.png')}
                style={{width: 120, height: 30, borderRadius: 30, right: 35}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Comfortaa',
                    fontWeight: '700',
                    color: '#000',
                    alignSelf: 'center',
                    textAlign: 'center',
                    top: 5,
                  }}>
                  Éditer
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingHorizontal: 20,
            }}>
            <Text style={{color: '#fff', fontSize: 18, left: 30}}>
              Écouter :
            </Text>
            <Image
              source={require('../../../assets/images/voix_ondes_profil.png')}
              style={{width: 100, height: 30, left: 30}}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#fff',
              fontSize: 20,
              left: 20,
            }}>
            À propos de moi
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#fff',
                fontSize: 15,
              }}>
              Lorem ipsum dolor sit amet, consectetur
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 20,
              marginHorizontal: 20,
            }}>
            <Image
              source={require('../../../assets/images/validation-du-ticket1.png')}
              style={{width: 55, height: 55, bottom: 10}}
            />
            <View style={{top: 5}}>
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#fff',
                  fontSize: 15,
                }}>
                Je prends mon pass
              </Text>
              <View
                style={{
                  borderBottomWidth: 1, // Ajustez cette valeur pour l'épaisseur du soulignement
                  borderBottomColor: '#fff',
                  bottom: 1, // Ajustez la distance entre le texte et le soulignement
                }}
              />
            </View>
            <Image
              source={require('../../../assets/images/Group36.png')}
              style={{width: 40, height: 30, marginLeft: 60, right: 15}}
            />
            <Image
              source={require('../../../assets/images/heart1.png')}
              style={{
                width: 40,
                height: 40,
                marginLeft: 30,
                right: 15,
                bottom: 5,
              }}
            />
          </View>
          <View
            style={{
              height: 1.5,
              backgroundColor: '#fff',
              marginVertical: 2,
              marginHorizontal: 20,
            }}
          />
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#fff',
              fontSize: 20,
              left: 20,
            }}>
            Mes Compétences
          </Text>
          <View style={{marginTop: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column', left: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <ImageBackground
                    source={require('../../../assets/images/Rp-RP.png')}
                    style={{
                      width: 191,
                      height: 40,
                      marginRight: 20,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Comfortaa',
                        fontWeight: '700',
                        color: '#000',
                        fontSize: 15,
                        alignSelf: 'center',
                        textAlign: 'center',
                        top: 8,
                      }}>
                      Relations publiques
                    </Text>
                  </ImageBackground>
                  <Image
                    source={require('../../../assets/images/Av-RP.png')}
                    style={{
                      width: 152,
                      height: 40,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', top: 10}}>
                  <Image
                    source={require('../../../assets/images/As-RP.png')}
                    style={{
                      width: 167,
                      height: 40,
                      marginRight: 20,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/Pr-RP.png')}
                    style={{
                      width: 151,
                      height: 40,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', top: 20}}>
                  <Image
                    source={require('../../../assets/images/C-RP.png')}
                    style={{
                      width: 110,
                      height: 40,
                      marginRight: 20,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/A-RP.png')}
                    style={{
                      width: 82,
                      height: 40,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 390,
            height: 720,
            marginTop: 50,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/statut.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 15,
                color: 'black',
              }}>
              Statut
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              color: 'black',
              marginLeft: 20,
            }}>
            Libéral
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/recherche_emploi.png')}
              style={{width: 34, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 15,
                color: 'black',
              }}>
              Recherche
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              color: 'black',
              marginLeft: 20,
            }}>
            Recherche d'un.e salarié.e
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/publier__offre.png')}
              style={{width: 36, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 15,
                color: 'black',
              }}>
              Mon offre
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 14,
              color: 'black',
              marginLeft: 20,
            }}>
            RH H/F
          </Text>
          <Text
            style={{
              fontFamily: 'Gilory',
              fontWeight: '500',
              fontSize: 12,
              color: 'black',
              marginLeft: 20,
            }}>
            Le responsable des ressources humaines est chargé(e){'\n'}de gérer
            l'ensemble des activités liées aux ressources humaines{'\n'}au sein
            de l'entreprise. Il/elle joue un rôle clé dans le{'\n'}développement
            et la mise en œuvre des politiques RH pour{'\n'}soutenir les
            objectifs organisationnels tout en veillant au{'\n'}bien-être des
            employés...
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/langue_pro.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 15,
                color: 'black',
              }}>
              Je parle couramment
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              color: 'black',
              marginLeft: 20,
            }}>
            Français, Anglais
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/distinctions.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 15,
                color: 'black',
              }}>
              Mes distinctions
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              color: 'black',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/distinctions.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 15,
                color: 'black',
              }}>
              Mes offres d'emploi
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              color: 'black',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

ProfilMeRP.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

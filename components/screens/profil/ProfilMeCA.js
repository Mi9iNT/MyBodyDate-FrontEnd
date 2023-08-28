/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';

export const ProfilMeCA = ({route, navigation}) => {
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
  // const imagePath = route.params?.imagePath ?? '';
  const tabPath = route.params?.tabPath ?? '';

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <MenuSlide imagePath={'Ami'} tabPath={'Ami'} />
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{justifyContent: 'center'}}>
          <ImageBackground
            source={require('../../../assets/images/Capture-d-ecran-R-2.png')}
            style={{
              width: 346,
              height: 313,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: '#0019A7',
              alignSelf: 'center',
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
                color: '#0019A7',
                fontSize: 15,
                left: 30,
              }}>
              ID.20230510.88
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfilMeCAfirst');
              }}>
              <ImageBackground
                source={require('../../../assets/images/Rectangle-40-P.png')}
                style={{width: 96, height: 30, borderRadius: 30, right: 5}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Comfortaa',
                    fontWeight: '700',
                    color: '#fff',
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
            <Text style={{color: '#0019A7', fontSize: 18, left: 30}}>
              Écouter :
            </Text>
            <Image
              source={require('../../../assets/images/voix_ondes_profil.png')}
              style={{width: 100, height: 30, left: 30}}
            />
          </View>
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
                color: '#0019A7',
                fontSize: 15,
                left: 15,
              }}>
              Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit. Cras
              arcu neque, tempus{'\n'}sed interdum ut.
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
              source={require('../../../assets/images/validation-du-ticket-1.png')}
              style={{width: 55, height: 55, bottom: 10}}
            />
            <View style={{top: 5}}>
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#0019A7',
                  fontSize: 15,
                }}>
                Je prends mon pass
              </Text>
              <View
                style={{
                  borderBottomWidth: 1, // Ajustez cette valeur pour l'épaisseur du soulignement
                  borderBottomColor: '#0019A7',
                  bottom: 1, // Ajustez la distance entre le texte et le soulignement
                }}
              />
            </View>
            <ImageBackground
              source={require('../../../assets/images/image-16.png')}
              style={{width: 40, height: 30, marginLeft: 60, right: 15}}>
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#0019A7',
                  fontSize: 18,
                  left: 40,
                  bottom: 15,
                }}>
                7
              </Text>
            </ImageBackground>
            <Image
              source={require('../../../assets/images/heart-1.png')}
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
              backgroundColor: '#0019A7',
              marginVertical: 8,
              marginHorizontal: 20,
            }}
          />
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#9424FA',
              fontSize: 20,
              left: 20,
            }}>
            À propos de moi
          </Text>
          <View style={{marginTop: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../../assets/images/genre.png')}
                    style={{
                      width: 144,
                      height: 40,
                      marginRight: 20,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/alcool.png')}
                    style={{
                      width: 208,
                      height: 40,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', top: 10}}>
                  <Image
                    source={require('../../../assets/images/fume.png')}
                    style={{
                      width: 184,
                      height: 40,
                      marginRight: 20,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/situation.png')}
                    style={{
                      width: 151,
                      height: 40,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', left: 18, top: 20}}>
                  <Image
                    source={require('../../../assets/images/CercleDamis.png')}
                    style={{
                      width: 162,
                      height: 40,
                      marginRight: 20,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/Sportif.png')}
                    style={{
                      width: 110,
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
            backgroundColor: 'rgba(138, 16, 250, 0.79)',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
              <Image
                source={require('../../../assets/images/etude.png')}
                style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '500',
                  fontSize: 15,
                  lineHeight: 18,
                  color: 'white',
                }}>
                Niveau d'études...
              </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/sucette1.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Je parle couramment...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/sucette2.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Mon activité favorite...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/sucette3.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Ma cuisine favorite...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/masque1.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Pour moi, le plus important en{'\n'}amitié...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/masque2.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Les films que je ne me lasse{'\n'}pas de revoir...
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 45, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/bouche-a-oreille1.png')}
              style={{width: 32, height: 36, marginRight: 20, marginLeft: 20}}
            />
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: 'white',
              }}>
              Mes sorties entre ami.es...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              color: 'white',
              marginLeft: 20,
            }}>
            Lorem ipsum
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

ProfilMeCA.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

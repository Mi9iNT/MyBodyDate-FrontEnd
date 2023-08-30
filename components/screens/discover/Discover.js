/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {MyComponent} from '../../composants/MyComponent';
import {MenuBottom} from '../../composants/MenuBottom';
import {More} from '../../composants/more/More';
import Styles from '../../../assets/style/Styles';
import LinearGradient from 'react-native-linear-gradient';
import Spotlight from '../../composants/Spotlight';
import PopUpMessage from '../../composants/popup/PopUpMessage';

export const Discover = ({ route, navigation }) => {

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
  const tabPath = route.params?.tabPath ?? '';
  const imagePath = 'Amour';
  const ptCommun = 11;
  const partenaire = 'OpenBetween';
  const txtPartenaire = 'Inscrite auprès d’un partenaire';

  const [userOn, setUserOn] = useState(true);
  const [quality, setQuality] = useState(true);
  const [medaille, setMedaille] = useState(true);
  const [buttonPressed, setButtonPressed] = useState('Play');

  const handlePlay = () => {
    setButtonPressed(buttonPressed === 'Stop' ? 'Play' : 'Stop');
  };

  const [barPressed, setBarPressed] = useState(1);

  const handleBar = (index) => {
      setBarPressed(index);
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <MenuSlide imagePath={imagePath} tabPath={imagePath} />
      <ImageBackground
        source={require('../../../assets/images/Rectangle-44.png')}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        }}>
        <>
          <Spotlight navigation={navigation} />
        </>
        <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => { handleBar(1); }}
            style={{
              width: 60,
              height: 4,
              backgroundColor: barPressed === 1 ? '#D40000' : '#fff',
              marginVertical: 20,
              marginHorizontal: 8,
            }}
          />
          <TouchableOpacity
            onPress={() => { handleBar(2); }}
            style={{
              width: 60,
              height: 4,
              backgroundColor: barPressed === 2 ? '#D40000' : '#fff',
              marginVertical: 20,
              marginHorizontal: 8,
            }}
          />
          <TouchableOpacity
            onPress={() => { handleBar(3); }}
            style={{
              width: 60,
              height: 4,
              backgroundColor: barPressed === 3 ? '#D40000' : '#fff',
              marginVertical: 20,
              marginHorizontal: 8,
            }}
          />
          <TouchableOpacity
            onPress={() => { handleBar(4); }}
            style={{
              width: 60,
              height: 4,
              backgroundColor: barPressed === 4 ? '#D40000' : '#fff',
              marginVertical: 20,
              marginHorizontal: 8,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginRight: 300,
          }}>
          <Image
            source={
              userOn
                ? require('../../../assets/images/ico-on.png')
                : require('../../../assets/images/ico-off.png')
            }
            style={{
              top: 4,
              width: 9,
              height: 8,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              letterSpacing: 1,
            }}>
            {userOn ? 'En ligne' : 'Hors ligne'}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginRight: 315,
          }}>
          <Image
            source={require('../../../assets/images/localisateur-1.png')}
            style={{
              top: 2,
              width: 15,
              height: 13,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              letterSpacing: 1,
            }}>
            A 5km
          </Text>
        </View>
        <More />
        <PopUpMessage message={imagePath} ptCommun={ptCommun} txtPartenaire={txtPartenaire} navigation={navigation} />
        <View
          style={{
            position: 'absolute',
            top: 460,
          }}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              left: 10,
            }}>
            <Text
              style={{
                fontSize: 48,
                fontFamily: 'Comfortaa',
                color: '#fff',
                letterSpacing: 1,
              }}>
              Léa
            </Text>
            {quality ? (
              <Image
                source={require('../../../assets/images/quality-2.png')}
                style={{
                  top: 24,
                  left: 20,
                  width: 30,
                  height: 30,
                }}
              />
            ) : null}
            {medaille ? (
              <Image
                source={require('../../../assets/images/Médaille.png')}
                style={{
                  top: 24,
                  left: 40,
                  width: 30,
                  height: 44,
                }}
              />
            ) : null}
          </View>
          <View
            style={{
              bottom: 10,
              left: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: 1,
              }}>
              27, Marseille
            </Text>
          </View>
          <View
            style={{
              top: 5,
              left: 15,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: 1,
              }}>
              Croisé plusieurs fois
            </Text>
            <View
              style={{
                top: 5,
              }}>
              <TouchableOpacity
                onPress={() => { handlePlay() }}
                style={{
                  width: 40,
                  height: 40,
                }}>
                <Image
                  source={buttonPressed === 'Stop' ? require('../../../assets/boutons/Stop-P.png') : require('../../../assets/boutons/Play-P.png')}
                  style={{
                    top: 10,
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            top: medaille ? 240 : 320,
            left: 300,
          }}>
          {partenaire === 'OpenBetween' || partenaire === 'CheerFlakes' || partenaire === 'WineGap' || partenaire === 'GoPride' ? <Image
          source={partenaire === 'OpenBetween' ? require('../../../assets/images/openBetween-cache.png') : partenaire === 'CheerFlakes' ? require('../../../assets/images/cheerflakes-cache.png') : partenaire === 'WineGap' ? require('../../../assets/images/winegap-cache.png') : partenaire === 'GoPride' ? require('../../../assets/images/gopride-cache.png') : require('../../../assets/images/gopride-cache.png')}
          style={{
            zIndex: 0,
            bottom: medaille ? 20 : 20,
            right:20,
            alignSelf:'flex-end',
            width: 100,
            height: 50,
            resizeMode:'contain',
          }}
        />:null}
          <TouchableOpacity
            style={{
              backgroundColor:'red',
              bottom: 15,
              width: 78,
              height: 78,
              borderRadius: 100,
            }}>
            <Image
              source={require('../../../assets/images/profil_user_community.png')}
              style={{
                width: 78,
                height: 78,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { navigation.navigate('CestMatch'); }}
            style={{
              backgroundColor:'red',
              top: 5,
              width: 78,
              height: 78,
              borderRadius: 100,
            }}>
            <Image
              source={require('../../../assets/images/profil_coeur.png')}
              style={{
                width: 78,
                height: 78,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              top: 20,
              width: 78,
              height: 78,
              borderRadius: 100,
            }}>
            <Image
              source={require('../../../assets/images/profil_croix.png')}
              style={{
                width: 78,
                height: 78,
              }}
            />
          </TouchableOpacity>
          {medaille ?<TouchableOpacity
            style={{
              backgroundColor: 'red',
              top: 35,
              width: 78,
              height: 78,
              borderRadius: 100,
            }}>
            <Image
              source={require('../../../assets/boutons/back.png')}
              style={{
                width: 78,
                height: 78,
              }}
            />
          </TouchableOpacity>:null}
        </View>
        <MenuBottom navigation={navigation} route={route} tabPath={'Amour'} active={'Discover'} />
      </ImageBackground>
    </View>
  );
};

Discover.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

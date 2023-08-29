/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {MyComponent} from '../../composants/MyComponent';
import {MenuBottom} from '../../composants/MenuBottom';
import {More} from '../../composants/more/More';
import Styles from '../../../assets/style/Styles';
import LinearGradient from 'react-native-linear-gradient';
import Spotlight from '../../composants/Spotlight';
import PopUpMessage from '../../composants/popup/PopUpMessage';

export const DiscoverRP = ({route, navigation}) => {
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

  const imagePath = 'Professionnel';
  const ptCommun = 5;

  const [userOn, setUserOn] = useState(true);
  const [quality, setQuality] = useState(true);
  const [medaille, setMedaille] = useState(false);
  const [buttonPressed, setButtonPressed] = useState('Play');

  const handlePlay = () => {
    setButtonPressed(buttonPressed === 'Stop' ? 'Play' : 'Stop');
    console.log(buttonPressed);
  };

  const [barPressed, setBarPressed] = useState('Bleu');

  const handleBar = () => {
    setBarPressed(barPressed === 'Bleu' ? 'Blanc' : 'Bleu');
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <MenuSlide imagePath={imagePath} tabPath={imagePath} />
      <ImageBackground
        source={require('../../../assets/images/BackLisa.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
          <Spotlight />
        <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => { handleBar(); }}
            style={{
              width: 140,
              height: 4,
              backgroundColor: barPressed === 'Bleu' ? '#fff' : '#0019A7',
              marginVertical: 20,
              marginHorizontal: 8,
            }}
          />
          <TouchableOpacity
            onPress={() => { handleBar(); }}
            style={{
              width: 140,
              height: 4,
              backgroundColor: barPressed === 'Bleu' ? '#0019A7' : '#fff',
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
         <PopUpMessage message={imagePath} ptCommun={ptCommun} navigation={navigation} />
        <View
          style={{
            position: 'absolute',
            top: 480,
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
                fontWeight: '700',
                color: '#fff',
                letterSpacing: 1,
              }}>
              Lisa{'   '}
            </Text>
            <Image
              source={require('../../../assets/images/quality-2.png')}
              style={{
                top: 24,
                width: 30,
                height: 30,
              }}
            />
          </View>
          <View
            style={{
              top: -10,
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
              28, Lyon
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
            top: 350,
            left: 300,
          }}>
          <View
            style={{
              top: 5,
            }}>
            <Image
              source={require('../../../assets/images/Oeil.png')}
              style={{
                width: 78,
                height: 78,
              }}
            />
          </View>
          <View
            style={{
              top: 20,
            }}>
            <Image
              source={require('../../../assets/images/Pouce-Disc.png')}
              style={{
                width: 77,
                height: 77,
              }}
            />
          </View>
          <View
            style={{
              top: 35,
            }}>
            <Image
              source={require('../../../assets/images/profil_croix.png')}
              style={{
                width: 78,
                height: 78,
              }}
            />
          </View>
        </View>
      </ImageBackground>
      <MenuBottom navigation={navigation} tabPath={'Professionnel'} active={'Discover'}/>
    </View>
  );
};

DiscoverRP.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};


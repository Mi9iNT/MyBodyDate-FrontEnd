/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, PanResponder, Animated} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';
import {More} from '../../composants/more/More';
import Spotlight from '../../composants/Spotlight';
import PopUpMessage from '../../composants/popup/PopUpMessage';


const CustomSwipe = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (_, gestureState) => {
      return Math.abs(gestureState.dx) > 20;
    },
    onPanResponderRelease: (_, gestureState) => {
      // Empêcher le dépassement des limites d'index
      if (gestureState.dx > 0 && currentIndex > 0) {
        // Balayage vers la droite
        setCurrentIndex(currentIndex - 1);
      } else if (gestureState.dx < 0 && currentIndex < children.length - 1) {
        // Balayage vers la gauche
        setCurrentIndex(currentIndex + 1);
      }
    },
  });

  return (
    <View {...panResponder.panHandlers}>
      {children[currentIndex]}
    </View>
  );
};


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

  const users = [
    { id: 1, name: 'Léa', image: require('../../../assets/images/Rectangle-44.png'), age: 25, location: 'Marseille', on: true, quality: true, medaille: true, partenaire:'OpenBetween', distance: 7, ptCommun: 11 },
    { id: 2, name: 'Kolia', image: require('../../../assets/images/Rectangle-43.png'), age: 45, location: 'Paris', on: true, quality: true, medaille: true, partenaire: false, distance: 5, ptCommun: 3 },
    { id: 3, name: 'Julie', image: require('../../../assets/images/BackJulie.png'), age: 41, location: 'Paris', on: true, quality: true, medaille: false, partenaire: false, distance: 15, ptCommun: 5 },
    { id: 4, name: 'Lisa', image: require('../../../assets/images/BackLisa.png'), age: 28, location: 'Lyon', on: true, quality: true, medaille: false, partenaire:false, distance: 15, ptCommun: 2 },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  const [paginationColors, setPaginationColors] = useState(
    users.map((_, index) => ({
      active: '#D40000',
      inactive: '#fff',
    }))
  );

  return (
    <CustomSwipe>
      {users.map((user, index) => (
        <View
          key={user.id}
          style={{
            width: '100%',
            height: '100%',
          }}>
      <MenuSlide imagePath={imagePath} tabPath={imagePath} />
      <ImageBackground
        source={user.image}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        }}>
        <>
          <Spotlight navigation={navigation} />
        </>
       <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
            {paginationColors.map((colors, viewIndex) => (
              <View
                key={viewIndex}
                onPress={() => {}}
                style={{
                  width: 60,
                  height: 4,
                  backgroundColor: viewIndex === index ? colors.active : colors.inactive,
                  marginVertical: 20,
                  marginHorizontal: 8,
                }}
              />
            ))}
      </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginRight: 300,
          }}>
          <Image
            source={
              user.on
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
            {user.on ? 'En ligne' : 'Hors ligne'}
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
                À {user.distance}km
          </Text>
        </View>
        <More />
        <PopUpMessage message={imagePath} ptCommun={user.ptCommun} txtPartenaire={txtPartenaire} navigation={navigation} />
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
              {user.name}
            </Text>
            {user.quality ? (
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
            {user.medaille ? (
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
              {user.age}, {user.location}
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
            top: user.partenaire ? 240 : !user.medaille ? 360 : 280,
            left: 300,
          }}>
          {user.partenaire === 'OpenBetween' || user.partenaire === 'CheerFlakes' || user.partenaire === 'WineGap' || user.partenaire === 'GoPride' ? <Image
          source={user.partenaire === 'OpenBetween' ? require('../../../assets/images/openBetween-cache.png') : user.partenaire === 'CheerFlakes' ? require('../../../assets/images/cheerflakes-cache.png') : user.partenaire === 'WineGap' ? require('../../../assets/images/winegap-cache.png') : user.partenaire === 'GoPride' ? require('../../../assets/images/gopride-cache.png') : require('../../../assets/images/gopride-cache.png')}
          style={{
            zIndex: 0,
            bottom: 20,
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
          {user.medaille ?
            <TouchableOpacity
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
      ))}
    </CustomSwipe>
  );
};

Discover.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
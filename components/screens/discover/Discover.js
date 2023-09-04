/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useRef} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Animated, Dimensions, PanResponder } from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';
import {More} from '../../composants/more/More';
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
  const txtPartenaire = 'Inscrite auprès d’un partenaire';
  const userMedaille = true;
  const userGenre = 'Femme';
  const [buttonPressed, setButtonPressed] = useState('Play');
  const [image, setImage] = useState(1);

  const handlePlay = () => {
    setButtonPressed(buttonPressed === 'Stop' ? 'Play' : 'Stop');
  };

  const users = [
    { id: 1, name: 'Léa', genre:'Femme', cercle: ['Amour', 'Amis'], image1: require('../../../assets/images/Rectangle-44.png'), image2: require('../../../assets/images/Rectangle-Lea2.png'), image3: false, image4: false, image5: false, image6: false, age: 25, location: 'Marseille', on: true, quality: true, medaille: true, partenaire: 'OpenBetween', distance: 7, ptCommun: 11 },

    { id: 2, name: 'Kolia', genre:'Homme', cercle: ['Amour', 'Amis', 'Professionnel'], image1: require('../../../assets/images/Rectangle-43.png'), image2: require('../../../assets/images/bg-video-call-2.png'), image3: false, image4: false, image5: false, image6: false, age: 45, location: 'Paris', on: true, quality: true, medaille: true, partenaire: false, distance: 5, ptCommun: 3 },

    { id: 3, name: 'Margot', genre:'Femme', cercle: ['Amour', 'Amis', 'Professionnel'], image1: require('../../../assets/images/Rectangle-Margot.png'), image2: false, image3: false, image4: false, image5: false, image6: false, age: 42, location: 'Lille', on: true, quality: true, medaille: false, partenaire: 'CheerFlakes', distance: 5, ptCommun: 13 },

    { id: 4, name: 'Paula', genre:'Femme', cercle: ['Amour', 'Amis'], image1: require('../../../assets/images/Rectangle-Paula.png'), image2: false, image3: false, image4: false, image5: false, image6: false, age: 31, location: 'Paris', on: true, quality: true, medaille: true, partenaire: 'GoPride', distance: 1, ptCommun: 2 },

    { id: 5, name: 'Léon', genre:'Non-binaire', cercle: ['Amour', 'Amis'], image1: require('../../../assets/images/Rectangle-Leon.png'), image2: require('../../../assets/images/Rectangle-Leon2.png'), image3: false, image4: false, image5: false, image6: false, age: 27, location: 'Paris', on: true, quality: true, medaille: false, partenaire: 'OpenBetween', distance: 12, ptCommun: 4 },

    { id: 6, name: 'Abelle', genre:'Femme', cercle: ['Amour', 'Amis', 'Professionnel'], image1: require('../../../assets/images/Rectangle-Abelle.png'), image2: false, image3: false, image4: false, image5: false, image6: false, age: 65, location: 'Paris', on: true, quality: true, medaille: false, partenaire: 'WineGap', distance: 12, ptCommun: 9 },

    { id: 7, name: 'Maya', genre:'Femme', cercle: ['Amour', 'Amis'], image1: require('../../../assets/images/Rectangle-Maya.png'), image2: false, image3: false, image4: false, image5: false, image6: false, age: 42, location: 'Lille', on: true, quality: true, medaille: false, partenaire: 'CheerFlakes', distance: 6, ptCommun: 9 },

    { id: 8, name: 'Robert', genre:'Homme', cercle: ['Amour', 'Amis', 'Professionnel'], image1: require('../../../assets/images/Rectangle-Robert.png'), image2: false, image3: false, image4: false, image5: false, image6: false, age: 42, location: 'Lille', on: true, quality: true, medaille: false, partenaire: 'WineGap', distance: 6, ptCommun: 9 },

    { id: 9, name: 'Max', genre:'Homme', cercle: ['Amour', 'Amis', 'Professionnel'], image1: require('../../../assets/images/Rectangle-Max.png'), image2: false, image3: false, image4: false, image5: false, image6: false, age: 25, location: 'Paris', on: true, quality: true, medaille: false, partenaire: 'GoPride', distance: 1, ptCommun: 5 },

    { id: 10, name: 'Georges', genre:'Homme', cercle: ['Amour', 'Amis', 'Professionnel'], image1: require('../../../assets/images/Rectangle-Georges.png'), image2: false, image3: false, image4: false, image5: false, image6: false, age: 45, location: 'Reims', on: true, quality: true, medaille: false, partenaire: 'CheerFlakes', distance: 5, ptCommun: 3 },

    { id: 11, name: 'Julie', genre:'Femme', cercle: ['Amour', 'Amis', 'Professionnel'], image1: require('../../../assets/images/BackJulie.png'), image2: false, image3: false, image4: false, image5: false, image6: false, age: 65, location: 'Paris', on: true, quality: true, medaille: true, partenaire: false, distance: 9, ptCommun: 5 },

    { id: 12, name: 'Lisa', genre:'Femme', cercle: ['Amour', 'Amis', 'Professionnel'], image1: require('../../../assets/images/BackLisa.png'), image2: false, image3: false, image4: false, image5: false, image6: false, age: 28, location: 'Lyon', on: true, quality: true, medaille: false, partenaire:false, distance: 15, ptCommun: 2 },
  ];

  const userFiltered = users.filter(user => {
  // Vérifiez si l'utilisateur a 'Amour' dans son cercle
  const hasAmourInCercle = user.cercle.includes('Amour');

  // Si l'imagePath est 'Amour', appliquez des filtres en fonction du genre
  if (imagePath === 'Amour') {
    if (userGenre === 'Homme') {
      return hasAmourInCercle && user.genre !== 'Homme' && user.genre !== 'Non-binaire';
    } else if (userGenre === 'Femme') {
      return hasAmourInCercle && user.genre !== 'Femme' && user.genre !== 'Non-binaire';
    } else if (userGenre === 'Non-binaire') {
      return hasAmourInCercle && user.genre !== 'Non-binaire';
    } else {
      return false;
    }
  }
  return false;
});

  const [pagination, setPagination] = useState(0);

   const userIndex = pagination * 4;

  // Obtention des utilisateurs à afficher sur cette page
  const tabToDisplay = userFiltered.slice(userIndex, userIndex + 4);
  console.log(currentIndex);

  const [paginationColors, setPaginationColors] = useState(
    users.map((_, index) => ({
      active: '#D40000',
      inactive: '#fff',
    }))
  );

  const { width, height } = Dimensions.get('window');
  // Animation
  const position = new Animated.ValueXY({ x: 0, y: 0 });
  const rotateZ = position.y.interpolate({
    inputRange: [0, 10],
    outputRange: ['0deg', '5deg'],
  });
  const perspective = position.x.interpolate({
    inputRange: [0, 0],
    outputRange: [1000, 20],
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('');
  const animLast = () => {
    if (currentIndex > 0) {
      Animated.spring(position, {
        toValue: { x: 160, y: 10 },
        duration: 0.1,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(currentIndex - 1);
        position.setValue({ x: 0, y: 0 });
        setAnimation('Back');
        setImage(1);
      });
    }
  };
  const animNext = () => {
    if (currentIndex < userTab.length - 1) {
      Animated.spring(position, {
        toValue: { x: -160, y: -10 },
        duration: 0.1,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(currentIndex + 1);
        position.setValue({ x: 0, y: 0 });
        setAnimation('Next');
        setImage(1);
      });
    }
  };

  //Changement d'utilisateur

  const userTab = userFiltered.map(user => ({
    id: user.id,
    medaille: user.medaille,
    partenaire: user.partenaire,
  }));

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (_, gestureState) => {
      return Math.abs(gestureState.dx) > 20;
    },
   onPanResponderRelease: (_, gestureState) => {
    if (gestureState.dx > 0) {
      animLast();
    } else if (gestureState.dx < 0) {
      animNext();
    }
  },
  });

  const handleImagePrevious = () => {
  // Récupérez l'utilisateur actuellement affiché
  const currentUser = userFiltered[currentIndex];

  // Si l'utilisateur actuel a une image2, image3, image4, image5 ou image6 et si elles ne sont pas à false
  if (currentUser) {
    if (image === 6 && currentUser.image6 !== false) {
      setImage(5);
    } else if (image === 5 && currentUser.image5 !== false) {
      setImage(4);
    } else if (image === 4 && currentUser.image4 !== false) {
      setImage(3);
    } else if (image === 3 && currentUser.image3 !== false) {
      setImage(2);
    } else if (image === 2 && currentUser.image2 !== false) {
      setImage(1);
    } else {
      // Si aucune des conditions ci-dessus n'est remplie, revenir à image6 si elle existe, sinon image1
      setImage(currentUser.image6 !== false ? 6 : 1);
    }
  }
};

  const handleImageNext = () => {
  // Récupérez l'utilisateur actuellement affiché
  const currentUser = userFiltered[currentIndex];

  // Si l'utilisateur actuel a une image2, image3, image4, image5 ou image6 et si elles ne sont pas à false
  if (currentUser) {
    if (image === 1 && currentUser.image2 !== false) {
      setImage(2);
    } else if (image === 2 && currentUser.image3 !== false) {
      setImage(3);
    } else if (image === 3 && currentUser.image4 !== false) {
      setImage(4);
    } else if (image === 4 && currentUser.image5 !== false) {
      setImage(5);
    } else if (image === 5 && currentUser.image6 !== false) {
      setImage(6);
    } else {
      // Si aucune des conditions ci-dessus n'est remplie, revenir à image1
      setImage(1);
    }
  }
};

  return (
    <ImageBackground source={require('../../../assets/images/Background.png')} style={{ width: width, height: height, resizeMode: 'contain',}}>
      <View style={{ width: width ,height: height, alignItems:'center', backgroundColor:'transparent'}}>
    <MenuSlide imagePath={imagePath} tabPath={imagePath} backgroundColor={'white'} />
  <Animated.View
    style={{
      flex: 1,
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      transform: [
        { translateX: position.x },
        { translateY: position.y },
        { perspective: perspective },
        { rotateZ: rotateZ },
      ],
    }}>
    <View style={{ width: '100%', height: '100%' }} {...panResponder.panHandlers}>
      {userFiltered.map((user, index) => {
        console.log(currentIndex);
      if (index === currentIndex) {
        return (
          <View key={index} style={{ width: '100%', height: '100%' }}>
        <ImageBackground
          source={
            image === 1 ? user.image1 :
            image === 2 ? user.image2 :
            image === 3 ? user.image3 :
            image === 4 ? user.image4 :
            image === 5 ? user.image5 :
            image === 6 ? user.image6 : user.image1
          }
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
              }}>
              <TouchableOpacity onPress={()=>{ handleImagePrevious(); }} style={{ position: 'absolute', top:100, width: width/2, height: 550, alignSelf:'flex-start', backgroundColor: 'transparent'}}/>
              <TouchableOpacity onPress={() => { handleImageNext(); }} style={{ position: 'absolute', top:100, width: width/2, height: 550, alignSelf:'flex-end', backgroundColor: 'transparent'}}/>
        <Spotlight navigation={navigation} />
        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
          {tabToDisplay.map((colors, viewIndex) => (
            <View
              index={viewIndex}
              style={{
                width: 60,
                height: 4,
                backgroundColor: (currentIndex % 4 === viewIndex) ? '#D40000' : '#fff',
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
          <More userName={user.name} />
          <PopUpMessage message={imagePath} ptCommun={user.ptCommun} txtPartenaire={txtPartenaire} navigation={navigation} />
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
          <View
            style={{
              position: 'absolute',
              top: 450,
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
                  onPress={() => { handlePlay(); }}
                  style={{
                    width: 40,
                    height: 40,
                  }}>
                  <Image
                    source={
                      buttonPressed === 'Stop'
                        ? require('../../../assets/boutons/Stop-P.png')
                        : require('../../../assets/boutons/Play-P.png')
                    }
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
              top: userMedaille && user.partenaire ? 250 : userMedaille ? 300 : user.partenaire ? 300 : 360,
              left: 300,
              height: userMedaille && user.partenaire ? 400 : userMedaille ? 340 : user.partenaire ? 330 : 280,
              right: 20,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {user.partenaire ?
            <Image
              source={user.partenaire === 'OpenBetween' ? require('../../../assets/images/openBetween-cache.png') : user.partenaire === 'CheerFlakes' ? require('../../../assets/images/cheerflakes-cache.png') : user.partenaire === 'WineGap' ? require('../../../assets/images/winegap-cache.png') : user.partenaire === 'GoPride' ? require('../../../assets/images/gopride-cache.png') : require('../../../assets/images/gopride-cache.png')}
              style={{
                zIndex: 0,
                alignSelf:'flex-end',
                width: 100,
                height: 50,
                resizeMode:'contain',
              }}
          /> : null}
            <TouchableOpacity
                  onPress={() => { animNext(); }}
              style={{
                backgroundColor: 'red',
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
                backgroundColor: 'red',
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
                onPress={() => { animNext(); }}
                  style={{
                      backgroundColor: 'red',
                      alignSelf: 'flex-end',
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
                {userMedaille ?
                <TouchableOpacity
                    onPress={() => { animLast(); }}
                    style={{
                      backgroundColor: 'red',
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
                </TouchableOpacity> : null}
            {/* <View style={{ flexDirection: 'column', position: 'absolute', width: 78, alignItems: 'center', alignSelf: 'flex-end', justifyContent: 'space-between', backgroundColor: 'red', right: user.partenaire ? 0 : 2, top: user.partenaire ? 240 : !user.medaille ? 607 : 180, height: user.partenaire ? 78 : !user.medaille ? 0 : 173.4, }}> */}
              {/* <TouchableOpacity
                onPress={() => { animNext(); }}
                  style={{
                      backgroundColor: 'red',
                      alignSelf: 'flex-end',
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
                </TouchableOpacity> */}
              {/* {user.medaille ?
              <TouchableOpacity
                  onPress={() => { animLast(); }}
                  style={{
                    backgroundColor: 'red',
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
              </TouchableOpacity> : null} */}
            {/* </View> */}
          </View>
        </ImageBackground>
          </View>
        );
      }
      return null; // Masquer les autres utilisateurs
    })}

    </View>
  </Animated.View>
  <MenuBottom navigation={navigation} route={route} tabPath={'Amour'} active={'Discover'} />
  </View>
 </ImageBackground>
  );
};

Discover.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

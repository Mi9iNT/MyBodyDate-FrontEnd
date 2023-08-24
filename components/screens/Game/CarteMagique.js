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

export const CarteMagique = ({route, navigation}) => {
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

  const [showBackgroundImage, setShowBackgroundImage] = useState(false);

  //Première
  const [imageSourceFirst, setImageSourceFirst] = useState(
    require('../../../assets/images/Guess.png'),
  );

  const handleImageClickFirst = () => {
    setImageSourceFirst(require('../../../assets/images/GuessLoose.png'));
  };

  //Deuxième
  const [imageSourceTwo, setImageSourceTwo] = useState(
    require('../../../assets/images/Guess.png'),
  );

  const handleImageClickTwo = () => {
    setImageSourceTwo(require('../../../assets/images/GuessLoose.png'));
  };

  //Troisième
  const [imageSourceTree, setImageSourceTree] = useState(
    require('../../../assets/images/Guess.png'),
  );

  const handleImageClickTree = () => {
    setImageSourceTree(require('../../../assets/images/GuessLoose.png'));
  };

  //Quatrième
  const [imageSource, setImageSource] = useState(
    require('../../../assets/images/Guess.png'),
  );

  const handleImageClick = () => {
    setShowBackgroundImage(true);
  };

  return (
    <View style={{flex: 1}}>
      {showBackgroundImage ? (
        <ImageBackground
          source={require('../../../assets/images/background_appelvideo_noir.png')}
          style={{flex: 1}}>
          <ImageBackground
            source={require('../../../assets/images/BackgroudWin.png')}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}>
            <Image
              source={require('../../../assets/images/CroixB.png')}
              style={{
                width: 20,
                height: 18,
                left: 330,
                top: 30,
              }}
            />
            <Text
              style={{
                fontSize: 32,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#0019A7',
                alignSelf: 'center',
                textAlign: 'center',
                top: 40,
              }}>
              Carte magique
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                color: '#0019A7',
                alignSelf: 'center',
                textAlign: 'center',
                top: 70,
              }}>
              Révélez la personne qui vous veut{'\n'}beaucoup de bien.
            </Text>
            <View style={{flex: 1, alignItems: 'center'}}>
              {/* Première Block */}
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center',
                  top: 120,
                }}>
                {/* Première image */}
                <View>
                  <ImageBackground
                    source={require('../../../assets/images/Guess.png')}
                    style={{
                      width: 154,
                      height: 200,
                      left: 10,
                    }}>
                    <Image
                      source={require('../../../assets/images/RectangleGuess.png')}
                      style={{
                        width: 40,
                        height: 14,
                        position: 'absolute',
                        top: 150,
                        left: 40,
                      }}
                    />
                  </ImageBackground>
                </View>
                {/* Deuxième image */}
                <View>
                  <ImageBackground
                    source={require('../../../assets/images/Guess.png')}
                    style={{
                      width: 154,
                      height: 200,
                      left: 10,
                    }}>
                    <Image
                      source={require('../../../assets/images/RectangleGuess.png')}
                      style={{
                        width: 40,
                        height: 14,
                        position: 'absolute',
                        top: 150,
                        left: 40,
                      }}
                    />
                  </ImageBackground>
                </View>
              </View>
              {/* Deusième image */}
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center',
                  top: 120,
                }}>
                {/* Troisième image */}
                <ImageBackground
                  source={require('../../../assets/images/Guess.png')}
                  style={{
                    width: 154,
                    height: 200,
                    left: 10,
                  }}>
                  <Image
                    source={require('../../../assets/images/RectangleGuess.png')}
                    style={{
                      width: 40,
                      height: 14,
                      position: 'absolute',
                      top: 150,
                      left: 40,
                    }}
                  />
                </ImageBackground>
                {/* Quatrième image */}
                <View>
                  <Image
                    source={require('../../../assets/images/GuessClaire.png')}
                    style={{
                      width: 154,
                      height: 200,
                      left: 10,
                    }}
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={require('../../../assets/images/background_appelvideo_noir.png')}
          style={{flex: 1}}>
          {/* <Image
        source={require('../../../assets/images/BackgroudWin.png')} // Ajoutez le chemin de votre image de fond
        style={{
          position: 'absolute',
          bottom:160,
          left: 0,
          width: '100%',
          height: '100%',
          resizeMode: 'cover', // Ajustez le mode de redimensionnement selon vos besoins
        }}
      /> */}
          <Image
            source={require('../../../assets/images/CroixB.png')}
            style={{
              width: 20,
              height: 18,
              left: 330,
              top: 30,
            }}
          />
          <Text
            style={{
              fontSize: 32,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
              top: 40,
            }}>
            Carte magique
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
              top: 70,
            }}>
            Révélez la personne qui vous veut{'\n'}beaucoup de bien.
          </Text>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                top: 120,
              }}>
              {/* Première image */}
              <TouchableOpacity onPress={handleImageClickFirst}>
                <View style={{width: 154, height: 200}}>
                  {imageSourceFirst ===
                  require('../../../assets/images/Guess.png') ? (
                    <View>
                      <Image
                        source={imageSourceFirst}
                        style={{
                          width: 154,
                          height: 200,
                          left: 10,
                        }}
                      />
                      <Image
                        source={require('../../../assets/images/RectangleGuess.png')}
                        style={{
                          width: 40,
                          height: 14,
                          position: 'absolute',
                          top: 150,
                          left: 40,
                        }}
                      />
                    </View>
                  ) : (
                    <View>
                      <Image
                        source={require('../../../assets/images/GuessLoose.png')}
                        style={{
                          width: 154,
                          height: 200,
                          left: 10,
                        }}
                      />
                      <Text
                        style={{
                          color: '#FFF',
                          fontSize: 16,
                          fontFamily: 'Gilroy',
                          fontWeight: '600',
                          alignSelf: 'center',
                          textAlign: 'center',
                          bottom: 100,
                          left: 7,
                        }}>
                        Retentez votre{'\n'}chance une{'\n'}prochaine fois
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
              {/* Deuxième image */}
              <TouchableOpacity onPress={handleImageClickTwo}>
                <View style={{width: 154, height: 200}}>
                  {imageSourceTwo ===
                  require('../../../assets/images/Guess.png') ? (
                    <View>
                      <Image
                        source={imageSourceTwo}
                        style={{
                          width: 154,
                          height: 200,
                          left: 10,
                        }}
                      />
                      <Image
                        source={require('../../../assets/images/RectangleGuess.png')}
                        style={{
                          width: 40,
                          height: 14,
                          position: 'absolute',
                          top: 150,
                          left: 40,
                        }}
                      />
                    </View>
                  ) : (
                    <View>
                      <Image
                        source={require('../../../assets/images/GuessLoose.png')}
                        style={{
                          width: 154,
                          height: 200,
                          left: 10,
                        }}
                      />
                      <Text
                        style={{
                          color: '#FFF',
                          fontSize: 16,
                          fontFamily: 'Gilroy',
                          fontWeight: '600',
                          alignSelf: 'center',
                          textAlign: 'center',
                          bottom: 100,
                          left: 7,
                        }}>
                        Retentez votre{'\n'}chance une{'\n'}prochaine fois
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                top: 120,
              }}>
              {/* Troisième image */}
              <TouchableOpacity onPress={handleImageClickTree}>
                <View style={{width: 154, height: 200}}>
                  {imageSourceTree ===
                  require('../../../assets/images/Guess.png') ? (
                    <View>
                      <Image
                        source={imageSourceTree}
                        style={{
                          width: 154,
                          height: 200,
                          left: 10,
                        }}
                      />
                      <Image
                        source={require('../../../assets/images/RectangleGuess.png')}
                        style={{
                          width: 40,
                          height: 14,
                          position: 'absolute',
                          top: 150,
                          left: 40,
                        }}
                      />
                    </View>
                  ) : (
                    <View>
                      <Image
                        source={require('../../../assets/images/GuessLoose.png')}
                        style={{
                          width: 154,
                          height: 200,
                          left: 10,
                        }}
                      />
                      <Text
                        style={{
                          color: '#FFF',
                          fontSize: 16,
                          fontFamily: 'Gilroy',
                          fontWeight: '600',
                          alignSelf: 'center',
                          textAlign: 'center',
                          bottom: 100,
                          left: 7,
                        }}>
                        Retentez votre{'\n'}chance une{'\n'}prochaine fois
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
              {/* Quatrième image */}
              <TouchableOpacity onPress={handleImageClick}>
                <View style={{width: 154, height: 200}}>
                  {imageSource ===
                  require('../../../assets/images/Guess.png') ? (
                    <View>
                      <Image
                        source={imageSource}
                        style={{
                          width: 154,
                          height: 200,
                          left: 10,
                        }}
                      />
                      <Image
                        source={require('../../../assets/images/RectangleGuess.png')}
                        style={{
                          width: 40,
                          height: 14,
                          position: 'absolute',
                          top: 150,
                          left: 40,
                        }}
                      />
                    </View>
                  ) : (
                    <View>
                      <Image
                        source={require('../../../assets/images/GuessClaire.png')}
                        style={{
                          width: 154,
                          height: 200,
                          left: 10,
                        }}
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                top: 150,
              }}>
              <Image
                source={require('../../../assets/images/Bouton-Passer.png')}
                style={{
                  width: 331,
                  height: 56,
                }}
              />
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

CarteMagique.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

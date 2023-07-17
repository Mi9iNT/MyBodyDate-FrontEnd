/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import Styles from '../../../assets/style/Styles';

export const Settings = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/bg-parametres.png')}>
        <MenuSlide />
        <Text
          style={{
            top: 30,
            color: '#0019A7',
            fontFamily: 'Gilroy',
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 700,
          }}>
          Paramètres
        </Text>
        <View
          style={{
            backgroundColor: '#0019A7',
            width: 351,
            height: 1,
            alignSelf: 'center',
            top: 60,
          }}
        />
        <View
          style={{
            height: 360,
            width: 351,
            alignSelf: 'center',
            top: 80,
            marginBottom: 40,
          }}>
          <TouchableOpacity
            accessibilityLabel="Notifications"
            onPress={() => navigation.navigate('Notifications')}>
            <View
              style={{
                height: 20,
                width: 351,
                alignSelf: 'center',
                top: 10,
                flexDirection: 'row',
                marginBottom: 40,
              }}>
              <Text
                style={{
                  color: '#0019A7',
                  fontFamily: 'Comfortaa',
                  width: 340,
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Notifications
              </Text>
              <Image
                style={{
                  width: 7,
                  height: 15,
                  flexShrink: 0,
                }}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Sécurité et vie privée"
            onPress={() => navigation.navigate('Securite et privee')}>
            <View
              style={{
                height: 20,
                width: 351,
                alignSelf: 'center',
                top: 10,
                flexDirection: 'row',
                marginBottom: 40,
              }}>
              <Text
                style={{
                  color: '#0019A7',
                  fontFamily: 'Comfortaa',
                  width: 340,
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Sécurité & vie privée
              </Text>
              <Image
                style={{
                  width: 7,
                  height: 15,
                  flexShrink: 0,
                }}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Contact et FAQ"
            onPress={() => navigation.navigate('Contact et FAQ')}>
            <View
              style={{
                height: 20,
                width: 351,
                alignSelf: 'center',
                top: 10,
                flexDirection: 'row',
                marginBottom: 40,
              }}>
              <Text
                style={{
                  color: '#0019A7',
                  fontFamily: 'Comfortaa',
                  width: 340,
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Contact & FAQ
              </Text>
              <Image
                style={{
                  width: 7,
                  height: 15,
                  flexShrink: 0,
                }}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Emplacement"
            onPress={() => navigation.navigate('Emplacement')}>
            <View
              style={{
                height: 20,
                width: 351,
                alignSelf: 'center',
                top: 10,
                flexDirection: 'row',
                marginBottom: 40,
              }}>
              <Text
                style={{
                  color: '#0019A7',
                  fontFamily: 'Comfortaa',
                  width: 200,
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Emplacement
              </Text>
              <Text
                style={{
                  color: '#383A39',
                  width: 140,
                  fontFamily: 'Comfortaa',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Paris, FR
              </Text>
              <Image
                style={{
                  width: 7,
                  height: 15,
                  flexShrink: 0,
                }}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Mode invisible"
            onPress={() => navigation.navigate('Mode invisible')}>
            <View
              style={{
                height: 20,
                width: 351,
                alignSelf: 'center',
                top: 10,
                flexDirection: 'row',
                marginBottom: 40,
              }}>
              <View
                style={{
                  height: 40,
                  width: 340,
                  alignSelf: 'center',
                  top: 10,
                  flexDirection: 'column',
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: '#0019A7',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Mode invisible
                </Text>
                <Text
                  style={{
                    color: '#383A39',
                    fontFamily: 'Comfortaa',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Visitez des profils incognito
                </Text>
              </View>
              <Image
                style={{
                  width: 7,
                  height: 15,
                  flexShrink: 0,
                }}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Mode voyage"
            onPress={() => navigation.navigate('Mode voyage')}>
            <View
              style={{
                width: 320,
                alignSelf: 'start',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 340,
                  alignSelf: 'start',
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    color: '#0019A7',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    marginBottom: 5,
                  }}>
                  Mode voyage
                </Text>
                <Text
                  style={{
                    color: '#383A39',
                    top: 0,
                    fontFamily: 'Comfortaa',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Pour voir plus de monde. Changez votre localisation.
                </Text>
              </View>
              <Image
                style={{
                  width: 7,
                  height: 15,
                  flexShrink: 0,
                }}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Deconnexion')}>
          <Image
            style={{
              top: 70,
              width: 331,
              height: 56,
              flexShrink: 0,
              alignSelf: 'center',
            }}
            source={require('../../../assets/boutons/bouton-deconnexion-blanc.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#383A39',
            top: 90,
            fontFamily: 'Comfortaa',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
            textAlign: 'center',
          }}>
          Supprimer mon compte
        </Text>
        <Image
          style={{
            top: 100,
            width: 300,
            height: 56,
            flexShrink: 0,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
          source={require('../../../assets/images/logo-sombre.png')}
        />
        <Text
          style={{
            color: '#383A39',
            top: 100,
            fontFamily: 'Comfortaa',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
            textAlign: 'center',
          }}>
          Version 1.0
        </Text>
      </ImageBackground>
    </View>
  );
};

Settings.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

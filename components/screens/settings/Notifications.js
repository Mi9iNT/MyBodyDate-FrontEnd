/* eslint-disable prettier/prettier */
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
import Styles from '../../../assets/style/Styles';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const Notifications = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  return (
    <ImageBackground
      style={Styles.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings />
      <Text
        style={{
          top: 30,
          color: '#0019A7',
          fontFamily: 'Gilroy',
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 700,
        }}>
        Notifications
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
      <Text
        style={{
          color: '#929EDE',
          top: 100,
          width: 320,
          alignSelf: 'center',
          textAlign: 'center',
          fontFamily: 'Comfortaa',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        Choisissez le type de notification que vous souhaitez recevoir.
      </Text>
      <View
        style={{
          height: 360,
          width: 351,
          alignSelf: 'center',
          top: 150,
          marginBottom: 40,
        }}>
        <TouchableOpacity
          accessibilityLabel="Message reçues"
          onPress={() => navigation.navigate('Message reçues')}>
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
                width: 240,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Message reçues
            </Text>
            <Text
              style={{
                color: '#0019A7',
                width: 100,
                fontFamily: 'Comfortaa',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Push, e-mail
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
          accessibilityLabel="Nouvelles visites"
          onPress={() => navigation.navigate('Nouvelles visites')}>
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
                width: 240,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Nouvelles visites
            </Text>
            <Text
              style={{
                color: '#0019A7',
                width: 100,
                fontFamily: 'Comfortaa',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Push, e-mail
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
          accessibilityLabel="Nouveaux Likes"
          onPress={() => navigation.navigate('Nouveaux Likes')}>
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
                width: 240,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Nouveaux Likes
            </Text>
            <Text
              style={{
                color: '#0019A7',
                width: 100,
                fontFamily: 'Comfortaa',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Push, e-mail
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
          accessibilityLabel="Sélection, de célibataires du moment"
          onPress={() => navigation.navigate('SingleMomentSpotlight')}>
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
                height: 50,
                fontFamily: 'Comfortaa',
                width: 240,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Sélection, de célibataires{'\n'} du moment (spotlight)
            </Text>
            <Text
              style={{
                color: '#0019A7',
                width: 100,
                fontFamily: 'Comfortaa',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Push, e-mail
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
          accessibilityLabel="Invitations à de nouveaux évènements"
          onPress={() => navigation.navigate('InvitationsNewEvent')}>
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
                height: 50,
                fontFamily: 'Comfortaa',
                width: 240,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Invitations nouveaux{'\n'}événements
            </Text>
            <Text
              style={{
                color: '#0019A7',
                width: 100,
                fontFamily: 'Comfortaa',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Push, e-mail
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
          accessibilityLabel="Offres promotionnelles"
          onPress={() => navigation.navigate('Offres promotionnelles')}>
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
                width: 240,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Offres promotionnelles
            </Text>
            <Text
              style={{
                color: '#0019A7',
                width: 100,
                fontFamily: 'Comfortaa',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 700,
                alignItems: 'center',
              }}>
              Push, e-mail
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
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image
          style={{
            top: 170,
            width: 331,
            height: 56,
            flexShrink: 0,
            alignSelf: 'center',
          }}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={{
            top: 130,
            left: 10,
            color: '#0019A7',
            textAlign: 'center',
            alignSelf: 'center',
            fontFamily: 'Comfortaa',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Retour paramètres
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

Notifications.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

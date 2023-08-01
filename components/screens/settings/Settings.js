/* eslint-disable react-native/no-inline-styles */

import React, {useEffect} from 'react';
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
import settingsStyles from '../../../assets/style/styleScreens/styleSettings/StyleSettings';

const commonTextStyles = {
  fontFamily: 'Comfortaa',
  fontStyle: 'normal',
  fontWeight: '700',
};

export const Settings = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const renderNotificationItem = (label, onPress) => (
    <TouchableOpacity accessibilityLabel={label} onPress={onPress} key={label}>
      <View style={settingsStyles.notificationItem}>
        <Text style={{...commonTextStyles, color: '#0019A7', width: 340}}>
          {label}
        </Text>
        <Image
          style={settingsStyles.arrowIcon}
          source={require('../../../assets/images/fleche-blue.png')}
        />
      </View>
    </TouchableOpacity>
  );

  const renderLocationItem = (label, value, onPress) => (
    <TouchableOpacity accessibilityLabel={label} onPress={onPress} key={label}>
      <View style={settingsStyles.locationItem}>
        <Text style={{...commonTextStyles, color: '#0019A7', width: 200}}>
          {label}
        </Text>
        <Text style={{...commonTextStyles, color: '#383A39', width: 140}}>
          {value}
        </Text>
        <Image
          style={settingsStyles.arrowIcon}
          source={require('../../../assets/images/fleche-blue.png')}
        />
      </View>
    </TouchableOpacity>
  );

  const renderModeItem = (label, description, onPress) => (
    <TouchableOpacity accessibilityLabel={label} onPress={onPress} key={label}>
      <View style={settingsStyles.modeItem}>
        <View style={settingsStyles.modeContainer}>
          <Text style={{...commonTextStyles, color: '#0019A7', fontSize: 16}}>
            {label}
          </Text>
          <Text style={{...commonTextStyles, color: '#383A39', fontSize: 14}}>
            {description}
          </Text>
        </View>
        <Image
          style={settingsStyles.arrowIcon}
          source={require('../../../assets/images/fleche-blue.png')}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={settingsStyles.container}>
      <ImageBackground
        style={settingsStyles.bgGradient}
        source={require('../../../assets/images/bg-parametres.png')}>
        <MenuSlide />
        <Text
          style={{
            ...commonTextStyles,
            color: '#0019A7',
            fontSize: 24,
            textAlign: 'center',
            top: 30,
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
        <View style={{top: 80, width: '100%', height: '50%'}}>
          <ScrollView
            style={{height: 'auto', width: 351, alignSelf: 'center'}}
            contentContainerStyle={{paddingBottom: 0}}>
            {/* Style commun pour les éléments de notification */}
            {renderNotificationItem('Notifications', () =>
              navigation.navigate('Notifications'),
            )}
            {renderNotificationItem('Sécurité & vie privée', () =>
              navigation.navigate('Securite et privee'),
            )}
            {renderNotificationItem('Contact & FAQ', () =>
              navigation.navigate('Contact et FAQ'),
            )}
            {renderLocationItem('Emplacement', 'Paris, FR', () =>
              navigation.navigate('Emplacement'),
            )}
            {renderModeItem(
              'Mode invisible',
              'Visitez des profils incognito',
              () => navigation.navigate('Mode invisible'),
            )}
            {renderModeItem(
              'Mode voyage',
              'Pour voir plus de monde. Changez votre localisation.',
              () => navigation.navigate('Mode voyage'),
            )}

            {renderNotificationItem('Mettre mon compte en pause', () =>
              navigation.navigate('Mettre en pause'),
            )}
          </ScrollView>
        </View>
        <View
          style={{
            top: 100,
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '100%',
            height: 200,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Deconnexion')}>
            <Image
              style={{
                width: 331,
                height: 56,
                flexShrink: 0,
                alignSelf: 'center',
              }}
              source={require('../../../assets/boutons/bouton-deconnexion-blanc.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Deconnexion')}>
            <Text
              style={{
                ...commonTextStyles,
                color: '#383A39',
                fontSize: 16,
                textAlign: 'center',
              }}>
              Supprimer mon compte
            </Text>
          </TouchableOpacity>

          <Image
            style={{
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
              ...commonTextStyles,
              color: '#383A39',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Version 1.0
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

Settings.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Settings;

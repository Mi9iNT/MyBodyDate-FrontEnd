/* eslint-disable react-native/no-inline-styles */

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

  const [buttonPressed, setButtonPressed] = useState();

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
        <View style={{flex: 11}}>
          <Text style={settingsStyles.title}>Paramètres</Text>
          <View style={settingsStyles.separator} />
          <View style={settingsStyles.viewScroll}>
            <ScrollView
              style={settingsStyles.scrollView}
              contentContainerStyle={{paddingBottom: 10}}>
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
        </View>
        <View style={settingsStyles.viewBottom}>
          <TouchableOpacity onPress={() => {
            setButtonPressed('deconnexion');
            navigation.navigate('Home Next');
          }}>
            <Image
              style={[settingsStyles.logoutButton, {color: buttonPressed === 'deconnexion' ? '#fff' : '#0019A7'}]}
              source={buttonPressed === 'deconnexion' ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc-Border.png')}
            />
            <Text style={settingsStyles.textLogoutButton}>Déconnexion</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Supprimer mon compte')}>
            <Text
              style={settingsStyles.deleteAccountText}>
              Supprimer mon compte
            </Text>
          </TouchableOpacity>

          <Image
            style={settingsStyles.logoImage}
            source={require('../../../assets/images/logo-sombre.png')}
          />

          <Text
            style={settingsStyles.versionText}>
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

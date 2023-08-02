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
import settingsStyles from '../../../assets/style/styleScreens/styleSettings/StyleSettings'; // Importez tous les styles définis ici

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
    <View style={settingsStyles.container}>
      <ImageBackground
        style={settingsStyles.bgGradient} // Utilisez le style pour le fond d'écran avec un dégradé
        source={require('../../../assets/images/bg-parametres.png')}>
        <MenuSlide />
        <Text style={settingsStyles.title}>Paramètres</Text>
        <View style={settingsStyles.separator} />
        <View style={settingsStyles.viewScroll}>
          <ScrollView
            style={settingsStyles.scrollView} // Utilisez le style pour la ScrollView
            contentContainerStyle={{paddingBottom: 0}}>
            <TouchableOpacity
              accessibilityLabel="Notifications"
              onPress={() => navigation.navigate('Notifications')}>
              <View style={settingsStyles.notificationItem}>
                <Text style={settingsStyles.notificationText}>
                  Notifications
                </Text>
                <Image
                  style={settingsStyles.arrowIcon}
                  source={require('../../../assets/images/fleche-blue.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              accessibilityLabel="Sécurité et vie privée"
              onPress={() => navigation.navigate('Securite et privee')}>
              <View style={settingsStyles.notificationItem}>
                <Text style={settingsStyles.notificationText}>
                  Sécurité & vie privée
                </Text>
                <Image
                  style={settingsStyles.arrowIcon}
                  source={require('../../../assets/images/fleche-blue.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              accessibilityLabel="Contact et FAQ"
              onPress={() => navigation.navigate('Contact et FAQ')}>
              <View style={settingsStyles.notificationItem}>
                <Text style={settingsStyles.notificationText}>
                  Contact & FAQ
                </Text>
                <Image
                  style={settingsStyles.arrowIcon}
                  source={require('../../../assets/images/fleche-blue.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              accessibilityLabel="Emplacement"
              onPress={() => navigation.navigate('Emplacement')}>
              <View style={settingsStyles.locationItem}>
                <Text style={settingsStyles.locationText}>Emplacement</Text>
                <Text style={settingsStyles.locationValue}>Paris, FR</Text>
                <Image
                  style={settingsStyles.arrowIcon}
                  source={require('../../../assets/images/fleche-blue.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              accessibilityLabel="Mode invisible"
              onPress={() => navigation.navigate('Mode invisible')}>
              <View style={settingsStyles.modeItem}>
                <View style={settingsStyles.modeContainer}>
                  <Text style={settingsStyles.modeText}>Mode invisible</Text>
                  <Text style={settingsStyles.modeDescription}>
                    Visitez des profils incognito
                  </Text>
                </View>
                <Image
                  style={settingsStyles.arrowIcon}
                  source={require('../../../assets/images/fleche-blue.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              accessibilityLabel="Mode voyage"
              onPress={() => navigation.navigate('Mode voyage')}>
              <View style={settingsStyles.modeItem}>
                <View style={settingsStyles.modeContainer}>
                  <Text style={settingsStyles.modeText}>Mode voyage</Text>
                  <Text style={settingsStyles.modeDescription}>
                    Pour voir plus de monde. Changez votre localisation.
                  </Text>
                </View>
                <Image
                  style={settingsStyles.arrowIcon}
                  source={require('../../../assets/images/fleche-blue.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              accessibilityLabel="Mettre mon compte en pause"
              onPress={() => navigation.navigate('Mettre en pause')}>
              <View style={settingsStyles.notificationItem}>
                <Text style={settingsStyles.notificationText}>
                  Mettre mon compte en pause
                </Text>
                <Image
                  style={settingsStyles.arrowIcon}
                  source={require('../../../assets/images/fleche-blue.png')}
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={settingsStyles.viewBottom}>
          <TouchableOpacity onPress={() => navigation.navigate('Deconnexion')}>
            <Image
              style={settingsStyles.logoutButton}
              source={require('../../../assets/boutons/bouton-deconnexion-blanc.png')}
            />
          </TouchableOpacity>

          <Text style={settingsStyles.deleteAccountText}>
            Supprimer mon compte
          </Text>

          <Image
            style={settingsStyles.logoImage}
            source={require('../../../assets/images/logo-sombre.png')}
          />

          <Text style={settingsStyles.versionText}>Version 1.0</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

Settings.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

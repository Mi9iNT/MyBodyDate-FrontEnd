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
import notificationsStyle from '../../../assets/style/styleScreens/styleSettings/StyleNotification';
import MenuSlideSettings from '../../composants/MenuSlideSettings';
import NotificationsStyles from '../../../assets/style/styleScreens/styleSettings/StyleNotification';

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
      style={NotificationsStyles.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings settingsNavigation={() => navigation.navigate('Settings')} />
      <Text
        style={NotificationsStyles.title}>
        Notifications
      </Text>
      <View
        style={NotificationsStyles.separator}
      />
      <Text
        style={NotificationsStyles.description}>
        Choisissez le type de notification que vous souhaitez recevoir.
      </Text>
      <View
        style={notificationsStyle.notificationContainer}>
        <TouchableOpacity
          accessibilityLabel="Message reçues"
          onPress={() => navigation.navigate('')}>
          <View
            style={NotificationsStyles.notificationItem}>
            <Text
              style={NotificationsStyles.notificationText}>
              Message reçues
            </Text>
            <Text
              style={NotificationsStyles.notificationType}>
              Push, e-mail
            </Text>
            <Image
              style={NotificationsStyles.arrowIcon}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Nouvelles visites"
          onPress={() => navigation.navigate('')}>
          <View
            style={NotificationsStyles.notificationItem}>
            <Text
              style={NotificationsStyles.notificationText}>
              Nouvelles visites
            </Text>
            <Text
              style={NotificationsStyles.notificationType}>
              Push, e-mail
            </Text>
            <Image
              style={NotificationsStyles.arrowIcon}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Nouveaux Likes"
          onPress={() => navigation.navigate('')}>
          <View
            style={NotificationsStyles.notificationItem}>
            <Text
              style={NotificationsStyles.notificationText}>
              Nouveaux Likes
            </Text>
            <Text
              style={NotificationsStyles.notificationType}>
              Push, e-mail
            </Text>
            <Image
              style={NotificationsStyles.arrowIcon}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Sélection, de célibataires du moment"
          onPress={() => navigation.navigate('')}>
          <View
            style={NotificationsStyles.notificationItem}>
            <View style={NotificationsStyles.notificationTextCol}>
              <Text style={NotificationsStyles.notificationText}>Sélection, de célibataires</Text>
              <Text style={NotificationsStyles.notificationText}>du moment (spotlight)</Text>
            </View>
            <Text
              style={NotificationsStyles.notificationType}>
              Push, e-mail
            </Text>
            <Image
              style={NotificationsStyles.arrowIcon}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Invitations à de nouveaux évènements"
          onPress={() => navigation.navigate('')}>
          <View
            style={NotificationsStyles.notificationItem}>
            <View style={NotificationsStyles.notificationTextCol}>
              <Text style={NotificationsStyles.notificationText}>Invitations nouveaux</Text>
              <Text style={NotificationsStyles.notificationText}>événements</Text>
            </View>
            <Text
              style={NotificationsStyles.notificationType}>
              Push, e-mail
            </Text>
            <Image
              style={NotificationsStyles.arrowIcon}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Offres promotionnelles"
          onPress={() => navigation.navigate('')}>
          <View
            style={NotificationsStyles.notificationItem}>
            <Text
              style={NotificationsStyles.notificationText}>
              Offres promotionnelles
            </Text>
            <Text
              style={NotificationsStyles.notificationType}>
              Push, e-mail
            </Text>
            <Image
              style={NotificationsStyles.arrowIcon}
              source={require('../../../assets/images/fleche-blue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image
          style={NotificationsStyles.backButton}
          source={require('../../../assets/boutons/Bouton-Blanc-Border.png')}
        />
        <Text
          style={NotificationsStyles.backButtonText}>
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

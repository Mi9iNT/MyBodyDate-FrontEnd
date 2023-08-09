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
import {MenuSlide} from '../composants/MenuSlide';
import NotifcationsStyles from '../../assets/style/styleScreens/StylesNotifications';
import MenuBottom from '../composants/MenuBottom';

export const Notifications = ({route, navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const activeTab = route.params?.activeTab ?? '';
  const imagePath = route.params?.imagePath ?? '';
  const icoPushChange = route.params?.icoPushChange ?? '';
  const [buttonPressed, setButtonPressed] = useState();

  // Ce tableau à été fait pour avoir des images dynamiques, lorsque le serveur distant sera près il suffira de supprimer ce tableau et modifier le lien de l'image pour passer en uri: avec un lien dynamique ; jy ajouterais un exemple à l'endroit prévu dans le code
  const getAvatarImage = avatar => {
    switch (avatar) {
      case 'lisa':
        return require('../../assets/images/lisa-ellipse.png');
      case 'beverly':
        return require('../../assets/images/beverly-ellipse.png');
      case 'kolia':
        return require('../../assets/images/kolia-ellipse.png');
      case 'staff':
        return require('../../assets/images/staff-ellipse.png');
      default:
        return require('../../assets/images/staff-ellipse.png');
    }
  };

  const notifications = [
    {
      type: 'Professionnel',
      userName: 'Lisa',
      avatar: 'lisa',
      text: 'À visité votre profil',
      unread: false,
      prenium: false,
      certified: true,
      dateTime: '2023-08-07T12:30:00.000Z',
    },
    {
      type: "Cercle d'ami",
      userName: 'Beverly',
      avatar: 'beverly',
      text: 'A liké votre profil',
      unread: true,
      prenium: false,
      certified: true,
      dateTime: '2023-08-09T10:15:00.000Z',
    },
    {
      type: 'Relation amoureuse',
      userName: 'Kolia',
      avatar: 'kolia',
      text: 'A liké votre profil',
      unread: false,
      prenium: true,
      certified: true,
      dateTime: '2023-08-09T07:45:00.000Z',
    },
    {
      type: 'Staff',
      userName: 'Équipe MYBODYDATE',
      avatar: 'staff',
      text: 'Avez-vous pensé à booster votre profil ?',
      unread: true,
      prenium: false,
      certified: true,
      dateTime: '2023-08-09T10:20:00.000Z',
    },
    {
      type: 'Relation amoureuse',
      userName: 'Kolia',
      avatar: 'kolia',
      text: 'À visité votre profil',
      unread: false,
      prenium: true,
      certified: true,
      dateTime: '2023-07-09T07:45:00.000Z',
    },
    {
      type: 'Staff',
      userName: 'Love Coach',
      avatar: 'staff',
      text: 'Nos sélections de profils pour vous  est prête, venez les découvrir !',
      unread: true,
      prenium: false,
      certified: true,
      dateTime: '2023-06-29T10:20:00.000Z',
    },
    // ... Ajoutez d'autres notifications ici ...
  ];

  const sortedNotifications = notifications.sort(
    (nouveau, ancien) => new Date(ancien.dateTime) - new Date(nouveau.dateTime),
  );

  // Fonction pour afficher le titre dynamique en fonction de la date
  const getTitleForDate = date => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dayBeforeYesterday = new Date();
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

    if (date.toDateString() === today.toDateString()) {
      return "Aujourd'hui";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Hier';
    } else if (date.toDateString() === dayBeforeYesterday.toDateString()) {
      return 'Avant-hier';
    } else {
      const options = {day: 'numeric', month: 'long'};
      return date.toLocaleDateString('fr-FR', options);
    }
  };

  return (
    <View style={NotifcationsStyles.container}>
      <View style={{flex: 2, backgroundColor: '#fff'}}>
        <MenuSlide imagePath={imagePath} icoPushChange={true} />
        <View style={NotifcationsStyles.viewTtitle}>
          <Text style={NotifcationsStyles.title}>Notifications</Text>
          <Image
            source={require('../../assets/boutons/icon-recherche.png')}
            style={NotifcationsStyles.icoRecherche}
          />
        </View>
      </View>

      <View style={{flex: 8}}>
        <ImageBackground
          style={NotifcationsStyles.bgGradient}
          source={require('../../assets/images/bg-parametres.png')}>
          <View style={NotifcationsStyles.viewSuggest}>
            <Text style={NotifcationsStyles.textSuggest}>
              Bénéficiez du Premium et profitez complètement de vos
              notifications !
            </Text>
            <Text style={NotifcationsStyles.textSuggestBold}>
              Obtenir Premium ?
            </Text>
          </View>
          <View style={NotifcationsStyles.viewScroll}>
            {/* ScrollView permettant d'afficher les notifications */}
            <ScrollView
              style={NotifcationsStyles.scrollView}
              contentContainerStyle={{paddingBottom: 40}}>
              {sortedNotifications.map((notification, index) => {
                // Ligne à décomenter et adapter pour obtenir le lien de l'avatar dynamiquement
                // const AVATAR_IMAGE_URL = 'https://leserveurdistant.com/assets/images';
                const notificationDate = new Date(notification.dateTime);
                const title = getTitleForDate(notificationDate);

                return (
                  <View key={index}>
                    {index === 0 ||
                    title !==
                      getTitleForDate(
                        new Date(sortedNotifications[index - 1].dateTime),
                      ) ? (
                      <Text style={NotifcationsStyles.dateNotification}>
                        {title}
                      </Text>
                    ) : null}

                    <View>
                      <TouchableOpacity
                        key={index}
                        style={[
                          NotifcationsStyles.boxNotification,
                          {
                            backgroundColor:
                              notification.unread === true
                                ? 'rgba(0, 25, 167, 0.13)'
                                : 'transparent',
                          },
                        ]}>
                        <Image
                          source={getAvatarImage(notification.avatar)}
                          style={[
                            NotifcationsStyles.notificationAvatar,
                            {
                              borderColor:
                                notification.type === 'Professionnel'
                                  ? '#000'
                                  : notification.type === "Cercle d'ami"
                                  ? '#9424FA'
                                  : notification.type === 'Relation amoureuse'
                                  ? '#FF84D7'
                                  : notification.type === 'Staff'
                                  ? '#0019A7'
                                  : '#0019A7',
                            },
                          ]}
                        />
                        {/* L'exemple permettant de passer des liens d'image dynamiquement ne pas omettre de décommenter la constante "AVATAR_IMAGE_URL" */}
                        {/* <Image
                      source={{
                        uri: `${AVATAR_IMAGE_URL}/${notification.avatar}-ellipse.png`,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                        resizeMode: 'contain',
                        borderRadius: 30,
                        borderWidth: 1,
                      }}
                    /> */}
                        <View style={NotifcationsStyles.notificationBoxCol}>
                          <View style={NotifcationsStyles.notificationBoxRow}>
                            <Text
                              style={NotifcationsStyles.notificationUsername}>
                              {notification.userName}
                            </Text>
                            {/* Si le compte de l'utilisateur qui a provoqué le push est vérifié il aura la pastille (image) quality3.png */}
                            {notification.certified === true ? (
                              <Image
                                source={require('../../assets/images/quality3.png')}
                                style={NotifcationsStyles.notificationCertified}
                              />
                            ) : null}
                            {notification.prenium === true ? (
                              <Image
                                source={require('../../assets/images/ico-prenium.png')}
                                style={NotifcationsStyles.notificationPrenium}
                              />
                            ) : null}
                          </View>
                          <Text style={NotifcationsStyles.notificationText}>
                            {notification.text}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <View style={NotifcationsStyles.notificationSeparator} />
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <MenuBottom navigation={navigation} activeTab={activeTab} />
        </ImageBackground>
      </View>
    </View>
  );
};

Notifications.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Notifications;

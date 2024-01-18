import React, { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';

const PushNotificationManager = ({ pushTitle, pushMessage }) => {
  useEffect(() => {
    PushNotification.configure({
      onRegister: function(token) {
        console.log('TOKEN:', token);
      },

      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
        notification.finish(PushNotification.FetchResult.NoData);
      },

      requestPermissions: true,
    });

    PushNotification.localNotification({
      title: pushTitle,
      message: pushMessage,
      soundName: 'default',
    });
  }, []); // Fermeture correcte de useEffect

  return null;
};

export default PushNotificationManager;

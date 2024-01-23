/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import MenuSlide from '../../composants/MenuSlide';
import MenuBottom from '../../composants/MenuBottom';
import MessageReceived from '../../composants/MessageReceived';
import UserLike from '../../composants/UserLike';
import MessageSended from '../../composants/MessageSended';

export const Messages = ({ navigation, route, userLike }) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  const activeTab = route.params?.activeTab;
  const [searchMatch, onSearchMatch] = useState(searchMatch);
  const [messageViewSelected, setMessageViewSelected] = useState('received');

  return (
    <View
      style={{ backgroundColor: '#fff', height: '100%', width: 'auto' }}>
      <MenuSlide />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          top: 20,
          width: '90%',
        }}>
        <Text
          style={{
            color: '#0019A7',
            fontFamily: 'Comfortaa',
            fontSize: 24,
            fontWeight: 700,
          }}>
          Messages
        </Text>
        <SafeAreaView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#0019A7',
          }}>
          <TextInput
            style={{ color: '#0019A7', marginRight: 15 }}
            onChangeText={onSearchMatch}
            value={searchMatch}
            placeholder={'Recherche un match'}
          />
          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../../assets/boutons/btn-search.png')}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <ImageBackground
        source={require('../../../assets/images/bg-parametres.png')}
        style={{
          width: 'auto',
          height: '100%',
          top: '5%',
          left: 0,
        }}
        resizeMode="cover">
        <UserLike />
        <View
          style={{
            flexDirection: 'row',
            top: 40,
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 40,
              borderBottomWidth: messageViewSelected === 'received' ? 1 : 0,
              borderColor: '#0019A7',
            }}
            onPress={() => setMessageViewSelected('received')}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                fontSize: 20,
                fontWeight: 700,
              }}>
              Messages reçus
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              borderBottomWidth: messageViewSelected === 'sended' ? 1 : 0,
              borderColor: '#0019A7',
            }}
            onPress={() => setMessageViewSelected('sended')}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                fontSize: 20,
                fontWeight: 700,
              }}>
              Messages envoyés
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ top: 50 }}>
          <>
            {messageViewSelected === 'received' ? (
              <MessageReceived />
            ) : (
                <MessageSended />
            )}
          </>
        </View>
      </ImageBackground>
      {/* <MenuBottom navigation={navigation} /> */}
    </View>
  );
};

Messages.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

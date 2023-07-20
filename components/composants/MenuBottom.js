/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from '../../assets/style/Styles';

export const MenuBottom = ({ navigation, route }) => {

  const [activeTab, setActiveTab] = useState( activeTab ?? 'ProfilMe'); // Onglet actif par défaut

  const handleTabPress = tabName => {
    setActiveTab(tabName);
    navigation.navigate(tabName, { activeTab: tabName });
  };

  if (!navigation) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: '100%',
        height: 80,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0019A7',
        borderRadius: 30,
      }}>
      <TouchableOpacity onPress={() => handleTabPress('ProfilMe')}>
        <Image
          source={require('../../assets/boutons/explorateur.png')}
          style={{width: 30, height: 30, alignSelf:'center'}}
        />
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 12,
            color: '#fff',
            textAlign:'center',
          }}>
          Découvrir
        </Text>
        {activeTab === 'ProfilMe' && (
          <View
            style={{
              position: 'absolute',
              bottom: -10,
              alignSelf: 'center',
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#FF84D7',
            }}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { handleTabPress('Talk'); }}>
        <Image
          source={require('../../assets/boutons/chat.png')}
          style={{width: 30, height: 30, alignSelf:'center'}}
        />
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 12,
            color: '#fff',
            textAlign:'center',
          }}>
          Talk
        </Text>
        {activeTab === 'Talk' && (
          <View
            style={{
              position: 'absolute',
              bottom: -10,
              alignSelf: 'center',
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#FF84D7',
            }}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('Messages')}>
        <Image
          source={require('../../assets/boutons/email.png')}
          style={{width: 30, height: 30, alignSelf:'center'}}
        />
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 12,
            color: '#fff',
            textAlign:'center',
          }}>
          Messages
        </Text>
        {activeTab === 'Messages' && (
          <View
            style={{
              position: 'absolute',
              bottom: -10,
              alignSelf: 'center',
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#FF84D7',
            }}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('Map')}>
        <Image
          source={require('../../assets/boutons/locator.png')}
          style={{width: 30, height: 30, alignSelf:'center'}}
        />
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 12,
            color: '#fff',
            textAlign:'center',
          }}>
          Map
        </Text>
        {activeTab === 'Map' && (
          <View
            style={{
              position: 'absolute',
              bottom: -10,
              alignSelf: 'center',
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#FF84D7',
            }}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('Moi')}>
        <Image
          source={require('../../assets/boutons/user.png')}
          style={{width: 30, height: 30, alignSelf:'center'}}
        />
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 12,
            color: '#fff',
            textAlign:'center',
          }}>
          Moi
        </Text>
        {activeTab === 'Moi' && (
          <View
            style={{
              position: 'absolute',
              bottom: -10,
              alignSelf: 'center',
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#FF84D7',
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MenuBottom;
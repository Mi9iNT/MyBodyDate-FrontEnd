/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from '../../assets/style/Styles';
import {useNavigation, TabRouter} from '@react-navigation/native';

export const MenuBottom = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Découvrir'); // Onglet actif par défaut

  const handleTabPress = tabName => {
    setActiveTab(tabName);
    navigation.navigate(tabName);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: '100%',
        height: 80,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0019A7',
        borderRadius: 40,
      }}>
      <TouchableOpacity onPress={() => handleTabPress('Découvrir')}>
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
        {activeTab === 'Découvrir' && (
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

      <TouchableOpacity onPress={() => handleTabPress('Task')}>
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
          Task
        </Text>
        {activeTab === 'Task' && (
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

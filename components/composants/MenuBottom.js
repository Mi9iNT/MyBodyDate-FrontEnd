/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../assets/style/StyleComposants/StyleMenuBottom';

export const MenuBottom = ({ navigation, route, active }) => {
  const [activeTab, setActiveTab] = useState(active ?? 'Discover');

  if (!navigation) {
    return null;
  }
  console.log('ActiveTab Menuslide : '+active);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setActiveTab('Discover'); navigation.navigate('Discover'); }}>
        <Image
          source={require('../../assets/boutons/explorateur.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Découvrir</Text>
        {activeTab === 'Discover' ? <View style={styles.activeIndicator} /> : active === 'Discover' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setActiveTab('Talk'); navigation.navigate('Talk'); }}>
        <Image
          source={require('../../assets/boutons/chat.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Talk</Text>
        {activeTab === 'Talk' ? <View style={styles.activeIndicator} /> : active === 'Talk' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setActiveTab('Messages'); navigation.navigate('Messages'); }}>
        <Image
          source={require('../../assets/boutons/email.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Messages</Text>
        {activeTab === 'Messages' ? <View style={styles.activeIndicator} /> : active === 'Messages' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setActiveTab('Map'); navigation.navigate('Map'); }}>
        <Image
          source={require('../../assets/boutons/locator.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Map</Text>
        {activeTab === 'Map' ? <View style={styles.activeIndicator} /> : active === 'Map' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setActiveTab('Moi'); navigation.navigate('Moi');}}>
        <Image
          source={require('../../assets/boutons/user.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Moi</Text>
        {activeTab === 'Moi' ? <View style={styles.activeIndicator} /> : active === 'Moi' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>
    </View>
  );
};

export default MenuBottom;
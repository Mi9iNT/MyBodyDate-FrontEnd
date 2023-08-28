/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../assets/style/StyleComposants/StyleMenuBottom';

export const MenuBottom = ({ navigation, route, active, tabPath }) => {

  const [activeTab, setActiveTab] = useState(active ?? 'Discover');
  const [path, setPath] = useState(tabPath);

  if (!navigation) {
    return null;
  }
  // Logique de détermination de l'écran en fonction de tabPath
  let tabPathDiscover;
  if (tabPath === 'Professionnel') {
    tabPathDiscover = 'DiscoverRP';
  } else if (tabPath === 'Ami') {
    tabPathDiscover = 'DiscoverCA';
  } else {
    tabPathDiscover = 'TabDiscover';
  }

  let tabPathMoi = 'TabMoi';
  if (tabPath === 'Professionnel') {
    tabPathMoi = 'ProfilMeRP';
  } else if (tabPath === 'Ami') {
    tabPathMoi = 'ProfilMeCA';
  } else {
    tabPathMoi = 'TabMoi';
  }
  // console.log(path);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setActiveTab('Discover'); setPath(tabPath); navigation.navigate(tabPathDiscover, {tabPath:tabPath}); }}>
        <Image
          source={require('../../assets/boutons/explorateur.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Découvrir</Text>
        {activeTab === 'Discover' ? <View style={styles.activeIndicator} /> : active === 'Discover' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setActiveTab('Talk'); setPath(tabPath); navigation.navigate('TabTalk', { tabPath: tabPath }); }}>
        <Image
          source={require('../../assets/boutons/chat.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Talk</Text>
        {activeTab === 'Talk' ? <View style={styles.activeIndicator} /> : active === 'Talk' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setActiveTab('Messages'); setPath(tabPath); navigation.navigate('TabMessages', { tabPath: tabPath }); }}>
        <Image
          source={require('../../assets/boutons/email.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Messages</Text>
        {activeTab === 'Messages' ? <View style={styles.activeIndicator} /> : active === 'Messages' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setActiveTab('Map'); setPath(tabPath); navigation.navigate('TabMap', { tabPath: tabPath }); }}>
        <Image
          source={require('../../assets/boutons/locator.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Map</Text>
        {activeTab === 'Map' ? <View style={styles.activeIndicator} /> : active === 'Map' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setActiveTab('Moi'); setPath(tabPath); navigation.navigate(tabPathMoi, { tabPath: tabPath });}}>
        <Image
          source={require('../../assets/boutons/user.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Moi</Text>
        {activeTab === 'Moi' && active === 'Moi' ? <View style={styles.activeIndicator} /> : tabPathMoi === 'TabMoi'  && activeTab === 'Moi' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>
    </View>
  );
};

export default MenuBottom;

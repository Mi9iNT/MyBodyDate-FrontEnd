/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  TextInput,
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import MenuSlide from '../../composants/MenuSlide';
import MenuBottom from '../../composants/MenuBottom';
import MenuTalk from '../../composants/MenuTalk';

export const Talk = ({ navigation, route }) => {
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
  const [messages, setMessages] = useState(true);
  const [user, setUser] = useState(user);
  return (
    <View style={{backgroundColor:'#fff', height:'100%', width:'auto'}}>
      <MenuSlide imagePath={imagePath} />
      <View>
        <MenuTalk user={user}  navigation={navigation} />
      </View>
      <ImageBackground source={require('../../../assets/images/bg-parametres.png')}
        style={{ top: '10%', resizeMode: 'contain' }}>
        {messages === false ? (
          <View style={{
            width: '100%',
            height:'100%',
            alignItems: 'center',
          }}>
            <Image style={{top:'25%'}} source={require('../../../assets/images/ico-conversation.png')} />
            <Text style={{ top:'27%', width: 200, color: '#929EDE', textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 20, fontStyle: 'normal', fontWeight: 700, opacity:1.5 }}>Vous n'avez pas encore de conversation</Text>
          </View>
        ) : (
            <>
            <Text style={{ top:'5%', width: 200, color: '#0019A7', textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 20, fontStyle: 'normal', fontWeight: 700, opacity:1.5 }}>Messages reçu</Text>
            <ScrollView style={{ marginTop: 100, height: '100%' }} contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={{marginBottom:20}}>
                  <View style={{ top: 10, left: 5, flexDirection:'row', alignSelf:'center', justifyContent:'space-between', height:50, width:'90%'}}>
              <View style={{ justifyContent:'center', borderColor: '#FF84D7', borderRadius: 50, borderWidth: 2, left: 15, alignSelf: 'center'}}>
                <Image source={require('../../../assets/images/kolia-ellipse.png')} style={{ resizeMode: 'contain', width: 50, height:50 }} />
                <Image source={require('../../../assets/images/Ellipse-62.png')} style={{ position:'absolute', top:'70%', left:'75%', width: 20, alignSelf: 'center', resizeMode: 'contain' }} />
              </View>
                    <TouchableOpacity onPress={() => navigation.navigate('TalkChat', {user: 'Kolia', prenium: 'yes'})} style={{ flexDirection:'column', left:20, width: 240 }}>
                <View style={{flexDirection:'row', width: '100%', height:'50%'}}>
                  <Text style={{ color: '#0019A7', fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700, marginLeft:20 }}>
                    Kolia
                  </Text>
                  <Image source={require('../../../assets/images/ico-certified-rose.png')} style={{width: 20, resizeMode: 'contain', marginLeft:10 }} />
                    </View>
                    <View>
                      <Text style={{ color: '#0019A7', fontFamily: 'Comfortaa', fontSize: 16, fontStyle: 'normal', fontWeight: 500, marginLeft:20 }}>
                        Message vocal
                      </Text>
                    </View>
                </TouchableOpacity>
                    <View style={{ top:5, right: 20,justifyContent:'center', width:32, height:32, backgroundColor:'white', borderRadius:50, borderWidth:2, borderColor:'#0019A7' }}>
                  <Image source={require('../../../assets/boutons/more-info.png')} style={{ width: 24, resizeMode: 'contain', alignSelf:'center' }} />
                  </View>
                  </View>
                  <View style={{ width: '80%', height: 1, backgroundColor: '#0019A7', alignSelf: 'center', marginTop: 20 }} />
                </View>

                <View style={{ marginBottom: 20 }}>
                  <View style={{ top: 10, left: 5, flexDirection:'row', alignSelf:'center', justifyContent:'space-between', height:50, width:'90%'}}>
              <View style={{ justifyContent:'center', borderColor: '#9424FA', borderRadius: 50, borderWidth: 2, left: 15, alignSelf: 'center'}}>
                <Image source={require('../../../assets/images/beverly-ellipse.png')} style={{ resizeMode: 'contain', width: 50, height:50 }} />
                <Image source={require('../../../assets/images/Ellipse-62.png')} style={{ position:'absolute', top:'70%', left:'75%', width: 20, alignSelf: 'center', resizeMode: 'contain' }} />
              </View>
                    <TouchableOpacity onPress={() => navigation.navigate('TalkChat', {user: 'Beverly', prenium:'no'})} style={{ flexDirection:'column', left:20, width: 240 }}>
                <View style={{flexDirection:'row', width: '100%', height:'50%'}}>
                  <Text style={{ color: '#0019A7', fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700, marginLeft:20 }}>
                    Berverly
                  </Text>
                  <Image source={require('../../../assets/images/ico-certified-rose.png')} style={{width: 20, resizeMode: 'contain', marginLeft:10 }} />
                    </View>
                    <View>
                      <Text style={{ color: '#0019A7', fontFamily: 'Comfortaa', fontSize: 16, fontStyle: 'normal', fontWeight: 500, marginLeft:20 }}>
                        Bonjour
                      </Text>
                    </View>
                </TouchableOpacity>
                    <View style={{ top:5, right: 20,justifyContent:'center', width:32, height:32, backgroundColor:'white', borderRadius:50, borderWidth:2, borderColor:'#0019A7' }}>
                  <Image source={require('../../../assets/boutons/more-info.png')} style={{ width: 24, resizeMode: 'contain', alignSelf:'center' }} />
                  </View>
                  </View>
                  <View style={{ width: '80%', height: 1, backgroundColor: '#0019A7', alignSelf: 'center', marginTop: 20 }} />
                </View>
              </ScrollView>
            </>
        )}
        </ImageBackground>

      <MenuBottom navigation={navigation} activeTab={activeTab} />
    </View>
  );
};

Talk.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

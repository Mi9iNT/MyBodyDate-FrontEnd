/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import MenuSlide from '../../composants/MenuSlide';

export const TalkVideo = ({ navigation, route }) => {
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

  const [showTalkVideoAccept, setShowTalkVideoAccept] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTalkVideoAccept(true);
    }, 3000);

    return () => clearTimeout(timeout); // Nettoie le timeout en cas de démontage prématuré du composant
  }, []);

  useEffect(() => {
    if (showTalkVideoAccept) {
      // Si showTalkVideoAccept est vrai, naviguer vers TalkVideoAccept
      navigation.navigate('TalkVideoAccept');
    }
  }, [showTalkVideoAccept, navigation]);

  return (
    <View style={{backgroundColor:'#fff', height:'100%', width:'auto'}}>
      <MenuSlide imagePath={imagePath} />

      <ImageBackground source={require('../../../assets/images/bg-video-call.png')}
        style={{ height: '100%', resizeMode: 'contain' }}>
        <View style={{ top: 20, width: '60%', height: 100, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'flex-end', right: 10 }}>
          <View style={{ width: '40%', height: 'auto', flexDirection: 'column' }}>
            <Text style={{ color: '#fff', textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 24, fontStyle: 'normal', fontWeight: 700 }}>KOLIA</Text>
            <Text style={{ color:'#fff', textAlign: 'center', fontFamily: 'Gilroy',fontSize: 20, fontWeight: 600 }}>00:47</Text>
          </View>

          <TouchableOpacity style={{ height: 40, width: 40, right: 0, top: 0 }} onPress={() => navigation.navigate('TalkVideo')}>
          <Image style={{ top: 0, alignSelf: 'center', width: 40, height: 40 }} source={require('../../../assets/boutons/appel-video-blanc.png')} />
        </TouchableOpacity>
        </View>
        <View style={{ top: 200, left:20, width: 173, height: 215, borderRadius: 30, borderWidth: 1, borderColor:'#0019A7' }}>
          <Image style={{ top: 0, alignSelf: 'center', width: 173, height: 215 }} source={require('../../../assets/images/cam-moi.png')} />
        </View>
        <View style={{ top: 320, flexDirection: 'row', alignSelf: 'center', alignItems:'center', justifyContent: 'space-around', width: 255, height: 62, borderRadius:50, backgroundColor:'rgba(0, 0, 0, 0.39)' }}>
             <TouchableOpacity style={{ height: 45, width: 45}}>
              <Image style={{ top: 0, alignSelf: 'center', width: 45, height: 45 }} source={require('../../../assets/boutons/cut-mic.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 45, width: 45 }} onPress={() => navigation.navigate('Tabs')}>
              <Image style={{ top: 0, alignSelf: 'center', width: 45, height: 45 }} source={require('../../../assets/boutons/decline-call.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 45, width: 45}} onPress={() => navigation.navigate('TalkChat')}>
              <Image style={{ top: 0, alignSelf: 'center', width: 45, height: 45 }} source={require('../../../assets/boutons/chat-btn.png')} />
            </TouchableOpacity>

          </View>
      </ImageBackground>
    </View>
  );
};

TalkVideo.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

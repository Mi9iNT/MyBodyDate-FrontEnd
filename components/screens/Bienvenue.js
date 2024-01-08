import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import Logo from '../composants/Logo';
import Video from 'react-native-video';

import Styles from '../../assets/style/Styles';
import StylesBienvenue from '../../assets/style/styleScreens/styleRegister/StyleBienvenue';

export const Bienvenue = ({navigation}) => {
  //Constante permettant de savoir si l'utilisateur à appuyer sur play ou sur pause
  const [isPlaying, setIsPlaying] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <View style={StylesBienvenue.container}>
      <ImageBackground
        style={StylesBienvenue.bgGradient}
        source={require('../../assets/images/Background.png')}>
        <Logo />

        <View style={[StylesBienvenue.ViewText, {left: 30}]}>
          <Text style={[StylesBienvenue.TxtTitle]}>BIENVENUE,</Text>
          <Text style={[StylesBienvenue.TxtTitle2]}>DÉCOUVREZ NOUS.</Text>
        </View>

        <View style={[StylesBienvenue.ViewVideo, {top: 50}]}>
          <Video
            source={{
              uri: 'https://video.wixstatic.com/video/8e4c05_5791dadfe85b41e792e18d6fcac7717a/480p/mp4/file.mp4',
            }}
            paused={!isPlaying}
            controls={false}
            style={Styles.video}
            muted={true}
          />
          <View>
            <TouchableHighlight
              style={{margin: 5}}
              underlayColor="transparent"
              activeOpacity={0.2}
              onHideUnderlay={handleHover}
              onShowUnderlay={handleUnhover}
              onPress={() => setIsPlaying(p => !p)}>
              {isHovered ? (
                <Image
                  style={StylesBienvenue.btnVideo}
                  source={require('../../assets/images/play_hover.png')}
                />
              ) : isPlaying ? (
                <Image
                  style={StylesBienvenue.btnVideo}
                  source={require('../../assets/images/pause.png')}
                />
              ) : (
                <Image
                  style={StylesBienvenue.btnVideo}
                  source={require('../../assets/images/play.png')}
                />
              )}
            </TouchableHighlight>
          </View>
        </View>
        <TouchableOpacity
          style={[{bottom: 100, left: '20%'}]}
          onPress={() => navigation.navigate('Création et Développement')}
          accessibilityLabel="Passer">
          <Text style={[StylesBienvenue.TxtBtn]}>Passer</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import Logo from '../composants/Logo';
import Video, {OnBufferData, OnErrorData, VideoRef} from 'react-native-video';

import Styles from '../../assets/style/Styles';
import StylesBienvenue from '../../assets/style/styleScreens/styleRegister/StyleBienvenue';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../types/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Bienvenue'>;
};

export const Bienvenue: React.FC<HomeProps> = ({navigation}) => {
  // Constante permettant de savoir si l'utilisateur a appuyé sur play ou sur pause
  const [isPlaying, setIsPlaying] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const videoRef = useRef<VideoRef>(null);
  const background = {
    uri: 'https://video.wixstatic.com/video/8e4c05_5791dadfe85b41e792e18d6fcac7717a/480p/mp4/file.mp4',
  };

  const onBuffer = (bufferData: OnBufferData) => {
    console.log('Video is buffering', bufferData);
  };

  const onError = (errorData: OnErrorData) => {
    console.error('Video error', errorData);
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
            source={background}
            // Store reference
            ref={videoRef}
            // Callback when remote video is buffering
            onBuffer={onBuffer}
            // Callback when video cannot be loaded
            onError={onError}
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
          onPress={() => navigation.navigate('CreationEtDeveloppement')}
          accessibilityLabel="Passer">
          <Text style={[StylesBienvenue.TxtBtn]}>Passer</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

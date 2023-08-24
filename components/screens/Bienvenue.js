import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import Logo from '../composants/Logo';
import Video from 'react-native-video';

import Styles from '../../assets/style/Styles';

export const Bienvenue = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  console.log('Choix de route : ', routeChoice);

  //Constante permettant de savoir si l'utilisateur à appuyer sur play ou sur pause
  const [isPlaying, setIsPlaying] = React.useState(false);

  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../assets/images/Background.png')}>
        <Logo />

        <View style={[Styles.ViewText, {left: 30}]}>
          <Text
            style={[
              {
                color: '#FFF',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 24,
                fontStyle: 'normal',
                fontWeight: 500,
              },
            ]}>
            BIENVENUE,
          </Text>
          <Text
            style={[
              {
                color: '#FFF',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 24,
                fontStyle: 'normal',
                fontWeight: 500,
              },
            ]}>
            DÉCOUVREZ NOUS.
          </Text>
        </View>

        <View style={[Styles.ViewVideo, {top: 50}]}>
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
                  style={Styles.btnVideo}
                  source={require('../../assets/images/play_hover.png')}
                />
              ) : isPlaying ? (
                <Image
                  style={Styles.btnVideo}
                  source={require('../../assets/images/pause.png')}
                />
              ) : (
                <Image
                  style={Styles.btnVideo}
                  source={require('../../assets/images/play.png')}
                />
              )}
            </TouchableHighlight>
          </View>
        </View>
        <TouchableOpacity
          style={[{bottom: 100, left:'20%'}]}
          onPress={() =>
            navigation.navigate('Création et Développement', {
              routeName: routeChoice,
            })
          }
          accessibilityLabel="Passer">
          <Text
            style={[
              {
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
                textDecorationLine: 'underline',
              },
            ]}>
            Passer
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

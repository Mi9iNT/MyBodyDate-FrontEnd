/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  StatusBar,
  Switch,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  View,
  PanResponder,
  Animated,
} from 'react-native';
import StyleMettreEnPause from '../../../assets/style/styleScreens/styleSettings/StyleMettreEnPause';
import PropTypes from 'prop-types';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const MettreEnPause = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [buttonPressed, setButtonPressed] = useState();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [daysSelected, setDaysSelected] = useState(1);
  const [sliderWidth, setSliderWidth] = useState(0);

  const handleDaysChange = value => {
    setDaysSelected(value);
  };

  const onSliderLayout = event => {
    const {width} = event.nativeEvent.layout;
    setSliderWidth(width);
  };

  const [progress, setProgress] = useState(15);
  const [buttonPosition, setButtonPosition] = useState({x: 0, width: 0});
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const {moveX, dx, x0} = gestureState;
        const newProgress = Math.min(
          100,
          Math.max(0, ((moveX - x0) / 200) * 100),
        );
        setProgress(newProgress);
        setButtonPosition({
          x: moveX - buttonPosition.width,
          width: buttonPosition.width,
        });
      },
      onLayout: event => {
        const {x, width} = event.nativeEvent.layout;
        setButtonPosition({
          x: x + (progress / 100) * width - buttonPosition.width,
          width,
        });
      },
    }),
  ).current;

  const calculateDays = progress => {
    const maxDays = 30;
    return Math.ceil((progress / 100) * maxDays);
  };

  const animatedTextPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedTextPosition, {
      toValue: buttonPosition.x,
      duration: 0.2,
      useNativeDriver: false,
    }).start();
  }, [buttonPosition]);

  return (
    <ImageBackground
      style={StyleMettreEnPause.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings
        settingsNavigation={() => navigation.navigate('Settings')}
      />
      <View style={{flex: 10}}>
        <Text style={StyleMettreEnPause.title}>
          Mettre mon compte {'\n'}en pause
        </Text>
        <View style={StyleMettreEnPause.separator} />
        <Text style={StyleMettreEnPause.description}>
          Vous pouvez suspendre votre compte quand vous le souhaitez. Votre
          compte sera mis en pause et vous pourrez le réactiver quand vous le
          voudrez.
        </Text>
        <View style={StyleMettreEnPause.mettreEnPauseContainer}>
          <Text style={StyleMettreEnPause.confirmText}>
            Confirmer Mettre mon compte en pause
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={StyleMettreEnPause.switchButton}
          />
        </View>
        <View
          style={StyleMettreEnPause.progressBarContainer}
          {...panResponder.panHandlers}>
          <View
            style={[StyleMettreEnPause.progressBarBg, {width: `${progress}%`}]}
          />
          <View
            style={[StyleMettreEnPause.progressBarBtn, {left: `${progress}%`}]}
            onLayout={event =>
              setButtonPosition({
                x: event.nativeEvent.layout.x,
                width: event.nativeEvent.layout.width,
              })
            }
          />
        </View>
        <View style={StyleMettreEnPause.progressBarContainerText}>
          <Animated.View
            style={[
              {position: 'relative', width: 80},
              {left: animatedTextPosition},
            ]}>
            <Text
              style={[
                {
                  color:
                    calculateDays(progress) < 1
                      ? '#929EDE'
                      : calculateDays(progress) > 29
                      ? '#929EDE'
                      : '#0019A7',
                },
                StyleMettreEnPause.progressBarText,
              ]}>
              {calculateDays(progress)}{' '}
              {calculateDays(progress) < 2 ? 'jour' : 'jours'}
            </Text>
          </Animated.View>
        </View>

        <View style={StyleMettreEnPause.viewContainerInfo}>
          <Image
            style={StyleMettreEnPause.icoInfo}
            source={require('../../../assets/boutons/ico-info-rose-text-bleu.png')}
          />
          <Text style={StyleMettreEnPause.textInfo}>
            Si vous avez un de nos abonnements ou formules de 6 à 12 mois, vous
            pouvez le/la suspendre de 1 à 30 jours en tout, en une ou plusieurs
            fois.
          </Text>
          <Text style={StyleMettreEnPause.textInfo}>
            C'est comme vous voulez, cela décale simplement votre période de fin
            de contrat.
          </Text>
          <TouchableOpacity>
            <Text style={StyleMettreEnPause.linkInfo}>
              Laissez-nous votre avis ou Racontez-nous votre histoire.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            setButtonPressed(true);
            navigation.navigate('Settings');
          }}>
          <Image
            style={StyleMettreEnPause.backButton}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              StyleMettreEnPause.backButtonText,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Retour paramètres
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

MettreEnPause.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default MettreEnPause;

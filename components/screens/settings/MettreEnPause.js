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
import Styles from '../../../assets/style/Styles';
import PropTypes from 'prop-types';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const MettreEnPause = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

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
      style={Styles.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings />
      <Text
        style={{
          top: 10,
          color: '#0019A7',
          fontFamily: 'Comfortaa',
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 700,
        }}>
        Mettre mon compte {'\n'}en pause
      </Text>
      <View
        style={{
          backgroundColor: '#0019A7',
          width: 351,
          height: 1,
          alignSelf: 'center',
          top: 40,
        }}
      />
      <Text
        style={{
          color: '#929EDE',
          top: 60,
          width: 320,
          alignSelf: 'center',
          textAlign: 'center',
          fontFamily: 'Comfortaa',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        Vous pouvez suspendre votre compte quand vous le souhaitez. Votre compte
        sera mis en pause et vous pourrez le réactiver quand vous le voudrez.
      </Text>
      <View
        style={{
          flexShrink: 0,
          alignSelf: 'center',
          top: 100,
        }}>
        <Text
          style={{
            color: '#0019A7',
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Confirmer Mettre mon compte en pause
        </Text>
        <Switch
          trackColor={{false: '#BEC8FF', true: '#17ff58'}}
          thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
          ios_backgroundColor="#f4f3f4"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{
            top: 30,
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          top: 170,
          flexDirection: 'row',
          alignSelf: 'center',
          width: '80%',
          height: 20,
          borderRadius: 10,
          backgroundColor: '#E0E0E0',
          overflow: 'hidden',
        }}
        {...panResponder.panHandlers}>
        <View
          style={[
            {height: '100%', backgroundColor: '#0019A7'},
            {width: `${progress}%`},
          ]}
        />
        <View
          style={[
            {
              position: 'absolute',
              width: 20,
              height: 20,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: '#0019A7',
              justifyContent: 'center',
              alignItems: 'center',
            },
            {left: `${progress}%`},
          ]}
          onLayout={event =>
            setButtonPosition({
              x: event.nativeEvent.layout.x,
              width: event.nativeEvent.layout.width,
            })
          }
        />
      </View>
      <View style={{top: 170, height: 26, width: '70%', alignSelf: 'center'}}>
        <Animated.View
          style={[
            {position: 'relative', width: 80},
            {left: animatedTextPosition},
          ]}>
          <Text
            style={{
              color:
                calculateDays(progress) < 1
                  ? '#929EDE'
                  : calculateDays(progress) > 29
                  ? '#929EDE'
                  : '#0019A7',
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
            {calculateDays(progress)}{' '}
            {calculateDays(progress) < 2 ? 'jour' : 'jours'}
          </Text>
        </Animated.View>
      </View>

      <View
        style={{
          top: 170,
          width: '100%',
          height: '30%',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingHorizontal:20,
        }}>
        <Image
          style={{width: 25, height: 25}}
          source={require('../../../assets/boutons/ico-info-rose-text-bleu.png')}
        />
        <Text style={{color: '#0019A7',textAlign: 'center',fontFamily: 'Comfortaa',fontSize: 15,fontStyle: 'normal',fontWeight: 700, }}>
          Si vous avez un de nos abonnements ou formules de 6 à 12 mois, vous
          pouvez le/la suspendre de 1 à 30 jours en tout, en une ou plusieurs
          fois.
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#0019A7',textAlign: 'center',fontFamily: 'Comfortaa',fontSize: 15,fontStyle: 'normal',fontWeight: 700,textDecorationLine: 'underline', }}>
            C'est comme vous voulez, cela décale simplement votre période de fin
            de contrat.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: '#0019A7',textAlign: 'center',fontFamily: 'Comfortaa',fontSize: 15,fontStyle: 'normal',fontWeight: 700,textDecorationLine: 'underline', }}>Laissez-nous votre avis ou Racontez-nous votre histoire.</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={{top: 180}}>
        <Image
          style={{
            width: 331,
            height: 56,
            flexShrink: 0,
            alignSelf: 'center',
          }}
          source={require('../../../assets/boutons/bouton-retour-parametres.png.png')}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

MettreEnPause.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default MettreEnPause;

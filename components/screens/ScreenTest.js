import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export const ScreenTest = ({ navigation }) => {
  const position = new Animated.ValueXY({ x: 0, y: 0 });
  const rotateX = position.x.interpolate({
    inputRange: [0, 10],
    outputRange: ['0deg', '0deg'],
  });
  const rotateZ = position.y.interpolate({
    inputRange: [0, 10],
    outputRange: ['0deg', '5deg'],
  });
  const perspective = position.x.interpolate({
    inputRange: [0, 0],
    outputRange: [800, 10],
  });
  const [animation, setAnimation] = useState(animation ?? false);
  const anim = () => {
    setAnimation(true);
    Animated.spring(position, {
      toValue: { x: -150, y: -40 },
      duration: 100,
      speed: 0.1,
      bounciness: 2,
      useNativeDriver: true,
    }).start(() => {
      // L'animation est terminée, vous pouvez réinitialiser la valeur animée ici si nécessaire.
      // Vous pouvez également effectuer d'autres actions après la fin de l'animation.
      console.log('Animation terminée');
      position.setValue({ x: 0, y: 0 });
      
    });
  };

  return (
    <View style={{
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: animation ? 'red' : 'green',
    }}>
    <Animated.View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        transform: [
          { translateX: position.x },
          { translateY: position.y },
          { perspective: perspective },
          { rotateX: rotateX },
          { rotateZ: rotateZ },
        ],
      }}>
      <TouchableOpacity
        onPress={() => {
          anim();
        }}
        style={{
          height: 100,
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text>Bouge</Text>
      </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

ScreenTest.propTypes = {
  navigation: PropTypes.object.isRequired,
};

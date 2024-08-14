import * as React from 'react';
import {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../../assets/style/Styles';

//Home Screen
export const BtnNext = ({navigation, navigateTo, txt, background, top}) => {

  const [buttonPressed, setButtonPressed] = useState();

  let btnColor =
    background === 'white'
      ? require('../../assets/boutons/Bouton-Blanc.png')
      : background === 'Blue'
      ? require('../../assets/boutons/Bouton-Bleu.png')
      : background === 'black'
      ? require('../../assets/boutons/Bouton-Noir.png')
      : require('../../assets/boutons/Bouton-Blanc.png');

  return (
    <View style={[Styles.ViewBtn2, {top: top}]}>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => {
          setButtonPressed('Continuer');
          navigation.navigate(navigateTo);
        }}
        accessibilityLabel={txt}>
        <ImageBackground
          style={[
            {
              top: 0,
              width: 350,
              height: 58,
              resizeMode: 'contain',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
          source={
            buttonPressed === txt
              ? require('../../assets/boutons/Bouton-Rouge.png')
              : btnColor
          }>
          <Text
            style={[
              Styles.textBtn9,
              {
                zIndex: 1,
                color: buttonPressed === txt ? '#fff' : '#0019A7',
              },
            ]}>
            {txt}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

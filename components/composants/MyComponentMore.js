/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

const DefaultCode1 = ({setShowDefaultCode2}) => (
  <View
    style={{
      justifyContent: 'space-around',
      top: 61,
      right: 160,
    }}>
    <TouchableOpacity
      onPress={() => setShowDefaultCode2(true)} // Show the second code on click
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'gilroy',
          fontWeight: '700',
          color: '#0019A7',
          left: 165,
        }}>
        Bloquer
      </Text>
      <Image
        source={require('../../assets/images/fleche-bas.png')}
        style={{
          width: 20,
          height: 30,
          resizeMode: 'contain',
          bottom: 25,
          left: 375,
        }}
      />
      <View
        style={{
          bottom: 20,
          width: 238,
          height: 2,
          backgroundColor: '#0019A7',
          left: 165,
        }}
      />
    </TouchableOpacity>
  </View>
);

const DefaultCode2 = ({setShowDefaultCode2}) => (
  <View
    style={{
      justifyContent: 'space-around',
      top: 61,
      right: 160,
    }}>
    <TouchableOpacity onPress={() => setShowDefaultCode2(false)}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'gilroy',
          fontWeight: '700',
          color: '#0019A7',
          left: 165,
        }}>
        Bloquer
      </Text>
      <Image
        source={require('../../assets/images/fleche-haut-V.png')}
        style={{
          width: 20,
          height: 30,
          resizeMode: 'contain',
          bottom: 25,
          left: 375,
        }}
      />
      <View
        style={{
          bottom: 20,
          width: 238,
          height: 2,
          backgroundColor: '#0019A7',
          left: 165,
        }}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'gilroy',
          fontWeight: '700',
          color: '#0019A7',
          left: 185,
        }}>
        Bloquer Kolia ?
      </Text>
    </TouchableOpacity>
    <View
      style={{
        width: 238,
        height: 2,
        backgroundColor: '#000',
        top: 20,
        left: 165,
      }}
    />
    <TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'gilroy',
          fontWeight: '700',
          color: '#0019A7',
          left: 185,
          top: 30,
        }}>
        Liste des perssonnes{'\n'}bloqués
      </Text>
    </TouchableOpacity>
    <View
      style={{
        width: 238,
        height: 2.5,
        backgroundColor: '#0019A7',
        top: 50,
        left: 165,
      }}
    />
  </View>
);

const MyComponentMore = () => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);

  return (
    <>
      {showDefaultCode2 ? (
        <DefaultCode2 setShowDefaultCode2={setShowDefaultCode2} />
      ) : (
        <DefaultCode1 setShowDefaultCode2={setShowDefaultCode2} />
      )}
    </>
  );
};

export {MyComponentMore};

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
  <View style={{backgroundColor: '#ffffff', height: 30}}>
    <View style={{width: 320, height: 20}}>
      <TouchableOpacity
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          width: 160,
          height: 120,
          marginHorizontal: 130,
        }}
        onPress={() => setShowDefaultCode2(true)} // Show the second code on click
      >
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#0019A7',
            letterSpacing: 1,
          }}>
          Spotlight
        </Text>
        <Image
          source={require('../../assets/images/fleche-bas-p.png')}
          style={{
            width: 25,
            height: 23,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const DefaultCode2 = ({setShowDefaultCode2}) => (
  <ImageBackground
    source={require('../../assets/images/Rectangle-89.png')}
    style={{width: 400, height: 127}}>
    <View
      style={{
        width: 320,
        height: 20,
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          width: 160,
          height: 120,
          marginHorizontal: 130,
        }}
        onPress={() => setShowDefaultCode2(false)} // Show the first code on click
      >
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: 1,
          }}>
          Spotlight
        </Text>
        <Image
          source={require('../../assets/images/fleche-haut-p.png')}
          style={{
            width: 25,
            height: 23,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/Ellipse-99.png')}
          style={{
            top: 5,
            left: 5,
            width: 85,
            height: 85,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            top: -7.2,
            left: 5,
            fontSize: 13,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: 1,
          }}>
          Evenements
        </Text>
      </View>
      <View
        style={{
          top: 5,
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/Ellipse-96.png')}
          style={{
            borderRadius: 60,
            width: 60,
            height: 60,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: 1,
          }}>
          Alex
        </Text>
      </View>
      <View
        style={{
          top: 5,
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/Ellipse-97.png')}
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: 1,
          }}>
          Mike
        </Text>
      </View>
      <View
        style={{
          top: 5,
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/Ellipse-98.png')}
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: 1,
          }}>
          Beverly
        </Text>
      </View>
      <Image
        source={require('../../assets/images/fleche-drot-p.png')}
        style={{
          right: 10,
          width: 25,
          height: 23,
          resizeMode: 'contain',
        }}
      />
    </View>
  </ImageBackground>
);

const MyComponent = () => {
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

export {MyComponent};

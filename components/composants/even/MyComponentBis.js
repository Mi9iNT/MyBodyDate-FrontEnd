/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

const DefaultCode1 = ({setShowDefaultCode2, navigation}) => (
  <ImageBackground
    source={require('../../../assets/images/bg-parametres.png')}
    style={{flex: 1}}>
    <View
      style={{
        alignItems: 'center',
        top: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#0019A7',
          }}>
          Événements à venir
        </Text>
        <Image
          source={require('../../../assets/images/Line-107.png')}
          style={{
            right: 18,
            width: 195,
            height: 3,
            top: 10,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => setShowDefaultCode2(true)} // Show the second code on click
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#0019A7',
          }}>
          Mes événements
        </Text>
      </TouchableOpacity>
    </View>
    <View
      style={{
        left: 30,
        top: 50,
        justifyContent: 'space-around',
      }}>
      <Text
        style={{
          fontSize: 24,
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          color: '#0019A7',
        }}>
        Événements à venir
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          color: '#929EDE',
        }}>
        Mes prochaines dates
      </Text>
    </View>
    <View
      style={{
        alignItems: 'center',
        top: 80,
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <View>
        <Image
          source={require('../../../assets/images/Event1.png')}
          style={{
            width: 187,
            height: 152,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#FF84D7',
            marginBottom: 5,
          }}>
          Paris
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            marginBottom: 5,
          }}>
          Soirée rouge
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#FF84D7',
            marginBottom: 45,
          }}>
          30 Juin 2023
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Evenements Bio')}
          style={{
            left: 15,
          }}>
          <Image
            source={require('../../../assets/images/Reserver.png')}
            style={{
              width: 115,
              height: 33,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
    <View
      style={{
        alignItems: 'center',
        top: 100,
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <View>
        <Image
          source={require('../../../assets/images/Event2.png')}
          style={{
            width: 187,
            height: 152,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#D40000',
            marginBottom: 5,
          }}>
          Live
        </Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../../assets/images/PointR.png')}
            style={{
              width: 9,
              height: 9,
            }}
          />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
              marginBottom: 5,
            }}>
            Karaoké
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#FF84D7',
            marginBottom: 45,
          }}>
          2 Juin 2023
        </Text>
        <View
          style={{
            left: 15,
          }}>
          <Image
            source={require('../../../assets/images/Reserver.png')}
            style={{
              width: 115,
              height: 33,
            }}
          />
        </View>
      </View>
    </View>
  </ImageBackground>
);

const DefaultCode2 = ({setShowDefaultCode2}) => (
  <ImageBackground
    source={require('../../../assets/images/bg-parametres.png')}
    style={{flex: 1}}>
    <View
      style={{
        alignItems: 'center',
        top: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => setShowDefaultCode2(false)} // Show the first code on click
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#0019A7',
          }}>
          Événements à venir
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          color: '#0019A7',
        }}>
        Mes événements
      </Text>
    </View>
    <View
      style={{
        left: 30,
        top: 50,
        justifyContent: 'space-around',
      }}>
      <Text
        style={{
          fontSize: 24,
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          color: '#0019A7',
        }}>
        Mes événements
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          color: '#929EDE',
        }}>
        Mes prochaines dates
      </Text>
    </View>
    <Image
      source={require('../../../assets/images/Line-107.png')}
      style={{
        width: 195,
        height: 3,
        top: 50,
        position: 'absolute',
        right: 0,
      }}
    />
    <View
      style={{
        alignItems: 'center',
        top: 80,
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <View>
        <Image
          source={require('../../../assets/images/Event1.png')}
          style={{
            width: 187,
            height: 152,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 0, // Définir la marge supérieure pour remonter le bloc
          marginBottom: 10, // Définir la marge inférieure pour espacer le bloc
        }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#FF84D7',
            marginBottom: 5,
          }}>
          Paris
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            marginBottom: 5,
          }}>
          Soire rouge
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#FF84D7',
            marginBottom: 45,
          }}>
          30 Juin 2023
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#929EDE',
            textAlign: 'right',
          }}>
          Complet
        </Text>
      </View>
    </View>
  </ImageBackground>
);

const MyComponentBis = ({navigation}) => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);

  return (
    <>
      {showDefaultCode2 ? (
        <DefaultCode2 setShowDefaultCode2={setShowDefaultCode2} />
      ) : (
        <DefaultCode1 setShowDefaultCode2={setShowDefaultCode2} navigation={navigation} />
      )}
    </>
  );
};

export {MyComponentBis};

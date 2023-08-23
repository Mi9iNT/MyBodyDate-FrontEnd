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
  <>
    <View
      style={{
        alignItems: 'center',
        top: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          color: '#0019A7',
        }}>
        Likes reçus (21)
      </Text>
      <TouchableOpacity
        onPress={() => setShowDefaultCode2(true)} // Show the second code on click
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#0019A7',
          }}>
          Mes likes (5)
        </Text>
      </TouchableOpacity>
    </View>
    <Image
      source={require('../../assets/images/Line-107.png')}
      style={{
        width: 175,
        height: 2,
        top: 20,
        left: 20,
      }}
    />
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          top: 50,
        }}>
        <Image
          source={require('../../assets/images/Tous21.png')}
          style={{
            width: 120,
            height: 35,
            right: 3,
          }}
        />
        <Image
          source={require('../../assets/images/Proximite12.png')}
          style={{
            width: 139,
            height: 33,
            top: 1,
          }}
        />
        <Image
          source={require('../../assets/images/Nouveaute9.png')}
          style={{
            width: 126,
            height: 31,
            left: 3,
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignSelf: 'center',
          top: 90,
        }}>
        <View
          style={{
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <Image
            source={require('../../assets/images/CaptureFlou.png')}
            style={{
              width: 150,
              height: 163,
              right: 15,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
              right: 15,
            }}>
            Il y a 21 minutes
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <Image
            source={require('../../assets/images/CaptureFlou2.png')}
            style={{
              width: 150,
              height: 163,
              left: 15,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
              left: 15,
            }}>
            Il y a 46 minutes
          </Text>
        </View>
      </View>
    </View>
  </>
);

const DefaultCode2 = ({setShowDefaultCode2}) => (
  <>
    <View
      style={{
        alignItems: 'center',
        top: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => setShowDefaultCode2(false)} // Show the first code on click
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#0019A7',
          }}>
          Likes reçus (21)
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          color: '#0019A7',
        }}>
        Mes likes (5)
      </Text>
    </View>
    <Image
      source={require('../../assets/images/Line-107.png')}
      style={{
        width: 175,
        height: 2,
        top: 20,
        left: 190,
      }}
    />
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          top: 50,
        }}>
        <Image
          source={require('../../assets/images/Tous5.png')}
          style={{
            width: 120,
            height: 35,
            right: 3,
          }}
        />
        <Image
          source={require('../../assets/images/Proximite2.png')}
          style={{
            width: 139,
            height: 33,
            top: 1,
          }}
        />
        <Image
          source={require('../../assets/images/Nouveaute3.png')}
          style={{
            width: 126,
            height: 31,
            left: 3,
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <View
          style={{
            justifyContent: 'space-around',
            alignSelf: 'center',
            top: 90,
          }}>
          <Image
            source={require('../../assets/images/Cel.png')}
            style={{
              width: 150,
              height: 163,
              right: 15,
            }}
          />
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              right: 35,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
              }}>
              Céline
            </Text>
            <Image
              source={require('../../assets/images/quality-2.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              right: 15,
            }}>
            31 ans, Paris
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Gilroy',
              fontWeight: '700',
              color: '#9424FA',
              right: 15,
            }}>
            Cercle d'amis
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
              right: 15,
            }}>
            Il y a 21 minutes
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            alignSelf: 'center',
            top: 98,
          }}>
          <Image
            source={require('../../assets/images/Bas.png')}
            style={{
              width: 150,
              height: 163,
              left: 15,
            }}
          />
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              right: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
              }}>
              Bastien
            </Text>
            <Image
              source={require('../../assets/images/quality-2.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              left: 15,
            }}>
            37 ans, Paris
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Gilroy',
              fontWeight: '700',
              color: '#FF84D7',
              left: 15,
            }}>
            Rencontre{'\n'}amoureuse
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
              left: 15,
            }}>
            Il y a 53 minutes
          </Text>
        </View>
      </View>
    </View>
  </>
);

const MyComponentLike = () => {
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

export {MyComponentLike};

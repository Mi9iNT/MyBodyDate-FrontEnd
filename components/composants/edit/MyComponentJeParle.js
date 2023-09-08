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

const DefaultCode1 = ({setShowDefaultCode2}) => (
  <>
    <View
      style={{
        alignItems: 'center',
        top: 140,
      }}>
      <TouchableOpacity
        onPress={() => setShowDefaultCode2(true)} // Show the second code on click
        style={{justifyContent: 'space-around', flexDirection: 'row'}}>
        <ImageBackground
          source={require('../../../assets/images/EncadrerEditRP.png')}
          style={{
            width: 282,
            height: 52,
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 15,
              color: '#9424FA',
              textAlign: 'center',
              top: 13,
            }}>
            Je Parle
          </Text>
        </ImageBackground>
        <Image
          source={require('../../../assets/images/FlecheEditRP.png')}
          style={{
            width: 19,
            height: 16,
            left: 20,
            top: 15,
          }}/>
      </TouchableOpacity>
    </View>
    <Text
      style={{
        fontFamily: 'Comfortaa',
        fontWeight: '700',
        fontSize: 12,
        color: '#9424FA',
        left: 30,
        top: 450,
      }}>
      Choix multiples.
    </Text>
  </>
);

const DefaultCode2 = ({setShowDefaultCode2}) => (
  <>
    <View
      style={{
        alignItems: 'center',
        top: 30,
        borderWidth: 1,
        borderColor: '#9424FA',
        borderRadius: 25, // Adjust the border radius as needed
        paddingBottom: 220, // Increase this value to move the bottom border down
        marginLeft: 41,
        marginRight: 72,
        left:20,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setShowDefaultCode2(false)} // Show the first code on click
        >
          <ImageBackground
            source={require('../../../assets/images/EncadrerEditRP.png')}
            style={{
              width: 282,
              height: 52,
            }}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                color: '#9424FA',
                textAlign: 'center',
                top: 13,
              }}>
              Je Parle
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 10,
            }}>
            Français
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 30,
            }}>
            Espagnol
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 50,
            }}>
            Néerlandais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 70,
            }}>
            Portugais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 90,
            }}>
            Polonais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 110,
            }}>
            Chinois
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 130,
            }}>
            Anglais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 150,
            }}>
            Allemand
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 170,
            }}>
            Italien
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 190,
            }}>
            Arabe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 210,
            }}>
            Grec
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#9424FA',
              textAlign: 'center',
              top: 220,
            }}>
            Japonnais
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <Text
      style={{
        fontFamily: 'Comfortaa',
        fontWeight: '700',
        fontSize: 12,
        color: '#9424FA',
        left: 30,
        top: 150,
      }}>
      Choix multiples.
    </Text>
  </>
);

const MyComponentJeParle = () => {
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

export {MyComponentJeParle};

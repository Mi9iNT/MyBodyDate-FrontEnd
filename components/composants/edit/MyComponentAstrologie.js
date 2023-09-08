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
        alignSelf: 'center',
        top: 140,
      }}>
      <TouchableOpacity
        onPress={() => setShowDefaultCode2(true)} // Show the second code on click
      >
        <Image
          source={require('../../../assets/images/SigneAstrologie.png')}
          style={{
            width: 309,
            height: 51,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
    </View>
    <Text
      style={{
        fontFamily: 'Comfortaa',
        fontWeight: '700',
        fontSize: 12,
        color: '#0019A7',
        left: 30,
        top: 450,
      }}>
      Choix unique.
    </Text>
  </>
);

const DefaultCode2 = ({setShowDefaultCode2}) => (
  <>
    <View
      style={{
        alignItems: 'center',
        top: 140,
        borderWidth: 1,
        borderColor: '#0019A7',
        borderRadius: 25, // Adjust the border radius as needed
        paddingBottom: 170, // Increase this value to move the bottom border down
        marginLeft: 40,
        marginRight: 75,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setShowDefaultCode2(false)} // Show the first code on click
        >
          <ImageBackground
            source={require('../../../assets/images/SigneAstrologie1.png')}
            style={{
              width: 308,
              height: 51,
              left: 17,
            }}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 15,
                color: '#0019A7',
                textAlign: 'center',
                right: 10,
                top:10,
              }}>
              Signe astrologique
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 20,
            }}>
            Bélier
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 40,
            }}>
            Taureau
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 60,
            }}>
            Gémeaux
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 80,
            }}>
            Cancer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 100,
            }}>
            Lion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 120,
            }}>
            Vierge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 140,
            }}>
            Balance
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
);

const MyComponentAstrologie = () => {
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

export {MyComponentAstrologie};

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
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
      >
        <Image
          source={require('../../../assets/images/SelectionnerOrigine.png')}
          style={{
            width: 309,
            height: 51,
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
      Choix multiples.
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
          <Image
            source={require('../../../assets/images/SelectionnerOrigine1.png')}
            style={{
              width: 308,
              height: 51,
              left: 17,
            }}
          />
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
            Asiatique

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
            Blanc/Caucasien.ne
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
            Indien.ne
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
            Latino/Hispanique
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
            Noir.e/Africain.ne
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
            Originaire du Moyen Orient
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
            Métis.se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
);

const MyComponentOrigine = () => {
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

export {MyComponentOrigine};

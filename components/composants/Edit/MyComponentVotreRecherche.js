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
              color: '#000',
              textAlign: 'center',
              top: 13,
            }}>
            Recherche d'un emploi
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
        color: '#000',
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
        alignSelf: 'center',
        alignItems: 'center',
        top: 100,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 25, // Adjust the border radius as needed
        paddingBottom: 195, // Increase this value to move the bottom border down
        marginLeft: 41,
        marginRight: 72,
        left: 20,
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
                color: '#000',
                textAlign: 'center',
                top: 13,
              }}>
              Recherche d'un emploi
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 10,
            }}>
            Pas important

          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 30,
            }}>
            Moins de 10 000 €
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 50,
            }}>
            10001 - 20000 €
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 70,
            }}>
            20 000 € - 30 000 €
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 90,
            }}>
            30001 - 40000 €
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 110,
            }}>
            40001 - 50000 €
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 130,
            }}>
            50001 - 60000 €
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 150,
            }}>
            60001 - 80000 €
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 170,
            }}>
            80 001 - 100 000 €
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 190,
            }}>
            Plus de 100 0001/
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <Text
      style={{
        fontFamily: 'Comfortaa',
        fontWeight: '700',
        fontSize: 12,
        color: '#000',
        left: 30,
        top: 220,
      }}>
      Choix unique.
    </Text>
  </>
);

const MyComponentVotreRecherche = () => {
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

export {MyComponentVotreRecherche};

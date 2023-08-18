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
      >
        <Image
          source={require('../../assets/images/ActSport.png')}
          style={{
            width: 308,
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
        paddingBottom: 100, // Increase this value to move the bottom border down
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
            source={require('../../assets/images/ActSport1.png')}
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
            Souvent
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
            Parfois
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
            Presque jamais
          </Text>
        </TouchableOpacity>
      </View>
    </View>
      <Text
        style={{
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          fontSize: 12,
          color: '#0019A7',
          left:30,
          top: 150,
        }}>
        Choix unique.
      </Text>
  </>
);

const MyComponentReligion = () => {
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

export {MyComponentReligion};

// /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable no-unused-vars */
// import React, {useState} from 'react';
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   Image,
//   ImageBackground,
// } from 'react-native';

// const DefaultCode1 = ({setShowDefaultCode2}) => (
//   <>
//     <View
//       style={{
//         alignItems: 'center',
//         top: 140,
//       }}>
//       <TouchableOpacity
//         onPress={() => setShowDefaultCode2(true)} // Show the second code on click
//       >
//         <Image
//           source={require('../../assets/images/Religion.png')}
//           style={{
//             width: 308,
//             height: 51,
//           }}
//         />
//       </TouchableOpacity>
//     </View>
//     <View
//       style={{
//         flexDirection: 'row',
//         alignItems: 'center',
//         top: 400,
//         left:30,
//       }}>
//       <Text
//         style={{
//           fontFamily: 'Comfortaa',
//           fontWeight: '700',
//           fontSize: 16,
//           color: '#000',
//         }}>
//         Non pratiquant
//       </Text>
//       <Image source={require('../../assets/images/OnOuOff.png')}
//           style={{
//             left: 20,
//           }}
//         />
//       <Text
//         style={{
//           fontFamily: 'Comfortaa',
//           fontWeight: '700',
//           fontSize: 16,
//           color: '#000',
//           left: 40,
//         }}>
//         Pratiquant
//       </Text>
//     </View>
//     <Text
//       style={{
//         fontFamily: 'Comfortaa',
//         fontWeight: '700',
//         fontSize: 12,
//         color: '#0019A7',
//         left: 30,
//         top: 450,
//       }}>
//       Choix unique.
//     </Text>
//   </>
// );

// const DefaultCode2 = ({setShowDefaultCode2}) => (
//   <>
//     <View
//   style={{
//     alignItems: 'center',
//     top: 140,
//     borderWidth: 1,
//     borderColor: '#0019A7',
//     borderRadius: 25, // Adjust the border radius as needed
//     paddingBottom: 170, // Increase this value to move the bottom border down
//     marginLeft: 40,
//     marginRight: 75,
//   }}>
//   <View
//     style={{
//       alignItems: 'center',
//     }}>
//       <TouchableOpacity
//         onPress={() => setShowDefaultCode2(false)} // Show the first code on click
//       >
//         <Image
//           source={require('../../assets/images/Religion1.png')}
//           style={{
//             width: 282,
//             height: 51,
//             left: 17,
//           }}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text
//           style={{
//             fontFamily: 'Comfortaa',
//             fontWeight: '700',
//             fontSize: 16,
//             color: '#0019A7',
//             textAlign: 'center',
//             top: 20,
//           }}>
//           Chretienne
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text
//           style={{
//             fontFamily: 'Comfortaa',
//             fontWeight: '700',
//             fontSize: 16,
//             color: '#0019A7',
//             textAlign: 'center',
//             top: 40,
//           }}>
//           Hindouisme
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text
//           style={{
//             fontFamily: 'Comfortaa',
//             fontWeight: '700',
//             fontSize: 16,
//             color: '#0019A7',
//             textAlign: 'center',
//             top: 60,
//           }}>
//           Jaïnisme
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text
//           style={{
//             fontFamily: 'Comfortaa',
//             fontWeight: '700',
//             fontSize: 16,
//             color: '#0019A7',
//             textAlign: 'center',
//             top: 80,
//           }}>
//           Judaïsme
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text
//           style={{
//             fontFamily: 'Comfortaa',
//             fontWeight: '700',
//             fontSize: 16,
//             color: '#0019A7',
//             textAlign: 'center',
//             top: 100,
//           }}>
//           Mormonisme
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text
//           style={{
//             fontFamily: 'Comfortaa',
//             fontWeight: '700',
//             fontSize: 16,
//             color: '#0019A7',
//             textAlign: 'center',
//             top: 120,
//           }}>
//           Saints des derniers jours
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text
//           style={{
//             fontFamily: 'Comfortaa',
//             fontWeight: '700',
//             fontSize: 16,
//             color: '#0019A7',
//             textAlign: 'center',
//             top: 140,
//           }}>
//           Islam
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text
//           style={{
//             fontFamily: 'Comfortaa',
//             fontWeight: '700',
//             fontSize: 16,
//             color: '#0019A7',
//             textAlign: 'center',
//             top: 160,
//           }}>
//           Zoroastrisme
//         </Text>
//       </TouchableOpacity>
//     </View>
//     </View>
//   </>
// );

// const MyComponentReligion = () => {
//   const [showDefaultCode2, setShowDefaultCode2] = useState(false);

//   return (
//     <>
//       {showDefaultCode2 ? (
//         <DefaultCode2 setShowDefaultCode2={setShowDefaultCode2} />
//       ) : (
//         <DefaultCode1 setShowDefaultCode2={setShowDefaultCode2} />
//       )}
//     </>
//   );
// };

// export {MyComponentReligion};

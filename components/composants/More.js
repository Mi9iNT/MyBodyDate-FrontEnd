/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import Styles from '../../assets/style/Styles';
import {useNavigation} from '@react-navigation/native';

export const More = () => {
  const navigation = useNavigation();

  // Constantes concernant la Modal de more
  const [showModal, setShowModal] = useState(false);

  // Fonction pour ouvrir/fermer la modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={toggleModal}>
        {/* Contenu de la modal */}
        <View
          style={{
            top: 61,
            left: 94,
            width: 322,
            height: 804,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            borderWidth: 1,
            borderColor: '#0019A7',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            {/* Blocquer */}
            <View
              style={{
                position: 'absolute',
                justifyContent: 'space-around',
                top: 61,
                right: 210,
                width: 236,
                height: 65,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                    textAlign: 'right',
                  }}>
                  Bloquer
                </Text>
                <View
                  style={{
                    width: 20,
                    height: 30,
                  }}>
                  <Image
                    source={require('../../assets/images/fleche-haut-V.png')}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                      top: -25,
                      left: 375,
                    }}
                  />
                  <View
                    style={{
                      top: -20,
                      width: 238,
                      height: 2,
                      backgroundColor: '#0019A7',
                      left: 165,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 120,
                right: 130,
                width: 236,
                height: 65,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                    textAlign: 'right',
                  }}>
                  Bloquer Kolia ?
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 238,
                  height: 2,
                  backgroundColor: '#0019A7',
                  top: 20,
                  left: 85,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 190,
                right: 30,
                width: 236,
                height: 65,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                  }}>
                  Liste des perssonnes{'\n'}bloqués
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 238,
                  height: 2.5,
                  backgroundColor: '#0019A7',
                  top: 20,
                  right: 15,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 275,
                right: 210,
                width: 236,
                height: 65,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                    textAlign: 'right',
                  }}>
                  Signaler
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  position: 'absolute',
                  left: 375,
                  width: 20,
                  height: 30,
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/fleche-bas.png')}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 238,
                  height: 2.5,
                  backgroundColor: '#0019A7',
                  top: 10,
                  left: 160,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 320,
                right: 111,
                width: 236,
                height: 65,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                    textAlign: 'right',
                  }}>
                  Copier l'ID du profil
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 238,
                  height: 2.5,
                  backgroundColor: '#0019A7',
                  top: 10,
                  left: 60,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 370,
                right: 125,
                width: 236,
                height: 65,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                    textAlign: 'right',
                  }}>
                  Partager à un ami
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Bouton "Annuler" */}
          <TouchableOpacity onPress={toggleModal}>
            <View
              style={{
                position: 'absolute',
                top: 600,
                left: 73,
                width: 196,
                height: 24,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'gilroy',
                  fontWeight: '700',
                  color: '#0019A7',
                }}>
                Annuler
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 600,
                left: 46,
                width: 18,
                height: 30,
              }}>
              <Image
                source={require('../../assets/images/croix.png')}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Image "Ellipse_signalement.png" */}
      <TouchableOpacity onPress={toggleModal}>
        <Image
          source={require('../../assets/images/Ellipse_signalement.png')}
          style={{width: 50, height: 50, top: -40, left: 310}}
          />
      </TouchableOpacity>
    </View>
  );
};

export default More;

// /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable no-unused-vars */
// import React, {useState} from 'react';
// import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
// import Styles from '../../assets/style/Styles';
// import {useNavigation} from '@react-navigation/native';

// export const More = () => {
//   const navigation = useNavigation();

//   // Constantes concernant la Modal de more
//   const [showModal, setShowModal] = useState(false);

//   // Fonction pour ouvrir/fermer la modal
//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <View style={{flexDirection: 'row', alignItems: 'center'}}>
//       {/* Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={showModal}
//         onRequestClose={toggleModal}>
//         {/* Contenu de la modal */}
//         <View
//           style={{
//             position: 'absolute',
//             top: 61,
//             left: 94,
//             width: 322,
//             height: 804,
//             backgroundColor: '#FFFFFF',
//             borderTopLeftRadius: 50,
//             borderBottomLeftRadius: 50,
//             borderWidth: 1,
//             borderColor: '#0019A7',
//           }}>
//           {/*Bloquer*/}
//           <View
//             style={{
//               position: 'absolute',
//               top: 61,
//               right: 210,
//               width: 236,
//               height: 65,
//             }}>
//             <TouchableOpacity>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontFamily: 'gilroy',
//                   fontWeight: '700',
//                   color: '#0019A7',
//                   textAlign: 'right',
//                 }}>
//                 Bloquer
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               position: 'absolute',
//               top: 61,
//               right: 50,
//               width: 20,
//               height: 30,
//             }}>
//             <TouchableOpacity>
//               <Image
//                 source={require('../../assets/images/fleche-bas.png')}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   resizeMode: 'contain',
//                 }}
//               />
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               height: 2,
//               backgroundColor: '#0019A7',
//               marginVertical: 110,
//               marginHorizontal: 30,
//             }}
//           />
//           <View
//             style={{
//               position: 'absolute',
//               top: 122,
//               right: 210,
//               width: 236,
//               height: 65,
//             }}>
//             <TouchableOpacity>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontFamily: 'gilroy',
//                   fontWeight: '700',
//                   color: '#0019A7',
//                   textAlign: 'right',
//                 }}>
//                 Signaler
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               position: 'absolute',
//               top: 122,
//               right: 50,
//               width: 20,
//               height: 30,
//             }}>
//             <TouchableOpacity>
//               <Image
//                 source={require('../../assets/images/fleche-bas.png')}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   resizeMode: 'contain',
//                 }}
//               />
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               height: 2,
//               backgroundColor: '#0019A7',
//               marginVertical: -55,
//               marginHorizontal: 30,
//             }}
//           />
//           <View
//             style={{
//               position: 'absolute',
//               top: 180,
//               right: 111,
//               width: 236,
//               height: 65,
//             }}>
//             <TouchableOpacity>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontFamily: 'gilroy',
//                   fontWeight: '700',
//                   color: '#0019A7',
//                   textAlign: 'right',
//                 }}>
//                 Copier l'ID du profil
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               height: 2,
//               backgroundColor: '#0019A7',
//               marginVertical: 110,
//               marginHorizontal: 30,
//             }}
//           />
//           <View
//             style={{
//               position: 'absolute',
//               top: 240,
//               right: 121,
//               width: 236,
//               height: 65,
//             }}>
//             <TouchableOpacity>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontFamily: 'gilroy',
//                   fontWeight: '700',
//                   color: '#0019A7',
//                   textAlign: 'right',
//                 }}>
//                 Partager à un ami
//               </Text>
//             </TouchableOpacity>
//           </View>
//           {/* Bouton "Annuler" */}
//           <TouchableOpacity onPress={toggleModal}>
//             <View
//               style={{
//                 position: 'absolute',
//                 top: 265,
//                 left: 73,
//                 width: 196,
//                 height: 24,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontFamily: 'gilroy',
//                   fontWeight: '700',
//                   color: '#0019A7',
//                 }}>
//                 Annuler
//               </Text>
//             </View>
//             <View
//               style={{
//                 position: 'absolute',
//                 top: 265,
//                 left: 46,
//                 width: 18,
//                 height: 30,
//               }}>
//               <Image
//                 source={require('../../assets/images/croix.png')}
//                 style={{width: '100%', height: '100%', resizeMode: 'contain'}}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>
//       </Modal>

//       {/* Image "Ellipse_signalement.png" */}
//       <TouchableOpacity onPress={toggleModal}>
//         <Image
//           source={require('../../assets/images/Ellipse_signalement.png')}
//           style={{width: 50, height: 50, top: -40, left: 310}}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default More;

// /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable no-unused-vars */
// import React, {useState} from 'react';
// import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
// import Styles from '../../assets/style/Styles';
// import {useNavigation} from '@react-navigation/native';

// export const More = () => {
//   const navigation = useNavigation();

//   // Constantes concernant la Modal de more
//   const [showModal, setShowModal] = useState(false);

//   // Fonction pour ouvrir/fermer la modal
//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <View style={{flexDirection: 'row', alignItems: 'center'}}>
//       {/* Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={showModal}
//         onRequestClose={toggleModal}>
//         {/* Contenu de la modal */}
//         <View
//           style={{
//             position: 'absolute',
//             top: 61,
//             left: 94,
//             width: 322,
//             height: 804,
//             backgroundColor: '#FFFFFF',
//             borderTopLeftRadius: 50,
//             borderBottomLeftRadius: 50,
//             borderWidth: 1,
//             borderColor: '#0019A7',
//           }}>
//           {/* Bloquer */}
//           <View
//             style={{
//               position: 'absolute',
//               top: 61,
//               right: 210,
//               width: 236,
//               height: 65,
//             }}>
//             <TouchableOpacity>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontFamily: 'gilroy',
//                   fontWeight: '700',
//                   color: '#0019A7',
//                   textAlign: 'right',
//                 }}>
//                 Bloquer
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               position: 'absolute',
//               top: 61,
//               right: 50,
//               width: 20,
//               height: 30,
//             }}>
//             <TouchableOpacity>
//               <Image
//                 source={require('../../assets/images/fleche-bas.png')}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   resizeMode: 'contain',
//                 }}
//               />
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               height: 2,
//               backgroundColor: '#0019A7',
//               marginVertical: 110,
//               marginHorizontal: 30,
//             }}
//           />
//           <View
//             style={{
//               position: 'absolute',
//               top: 122,
//               right: 210,
//               width: 236,
//               height: 65,
//             }}>
//             <TouchableOpacity>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontFamily: 'gilroy',
//                   fontWeight: '700',
//                   color: '#0019A7',
//                   textAlign: 'right',
//                 }}>
//                 Signaler
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               position: 'absolute',
//               top: 122,
//               right: 50,
//               width: 20,
//               height: 30,
//             }}>
//             <TouchableOpacity>
//               <Image
//                 source={require('../../assets/images/fleche-bas.png')}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   resizeMode: 'contain',
//                 }}
//               />
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               height: 2,
//               backgroundColor: '#0019A7',
//               marginVertical: -55,
//               marginHorizontal: 30,
//             }}
//           />
//           <View
//             style={{
//               position: 'absolute',
//               top: 180,
//               right: 111,
//               width: 236,
//               height: 65,
//             }}>
//             <TouchableOpacity>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontFamily: 'gilroy',
//                   fontWeight: '700',
//                   color: '#0019A7',
//                   textAlign: 'right',
//                 }}>
//                 Copier l'ID du profil
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               height: 2,
//               backgroundColor: '#0019A7',
//               marginVertical: 110,
//               marginHorizontal: 30,
//             }}
//           />
//           <View
//             style={{
//               position: 'absolute',
//               top: 240,
//               right: 121,
//               width: 236,
//               height: 65,
//             }}>
//             <TouchableOpacity>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontFamily: 'gilroy',
//                   fontWeight: '700',
//                   color: '#0019A7',
//                   textAlign: 'right',
//                 }}>
//                 Partager à un ami
//               </Text>
//             </TouchableOpacity>
//           </View>
//           {/* Bouton "Annuler" */}
//           <TouchableOpacity onPress={toggleModal}>
//             <View
//               style={{
//                 position: 'absolute',
//                 top: 265,
//                 left: 73,
//                 width: 196,
//                 height: 24,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontFamily: 'gilroy',
//                   fontWeight: '700',
//                   color: '#0019A7',
//                 }}>
//                 Annuler
//               </Text>
//             </View>
//             <View
//               style={{
//                 position: 'absolute',
//                 top: 265,
//                 left: 46,
//                 width: 18,
//                 height: 30,
//               }}>
//               <Image
//                 source={require('../../assets/images/croix.png')}
//                 style={{width: '100%', height: '100%', resizeMode: 'contain'}}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>
//       </Modal>

//       {/* Image "Ellipse_signalement.png" */}
//       <TouchableOpacity onPress={toggleModal}>
//         <Image
//           source={require('../../assets/images/Ellipse_signalement.png')}
//           style={{width: 50, height: 50, top: -40, left: 310}}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default More;

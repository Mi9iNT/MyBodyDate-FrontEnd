/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
 import React, { useEffect, useState } from 'react';
 import { StatusBar, TextInput } from 'react-native';
 import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
 import PropTypes from 'prop-types';
 import { MenuSlide } from '../../composants/MenuSlide';
 import Styles from '../../../assets/style/Styles';

 export const ProfilMeCAfirst = ({ route, navigation }) => {
     const routeChoice = route.params?.routeName ?? '';
     const consentement = route.params?.userConsent ?? '';
     const loveCoach = route.params?.loveCoach ?? '';
     const userEmail = route.params?.userEmail ?? '';
     const userPhone = route.params?.userPhone ?? '';
     const userCity = route.params?.userCity ?? '';
     const accesPosition = route.params?.accesPosition ?? '';
     const genre = route.params?.genre ?? '';
     const userBirth = route.params?.userBirth ?? '';
     const userSize = route.params?.userSize ?? '';
     const userLang = route.params?.userLang ?? '';
     const userSituation = route.params?.userSituation ?? '';
     const userOrientation = route.params?.userOrientation ?? '';
     const userRecherche1 = route.params?.userRecherche1 ?? '';
     const userRecherche2 = route.params?.userRecherche2 ?? '';
     const userAffinites = route.params?.userAffinites ?? '';
     const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
     const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
     const userPrenom = route.params?.userPrenom ?? '';
     const userVoice = route.params?.userVoice ?? '';

   const [modalVisible, setModalVisible] = useState(false);
   const [addProVisible, setAddProVisible] = useState([false, false, false, false, false, false]);

   const handleAddProToggle = (index) => {
     const newArray = [...addProVisible];
     newArray[index] = !newArray[index];
     setAddProVisible(newArray);
   };

   useEffect(() => {
     StatusBar.setHidden(true);
     return () => {
       StatusBar.setHidden(false);
     };
   }, []);

   return (
     <View style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
       <View
         style={{
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'space-between',
           paddingHorizontal: 20,
           paddingVertical: 10,
         }}>
         <MenuSlide />
       </View>
       <View style={{marginTop: 70, marginLeft: 20}}>
         <Text
           style={{
             fontFamily: 'Gilroy',
             fontWeight: '700',
             fontSize: 22,
             lineHeight: 26,
             color: '#9424FA',
           }}>
           Quelques mots sur moi
         </Text>
         <Text
           style={{
             fontFamily: 'Comfortaa',
             fontWeight: '500',
             fontSize: 16,
             lineHeight: 18,
             color: '#9424FA',
             marginTop: 10,
           }}>
           Lorem
         </Text>
         <View
           style={{
             borderWidth: 1,
             borderColor: '#E0BDFF',
             borderRadius: 30,
             marginTop: 10,
             padding: 10,
           }}>
           <TextInput
             placeholder="Entrez du texte"
             style={{color: '#9424FA', paddingRight: 10, textAlign: 'center'}}
           />
         </View>
       </View>
       <View style={{marginTop: 50, marginLeft: 20}}>
         <Text
           style={{
             fontFamily: 'Gilroy',
             fontWeight: '700',
             fontSize: 22,
             lineHeight: 26,
             color: '#9424FA',
           }}>
           Mes infos de base
         </Text>
         <View
           style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
           <Image
             source={require('../../../assets/images/btn_diplome.png')}
             style={{marginRight: 10}}
           />
           <Text
             style={{
               fontFamily: 'Comfortaa',
               fontWeight: '500',
               fontSize: 16,
               lineHeight: 18,
               color: '#9424FA',
             }}>
             Niveau d'étude
           </Text>
           <TouchableOpacity
             onPress={() => handleAddProToggle(0)}
             style={{marginLeft: 'auto', marginRight: 10}}>
             <Image
               source={
                 addProVisible[0]
                   ? require('../../../assets/images/add_plein.png')
                   : require('../../../assets/images/add_vide.png')
               }
             />
           </TouchableOpacity>
         </View>
         <View
           style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
           <Image
             source={require('../../../assets/images/language.png')}
             style={{marginRight: 10}}
           />
           <Text
             style={{
               fontFamily: 'Comfortaa',
               fontWeight: '500',
               fontSize: 16,
               lineHeight: 18,
               color: '#9424FA',
             }}>
             Je parle couramment...
           </Text>
           <TouchableOpacity
             onPress={() => handleAddProToggle(1)}
             style={{marginLeft: 'auto', marginRight: 10}}>
             <Image
               source={
                 addProVisible[1]
                   ? require('../../../assets/images/add_plein.png')
                   : require('../../../assets/images/add_vide.png')
               }
             />
           </TouchableOpacity>
         </View>
         <View
           style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
           <Image
             source={require('../../../assets/images/activité.png')}
             style={{marginRight: 10}}
           />
           <Text
             style={{
               fontFamily: 'Comfortaa',
               fontWeight: '500',
               fontSize: 16,
               lineHeight: 18,
               color: '#9424FA',
             }}>
             Mon activité favorite...
           </Text>
           <TouchableOpacity
             onPress={() => handleAddProToggle(2)}
             style={{marginLeft: 'auto', marginRight: 10}}>
             <Image
               source={
                 addProVisible[2]
                   ? require('../../../assets/images/add_plein.png')
                   : require('../../../assets/images/add_vide.png')
               }
             />
           </TouchableOpacity>
         </View>
         <View
           style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
           <Image
             source={require('../../../assets/images/cuisine.png')}
             style={{marginRight: 10}}
           />
           <Text
             style={{
               fontFamily: 'Comfortaa',
               fontWeight: '500',
               fontSize: 16,
               lineHeight: 18,
               color: '#9424FA',
             }}>
             Ma cuisine favorite...
           </Text>
           <TouchableOpacity
             onPress={() => handleAddProToggle(3)}
             style={{marginLeft: 'auto', marginRight: 10}}>
             <Image
               source={
                 addProVisible[3]
                   ? require('../../../assets/images/add_plein.png')
                   : require('../../../assets/images/add_vide.png')
               }
             />
           </TouchableOpacity>
         </View>
         <View
           style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
           <Image
             source={require('../../../assets/images/amitié.png')}
             style={{marginRight: 10}}
           />
           <Text
             style={{
               fontFamily: 'Comfortaa',
               fontWeight: '500',
               fontSize: 16,
               lineHeight: 18,
               color: '#9424FA',
             }}>
             Pour moi le plus important en {'\n'}amitié...
           </Text>
           <TouchableOpacity
             onPress={() => handleAddProToggle(4)}
             style={{marginLeft: 'auto', marginRight: 10}}>
             <Image
               source={
                 addProVisible[4]
                   ? require('../../../assets/images/add_plein.png')
                   : require('../../../assets/images/add_vide.png')
               }
             />
           </TouchableOpacity>
         </View>
         <View
           style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
           <Image
             source={require('../../../assets/images/popcorn.png')}
             style={{marginRight: 10}}
           />
           <Text
             style={{
               fontFamily: 'Comfortaa',
               fontWeight: '500',
               fontSize: 16,
               lineHeight: 18,
               color: '#9424FA',
             }}>
             Les films que je ne me lasse {'\n'}pas de revoir...
           </Text>
           <TouchableOpacity
             onPress={() => handleAddProToggle(5)}
             style={{marginLeft: 'auto', marginRight: 10}}>
             <Image
               source={
                 addProVisible[5]
                   ? require('../../../assets/images/add_plein.png')
                   : require('../../../assets/images/add_vide.png')
               }
             />
           </TouchableOpacity>
         </View>
       </View>
     </View>
   );
 };

 ProfilMeCAfirst.propTypes = {
   route: PropTypes.object.isRequired,
   navigation: PropTypes.object.isRequired,
 };


//  /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable no-unused-vars */
// import React, {useEffect, useState} from 'react';
// import {StatusBar, TextInput} from 'react-native';
// import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
// import PropTypes from 'prop-types';
// import {MenuSlide} from '../../composants/MenuSlide';
// import Styles from '../../../assets/style/Styles';

// export const ProfilMeCA = ({route, navigation}) => {
//   const routeChoice = route.params?.routeName ?? '';
//   const consentement = route.params?.userConsent ?? '';
//   const loveCoach = route.params?.loveCoach ?? '';
//   const userEmail = route.params?.userEmail ?? '';
//   const userPhone = route.params?.userPhone ?? '';
//   const userCity = route.params?.userCity ?? '';
//   const accesPosition = route.params?.accesPosition ?? '';
//   const genre = route.params?.genre ?? '';
//   const userBirth = route.params?.userBirth ?? '';
//   const userSize = route.params?.userSize ?? '';
//   const userLang = route.params?.userLang ?? '';
//   const userSituation = route.params?.userSituation ?? '';
//   const userOrientation = route.params?.userOrientation ?? '';
//   const userRecherche1 = route.params?.userRecherche1 ?? '';
//   const userRecherche2 = route.params?.userRecherche2 ?? '';
//   const userAffinites = route.params?.userAffinites ?? '';
//   const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
//   const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
//   const userPrenom = route.params?.userPrenom ?? '';
//   const userVoice = route.params?.userVoice ?? '';

//   const [modalVisible, setModalVisible] = useState(false);
//   const [addProVisible, setAddProVisible] = useState([
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]);

//   const handleAddProToggle = index => {
//     const newArray = [...addProVisible];
//     newArray[index] = !newArray[index];
//     setAddProVisible(newArray);
//   };

//   useEffect(() => {
//     StatusBar.setHidden(true);
//     return () => {
//       StatusBar.setHidden(false);
//     };
//   }, []);

//   return (
//     <View
//       style={{flex: 1, backgroundColor: '#fff'}}>
//       <MenuSlide />
//       <ScrollView>
//         <View>
//           <Text
//             style={{
//               fontFamily: 'Gilroy',
//               fontWeight: '700',
//               fontSize: 24,
//               color: '#9424FA',
//               alignSelf: 'center',
//               textAlign: 'center',
//             }}>
//             Profil édité
//           </Text>
//         </View>
//         <View style={{left: 20, top: 20}}>
//           <Text
//             style={{
//               fontFamily: 'Gilroy',
//               fontWeight: '700',
//               fontSize: 20,
//               color: '#9424FA',
//               left: 5,
//             }}>
//             Photos
//           </Text>
//           <Text
//             style={{
//               fontFamily: 'Comfortaa',
//               fontWeight: '700',
//               fontSize: 14,
//               color: '#9424FA',
//               left: 5,
//               top: 15,
//             }}>
//             Ajoutez jusqua 3 photos de vous, pour
//           </Text>
//           <Text
//             style={{
//               fontFamily: 'Comfortaa',
//               fontWeight: '500',
//               fontSize: 14,
//               color: '#9424FA',
//               top: 15,
//             }}>
//             agrandir votre cercle social.
//           </Text>
//         </View>
//         <View
//           style={{
//             justifyContent: 'space-around',
//             flexDirection: 'row',
//             alignItems: 'center',
//           }}>
//           <Image
//             source={require('../../../assets/images/Raluca-Edit.png')}
//             style={{
//               width: 129,
//               height: 129,
//               top: 60,
//             }}
//           />
//           <Image
//             source={require('../../../assets/images/Sup.png')}
//             style={{
//               width: 82,
//               height: 82,
//               top: 60,
//             }}
//           />
//           <Image
//             source={require('../../../assets/images/Plus-Edit.png')}
//             style={{
//               width: 82,
//               height: 82,
//               top: 60,
//             }}
//           />
//         </View>
//         <Image
//           source={require('../../../assets/images/Line133.png')}
//           style={{
//             width: 310,
//             height: 1,
//             top: 80,
//             alignItems: 'center',
//             alignSelf: 'center',
//           }}
//         />
//         <Text
//           style={{
//             fontFamily: 'Comfortaa',
//             fontWeight: '700',
//             fontSize: 14,
//             color: '#9424FA',
//             top: 85,
//             left: 45,
//           }}>
//           Pour plus de photos sur votre profil,{'\n'}ajoutez votre flux
//           Instagram ou Facebook.
//         </Text>
//         <Image
//           source={require('../../../assets/images/Instagrame.png')}
//           style={{
//             width: 331,
//             height: 56,
//             top: 110,
//             alignItems: 'center',
//             alignSelf: 'center',
//           }}
//         />
//         <Image
//           source={require('../../../assets/images/Facebook.png')}
//           style={{
//             width: 331,
//             height: 56,
//             top: 130,
//             alignItems: 'center',
//             alignSelf: 'center',
//           }}
//         />
//         <View
//           style={{
//             top: 160,
//             left: 20,
//           }}>
//           <View>
//             <Text
//               style={{
//                 fontFamily: 'Gilroy',
//                 fontWeight: '700',
//                 fontSize: 20,
//                 color: '#9424FA',
//                 left: 20,
//               }}>
//               Quelques mots sur moi
//             </Text>
//             <Text
//               style={{
//                 fontFamily: 'Comfortaa',
//                 fontWeight: '500',
//                 fontSize: 14,
//                 color: '#9424FA',
//                 top: 10,
//                 left: 20,
//               }}>
//               Lorem ipsum
//             </Text>
//             <View
//               style={{
//                 borderWidth: 1,
//                 borderColor: '#E0BDFF',
//                 borderRadius: 30,
//                 alignSelf: 'center',
//                 top: 30,
//                 width: 333,
//                 height: 111,
//                 right: 20,
//               }}>
//               <TextInput
//                 placeholder="Lorem Ipsum"
//                 style={{
//                   left: 20,
//                   color: '#9424FA',
//                 }}
//               />
//             </View>
//           </View>
//           <Text
//             style={{
//               fontFamily: 'Gilroy',
//               fontWeight: '700',
//               fontSize: 20,
//               color: '#9424FA',
//               top: 50,
//               left: 20,
//             }}>
//             Mes infos de base
//           </Text>
//           <View style={{left: 20, top: 70}}>
//             <View
//               style={{
//                 justifyContent: 'space-around',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   right: 60,
//                 }}>
//                 <Image
//                   source={require('../../../assets/images/btn_diplome.png')}
//                   style={{
//                     width: 38,
//                     height: 41,
//                   }}
//                 />
//                 <Text
//                   style={{
//                     fontFamily: 'Comfortaa',
//                     fontWeight: '500',
//                     fontSize: 15,
//                     color: '#9424FA',
//                     left: 10,
//                   }}>
//                   Niveau d'étude
//                 </Text>
//               </View>
//               <View>
//                 <TouchableOpacity
//                   onPress={() => handleAddProToggle(0)}
//                   style={{width: 35, height: 35, right: 20}}>
//                   <Image
//                     source={
//                       addProVisible[0]
//                         ? require('../../../assets/images/add_plein.png')
//                         : require('../../../assets/images/add_vide.png')
//                     }
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <View
//               style={{
//                 justifyContent: 'space-around',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   right: 60,
//                 }}>
//                 <Image
//                   source={require('../../../assets/images/language.png')}
//                   style={{
//                     width: 38,
//                     height: 41,
//                   }}
//                 />
//                 <Text
//                   style={{
//                     fontFamily: 'Comfortaa',
//                     fontWeight: '500',
//                     fontSize: 15,
//                     color: '#9424FA',
//                     left: 10,
//                   }}>
//                   Je parle couramment...
//                 </Text>
//               </View>
//               <View>
//                 <TouchableOpacity
//                   onPress={() => handleAddProToggle(1)}
//                   style={{width: 35, height: 35, right: 20}}>
//                   <Image
//                     source={
//                       addProVisible[1]
//                         ? require('../../../assets/images/add_plein.png')
//                         : require('../../../assets/images/add_vide.png')
//                     }
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <Image
//                 source={require('../../../assets/images/activité.png')}
//                 style={{}}
//               />
//               <Text
//                 style={{
//                   fontFamily: 'Comfortaa',
//                   fontWeight: '500',
//                   fontSize: 16,
//                   lineHeight: 18,
//                   color: '#9424FA',
//                 }}>
//                 Mon activité favorite...
//               </Text>
//               <TouchableOpacity
//                 onPress={() => handleAddProToggle(2)}
//                 style={{}}>
//                 <Image
//                   source={
//                     addProVisible[2]
//                       ? require('../../../assets/images/add_plein.png')
//                       : require('../../../assets/images/add_vide.png')
//                   }
//                 />
//               </TouchableOpacity>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <Image
//                 source={require('../../../assets/images/cuisine.png')}
//                 style={{}}
//               />
//               <Text
//                 style={{
//                   fontFamily: 'Comfortaa',
//                   fontWeight: '500',
//                   fontSize: 16,
//                   lineHeight: 18,
//                   color: '#9424FA',
//                 }}>
//                 Ma cuisine favorite...
//               </Text>
//               <TouchableOpacity
//                 onPress={() => handleAddProToggle(3)}
//                 style={{}}>
//                 <Image
//                   source={
//                     addProVisible[3]
//                       ? require('../../../assets/images/add_plein.png')
//                       : require('../../../assets/images/add_vide.png')
//                   }
//                 />
//               </TouchableOpacity>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <Image
//                 source={require('../../../assets/images/amitié.png')}
//                 style={{}}
//               />
//               <Text
//                 style={{
//                   fontFamily: 'Comfortaa',
//                   fontWeight: '500',
//                   fontSize: 16,
//                   lineHeight: 18,
//                   color: '#9424FA',
//                 }}>
//                 Pour moi le plus important en {'\n'}amitié...
//               </Text>
//               <TouchableOpacity
//                 onPress={() => handleAddProToggle(4)}
//                 style={{}}>
//                 <Image
//                   source={
//                     addProVisible[4]
//                       ? require('../../../assets/images/add_plein.png')
//                       : require('../../../assets/images/add_vide.png')
//                   }
//                 />
//               </TouchableOpacity>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <Image
//                 source={require('../../../assets/images/popcorn.png')}
//                 style={{}}
//               />
//               <Text
//                 style={{
//                   fontFamily: 'Comfortaa',
//                   fontWeight: '500',
//                   fontSize: 16,
//                   lineHeight: 18,
//                   color: '#9424FA',
//                 }}>
//                 Les films que je ne me lasse {'\n'}pas de revoir...
//               </Text>
//               <TouchableOpacity
//                 onPress={() => handleAddProToggle(5)}
//                 style={{}}>
//                 <Image
//                   source={
//                     addProVisible[5]
//                       ? require('../../../assets/images/add_plein.png')
//                       : require('../../../assets/images/add_vide.png')
//                   }
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// ProfilMeCA.propTypes = {
//   route: PropTypes.object.isRequired,
//   navigation: PropTypes.object.isRequired,
// };
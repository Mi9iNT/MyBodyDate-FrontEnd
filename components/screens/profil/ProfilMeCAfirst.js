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
  const [addProVisible, setAddProVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleAddProToggle = index => {
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
         <MenuSlide imagePath={true} />
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

ProfilMeCAFirst.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

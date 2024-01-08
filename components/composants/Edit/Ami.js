/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

export const Ami = ({visibleAmi, closeModalAmi}) => {
  const [modalAmilVisible, setModalAmilVisible] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <>
      <TouchableOpacity
       onPress={() => {
          setModalAmilVisible(true);
        }}
        style={{
          bottom: 300,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
      <Image source={require('../../../assets/images/amitié.png')} />
      <Text
        style={{
          fontFamily: 'Comfortaa',
          fontWeight: '700',
          fontSize: 15,
          color: '#9424FA',
          left: 20,
        }}>
        Pour moi le plus important en {'\n'}amitié...
      </Text>
      <View style={{width: 35, height: 35, left: 63}}>
        <Image
          source={
            modalAmilVisible
              ? require('../../../assets/images/add_plein.png')
              : require('../../../assets/images/add_vide.png')
          }
        />
      </View>
    </TouchableOpacity>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalAmilVisible}
      statusBarTranslucent={true}
      >
      {/* Arrière-plan semi-transparent */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur semi-transparente
          justifyContent: 'center', // Centrer verticalement
          alignItems: 'center', // Centrer horizontalement
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
            onPress={() => { setModalAmilVisible(false); }}
          accessibilityLabel="Ferme la fenêtre"
        />
        {/* Contenu de la modal */}
        <View
          style={{
            top: 40,
            width: 394,
            height: 700,
            backgroundColor: 'white',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/amitié.png')}
              style={{
                width: 82,
                height: 84,
                left: 160,
                top: 30,
              }}
            />
            <Text
              style={{
                fontFamily: 'Gilroy',
                fontWeight: '700',
                fontSize: 20,
                color: '#9424FA',
                top: 100,
                textAlign: 'center',
                right: 20,
              }}>
              Pour moi, le plus important en{'\n'}amitié...
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Gilroy',
                fontWeight: '700',
                fontSize: 14,
                color: '#9424FA',
                top: 100,
                left: 30,
              }}>
              Définissez votre définition de l'amitié
            </Text>
          </View>
          <ImageBackground
            source={require('../../../assets/images/RectangleAmi.png')}
            style={{
              width: 354,
              height: 236,
              left: 20,
              top: 140,
            }}>
            <TextInput
              style={{
                fontSize: 14,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#929EDE',
                padding: 5,
                left: 40,
                top: 20,
              }}
              defaultValue="Lorem ipsum"
            />
          </ImageBackground>
        </View>
      </View>
    </Modal>
    </>
  );
};

export default Ami;

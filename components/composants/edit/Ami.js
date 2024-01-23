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
  SafeAreaView,
} from 'react-native';
import {storeData, getData, getDatas} from '../../../service/storage';
import StylesAmi from '../../../assets/style/StyleComposants/styleEdit/StyleAmi';

export const Ami = ({ }) => {

  const [modalAmilVisible, setModalAmilVisible] = useState(false);

  const [userAmi, setUserAmi] = useState();

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const keysToRetrieve = ['user_ami'];

  // Appel de la fonction pour récupérer plusieurs valeurs
  const getMultipleValues = async () => {
  try {
    const retrievedValues = await getDatas(keysToRetrieve);

    if (retrievedValues && Array.isArray(retrievedValues)) {
      const result = {};
      retrievedValues.forEach(item => {
        result[item.key] = item.value;
      });

      setUserAmi(result.user_ami || []);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
};

  useEffect(() => {
    getMultipleValues();
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
        style={[StylesAmi.btnModal]}>
        <Image style={[StylesAmi.icoBtnModal]} source={require('../../../assets/images/amitié.png')} />
        <Text
          style={[StylesAmi.txtBtnModal]}>
          Pour moi le plus important en {'\n'}amitié...
        </Text>
        <Image
          style={[StylesAmi.plusBtnModal]}
          source={
            userAmi
              ? require('../../../assets/images/add_plein.png')
              : require('../../../assets/images/add_vide.png')
          }
        />
    </TouchableOpacity>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalAmilVisible}
      statusBarTranslucent={true}
      >
      {/* Arrière-plan semi-transparent */}
      <View
        style={[StylesAmi.containerModal]}>
        <TouchableOpacity
          style={[StylesAmi.btnClose]}
            onPress={() => { setModalAmilVisible(false); }}
          accessibilityLabel="Ferme la fenêtre"
        />
        {/* Contenu de la modal */}
        <View
          style={[StylesAmi.viewModal]}>
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
          <SafeAreaView style={{ top: 160, alignSelf:'center' }}>
            <TextInput
                style={{
                  width: 345,
                  height: 230,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: '#9424FA',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  textAlign: 'left',
                  textAlignVertical: 'top',
                }}
                placeholder="Entrer la description de votre offre . . ."
                allowFontScaling={true}
                editable={true}
                multiline={true}
                scrollEnabled={true}
                onChangeText={(text) => setUserAmi(text)}
                onEndEditing={(text) => handleStoreData('user_ami', text)}
                value={userAmi}
                defaultValue="Lorem ipsum"
              />
          </SafeAreaView>
        </View>
      </View>
    </Modal>
    </>
  );
};

export default Ami;
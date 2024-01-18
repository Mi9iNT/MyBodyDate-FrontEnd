/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Modal} from 'react-native';
import {MyComponentOffre} from './MyComponentOffre';
import { SafeAreaView } from 'react-native-safe-area-context';
import StylesOffre from '../../../assets/style/StyleComposants/styleEdit/StyleOffre';
import {storeData, getData, getDatas} from '../../../service/storage';

export const Offre = ({visibleOffre, closeModalOffre}) => {
  const [modalOffrelVisible, setModalOffrelVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalOffre, setModalOffre] = useState(false);

  const [offreTitle, setOffreTitle] = useState('Entrer l\'intitulé de votre offre . . .');

  const [offreDescription, setOffreDescription] = useState('Entrer la description de votre offre . . .');

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const keysToRetrieve = ['user_recherche'];

  // Appel de la fonction pour récupérer plusieurs valeurs
  const getMultipleValues = async () => {
    try {
      const retrievedValues = await getDatas(keysToRetrieve);
      // console.log('Valeurs récupérées :', retrievedValues);

      const result = {};
      retrievedValues.forEach(item => {
        retrievedValues[item.key] = item.value;
      });
      setOffreTitle(retrievedValues.user_offre_title);
      setOffreDescription(retrievedValues.user_offre_description);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  getMultipleValues();

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
          setModalOffre(true);
        }}
        style={[StylesOffre.btnModal]}>
        <Image
          style={[StylesOffre.icoBtnModal]}
          source={require('../../../assets/images/publier__offre.png')}
        />
        <Text
          style={[StylesOffre.txtBtnModal]}>
          Publier une offre
        </Text>
          <Image
            style={[StylesOffre.plusBtnModal]}
            source={
              offreTitle || offreDescription
                ? require('../../../assets/images/add_pro_plein.png')
                : require('../../../assets/images/add_pro_vide.png')
            }
          />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOffre}
        statusBarTranslucent={true}
      >
        {/* Arrière-plan semi-transparent */}
        <View
          style={[StylesOffre.containerModal]}>
          <TouchableOpacity
            style={[StylesOffre.btnClose]}
            onPress={() => setModalOffre(false)}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View
            style={[StylesOffre.viewModal]}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Distinct.png')}
                style={[StylesOffre.icoModal]}
              />
              <Text
                style={[StylesOffre.txtTitleModal]}>
                Publier une offre
              </Text>
            </View>
            <View>
              <Text
                style={[StylesOffre.subTxtModal]}>
                Intitulé de l'offre
              </Text>
            </View>
              <SafeAreaView style={{ top: 160, alignSelf:'center' }}>
                <TextInput
                  placeholder="Entrer le titre de votre offre . . ."
                  style={[StylesOffre.txtIntitulateOffre]}
                  onChangeText={setOffreTitle}
                  onEndEditing={() => handleStoreData('user_offre_title', offreTitle)}
                  value={offreTitle}
                />
              </SafeAreaView>
            <View>
              <Text
                style={[StylesOffre.subTxtModal2]}>
                Description de l'offre
              </Text>
              <SafeAreaView style={{ top: 220 , alignSelf:'center'}}>
                <TextInput
                  style={[StylesOffre.txtDescriptionOffre]}
                  placeholder="Entrer la description de votre offre . . ."
                  allowFontScaling={true}
                  editable={true}
                  multiline={true}
                  scrollEnabled={true}
                  onChangeText={setOffreDescription}
                  onEndEditing={() => handleStoreData('user_offre_description', offreDescription)}
                  value={offreDescription}
                />
              </SafeAreaView>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Offre;

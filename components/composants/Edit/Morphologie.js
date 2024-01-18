/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData, getDatas} from '../../../service/storage';
import StylesMorphologie from '../../../assets/style/StyleComposants/styleEdit/StyleMorphologie';

export const Morphologie = ({}) => {

  const [modalMorphologieVisible, setModalMorphologieVisible] = useState(false);

  const [viewMorphologie, setViewMorphologie] = useState(false);

  const [userMorphologie, setUserMorphologie] = useState(false);

  console.log(userMorphologie);

  const morphologie = [
    'Elancé.e',
    'Mince',
    'Sportif.ve',
    'Corpulence Moyenne',
    'Rond.e',
    'Je ne sais pas trop',
  ];

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const keysToRetrieve = ['user_morphology'];

  // Appel de la fonction pour récupérer plusieurs valeurs
  const getMultipleValues = async () => {
    try {
      const retrievedValues = await getDatas(keysToRetrieve);
      // console.log('Valeurs récupérées :', retrievedValues);

      const result = {};
      retrievedValues.forEach(item => {
        retrievedValues[item.key] = item.value;
      });

      setUserMorphologie(retrievedValues.user_morphology);
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
          setModalMorphologieVisible(true);
        }}
        style={[StylesMorphologie.btnModal]}>
        <Image source={require('../../../assets/images/Body.png')} style={[StylesMorphologie.icoBtnModal]} />
        <Text
          style={[StylesMorphologie.txtBtnModal]}>
          Morphologie
        </Text>
        <Image style={[StylesMorphologie.plusBtnModal]}
          source={
            !userMorphologie
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalMorphologieVisible}
        onRequestClose={() => { setModalMorphologieVisible(false); }}>
        {/* Arrière-plan semi-transparent */}
        <View
          style={StylesMorphologie.containerModal}>
          <TouchableOpacity
            style={StylesMorphologie.btnClose}
            onPress={() => setModalMorphologieVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View
            style={StylesMorphologie.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Body.png')}
                style={StylesMorphologie.icoModal}
              />
              <Text
                style={StylesMorphologie.txtTitleModal}>
                Morphologie
              </Text>
            </View>
            <View>
              <Text
                style={StylesMorphologie.subTxtModal}>
                Sélectionnez votre opinion concernant les enfants.
              </Text>
            </View>
            <View
              style={{
                top: 140,
                alignItems: 'center',
              }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column'}}>
              <TouchableOpacity
                onPress={() => { viewMorphologie ? setViewMorphologie(false) : setViewMorphologie(true); }}
                style={{ width: 276, alignSelf: 'center', }}
              >
              <Text
                style={[StylesMorphologie.txtOptionSelected]}>
                {userMorphologie ? userMorphologie : 'Type de morpholpgie'}
              </Text>
            </TouchableOpacity>
            {viewMorphologie ?
              <View
                style={[StylesMorphologie.viewOption]} >
                {morphologie.map((item, index) => (
                  <TouchableOpacity key={index} style={{}} onPress={() => { setUserMorphologie(item);  handleStoreData('user_morphology', item); setViewMorphologie(false); }}>
                    <Text
                      key={index}
                      style={[StylesMorphologie.txtOption]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              : null}
              </View>
              <TouchableOpacity
                onPress={() => { viewMorphologie ? setViewMorphologie(false) : setViewMorphologie(true); }}>
                <Image
                  source={require('../../../assets/images/FlecheEditRA.png')}
                  style={[StylesMorphologie.icoViewOption, {
                    transform: [{rotate: viewMorphologie ? '180deg' : '0deg'}],
                  }]}/>
              </TouchableOpacity>  
            </View>
            </View>
            <Text style={{top: 360, left: 40, color: '#0019A7', fontFamily: 'Comfortaa', fontSize: 12}}>Choix unique</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Morphologie;

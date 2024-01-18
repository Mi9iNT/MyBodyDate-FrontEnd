/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData, getDatas} from '../../../service/storage';
import StylesOrigine from '../../../assets/style/StyleComposants/styleEdit/StyleOrigine';

export const Origine = ({}) => {

  const [modalEthnicityVisible, setModalEthnicityVisible] = useState(false);

  const [viewEthnicity, setViewEthnicity] = useState(false);

  const [userEthnicity, setUserEthnicity] = useState([]);

  console.log(userEthnicity);

  const origine = [
    'Asiatique',
    'Blanc/Caucasien.ne',
    'Indien.ne',
    'Latino/Hispanique',
    'Noir.e/Africain.ne',
    'Originaire du Moyen Orient',
    'Métis.se',
  ];

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleEthnicity = value => {
    let newUserEthnicity = [...userEthnicity];

    if (newUserEthnicity.includes(value)) {
      newUserEthnicity = newUserEthnicity.filter(
        item => item !== value,
      );
    } else {
      newUserEthnicity.push(value);
    }
    setUserEthnicity(newUserEthnicity);
    handleStoreData('user_ethnicity', newUserEthnicity);
  };

  const keysToRetrieve = ['user_ethnicity'];

  useEffect(() => {
    const getMultipleValues = async () => {
      try {
        const retrievedValues = await getDatas(keysToRetrieve);

        // Mettez à jour la condition pour gérer le cas où user_ethnicity n'est pas défini
        setUserEthnicity(retrievedValues.user_ethnicity || []);

      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

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
          setModalEthnicityVisible(true);
        }}
        style={[StylesOrigine.btnModal]}>
        <Image source={require('../../../assets/images/Origine.png')} style={[StylesOrigine.icoBtnModal]} />
        <Text
          style={[StylesOrigine.txtBtnModal]}>
          Ethnicity
        </Text>
        <Image style={[StylesOrigine.plusBtnModal]}
          source={
            !userEthnicity
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEthnicityVisible}
        onRequestClose={() => { setModalEthnicityVisible(false); }}>
        {/* Arrière-plan semi-transparent */}
        <View
          style={StylesOrigine.containerModal}>
          <TouchableOpacity
            style={StylesOrigine.btnClose}
            onPress={() => setModalEthnicityVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View
            style={StylesOrigine.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Origine.png')}
                style={StylesOrigine.icoModal}
              />
              <Text
                style={StylesOrigine.txtTitleModal}>
                Origine ethnique
              </Text>
            </View>
            <View>
              <Text
                style={StylesOrigine.subTxtModal}>
                Sélectionnez vos origines.
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
                onPress={() => { viewEthnicity ? setViewEthnicity(false) : setViewEthnicity(true); }}
                style={{ width: 276, alignSelf: 'center', }}
              >
              <Text
                style={[StylesOrigine.txtOptionSelected]}>
                Sélectionnez les origines
              </Text>
            </TouchableOpacity>
            {viewEthnicity ?
              <View
                style={[StylesOrigine.viewOption]} >
                {origine.map((item, index) => (
                  <TouchableOpacity key={index} style={{}} onPress={() => { handleEthnicity(item); }}>
                    <Text
                      key={index}
                      style={[StylesOrigine.txtOption, {fontWeight: userEthnicity.includes(item) ? 700 : 500}]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              : null}
              </View>
              <TouchableOpacity
                onPress={() => { viewEthnicity ? setViewEthnicity(false) : setViewEthnicity(true); }}>
                <Image
                  source={require('../../../assets/images/FlecheEditRA.png')}
                  style={[StylesOrigine.icoViewOption, {
                    transform: [{rotate: viewEthnicity ? '180deg' : '0deg'}],
                  }]}/>
              </TouchableOpacity>  
            </View>
            </View>
            <Text style={{top: 360, left: 40, color: '#0019A7', fontFamily: 'Comfortaa', fontSize: 12}}>Choix multiples</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Origine;

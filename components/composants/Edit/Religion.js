/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar, Switch} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData, getDatas} from '../../../service/storage';
import StylesReligion from '../../../assets/style/StyleComposants/styleEdit/StyleReligion';

export const Religion = ({}) => {
  const [modalReligionVisible, setModalReligionVisible] = useState(false);

  const [viewReligion, setViewReligion] = useState(false);

  const [userReligion, setUserReligion] = useState(false);

  const [userPractice, setUserPractice] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);

  // console.log(userReligion);

  const religion = [
    'Chrétienne',
    'Hindouisme',
    'Jaïnisme',
    'Judaïsme',
    'Mormonisme',
    'Saints des derniers jours',
    'Islam',
    'Zoroastrisme'
  ];

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const keysToRetrieve = ['user_religion', 'user_practice'];

  // Appel de la fonction pour récupérer plusieurs valeurs
  const getMultipleValues = async () => {
    try {
      const retrievedValues = await getDatas(keysToRetrieve);
      // console.log('Valeurs récupérées :', retrievedValues);

      const result = {};
      retrievedValues.forEach(item => {
        retrievedValues[item.key] = item.value;
      });

      setUserReligion(retrievedValues.user_religion);
      setUserPractice(retrievedValues.user_practice);
      initSwitchState(retrievedValues.user_practice);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  getMultipleValues();

  const initSwitchState = (practice) => {
    if (practice === 'pratiquant') {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };

  const toggleSwitch = () => {
    const newEnabled = !isEnabled;
    setIsEnabled(newEnabled);
    const newPractice = newEnabled ? 'pratiquant' : 'non pratiquant';
    handleStoreData('user_practice', newPractice);
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
          setModalReligionVisible(true);
        }}
        style={[StylesReligion.btnModal]}>
        <Image source={require('../../../assets/images/ReligionB.png')} style={[StylesReligion.icoBtnModal]} />
        <Text
          style={[StylesReligion.txtBtnModal]}>
          Religion
        </Text>
        <Image style={[StylesReligion.plusBtnModal]}
          source={
            !userReligion
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalReligionVisible}
        onRequestClose={() => { setModalReligionVisible(false); }}>
        {/* Arrière-plan semi-transparent */}
        <View
          style={StylesReligion.containerModal}>
          <TouchableOpacity
            style={StylesReligion.btnClose}
            onPress={() => setModalReligionVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View
            style={StylesReligion.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/ReligionB.png')}
                style={StylesReligion.icoModal}
              />
              <Text
                style={StylesReligion.txtTitleModal}>
                Religion
              </Text>
            </View>
            <View>
              <Text
                style={StylesReligion.subTxtModal}>
                Sélectionnez votre religion.
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
                onPress={() => { viewReligion ? setViewReligion(false) : setViewReligion(true); }}
                style={{ width: 276, alignSelf: 'center', }}
              >
              <Text
                style={[StylesReligion.txtOptionSelected]}>
                {userReligion ? userReligion : 'Religion'}
              </Text>
            </TouchableOpacity>
            {viewReligion ?
              <View
                style={[StylesReligion.viewOption]} >
                {religion.map((item, index) => (
                  <TouchableOpacity key={index} style={{}} onPress={() => { setUserReligion(item);  handleStoreData('user_religion', item); setViewReligion(false); }}>
                    <Text
                      key={index}
                      style={[StylesReligion.txtOption]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              : null}
              </View>
              <TouchableOpacity
                onPress={() => { viewReligion ? setViewReligion(false) : setViewReligion(true); }}>
                <Image
                  source={require('../../../assets/images/FlecheEditRA.png')}
                  style={[StylesReligion.icoViewOption, {
                    transform: [{rotate: viewReligion ? '180deg' : '0deg'}],
                  }]}/>
              </TouchableOpacity>  
            </View>
            </View>
            <View style={{ top: 320, flexDirection: 'row', width: '80%', alignSelf: 'center', justifyContent:'space-between'}}>
              <Text style={{color: !isEnabled ? '#000' : '#6B6B6B', fontFamily: !isEnabled ? 'Comfortaa-Bold' : 'Comfortaa', fontSize: 16, }}>Non Pratiquant</Text>
              <Switch
              trackColor={{false: '#BEC8FF', true: '#17ff58'}}
              thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
              ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitch}
              value={isEnabled}
              style={{alignSelf:'center'}}
              />
              <Text style={{color: isEnabled ? '#000' : '#6B6B6B', fontFamily: isEnabled ? 'Comfortaa-Bold' : 'Comfortaa', fontSize: 16, }}>Pratiquant</Text>
            </View>
            <Text style={{top: 360, left: 40, color: '#0019A7', fontFamily: 'Comfortaa', fontSize: 12}}>Choix unique</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Religion;

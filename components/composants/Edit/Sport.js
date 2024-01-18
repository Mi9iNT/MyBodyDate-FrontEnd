/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData, getDatas} from '../../../service/storage';
import StylesSport from '../../../assets/style/StyleComposants/styleEdit/StyleSport';

export const Sport = ({}) => {

  const [modalSprotVisible, setModalSportVisible] = useState(false);

  const [viewSprot, setViewASport] = useState(false);

  const [userSport, setUserSport] = useState(false);

  // console.log(userSport);

  const sport = [
    'Souvent',
    'Parfois',
    'Très peu',
    'Jamais',
  ];

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const keysToRetrieve = ['user_sport'];

  // Appel de la fonction pour récupérer plusieurs valeurs
  const getMultipleValues = async () => {
    try {
      const retrievedValues = await getDatas(keysToRetrieve);
      // console.log('Valeurs récupérées :', retrievedValues);

      const result = {};
      retrievedValues.forEach(item => {
        retrievedValues[item.key] = item.value;
      });

      setUserSport(retrievedValues.user_sport);
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
          setModalSportVisible(true);
        }}
        style={[StylesSport.btnModal]}>
        <Image source={require('../../../assets/images/Sport.png')} style={[StylesSport.icoBtnModal]} />
        <Text
          style={[StylesSport.txtBtnModal]}>
          Activité sportive
        </Text>
        <Image style={[StylesSport.plusBtnModal]}
          source={
            !userSport
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSprotVisible}
        onRequestClose={() => { setModalSportVisible(false); }}>
        {/* Arrière-plan semi-transparent */}
        <View
          style={StylesSport.containerModal}>
          <TouchableOpacity
            style={StylesSport.btnClose}
            onPress={() => setModalSportVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View
            style={StylesSport.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Sport.png')}
                style={StylesSport.icoModal}
              />
              <Text
                style={StylesSport.txtTitleModal}>
                Activité sportive
              </Text>
            </View>
            <View>
              <Text
                style={StylesSport.subTxtModal}>
                Sélectionnez la fréquence de votre activité sportive.
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
                onPress={() => { viewSprot ? setViewASport(false) : setViewASport(true); }}
                style={{ width: 276, alignSelf: 'center', }}
              >
              <Text
                style={[StylesSport.txtOptionSelected]}>
                {userSport ? userSport : 'Activité sportive'}
              </Text>
            </TouchableOpacity>
            {viewSprot ?
              <View
                style={[StylesSport.viewOption]} >
                {sport.map((item, index) => (
                  <TouchableOpacity key={index} style={{}} onPress={() => { setUserSport(item);  handleStoreData('user_sport', item); setViewASport(false); }}>
                    <Text
                      key={index}
                      style={[StylesSport.txtOption, {fontWeight: userSport === item ? 700 : 500}]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              : null}
              </View>
              <TouchableOpacity
                onPress={() => { viewSprot ? setViewASport(false) : setViewASport(true); }}>
                <Image
                  source={require('../../../assets/images/FlecheEditRA.png')}
                  style={[StylesSport.icoViewOption, {
                    transform: [{rotate: viewSprot ? '180deg' : '0deg'}],
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

export default Sport;

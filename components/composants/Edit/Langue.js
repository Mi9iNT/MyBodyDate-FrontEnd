/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal, ScrollView} from 'react-native';
import StylesLangue from '../../../assets/style/StyleComposants/styleEdit/StyleLangue';

export const Langue = ({}) => {
  const [modalLanguelVisible, setModalLanguelVisible] = useState(false);

  const lang = [
    'Allemand',
    'Anglais',
    'Arabe',
    'Chinois',
    'Espagnol',
    'Français',
    'Grec',
    'Italien',
    'Japonnais',
    'Néerlandais',
    'Portugais',
    'Polonais',
  ];

  const [viewLangue, setViewLangue] = useState(false);

  const [userLangue, setUserLanguage] = useState([]);

  const handleButtonPress = value => {
    let newUserLangue = [...userLangue];

    if (newUserLangue.includes(value)) {
      newUserLangue = newUserLangue.filter(
        item => item !== value,
      );
    } else {
      newUserLangue.push(value);
    }

    setUserLanguage(newUserLangue);
    console.log('Langue sélectionner : ' + newUserLangue);
  };

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
            setModalLanguelVisible(true);
          }}
          style={[StylesLangue.btnModal]}>
          <Image
            style={[StylesLangue.icoBtnModal]}
            source={require('../../../assets/images/langue_pro.png')}
          />
          <Text
            style={[StylesLangue.txtBtnModal]}>
            Je parle courament
          </Text>
            <Image
              style={[StylesLangue.plusBtnModal]}
              source={
                modalLanguelVisible
                  ? require('../../../assets/images/add_pro_plein.png')
                  : require('../../../assets/images/add_pro_vide.png')
              }
            />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalLanguelVisible}
        statusBarTranslucent={true}
      >
        {/* Arrière-plan semi-transparent */}
        <View
          style={[StylesLangue.containerModal]}>
          <TouchableOpacity
            style={[StylesLangue.btnClose]}
            onPress={() => setModalLanguelVisible(false)}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View
            style={StylesLangue.viewModal}>
            <View
                style={{
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/LangueRP.png')}
                  style={[StylesLangue.icoModal]}
                />
                <Text
                  style={[StylesLangue.txtTitleModal]}>
                  Je parle couramment..
                </Text>
            </View>
            <View>
                <Text
                  style={StylesLangue.subTxtModal}>
                  Sélectionnez vos langues parlées.
                </Text>
            </View>
            <View
                  style={{
                    alignItems: 'center',
                    top: 140,
                    }}>
                <View style={{flexDirection:'row'}}>
                  <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity
                      onPress={() => { viewLangue ? setViewLangue(false) : setViewLangue(true); }}
                      style={{ width: 276, alignSelf: 'center', }}
                    >
                      <Text
                        style={[StylesLangue.txtOptionSelected]}>
                        Langue
                      </Text>
                    </TouchableOpacity>
                    {viewLangue ?
                      <View
                      style={[StylesLangue.viewOption]} >
                      <ScrollView contentContainerStyle={{paddingBottom: 10, width: 276,}}>
                        {lang.map((item, index) => (
                          <TouchableOpacity key={index} style={{ margin: 8, }} onPress={() => handleButtonPress(item)}>
                          <Text
                            key={index}
                            style={[StylesLangue.txtOption]}>
                            {item}
                          </Text>
                          {userLangue.includes(item)
                            ? <View style={[StylesLangue.lineOption]} />
                            : null}
                        </TouchableOpacity>
                      ))}
                      </ScrollView>
                      </View>
                    : null}
                  </View>
                  <TouchableOpacity
                    onPress={() => { viewLangue ? setViewLangue(false) : setViewLangue(true); }}>
                    <Image
                      source={require('../../../assets/images/FlecheEditRP.png')}
                      style={[StylesLangue.icoViewOption,{
                        transform: [{rotate: viewLangue ? '180deg' : '0deg'}],
                      }]}/>
                  </TouchableOpacity>
              </View>
            </View>
            <Text
              style={[StylesLangue.txtChoice,{
                top: viewLangue ? 50 : 350,
              }]}>
              Choix Multiple.
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Langue;

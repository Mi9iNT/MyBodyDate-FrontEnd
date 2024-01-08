/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Modal} from 'react-native';
import StylesLinkedin from '../../../assets/style/StyleComposants/styleEdit/StyleLinkedin';

export const LinkedIn = ({}) => {
  const [modalLinkedInlVisible, setModalLinkedInlVisible] = useState(false);

  const [urlShow, setUrlShow] = useState(false);

  const [urlLinkedin, setUrlLinkedin] = useState(false);

  const [urlError, setUrlError] = useState(false);

  console.log(urlLinkedin);

  const urlRegex = new RegExp(
    '^(http|https)://(([a-zA-Z0-9-]+.)?([a-zA-Z0-9-]+.)?[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}(:[0-9]+)?(/[a-zA-Z0-9-]*)?(.[a-zA-Z0-9]{1,4})?)*$'
  );

  const verifyUrl = (index) => {
    let url = 'https://www.linkedin.com/in/' + index;

    if (urlRegex.test(url)) {
      setUrlLinkedin(url);
      setUrlError(false);
    } else {
      setUrlError(true);
    }
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
          setModalLinkedInlVisible(true);
        }}
        style={[StylesLinkedin.btnModal]}>
        <Image
          style={[StylesLinkedin.icoBtnModal]}
          source={require('../../../assets/images/LinkedIn-RP.png')}
        />
        <Text
          style={[StylesLinkedin.txtBtnModal]}>
          Url LinkedIn
        </Text>
        <Image
          style={[StylesLinkedin.plusBtnModal]}
          source={
            modalLinkedInlVisible === true
              ? require('../../../assets/images/add_pro_plein.png')
              : require('../../../assets/images/add_pro_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalLinkedInlVisible}
        statusBarTranslucent={true}
      >
        {/* Arrière-plan semi-transparent */}
          <View
            style={[StylesLinkedin.containerModal]}>
              <TouchableOpacity
                style={[StylesLinkedin.btnClose]}
                onPress={() => setModalLinkedInlVisible(false)}
                accessibilityLabel="Ferme la fenêtre"
              />
              {/* Contenu de la modal */}
              <View
                style={[StylesLinkedin.viewModal]}>
                <View
                  style={{
                    alignSelf: 'center',
                  }}>
              <Image
                source={require('../../../assets/images/LinkedIn.png')}
                style={[StylesLinkedin.icoModal]}
              />
              <Text
                style={[StylesLinkedin.txtTitleModal]}>
                Mon compte LinkedIn
              </Text>
            </View>
            <View>
              <Text
                style={[StylesLinkedin.subTxtModal]}>
                Entrez le lien URL de votre compte LinkedIn . . .
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <View
                style={[StylesLinkedin.viewRow]}>
                <Text style={[StylesLinkedin.txtIndice]}>{urlShow === true ?  'linkedin.com/in/' : 'URL'}</Text>
                <TextInput
                  style={[StylesLinkedin.txtInput,{
                    right: urlShow === true ? 5 : 0,
                    minWidth: urlShow === true ? '60%' : '80%',
                  }]}
                  keyboardType="url"
                  onFocus={() => setUrlShow(true)}
                  onEndEditing={(event) => {
                    setUrlShow(false); verifyUrl(event.nativeEvent.text);
                    }
                  }
                  defaultValue={urlLinkedin.lengh < 0 ? '' : urlShow ? '' : urlLinkedin}
                />
              </View>
              {urlError
                ? <Text style={[StylesLinkedin.txtError]}>
                      l'URL saisie est invalide
                  </Text>
                : null}
            </View>
            <Text
              style={[StylesLinkedin.txtChoice]}>
              Choix unique.
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LinkedIn;

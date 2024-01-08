import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StylesSituation from '../../../assets/style/styleScreens/styleRegister/StyleSituation';
import {storeData, getData} from '../../../service/storage';

export const Situation = ({navigation}) => {

  useEffect(() => {
    handleGetData();
  }, []);

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const userSituation = await getData('situation');
      setSituation(userSituation || '');
      // console.log('langue : ' + langue);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
  const [situation, setSituation] = useState('');

  const [buttonPressed, setButtonPressed] = useState();

  const handleSituationSelection = selectedSituation => {
    setSituation({state: selectedSituation});
  };

  console.log('Situation : ' + situation.state);

  return (
    <View style={StylesSituation.container}>
      <ImageBackground
        style={StylesSituation.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesSituation.TxtTitle]}>VOTRE SITUATION</Text>
        <Text style={[StylesSituation.TxtTitle]}>ACTUELLE ?</Text>

        <View style={[StylesSituation.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setSituation({state: 'Célibataire'})}
            accessibilityLabel="Célibataire">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation.state === 'Célibataire' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation.state === 'Célibataire'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: situation.state === 'Célibataire' ? 700 : 500,
                },
              ]}>
              Célibataire
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setSituation({state: 'Séparé.e'})}
            accessibilityLabel="Séparé(e)">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation.state === 'Séparé.e' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation.state === 'Séparé.e'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: situation.state === 'Séparé.e' ? 700 : 500,
                },
              ]}>
              Séparé.e
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setSituation({state: 'Divorcé.e'})}
            accessibilityLabel="Divorcé.e">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation.state === 'Divorcé.e' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation.state === 'Divorcé.e'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: situation.state === 'Divorcé.e' ? 700 : 500,
                },
              ]}>
              Divorcé.e
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setSituation({state: 'Veuf'})}
            accessibilityLabel="Veuf">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation.state === 'Veuf' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation.state === 'Veuf' ? 'Comfortaa-Bold' : 'Comfortaa',
                  fontWeight: situation.state === 'Veuf' ? 700 : 500,
                },
              ]}>
              Veuf
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setSituation({state: "C'est compliqué"})}
            accessibilityLabel="C\'est compliqué">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color:
                    situation.state === "C'est compliqué" ? '#0019A7' : '#fff',
                  fontFamily:
                    situation.state === "C'est compliqué"
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: situation.state === "C'est compliqué" ? 700 : 500,
                },
              ]}>
              C'est compliqué
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[StylesSituation.textWhite]}>Choix unique.</Text>
        <TouchableOpacity
          style={StylesSituation.ViewBtn}
          onPress={() => {
            navigation.navigate('Orientation');
            handleStoreData('situation', situation ?? '');
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesSituation.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesSituation.imgBtn]}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

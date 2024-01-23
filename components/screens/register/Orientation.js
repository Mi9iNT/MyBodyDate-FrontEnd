import React, {useState, useEffect} from 'react';
import {storeData, getData} from '../../../service/storage';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StylesOrientation from '../../../assets/style/styleScreens/styleRegister/StyleOrientation';

export const Orientation = ({navigation}) => {
  
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
      const userOrientation = await getData('orientation');
      setOrientation(userOrientation || '');
      // console.log('Orienatation : ' + userOrientation);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
  const [orientation, setOrientation] = useState('');

  const [buttonPressed, setButtonPressed] = useState();

  const handleOrientationSelection = selectedOrientation => {
    setOrientation({state: selectedOrientation});
  };

  console.log('Orientation : ' + orientation.state);

  return (
    <View style={StylesOrientation.container}>
      <ImageBackground
        style={StylesOrientation.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesOrientation.TxtTitle]}>VOTRE ORIENATION ?</Text>

        <View style={[StylesOrientation.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesOrientation.btnSelect]}
            onPress={() => setOrientation({state: 'HétérosexeLle'})}
            accessibilityLabel="HétérosexeLle">
            <Text
              style={[
                StylesOrientation.txtBtnSelect,
                {
                  color:
                    orientation.state === 'HétérosexeLle' ? '#0019A7' : '#fff',
                  fontFamily:
                    orientation.state === 'HétérosexeLle'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: orientation.state === 'HétérosexeLle' ? 700 : 500,
                },
              ]}>
              HétérosexeLle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesOrientation.btnSelect]}
            onPress={() => setOrientation({state: 'HomosexueLle'})}
            accessibilityLabel="HomosexueLle">
            <Text
              style={[
                StylesOrientation.txtBtnSelect,
                {
                  color:
                    orientation.state === 'HomosexueLle' ? '#0019A7' : '#fff',
                  fontFamily:
                    orientation.state === 'HomosexueLle'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: orientation.state === 'HomosexueLle' ? 700 : 500,
                },
              ]}>
              HomosexueLle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesOrientation.btnSelect]}
            onPress={() => setOrientation({state: 'BisexueLle'})}
            accessibilityLabel="BisexueLle">
            <Text
              style={[
                StylesOrientation.txtBtnSelect,
                {
                  color:
                    orientation.state === 'BisexueLle' ? '#0019A7' : '#fff',
                  fontFamily:
                    orientation.state === 'BisexueLle'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: orientation.state === 'BisexueLle' ? 700 : 500,
                },
              ]}>
              BisexueLle
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesOrientation.textWhite]}>Choix unique.</Text>
        <TouchableOpacity
          style={StylesOrientation.ViewBtn}
          onPress={() => {
            navigation.navigate('Recherche1');
            handleStoreData('orientation', orientation ?? '');
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesOrientation.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesOrientation.imgBtn]}
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

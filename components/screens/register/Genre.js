import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {storeData, getData, getDatas} from '../../../service/storage';
import StylesGenre from '../../../assets/style/styleScreens/styleRegister/StyleGenre';

export const Genre = ({navigation}) => {
  const [genre, setState] = useState('');

  console.log('Genre: ' + genre.state);

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
      const userGenre = await getData('genre');
      setState(userGenre || '');
      // console.log(consent);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [buttonPressed, setButtonPressed] = useState('');

  return (
    <View style={StylesGenre.container}>
      <ImageBackground
        style={StylesGenre.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesGenre.viewContent]}>
          <Text style={[StylesGenre.TxtTitle]}>VOTRE GENRE ?</Text>

          <View style={[StylesGenre.ViewBTNSelect]}>
            <TouchableOpacity
              style={[StylesGenre.BtnSelect]}
              onPress={() => setState({state: 'Femme'})}
              accessibilityLabel="Femme">
              <Text
                style={[
                  StylesGenre.TextSelect,
                  {
                    color: genre.state === 'Femme' ? '#0019A7' : '#FFF',
                    fontFamily:
                      genre.state === 'Femme' ? 'Comfortaa-Bold' : 'Comfortaa',
                  },
                ]}>
                Femme
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[StylesGenre.BtnSelect]}
              onPress={() => setState({state: 'Homme'})}
              accessibilityLabel="Homme">
              <Text
                style={[
                  StylesGenre.TextSelect,
                  {
                    color: genre.state === 'Homme' ? '#0019A7' : '#FFF',
                    fontFamily:
                      genre.state === 'Homme' ? 'Comfortaa-Bold' : 'Comfortaa',
                  },
                ]}>
                Homme
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[StylesGenre.BtnSelect]}
              onPress={() => setState({state: 'Non binaire'})}
              accessibilityLabel="Non binaire">
              <Text
                style={[
                  StylesGenre.TextSelect,
                  {
                    color: genre.state === 'Non binaire' ? '#0019A7' : '#FFF',
                    fontFamily:
                      genre.state === 'Non binaire'
                        ? 'Comfortaa-Bold'
                        : 'Comfortaa',
                  },
                ]}>
                Non binaire
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[StylesGenre.textWhite]}>Choix unique.</Text>
        </View>
        <TouchableOpacity
          style={StylesGenre.ViewBtn}
          onPress={() => {
            navigation.navigate('Date de naissance');
            handleStoreData('genre', genre ?? '');
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesGenre.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesGenre.imgBtn]}
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

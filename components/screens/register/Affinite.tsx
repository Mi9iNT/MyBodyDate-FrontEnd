import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {storeData, getData} from '../../../service/storage';
import StylesAffinite from '../../../assets/style/styleScreens/styleRegister/StyleAffinite';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Affinite'>;
};

export const Affinite: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleStoreData = async (key: string, value: string[]) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const userAffinite = await getData('affinite');
      setSelectedAffinite(userAffinite || '');
      // console.log('Recherche 2 : ' + userRecherche2);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [buttonPressed, setButtonPressed] = useState<boolean>();

  const [selectedAffinite, setSelectedAffinite] = useState<string[]>([]);

  const handleButtonPress = (value: string) => {
    let newSelectedAffinite = [...selectedAffinite];

    if (newSelectedAffinite.includes(value)) {
      newSelectedAffinite = newSelectedAffinite.filter(item => item !== value);
    } else {
      newSelectedAffinite.push(value);
    }

    setSelectedAffinite(newSelectedAffinite);
    console.log('Affinité(s) : ' + newSelectedAffinite);
  };

  return (
    <View style={StylesAffinite.container}>
      <ImageBackground
        style={StylesAffinite.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesAffinite.TxtTitle]}>VOS AFFINITÉS ?</Text>

        <View style={[StylesAffinite.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Cuisine & Gourmet')}
            accessibilityLabel="Cuisine & Gourmet">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Cuisine & Gourmet')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Cuisine & Gourmet')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Cuisine & Gourmet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Globe Trotter')}
            accessibilityLabel="Globe Trotter">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Globe Trotter')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Globe Trotter')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Globe Trotter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Fan de Musée & Culture')}
            accessibilityLabel="Fan de Musée & Culture">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Fan de Musée & Culture')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes(
                    'Fan de Musée & Culture',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Fan de Musée & Culture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Amis.es des Animaux')}
            accessibilityLabel="Rien de très sérieux">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Amis.es des Animaux')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Amis.es des Animaux')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Amis.es des Animaux
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Sportif.ve')}
            accessibilityLabel="Sportif.ve">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Sportif.ve')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Sportif.ve')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Sportif.ve
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesAffinite.textWhite]}>Choix multiple.</Text>
        <TouchableOpacity
          style={StylesAffinite.ViewBtn}
          onPress={() => {
            navigation.navigate('Rythme1');
            handleStoreData('affinite', selectedAffinite ?? '');
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesAffinite.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesAffinite.imgBtn]}
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

export default Affinite;

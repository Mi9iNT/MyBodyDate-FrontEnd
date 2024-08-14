import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {storeData, getData} from '../../../service/storage';
import StylesRecherche2 from '../../../assets/style/styleScreens/styleRegister/StyleRecherche2';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Recherche2'>;
};

export const Recherche2: React.FC<HomeProps> = ({navigation}) => {
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
      const userRecherche2 = await getData('recherche2');
      setSelectedRecherche2(userRecherche2 || '');
      // console.log('Recherche 2 : ' + userRecherche2);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [selectedRecherhe2, setSelectedRecherche2] = useState<string[]>([]);

  const [buttonPressed, setButtonPressed] = useState<boolean>();

  const handleButtonPress = (value: string) => {
    let newSelectedRecherche2 = [...selectedRecherhe2];

    if (newSelectedRecherche2.includes(value)) {
      newSelectedRecherche2 = newSelectedRecherche2.filter(
        item => item !== value,
      );
    } else {
      newSelectedRecherche2.push(value);
    }

    setSelectedRecherche2(newSelectedRecherche2);
    // console.log('Recherche 2 : ' + newSelectedRecherche2);
  };

  return (
    <View style={StylesRecherche2.container}>
      <ImageBackground
        style={StylesRecherche2.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesRecherche2.TxtTitle]}>VOTRE RECHERCHE ?</Text>

        <View style={[StylesRecherche2.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Relation amoureuse')}
            accessibilityLabel="Relation amoureuse">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Relation amoureuse')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes('Relation amoureuse')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Relation amoureuse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Long terme, OK pour court')}
            accessibilityLabel="Long terme, OK pour court">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Long terme, OK pour court')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'Long terme, OK pour court',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Long terme, OK pour court
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Court terme, OK pour long')}
            accessibilityLabel="Court terme, OK pour long">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Court terme, OK pour long')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'Court terme, OK pour long',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Court terme, OK pour long
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Rien de très sérieux')}
            accessibilityLabel="Rien de très sérieux">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Rien de très sérieux')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes('Rien de très sérieux')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Rien de très sérieux
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('À me faire des amis.es')}
            accessibilityLabel="À me faire des amis.es">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('À me faire des amis.es')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'À me faire des amis.es',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              À me faire des amis.es
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() =>
              handleButtonPress('Développer mon réseau proféssionnel')
            }
            accessibilityLabel="Développer mon réseau proféssionnel">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes(
                    'Développer mon réseau proféssionnel',
                  )
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'Développer mon réseau proféssionnel',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Développer mon réseau proféssionnel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Je ne sais pas trop')}
            accessibilityLabel="Je ne sais pas trop">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Je ne sais pas trop')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes('Je ne sais pas trop')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Je ne sais pas trop
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesRecherche2.textWhite]}>Choix multiple.</Text>
        <TouchableOpacity
          style={StylesRecherche2.ViewBtn}
          onPress={() => {
            navigation.navigate('Affinite');
            handleStoreData('recherche2', selectedRecherhe2);
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesRecherche2.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesRecherche2.imgBtn]}
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

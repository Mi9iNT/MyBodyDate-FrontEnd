import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {storeData, getData, getDatas} from '../../../service/storage';
import StylesTaille from '../../../assets/style/styleScreens/styleRegister/StyleTaille';

export const Taille = ({route, navigation}) => {
  const [buttonPressed, setButtonPressed] = useState();

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
      const userTaille = await getData('taille');
      setSelectedSize(userTaille || '');
      if (userTaille) {
        const pageIndex = Math.floor((userTaille - 140) / 3);
        setCurrentPage(pageIndex);
      } else {
        setCurrentPage(0);
      }
      // console.log(consent);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [selectedSize, setSelectedSize] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  console.log(selectedSize);
  // Générer des données pour les tailles de 140 à 250
  const data = Array.from({length: 111}, (_, i) => i + 140);

  // Diviser les données en pages de trois éléments
  const pages = [];
  for (let i = 0; i < data.length; i += 3) {
    pages.push(data.slice(i, i + 3));
  }
  // console.log('pages :' + pages);

  const renderItem = ({index, item}) => (
    <View
      style={{
        width: 200,
        height: 40,
        margin: 5,
        alignSelf: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: index % 3 === 2 || index === data.length - 1 ? 0 : 1,
      }}>
      <TouchableOpacity onPress={() => setSelectedSize(item)}>
        <Text
          style={{
            fontFamily: 'Comfortaa-Bold',
            fontSize: 18,
            textAlign: 'center',
            color: item === selectedSize ? '#0019A7' : 'white',
          }}>{`${item} cm`}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={StylesTaille.container}>
      <ImageBackground
        style={StylesTaille.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={{flex: 5}}>
          <View style={[StylesTaille.ViewText]}>
            <Text style={[StylesTaille.TxtTitle]}>VOTRE TAILLE ?</Text>
          </View>
          <View style={[StylesTaille.ViewRow]}>
            {/* <SafeAreaView style={[StylesTaille.BoxFlat]}> */}
            <FlatList
              data={pages[currentPage]}
              renderItem={renderItem}
              keyExtractor={item => item.toString()}
              numColumns={3}
              columnWrapperStyle={{
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            />
            <View style={[StylesTaille.BoxCol]}>
              <TouchableOpacity
                style={[StylesTaille.ScrollUp]}
                onPress={() =>
                  setCurrentPage(prev => (prev > 0 ? prev - 1 : prev))
                }
                accessibilityLabel="Monter">
                <Image
                  source={require('../../../assets/boutons/Arrow1.png')}
                  style={[StylesTaille.ScrollUpImg]}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[StylesTaille.ScrollDown]}
                onPress={() =>
                  setCurrentPage(prev =>
                    prev < pages.length - 1 ? prev + 1 : prev,
                  )
                }
                accessibilityLabel="Descendre">
                <Image
                  source={require('../../../assets/boutons/Arrow2.png')}
                  style={[StylesTaille.ScrollDownImg]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[StylesTaille.textWhite]}>Choix unique.</Text>
        </View>
        <TouchableOpacity
          style={StylesTaille.ViewBtn}
          onPress={() => {
            navigation.navigate('Langue parler');
            handleStoreData('taille', selectedSize ?? '');
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesTaille.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesTaille.imgBtn]}
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

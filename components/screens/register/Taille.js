import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {BtnNext} from '../../composants/BtnNext';
import StylesTaille from '../../../assets/style/styleScreens/styleRegister/StyleTaille';

export const Taille = ({route, navigation}) => {
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';
  const accesPosition = route.params?.accesPosition ?? '';
  const genre = route.params?.genre ?? '';
  const userBirth = route.params?.userBirth ?? '';

  const [buttonPressed, setButtonPressed] = useState();

  const scrollViewRef = useRef();

  const scrollDown = () => {
    scrollViewRef.current.scrollToOffset({offset: 10000, animated: true});
  };

  const scrollUp = () => {
    scrollViewRef.current.scrollToOffset({offset: 0, animated: true});
  };

  const [taille, setTaille] = useState();
  console.log('Taille: ' + taille);

  const Data = [];
  for (let i = 140; i <= 250; i++) {
    let value = i;
    Data.push({index: i, value: value + ' cm'});
  }

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePress = value => {
    setTaille(value);
    setSelectedIndex(value);
  };

  const renderItem = ({item}) => (
    <View style={[StylesTaille.SelectBox]}>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => handlePress(item.value)}
        accessibilityLabel={item.value}>
        <Text
          style={
            selectedIndex === item.value
              ? StylesTaille.SelectedText
              : StylesTaille.NotSelectedText
          }>
          {item.value}
        </Text>
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
            <SafeAreaView style={[StylesTaille.BoxFlat]}>
              <FlatList
                ref={scrollViewRef}
                style={[StylesTaille.Flat]}
                data={Data}
                initialNumToRender={3}
                refreshing={true}
                progressViewOffset={1}
                renderItem={renderItem}
                keyExtractor={item => item.index.toString()}
              />
            </SafeAreaView>
            <View style={[StylesTaille.BoxCol]}>
              <TouchableOpacity
                style={[StylesTaille.ScrollUp]}
                onPress={scrollUp}
                accessibilityLabel="Monter">
                <Image
                  source={require('../../../assets/boutons/Arrow1.png')}
                  style={[StylesTaille.ScrollUpImg]}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[StylesTaille.ScrollDown]}
                onPress={scrollDown}
                accessibilityLabel="Descendre">
                <Image
                  source={require('../../../assets/boutons/Arrow2.png')}
                  style={[StylesTaille.ScrollDownImg]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[StylesTaille.textWhite]}>Choix unique.</Text>
          <BtnNext
            route={route}
            navigation={navigation}
            navigateTo={'Langue parler'}
            txt={'Continuer'}
            background={'white'}
            top={300}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

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
import { BtnNext } from '../../composants/BtnNext';

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
    <View
      style={{
        width: 70,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
        alignSelf: 'center',
      }}>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => handlePress(item.value)}
        accessibilityLabel={item.value}>
        <Text
          style={
            selectedIndex === item.value
              ? Styles.SelectedText
              : Styles.NotSelectedText
          }>
          {item.value}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={{flex: 5}}>
          <View style={[Styles.ViewText]}>
            <Text style={[Styles.textTitleWhite3, {top: 150}]}>
              VOTRE TAILLE ?
            </Text>
          </View>
          <View style={{flexDirection: 'row',height:140, width:'80%',justifyContent:'center',alignSelf:'center',alignItems:'center',top:100,}}>
            <SafeAreaView style={[{top: 0, justifyContent:'center',}]}>
              <FlatList
                ref={scrollViewRef}
                style={{height:130,alignSelf:'center'}}
                data={Data}
                initialNumToRender={3}
                refreshing={true}
                progressViewOffset={1}
                renderItem={renderItem}
                keyExtractor={item => item.index.toString()}
              />
            </SafeAreaView>
            <View style={{flexDirection: 'column', height:130, top:5, left:20,alignItems:'center',}}>
              <TouchableOpacity
                style={{
                  top:10,
                  width: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                }}
                onPress={scrollUp}
                accessibilityLabel="Monter">
                <Image
                  source={require('../../../assets/boutons/Arrow1.png')}
                  style={{height: 70, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              
              <TouchableOpacity
                style={{
                  width: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                  bottom:10,
                }}
                onPress={scrollDown}
                accessibilityLabel="Descendre">
                <Image
                  source={require('../../../assets/boutons/Arrow2.png')}
                  style={{ height: 70, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <BtnNext
            route={route}
            navigation={navigation}
            navigateTo={'Langue parler'}
            txt={'Continuer'}
            background={'white'}
            top={400}
          />
        </View>
        {/* <View style={[{flex: 1}]}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Langue parler', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userEmail: userEmail,
                userPhone: userPhone,
                userCity: userCity,
                accesPosition: accesPosition,
                genre: genre,
                userBirth: userBirth,
                userSize: taille,
              });
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                Styles.textBtn9,
                {
                  zIndex: 1,
                  top: 40,
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[
                {
                  top: 0,
                  width: '90%',
                  height: 56,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
    </View>
  );
};

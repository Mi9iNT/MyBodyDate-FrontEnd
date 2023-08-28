/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export const VoixDuJour = ({route, navigation}) => {
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';
  const accesPosition = route.params?.accesPosition ?? '';
  const genre = route.params?.genre ?? '';
  const userBirth = route.params?.userBirth ?? '';
  const userSize = route.params?.userSize ?? '';
  const userLang = route.params?.userLang ?? '';
  const userSituation = route.params?.userSituation ?? '';
  const userOrientation = route.params?.userOrientation ?? '';
  const userRecherche1 = route.params?.userRecherche1 ?? '';
  const userRecherche2 = route.params?.userRecherche2 ?? '';
  const userAffinites = route.params?.userAffinites ?? '';
  const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
  const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';

  const [userSelected, setUserSelected] = useState();
  const [userSelected2, setUserSelected2] = useState();
  const [userSelected3, setUserSelected3] = useState();

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/Background.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={{ Flex: 1 }}>
          <TouchableOpacity onPress={() => { navigation.goBack(); }} style={{
              left: 330,
              top: 50,
              width: 20,
          }}>
            <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode:'contain',
            }}
          />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 50,
            }}>
            La voix du jour
          </Text>
          <Image
            source={require('../../../assets/images/MicGame.png')}
            style={{
              width: 55,
              height: 55,
              top: 110,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 130,
            }}>
            Retrouvez qui a la voix de :
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 160,
            }}>
            Soprano
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              fontStyle: 'italic',
              top: 160,
            }}>
            Celine Dion
          </Text>
          <TouchableOpacity onPress={() => { setUserSelected3(null); setUserSelected2(null); setUserSelected('Gaëlle'); }} style={{
              width: 122,
              top: 200,
              left: 195,
              flexDirection:'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/VoixGae.png')}
              style={{
                width: 119,
                height: 119,
                resizeMode: 'contain',
                borderRadius: 100,
                borderColor: userSelected === 'Gaëlle' ? '#A70000' : '#fff',
                borderWidth: 4,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '400',
                color: '#FFF',
              }}>
              Gaëlle
            </Text>
            {userSelected ?
            <Text style={{fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '400',
                color: userSelected === 'Gaëlle' ? '#A70000' : '#fff' }}>
              {userSelected === 'Gaëlle' ?
                'Perdu' : null}
            </Text>
             : null }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setUserSelected3(null); setUserSelected(null); setUserSelected2('Rachel'); navigation.navigate('Voix du jour2'); }} style={{
              width: 122,
              top: 200,
              left: 45,
              flexDirection:'column',
              justifyContent: 'space-between',
              alignItems: 'center',
          }}>
            <Image
              source={require('../../../assets/images/VoixRac.png')}
              style={{
                width: 119,
                height: 119,
                resizeMode: 'contain',
                borderRadius: 100,
                borderColor: userSelected2 === 'Rachel' ? '#0019A7' : '#fff',
                borderWidth: 4,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '400',
                color: '#FFF',
              }}>
              Rachel
            </Text>
            {userSelected2 ?
              <Text style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '400',
                color: userSelected2 === 'Rachel' ? '#0019A7' : '#A70000' }}>
              {userSelected2 === 'Rachel' ?
                'Gagné' : null}
            </Text>
             : null }

          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setUserSelected3('Beverly'); setUserSelected2(null); setUserSelected(null); }}
            style={{
              width: 122,
              top: 100,
              left: 240,
              flexDirection:'column',
              justifyContent: 'space-between',
              alignItems: 'center',
          }}>
            <Image
              source={require('../../../assets/images/VoixBev.png')}
              style={{
                width: 119,
                height: 119,
                resizeMode: 'contain',
                borderRadius: 100,
                borderColor: userSelected3 === 'Beverly' ? '#A70000' : '#fff',
                borderWidth: 4,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '400',
                color: '#FFF',
              }}>
              Beverly
            </Text>
            {userSelected3 ?
            <Text style={{fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '400',
                color: userSelected3 === 'Beverly' ? '#A70000' : '#fff' }}>
              {userSelected3 === 'Beverly' ? 'Perdu' : null}
            </Text>
             : null }
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

VoixDuJour.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import PropTypes from 'prop-types';

export const Revenus = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  // SwitchButton

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [buttonPressed, setButtonPressed] = useState(false);
  const [optionsShow, setOptionShow] = useState(false);
  const [selectedRevenu, setSelectedRevenu] = useState(null);

  const handleRevenuToggle = revenu => {
    if (selectedRevenu === revenu) {
      setSelectedRevenu(null); // Désélectionne l'option si elle est déjà sélectionnée
    } else {
      setSelectedRevenu(revenu); // Sélectionne la nouvelle option
    }
  };

  const revenus = [
    'Pas important',
    'Moins de 10 000 €',
    '10001 - 20000 €',
    '20 000 € - 30 000 €',
    '30001 - 40000 €',
    '40001 - 50000 €',
    '50001 - 60000 €',
    '60001 - 80000 €',
    '80 001 - 100 000 €',
    'Plus de 100 0001',
  ];

  return (
    <ImageBackground
      style={{
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
      }}
      source={require('../../../assets/images/bg-parametres.png')}>
      <View style={{ flex: 5 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{left: 350, width: 20, marginTop: 30}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              top: 4,
              width: 20,
              height: 18,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            top: 50,
            color: '#0019A7',
            fontFamily: 'Gilroy',
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 700,
          }}>
          Revenus
        </Text>
        <View
          style={{
            backgroundColor: '#0019A7',
            width: 351,
            height: 1,
            alignSelf: 'center',
            top: 80,
          }}
        />
        <Text
          style={{
            top: 120,
            width: '60%',
            alignSelf: 'center',
            color: '#0019A7',
            fontFamily: 'Comfortaa',
            textAlign: 'center',
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: 500,
          }}>
          Sélectionnez votre critère.
        </Text>
        <TouchableOpacity
          onPress={() => setOptionShow(!optionsShow)}
          style={{
            top: 202,
            borderRadius: 24,
            borderColor: '#0019A7',
            borderWidth: 1,
            width: 276,
            height: 51,
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#0019A7',
              textAlign: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 15,
              fontStyle: 'normal',
              fontWeight: selectedRevenu ? 700 : 500,
            }}>
            {selectedRevenu ? selectedRevenu : "Revenus"}
          </Text>
          <Image
            style={{
              position: 'absolute',
              left: 240,
              width: 17,
              height: 17,
              resizeMode: 'contain',
              transform: [{rotate: optionsShow ? '90deg' : '-90deg'}],
            }}
            source={require('../../../assets/images/flèche-B.png')}
          />
        </TouchableOpacity>

        {optionsShow ? (
          <View
            style={{
              position: 'absolute',
              top: 340,
              alignSelf: 'center',
              width: 276,
              bottom: 0, // Ajuster la position pour occuper tout l'espace vertical
            }}>
            <ScrollView
              style={{
                flexDirection: 'column',
                borderRadius: 26,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderWidth: 1,
                borderTopWidth: 0,
                borderColor: '#0019A7',
                backgroundColor: 'rgba(255, 255, 255, 0.90)',
                paddingTop: 40,
                paddingBottom: 20,
              }}>
              {revenus.map(revenu => (
                <TouchableOpacity
                  key={revenu}
                  style={{marginBottom: 20}}
                  onPress={() => {
                    handleRevenuToggle(revenu);
                    setOptionShow(false);
                  }}>
                  <Text
                    style={{
                      color: selectedRevenu === revenu ? '#0019A7' : '#929EDE',
                      textAlign: 'center',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontStyle: 'normal',
                      fontWeight: 700,
                    }}>
                    {revenu}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ) : null}
        <Text
          style={{
            zIndex: optionsShow ? -1 : 1,
            top: 420,
            left: 40,
            color: '#000',
            fontFamily: 'Comfortaa',
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: 700,
            textDecorationLine: 'underline',
          }}>
          Choix unique.
        </Text>
        <View
          style={{
            zIndex: optionsShow ? -1 : 1,
            flexDirection: 'row',
            top: 460,
            width: '80%',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#000',
              width: 230,
              fontFamily: 'Comfortaa',
              fontSize: 15,
              fontStyle: 'normal',
              fontWeight: 700,
              textDecorationLine: 'underline',
            }}>
            Afficher d’autres profils si mes critères sont trop sélectifs.
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{}}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{top: 50}}
          onPress={() => {
            setButtonPressed(true);
            navigation.navigate('Filtres avances');
          }}>
          <Image
            style={{
              width: 331,
              height: 56,
              flexShrink: 0,
              alignSelf: 'center',
            }}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              {
                top: -40,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 700,
              },
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Retour filtres avancés
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

Revenus.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Revenus;

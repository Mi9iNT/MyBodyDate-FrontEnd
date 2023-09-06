import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Styles from '../../../assets/style/Styles';
import { BtnNext } from '../../composants/BtnNext';

export const DateDeNaissance = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';
  const accesPosition = route.params?.accesPosition ?? '';
  const genre = route.params?.genre ?? '';
  console.log('Choix de route : ', routeChoice);
  console.log('Consentement : ', consentement);
  console.log('Love Coach : ', loveCoach);
  console.log('Email : ', userEmail);
  console.log('Téléphone : ', userPhone);
  console.log('Ville : ', userCity);
  console.log('Accès position : ', accesPosition);
  console.log('Genre : ', genre);

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');
  const [shortDate, setShortDate] = useState('');
  const [age, setAge] = useState();
  const today = new Date();
  const [buttonPressed, setButtonPressed] = useState();

  const handleDateSelect = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    const dateShort = currentDate.toISOString().substr(0, 10);
    const dateArray = dateShort.split('-');
    const formattedDate = `${dateArray[2]} ${getMonthName(
      parseInt(dateArray[1]),
    )} ${dateArray[0]}`;
    setShortDate(dateShort);
    setFormattedDate(formattedDate);

    // Conversion en format YYYY-MM-DD pour BDD ?
    const formattedShortDate = `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`;
    const ageCurrent = calculateAge(formattedShortDate);
    setAge(ageCurrent);
    console.log('Date formatée ', formattedDate, ' et non formatée', dateShort);
    console.log('Formatted Short Date: ', formattedShortDate);
    console.log('Age actuel: ', ageCurrent, ' ans');
  };

  // Fonction pour calculer l'âge à partir de la date de naissance
  const calculateAge = birthdate => {
    const birthdateDate = new Date(birthdate);
    const birthYear = birthdateDate.getFullYear();
    console.log(birthYear, 'serieux', birthdate);
    let age = today.getFullYear() - birthYear;
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  console.log(formattedDate);
  const getMonthName = month => {
    const monthNames = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];
    return monthNames[month - 1];
  };

  const [selectedOption, setSelectedOption] = useState('Oui');

  const RadioInput = ({label, subText, selected}) => {
    const icon =
      selected === 'oui'
        ? require('../../../assets/images/radio_selected_noir.png')
        : require('../../../assets/images/radio_unselected.png');

    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: 140,
          height: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image source={icon} style={Styles.radioInputIcon} />
        <View
          style={{
            flexDirection: 'column',
            width: 130,
            height: 46,
          }}>
          <Text
            style={[
              {
                fontFamily: selected === 'oui' ? 'Comfortaa-Bold' : 'Comfortaa',
                fontSize: 13,
                fontStyle: 'normal',
                color: selected === 'oui' ? '#0019A7' : '#fff',
                fontWeight: selected === 'oui' ? 700 : 500,
              },
            ]}>
            {label}
          </Text>
          <Text
            style={[
              {
                fontFamily: selected === 'oui' ? 'Comfortaa-Bold' : 'Comfortaa',
                fontSize: 13,
                fontStyle: 'normal',
                color: selected === 'oui' ? '#0019A7' : '#fff',
                fontWeight: selected === 'oui' ? 700 : 500,
              },
            ]}>
            {subText}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={{flex: 8}}>
          <View style={[Styles.ViewText, {top: 80}]}>
            <Text style={[Styles.textTitleWhite3, {top: 50}]}>VOTRE DATE</Text>
            <Text style={[Styles.textTitleWhite3, {top: 50}]}>
              DE NAISSANCE ?
            </Text>
          </View>

          <SafeAreaView style={[Styles.ViewInputDate, {top: 180}]}>
            <View>
              <TouchableOpacity
                style={[
                  {
                    top: 0,
                    width: 320,
                    height: 140,
                    borderRadius: 100,
                    padding: 16,
                    color: '#fff',
                    borderColor: '#0F0BAE',
                    borderWidth: 2,
                    textAlign: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}
                accessibilityLabel="Sélectionner une date"
                onPress={() => setShowDatePicker(true)}>
                {formattedDate ? (
                  <Text
                    style={[
                      {
                        color: '#0019A7',
                        textAlign: 'center',
                        fontFamily: 'Comfortaa',
                        fontSize: 18,
                        fontStyle: 'normal',
                        fontWeight: 700,
                      },
                    ]}>
                    {formattedDate}
                  </Text>
                ) : (
                  <Text
                    style={[
                      {
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Comfortaa',
                        fontSize: 18,
                        fontStyle: 'normal',
                        fontWeight: 700,
                      },
                    ]}>
                    DD/MM/AAAA
                  </Text>
                )}
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={handleDateSelect}
                />
              )}
            </View>
          </SafeAreaView>
          <View
            style={{
              top: 200,
              width: '90%',
              height: 200,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Comfortaa',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Catégorisation automatique.
            </Text>
            <View
              style={{
                flexDirection: 'column',
                width: '100%',
                height: 160,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  width: '90%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <RadioInput
                  label="GEN Z"
                  subText="(18 - 23 ans)"
                  selected={age >= 18 && age <= 23 ? 'oui' : 'non'}
                />
                <RadioInput
                  label="GEN X"
                  subText="(38 - 56 ans)"
                  selected={age >= 38 && age <= 56 ? 'oui' : 'non'}
                />
              </View>
              <View
                style={{
                  width: '90%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <RadioInput
                  label="MILLENNIALS"
                  subText="(24 - 37 ans)"
                  selected={age >= 24 && age <= 37 ? 'oui' : 'non'}
                />
                <RadioInput
                  label="BOOMER"
                  subText="(57 - 77 ans)"
                  selected={age >= 57 && age <= 77 ? 'oui' : 'non'}
                />
              </View>
            </View>
          </View>

          <View style={[Styles.ViewTextChoice, {top: 220, left: 30}]}>
            <Text style={[Styles.textWhite2, {fontSize: 12}]}>
              Choix unique.
            </Text>
          </View> 
          <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Taille'}
          txt={'Continuer'}
          background={'white'}
          top={80}
        />
        </View>

        {/* <View style={[Styles.ViewBtn1, {flex: 1}]}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Taille', {
                userConsent: consentement,
                routeName: routeChoice,
                loveCoach: loveCoach,
                userEmail: userEmail,
                userPhone: userPhone,
                userCity: userCity,
                accesPosition: accesPosition,
                genre: genre,
                userBirth: shortDate,
              });
            }}
            accessibilityLabel="Continuer">
            <Text style={[Styles.textBtn9, {zIndex: 1, top: 23, color:buttonPressed === 'Continuer' ? '#fff' : '#0019A7'}]}>
              Continuer
            </Text>
            <Image
              style={[
                {
                  bottom: 20,
                  height: 56,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={buttonPressed === 'Continuer' ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc.png')}
            />
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
    </View>
  );
};

DateDeNaissance.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

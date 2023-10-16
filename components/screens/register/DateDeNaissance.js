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
import {BtnNext} from '../../composants/BtnNext';
import StylesDateDeNaissance from '../../../assets/style/styleScreens/styleRegister/StyleDateDeNaissance';

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
    <View style={StylesDateDeNaissance.container}>
      <ImageBackground
        style={StylesDateDeNaissance.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesDateDeNaissance.TxtTitle]}>VOTRE DATE</Text>
        <Text style={[StylesDateDeNaissance.TxtTitle]}>DE NAISSANCE ?</Text>

        <SafeAreaView style={[StylesDateDeNaissance.ViewInputDate]}>
          <View>
            <TouchableOpacity
              style={[StylesDateDeNaissance.BtnPicker]}
              accessibilityLabel="Sélectionner une date"
              onPress={() => setShowDatePicker(true)}>
              {formattedDate ? (
                <Text style={[StylesDateDeNaissance.textBlue]}>
                  {formattedDate}
                </Text>
              ) : (
                <Text style={[StylesDateDeNaissance.textWhite]}>
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
        <View style={[StylesDateDeNaissance.BoxInput]}>
          <Text style={[StylesDateDeNaissance.textWhite1]}>
            Catégorisation automatique.
          </Text>
          <View style={[StylesDateDeNaissance.BoxInputCol]}>
            <View style={[StylesDateDeNaissance.BoxInputRow]}>
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
            <View style={[StylesDateDeNaissance.BoxInputRow]}>
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

        {age > 77 || age < 18 ? (
          <View style={[StylesDateDeNaissance.ViewTextError]}>
            <Text style={[StylesDateDeNaissance.TextError]}>
              Vous n'avez pas l'âge requis pour faire aboutir votre inscription.
            </Text>
          </View>
        ) : null}
        <Text style={[StylesDateDeNaissance.textWhite2]}>Choix unique.</Text>
        <BtnNext
          route={route}
          navigation={navigation}
          navigateTo={'Taille'}
          txt={'Continuer'}
          background={'white'}
          top={150}
        />
      </ImageBackground>
    </View>
  );
};

DateDeNaissance.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

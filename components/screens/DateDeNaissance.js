import React, { useState } from 'react';
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
import Styles from '../../assets/style/Styles';

export const DateDeNaissance = ({ route, navigation }) => {
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

  const handleDateSelect = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    const dateShort = currentDate.toISOString().substr(0, 10);
    const dateArray = dateShort.split('-');
    const formattedDate = `${dateArray[2]} ${getMonthName(parseInt(dateArray[1]))} ${dateArray[0]}`;
    setShortDate(dateShort);
    setFormattedDate(formattedDate);
    console.log('Date formaté ', formattedDate, ' et non formater', dateShort);
  };
  console.log(formattedDate);
  const getMonthName = (month) => {
    const monthNames = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    return monthNames[month - 1];
  };

  return (
    <View style={Styles.container}>
      <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, { top: 100 }]}>
          <Text style={[Styles.textTitleWhite3, { top: 50 }]}>VOTRE DATE</Text>
          <Text style={[Styles.textTitleWhite3, { top: 50 }]}>DE NAISSANCE ?</Text>
        </View>

        <SafeAreaView style={[Styles.ViewInputDate, { top: 200 }]}>
          <View>
            <TouchableOpacity style={[{ top: 50, width: 320, height: 60, borderRadius: 40, padding: 16, color: '#fff', borderColor: '#0F0BAE', borderWidth: 2, textAlign: 'center', alignSelf: 'center' }]} accessibilityLabel="Sélectionner une date" onPress={() => setShowDatePicker(true)}>
              {formattedDate ? <Text style={[Styles.textBtn8]}>{formattedDate}</Text> : <Text style={[Styles.textBtn7, { left: 20 }]}>Entrez votre date de naissance</Text>}
              <Image style={[{ resizeMode: 'contain', zIndex: 2, top: -270, left: 250, width: 35 }]} source={require('../../assets/boutons/calendrier.png')} />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker testID="dateTimePicker" value={date} mode="date" is24Hour={true} display="default" onChange={handleDateSelect} />
            )}
          </View>
        </SafeAreaView>

        <View style={[Styles.ViewTextChoice, { top: 350, left: 30 }]}>
          <Text style={[Styles.textWhite2]}>Choix unique.</Text>
        </View>

        <View style={[Styles.ViewBtn1, { top: 50 }]}>
          <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Taille', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: shortDate })} accessibilityLabel="Continuer">
            <Text style={[Styles.textBtn9, { zIndex: 1, top: 40 }]}>Continuer</Text>
            <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf: 'center' }]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

DateDeNaissance.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};


// import React, { useState } from 'react'
// import {
//     View,
//     Text,
//     ImageBackground,
//     Image,
//     SafeAreaView,
//     TouchableOpacity,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Styles from '../../assets/style/Styles';

// export const DateDeNaissance = ({ route, navigation }) => {
//     // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
//     const routeChoice = route.params?.routeName ?? '';
//     const consentement = route.params?.userConsent ?? '';
//     const loveCoach = route.params?.loveCoach ?? '';
//     const userEmail = route.params?.userEmail ?? '';
//     const userPhone = route.params?.userPhone ?? '';
//     const userCity = route.params?.userCity ?? '';
//     const accesPosition = route.params?.accesPosition ?? '';
//     const genre = route.params?.genre ?? '';
//     console.log('Choix de route : ' , routeChoice);
//     console.log('Consentement : ' , consentement);
//     console.log('Love Coach : ', loveCoach);
//     console.log('Email : ', userEmail);
//     console.log('Téléphone : ', userPhone);
//     console.log('Ville : ', userCity);
//     console.log('Accès position : ', accesPosition);
//     console.log('Genre : ', genre);


//     const [date, setDate] = useState(new Date());
//     const [showDatePicker, setShowDatePicker] = useState(false);
//     const [formattedDate, setFormattedDate] = useState('');
//     const [shortDate, setShortDate] = useState('');


//     // Pour handleDateSelect la méthode toISOString() est appelée sur l'objet currentDate pour le convertir en une chaîne de caractères ensuite la méthode substr() est appliquée à la chaîne de caractères résultante pour extraire les 10 premiers caractères, la méthode split() permet de diviser une chaîne de caractères en un tableau de sous-chaînes en utilisant un séparateur spécifié ('-') et la méthode parseInt() est utilisée ici pour convertir la deuxième chaîne correspondante au mois de la date (qui est initialement une chaîne de caractères) en un nombre entier.
//     const handleDateSelect = (event, selectedDate) => {
//       const currentDate = selectedDate || date;
//       setShowDatePicker(false);
//       setDate(currentDate);
//       const dateShort = currentDate.toISOString().substr(0, 10);
//       const dateArray = dateShort.split('-');
//       const formattedDate = `${dateArray[2]} ${getMonthName(parseInt(dateArray[1]))} ${dateArray[0]}`;
//       setShortDate(dateShort);  
//       setFormattedDate(formattedDate);
//       console.log('Date formaté ',formattedDate, ' et non formater', dateShort);  
//     };
//     console.log(formattedDate);
//     const getMonthName = (month) => {
//       const monthNames = [
//       'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
//       ];
//       return monthNames[month - 1];
//     };
  
//   return (
//     <View style={Styles.container}>
//       <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
//         <View style={[Styles.ViewText, {top:100}]}>
//           <Text style={[Styles.textTitleWhite3, { top: 50 }]}>VOTRE DATE</Text>
//           <Text style={[Styles.textTitleWhite3, {top:50}]}>DE NAISSANCE ?</Text>
//         </View>
            
//         <SafeAreaView style={[Styles.ViewInputDate, {top: 200}]} >
//           <View>
//             <TouchableOpacity style={[{ top: 50, width: 320, height: 60, borderRadius: 40, padding: 16, color: '#fff', borderColor: '#0F0BAE', borderWidth: 2, textAlign: 'center', alignSelf: 'center' }]} accessibilityLabel="Sélectionner une date" onPress={() => setShowDatePicker(true)}>
//               {formattedDate ? <Text style={[Styles.textBtn8]}>{ formattedDate }</Text> : <Text style={[Styles.textBtn7, {left:20}]}>Entrez votre date de naissance</Text>}
//               <Image style={[{resizeMode:'contain', zIndex:2, top:-270, left:250, width:35}]} source={require('../../assets/boutons/calendrier.png')}/>
//             </TouchableOpacity>
//               {showDatePicker && (
//                 <DateTimePicker testID="dateTimePicker" value={date} mode="date" is24Hour={true} display="default" onChange={handleDateSelect}/>
//               )}
//             </View>    
//           </SafeAreaView>
                    
//         <View style={[Styles.ViewTextChoice,{top:350, left:30}]}>
//             <Text style={[Styles.textWhite2]}>Choix unique.</Text>
//         </View>   
            
//         <View style={[Styles.ViewBtn1, {top:50}]}>
//           <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Taille', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: shortDate })} accessibilityLabel="Continuer">
//             <Text style={[Styles.textBtn9, { zIndex:1, top:40}]}>Continuer</Text>
//             <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </View>
//     )
// }



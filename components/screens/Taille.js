import React, { useState, useRef } from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Styles from '../../assets/style/Styles';

export const Taille = ({ route, navigation }) => {

    // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
    const routeChoice = route.params?.routeName ?? '';
    const consentement = route.params?.userConsent ?? '';
    const loveCoach = route.params?.loveCoach ?? '';
    const userEmail = route.params?.userEmail ?? '';
    const userPhone = route.params?.userPhone ?? '';
    const userCity = route.params?.userCity ?? '';
    const accesPosition = route.params?.accesPosition ?? '';
    const genre = route.params?.genre ?? '';
    const userBirth = route.params?.userBirth ?? '';
    console.log('Choix de route : ' , routeChoice);
    console.log('Consentement : ' , consentement);
    console.log('Love Coach : ', loveCoach);
    console.log('Email : ', userEmail);
    console.log('Téléphone : ', userPhone);
    console.log('Ville : ', userCity);
    console.log('Accès position : ', accesPosition);
    console.log('Genre : ', genre);
    console.log('Date de naissance : ', userBirth);
 
    
    const scrollViewRef = useRef();

    const scrollDown = () => {
        scrollViewRef.current.scrollToOffset({ offset: 10000, animated: true });
    };

    const scrollUp = () => {
        scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
    };

    const [taille, setTaille] = React.useState();
    console.log('Taille: ' + taille);

    const Data = [];
    for (let i = 140; i <= 250; i++) {
    let value = i ;
    Data.push({index: i, value: value + ' cm'});
    }
    
    const [selectedIndex, setSelectedIndex] = React.useState(null);
        
    const handlePress = (value) => {
        setTaille(value);
        setSelectedIndex(value); 
    };
        
    const renderItem = ({ item }) => (
        <View style={{ width:70, padding: 10, borderBottomWidth: 1, borderBottomColor: '#FFF', alignSelf:'center' }}>
            <TouchableOpacity style={Styles.btn} onPress={()=>handlePress(item.value)} accessibilityLabel={item.value}>
                <Text style={(selectedIndex === item.value)?Styles.SelectedText:Styles.NotSelectedText}>{ item.value }</Text>
            </TouchableOpacity>
        </View>
    );

       
return (
    <View style={Styles.container}>
        <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
        <View style={[Styles.ViewText]}>
            <Text style={[Styles.textTitleWhite3, {top: 100}]}>VOTRE TAILLE ?</Text>
        </View>
                
        <SafeAreaView style={[{top:180}]} >
            <TouchableOpacity style={Styles.btn} onPress={scrollUp} accessibilityLabel="Monter">
                <Icon name="arrow-up" style={Styles.ScrollBtnUp} size={19} color="#fff" />
            </TouchableOpacity>
                   
                    
            <ScrollView style={[Styles.ViewScroll]}  alwaysBounceVertical={true}>
                
                <FlatList
                    ref={scrollViewRef}
                    style={[Styles.ViewFlatlist]}
                    data={Data}
                    initialNumToRender={3}
                    refreshing={true}
                    progressViewOffset={1}
                    renderItem={renderItem}
                    keyExtractor={item => item.index.toString()}
                />
            </ScrollView>

            <View style={Styles.barreScrollBtn}></View>
                    
            <TouchableOpacity style={Styles.btn} onPress={scrollDown} accessibilityLabel="Descendre">
                <Icon name="arrow-down" size={19} style={Styles.ScrollBtnDown} color="#fff" />
            </TouchableOpacity>

        </SafeAreaView>
        <View style={[Styles.ViewTextChoice, {top:200, left:40}]}>
            <Text style={[Styles.textWhite2,{top:60}]}>Choix unique.</Text>
        </View>   
            
        <View style={[Styles.ViewBtn1, {top:20}]}>
                <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Langue parler', { userConsent: consentement, routeName: routeChoice, loveCoach: loveCoach, userEmail: userEmail, userPhone: userPhone, userCity: userCity, accesPosition: accesPosition, genre: genre, userBirth: userBirth, userSize: taille })} accessibilityLabel="Continuer">
                <Text style={[Styles.textBtn9, { zIndex:1, top:45}]}>Continuer</Text>
                <Image style={[{ top: 0, width: '90%', height: 60, resizeMode: 'contain', alignSelf:'center'}]} source={require('../../assets/boutons/Bouton-Blanc.png')} />
            </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>
        
    )
}

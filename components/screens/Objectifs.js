import React, {useState} from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import Styles from '../../assets/style/Styles';

export const Objectifs = ({ navigation }) => {

    // Constante permettant de récupérer les boutons sélectionnés par l'utilisateur
    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonPress = (value) => {
        // Copie le tableau des boutons sélectionnés
        let newSelectedButtons = [...selectedButtons];

        if (newSelectedButtons.includes(value)) {
            // Si la valeur est déjà dans le tableau, la retire
            newSelectedButtons = newSelectedButtons.filter(item => item !== value);
        } else {
            // Ajoute la valeur au tableau
            newSelectedButtons.push(value);
        }

        // Met à jour le tableau des boutons sélectionnés
        setSelectedButtons(newSelectedButtons);
        console.log('Objectifs : '+newSelectedButtons)
    }

    return (
    <View style={Styles.container}>
        <ImageBackground style={Styles.bgGradient} source={require('../../assets/images/Background.png')}>
           <View style={[Styles.ViewText, {top:100}]}>
                <Text style={[Styles.textTitleWhite3]}>VOS OBJEFTIFS ?</Text>
            </View>
             
            <View style={[Styles.ViewBTNSelect]}>
                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => handleButtonPress('Relation amoureuse')} accessibilityLabel="Relation amoureuse">
                    <Text style={selectedButtons.includes('Relation amoureuse') ? Styles.btnSelected : Styles.btnNotSelected}>Relation amoureuse</Text>
                </TouchableOpacity>      
                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => handleButtonPress('Cercle d\'amis.es')} accessibilityLabel="Cercle d\'amis.es">
                    <Text style={selectedButtons.includes('Cercle d\'amis.es') ? Styles.btnSelected : Styles.btnNotSelected}>Cercle d'amis.es</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.btn, Styles.mt20]} onPress={() => handleButtonPress('Développer mon réseau professionnel')} accessibilityLabel="Développer mon réseau professionnel">
                    <Text style={selectedButtons.includes('Développer mon réseau professionnel') ? Styles.btnSelected : Styles.btnNotSelected}>Développer mon réseau professionnel</Text>
                </TouchableOpacity>
            </View>

            <View style={{top:180, left:40}}>
                <Text style={[Styles.textWhite2]}>Choix multiple.</Text>
            </View>   
            
            <View style={[Styles.ViewBtn2]}>
                <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Recherche1')} accessibilityLabel="Continuer">
                    <Text style={Styles.textBtn3}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
        
    )
}

import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from '../../assets/style/Styles';

//Home Screen
export const HomeStack = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home Next');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../assets/images/Background.png')}>
        <View style={Styles.ViewLogo1}>
          <Image
            style={Styles.logo1}
            source={require('../../assets/images/logo.png')}
          />
        </View>

        {/* <View style={[Styles.ViewBtn1, {top: 400}]}>
                <TouchableOpacity
                    style={Styles.btn1}
                    onPress={() => navigation.navigate('Home Next')}
                    accessibilityLabel="Commencer">
                    <Text style={Styles.textBtn}>Commencer</Text>
                </TouchableOpacity>
            </View> */}
      </ImageBackground>
    </View>
  );
};

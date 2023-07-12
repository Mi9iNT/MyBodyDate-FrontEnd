import {View, Image} from 'react-native';
import React from 'react';
import Styles from '../../assets/style/Styles';

const Logo = () => {
  return (
    <View style={Styles.ViewLogo2}>
      <Image
        style={Styles.logo2}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
};

export default Logo;

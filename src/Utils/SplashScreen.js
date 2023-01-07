import React from 'react';
import { View, Text, Image } from 'react-native';

const SplashScreen = () => {
  return (
    
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('./../../assets/img/logo2.png')} />
     </View>
  );
}


export default SplashScreen;
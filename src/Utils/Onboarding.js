import React,{useState,useEffect} from 'react';
import {StyleSheet, Text,View,Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Approot from '../../Approot';


const slides = [

    {
      key: 'one',
      title: 'Plan Your Trip',
      text:'Save Places and book your perfect trip with Circle App',
      image: require('./../../assets/img/splash/one.png'),
  
    },
    {
      key: 'two',
      title: 'Begin The Adventure',
      text:'You can start your adventure alone or with your family & friends.',
      image: require('./../../assets/img/splash/two.png'),
  
    },
    {
      key: 'three',
      title: 'Enjoy Your Trip',
      text:'Enjoy your Travel Circle Package and stay relaxed.',
      image: require('./../../assets/img/splash/three.png'),
  
    }
    
  ]

export default function Onboarding({navigation}) {
    const [showRealApp,setShowRealApp] = useState(false)

    const _renderItem = ({item}) => { 
      return (
        <View style={styles.container}>
          <Image source={item.image} style={styles.sliderImage}/>
          <Text style={styles.sliderTitle}>{item.title}</Text>
          <Text style={styles.sliderText}>{item.text}</Text>
        </View>
      )
    }

    const _renderNextButton = () => {
      return (
        <View style={styles.buttonCircle}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      );
    }

   const _renderDoneButton = () =>{
      return (
        <View onPress={()=>navigation.navigate('Login')} style={styles.buttonCircle}>
          <Text onPress={()=>navigation.navigate('Login')} style={styles.buttonText}>Done</Text>
        </View>
      );
   }

   const _renderSkipButton = () =>{
    return (
      <View onPress={()=>navigation.navigate('Login')} style={styles.buttonCircle}>
        <Text onPress={()=>navigation.navigate('Login')} style={styles.buttonText}>Skip</Text>
      </View>
    );
   }

    const _onDone = () => {
      navigation.navigate('Login')
    }


  if(showRealApp){
    return <Approot/> 
  }else{
    return <AppIntroSlider 
              renderItem={_renderItem} 
              data={slides} 
              // onDone={_onDone}
              activeDotStyle={{
                backgroundColor:'#0094FF',
                width:30
              }}
              renderNextButton={_renderNextButton}
              renderSkipButton={_renderSkipButton}
              renderDoneButton={_renderDoneButton}
              showSkipButton={true}
            />
  }
    
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      color:'#0094FF',
      paddingHorizontal:20
    },
    sliderImage:{
      resizeMode:'contain',
      height:'50%',
      width:'100%',
      top:-50,
    },
    sliderTitle:{
      fontSize:30,
    //   fontWeight:'bold',
      color:'#0094FF',
      top:-50,
      paddingHorizontal:60,
      textTransform:'uppercase',
      fontFamily:'Gilroy-Bold'
  
    },
    sliderText:{
      fontSize:20,
    //   fontWeight:'bold',
      color:'gray',
      padding:10,
      top:-30,
      fontFamily:'Gilroy-Light',
        textAlign:'center'
    },
    buttonCircle: {
      width: 90,
      height: 40,
      backgroundColor: '#0094FF',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
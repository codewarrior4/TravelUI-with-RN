import React,{useState} from 'react';
import {StyleSheet, Text,View,Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [

  {
    key: 'one',
    title: 'Just Travel Anywhere',
    text:'A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.',
    image: require('./assets/img/one.png'),

  },
  {
    key: 'two',
    title: 'Take A Break',
    text:'A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.',
    image: require('./assets/img/two.png'),

  },
  {
    key: 'three',
    title: 'Enjoy Your Journey',
    text:'A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.',
    image: require('./assets/img/three.png'),

  }
  
]


const App = () => {

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

  const _onDone = () => {
    setShowRealApp(true)
  }

  if(showRealApp){
    return <App/> 
  }else{
    return <AppIntroSlider 
              renderItem={_renderItem} 
              data={slides} 
              onDone={_onDone}
              activeDotStyle={{
                backgroundColor:'#F9A826',
                width:30
              }}
              renderNextButton={_renderNextButton}
            />
  }

};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    color:'#F9A826'
  },
  sliderImage:{
    resizeMode:'contain',
    height:'50%',
    width:'100%',
    top:-50,
  },
  sliderTitle:{
    fontSize:30,
    fontWeight:'bold',
    color:'#F9A826',
    top:-50,
    textTransform:'uppercase'

  },
  sliderText:{
    fontSize:20,
    fontWeight:'bold',
    color:'gray',
    padding:10,
    top:-30
  },
  buttonCircle: {
    width: 70,
    height: 40,
    backgroundColor: '#F9A826',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
import { StatusBar,Input } from 'native-base';
import React from 'react';
import { View, Text,  StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Otp({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0094FF'} translucent={true} barStyle={'dark-content'}/>
      
      <View style={styles.header}>
          <Text onPress={()=>{navigation.goBack()}}>
            <Ionicons name="arrow-back"  color={'black'} size={24} /> 
          </Text>

      </View>
      <View style={styles.form}>
          {/* Login Form */}
          <Text style={styles.text}>Reset OTP</Text>
          <View style={styles.fieldInput}>
            <Input style={styles.input} mx="3"  outlineColor={{color:'red'}} w="100%" size="xl" variant={'unstyled'} placeholder="Enter Otp" />
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Newpassword')}>
            <Text style={styles.btnText}>Confirm </Text>
          </TouchableOpacity>

          
          <View style={{flex:1,justifyContent:'flex-start',marginTop:30,alignItems:'stretch'}}>
            <Text style={{color:'#0094FF',fontFamily:'Gilroy-Medium',fontSize:16}}>Resend Otp</Text>
          </View>
        </View>
     </View>
          
  );
}


const styles = StyleSheet.create({
  subText:{
    fontFamily:'Gilroy-Medium',
    color:'#000000c0',
    fontSize:20,
    textAlign:'center'
  },
  header:{
    marginTop:50,
    marginBottom:30

  },
 
  container: {
    flex: 1,
    paddingHorizontal:10,
    backgroundColor:'#fff',
  
  },
  image: {
    flex: 1,
    justifyContent: "center",
    border:1,
  },
  text: {
    color: "#000000c0",
    fontSize: 27,
    textAlign: "center",
    fontFamily:'Gilroy-Bold',
    marginBottom:20
  },
  imgBg:{
    flex:1,
    height:260,
    width:'90%',
    backgroundColor:'#fff',
    overflow:'hidden',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
    marginHorizontal:20,
    
  },
  form:{
    flex:1,
    width:'90%',
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    alignItems:'center',
    marginHorizontal:20,
    marginTop:30
  },
  input:{
    width:'100%',
    fontFamily:'Gilroy-Medium',
    fontSize:16,
    borderWidth:0,
    paddingHorizontal:6,
    // outlineStyle:'none',
    backgroundColor:'#E5E5E5',
  },
  fieldInput:{
    marginVertical:10,
  },
  button:{
    width:'100%',
    backgroundColor:'#0094FF',
    paddingVertical:15,
    borderRadius:5,
    marginVertical:10,
    justifyContent:'center',
    alignItems:'center'

  },
  btnText:{
    color:'#fff',
    fontSize:16,
    fontFamily:'Gilroy-Medium'
  }

});
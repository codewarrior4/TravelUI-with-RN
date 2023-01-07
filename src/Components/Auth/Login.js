import { StatusBar } from 'native-base';
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Input,} from "native-base";


export default function Login({navigation}) {

  return (
      <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
        <StatusBar backgroundColor={'#0094FF'} translucent={true} barStyle={'dark-content'}/>
        <View style={styles.imgBg}>
          {/* Image Background */}
          <Image source={require('./../../../assets/img/auth/login.png')} resizeMode="contain" style={styles.image} />
        </View>
        
        <View style={styles.form}>
          {/* Login Form */}
          <Text style={styles.text}>Sign In</Text>
          <View style={styles.fieldInput}>
            <Input style={styles.input} mx="3"  outlineColor={{color:'red'}} w="100%" size="xl" variant={'filled'} placeholder="Your email" />
          </View>
          <View style={styles.fieldInput}>
            <Input style={styles.input} secureTextEntry={true}  type={'password'} mx="3"  w="100%" size="xl" variant={'filled'} placeholder="Your password" />
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Register')}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
          
            <Text onPress={()=>{navigation.navigate('Reset')}} style={styles.forgot}>Forgot Password?</Text>
            <Text onPress={()=>{navigation.navigate('Register')}} style={styles.forgot}>Don't have an Account? <Text style={{color:'#0094FF'}}>Sign Up</Text></Text>

        </View>
      </ScrollView>
  );
}



const styles = StyleSheet.create({
  forgot:{
    color:'gray',
    fontFamily:'Gilroy-Bold',
    fontSize:16,
    paddingVertical:15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    overflow:'hidden',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:30,
    marginHorizontal:20,
  },
  input:{
    width:'100%',
    fontFamily:'Gilroy-Medium',
    fontSize:16,
    borderWidth:0,
    paddingHorizontal:6,
    outlineStyle:'none'
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

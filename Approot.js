import React,{useState,useEffect} from 'react';
import Onboarding from './src/Utils/Onboarding';
import SplashScreen from './src/Utils/SplashScreen';
import Register from './src/Components/Auth/Register'
import Login from './src/Components/Auth/Login'
import Newpassword from './src/Components/Auth/Newpassword'
import Otp from './src/Components/Auth/Otp'
import Reset from './src/Components/Auth/Reset'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/Utils/Tabs';

const Approot = () => {

  
  const [checking,setIsChecking] = useState(true)
  
  setTimeout(()=>{
    setIsChecking(false);
  },1500)
  
  if(checking){
    return <SplashScreen />
  }

  // if(!checking){
  //   return <Onboarding />
  // }

  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
         <Stack.Navigator initialRouteName={Onboarding}>
           <Stack.Group screenOptions={{headerShown:false}}>
             
             {/* use provider to check if user has installed app before  if not show onboard*/}

              <Stack.Screen name='Onboarding' component={Onboarding} />
              <Stack.Screen name='Register' component={Register}/>
              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen name='Reset' component={Reset}/>
              <Stack.Screen name='Otp' component={Otp}/>
              <Stack.Screen name='Newpassword' component={Newpassword}/>
              <Stack.Screen name='Tabs' component={Tabs} />
             
             </Stack.Group>
         </Stack.Navigator>
     </NavigationContainer>
    </>
 )

};

export default Approot;


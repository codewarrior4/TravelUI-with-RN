import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from '../Components/Home/Index';
import Inbox from '../Components/Inbox/Inbox';
import More from '../Components/More/More';
import Favourite from '../Components/Favourite/Favourite';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Tabs() {

  const Tab = createBottomTabNavigator();

  const activeTab = (focused,size,color,iconName) => {
    return (
        focused? (
        <View style={{ borderTopWidth:2, width: "60%", height: "100%", borderColor: '#0094FF' }}>
            <Ionicons style={{ alignSelf: "center", justifyContent: "center", alignItems: "center" }} name={iconName} size={size} color={color} />
        </View>) :
        (
            <Ionicons name={iconName} size={size} color={color} />
        )
    )
}

const iconOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
      tabBarIcon: ({ focused, size, color }) => (
          size = focused ? 24 : 20,
          activeTab(focused,size,color,iconName)
      ),
      tabBarActiveTintColor: '#0094FF',
      tabBarInactiveTintColor: "gray",
      tabBarStyle: { backgroundColor: '#fff',elevation:4 },
      tabBarLabelStyle:{fontFamily:'Gilroy-Bold'}
  }
}

const TAB_ICON = {
  Index: "home",
  Favourite: "bookmark",
  Inbox: "mail",
  More: "settings",
}

  return (
    <Tab.Navigator
      initialRouteName='Index'
      screenOptions={iconOptions}
    >
      <Tab.Screen name={'Index'} options={{headerShown:false, tabBarLabel: 'Home', tabBarInactiveTintColor:'#000'}} component={Index} />
      <Tab.Screen name={'Favourite'} options={{headerShown:false, tabBarLabel: 'Favourite', tabBarInactiveTintColor:'#000'}} component={Favourite} />
      <Tab.Screen name={'Inbox'} options={{headerShown:false, tabBarLabel: 'Inbox', tabBarInactiveTintColor:'#000'}} component={Inbox} />
      <Tab.Screen name={'More'} options={{headerShown:false, tabBarLabel: 'More', tabBarInactiveTintColor:'#000'}} component={More} />
    </Tab.Navigator>
  );
}

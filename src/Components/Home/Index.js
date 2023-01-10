import React from 'react';
import { View, Text, StatusBar,ScrollView } from 'react-native';
import { Box, Flex, VStack } from 'native-base';
import Ionicons  from 'react-native-vector-icons/Ionicons';

export default function Index() {

  const getTime = () =>{
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
      greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
      greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
      greet = 'Good Evening';

    return greet;
  }
  return (
    
    <Box flex="1" safeAreaTop={1}>
      <VStack space={1.5} w="100%" px="3">
        <ScrollView>
          <Flex direction='row-reverse' mt={'10'} mb={'1.5'}>
            <Box>
              <Ionicons name="notifications" size={24} color="#000" />
            </Box>
          </Flex>
          <Flex direction='row' mt={'1.5'} mb={'1.5'}>
            <Box>
              <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium',color:'#000' }}>{getTime()}</Text>
              <Text style={{ fontSize: 24, fontFamily: 'Gilroy-Bold',color:'#000' }}>Hi, John  </Text>
            </Box>
          </Flex>
        </ScrollView>
      </VStack>
    </Box>

  );
}

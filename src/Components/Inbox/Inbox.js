import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Box, Container } from 'native-base';

export default function Inbox() {
  return (
    <Container>
      <StatusBar backgroundColor={'#0094FF'} translucent={true} barStyle={'dark-content'}/>
      <Box>
        <Box alignSelf="center" // bg="primary.500"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg"
        }} bg={["red.400", "blue.400"]}>
            This is a Index
        </Box>
      </Box>;

    </Container>
  );
}

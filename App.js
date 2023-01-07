import React from 'react';
import Approot from './Approot';
import { NativeBaseProvider, Text, Box,Input} from "native-base";

export default function App() {
  return (
      <NativeBaseProvider>
        <Approot />
      </NativeBaseProvider>

  );
}

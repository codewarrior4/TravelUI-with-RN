import React from 'react';
import Approot from './Approot';
import { NativeBaseProvider} from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
      <NativeBaseProvider>
        <SafeAreaProvider>
          <Approot />
        </SafeAreaProvider>
      </NativeBaseProvider>

  );
}

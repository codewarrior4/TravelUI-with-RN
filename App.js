import React from 'react';
import Approot from './Approot';
import { NativeBaseProvider,extendTheme} from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        1: '#0094FF',
        2:  '#fff',
        3:  '#000000c0'
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });
  return (
      <NativeBaseProvider theme={theme}>
        <SafeAreaProvider>
          <Approot />
        </SafeAreaProvider>
      </NativeBaseProvider>

  );
}

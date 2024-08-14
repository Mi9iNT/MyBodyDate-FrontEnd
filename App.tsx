/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {WebSocketProvider} from './context/WebSocketContext';
import HomeNavigator from './navigators/HomeNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <WebSocketProvider>
        <StatusBar translucent backgroundColor="transparent" />
        <HomeNavigator />
      </WebSocketProvider>
    </NavigationContainer>
  );
}

export default App;

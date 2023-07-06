import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

App = () => {
  return (
    
    <NavigationContainer>
      {/* 스크린 이름은 _없이. 맨 앞문자는 대문자로
        <Stack.Screen name = "SplashScreen" component = {SplashScreen} options = {{headerShown :false}}/>
        <Stack.Screen name = "Main" component = {Main} options = {{headerShown :false}} />
        <Stack.Screen name = 'AuthStackScreen' component = {AuthStackScreen} options = {{headerShown : false}}/>
      */}
    </NavigationContainer>
  );
}

export default App;
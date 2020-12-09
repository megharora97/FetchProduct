import React from 'react';
import { View, Dimensions, Platform, StatusBar, Alert, BackHandler, ToastAndroid, Animated, LogBox } from 'react-native';
import { Text, Button, Image, Badge } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';

const { height, width } = Dimensions.get('window')
StatusBar.setBarStyle('light-content');
if (Platform.OS != 'ios') { StatusBar.setBackgroundColor('black'); }
LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed,', 'VirtualizedLists should never be nested', "Require cycle:", "YellowBox has been replaced with LogBox. Please call LogBox.ignoreLogs() instead.", "Animated: `useNativeDriver` was not specified"])

const Stack = createStackNavigator();

//Main 
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}
          headerMode="none"
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

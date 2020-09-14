import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  SearchScreen from './src/screens/SearchScreen'

const stack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Home" component={SearchScreen} />
    </stack.Navigator>
  </NavigationContainer>
)
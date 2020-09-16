import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  SearchScreen from './src/screens/SearchScreen'
import ResultsScreen from './src/screens/ResultsScreen'

const stack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="Home" component={SearchScreen} />
      <stack.Screen name="Results" component={ResultsScreen} />
    </stack.Navigator>
  </NavigationContainer>
)
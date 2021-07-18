import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './Components/Main';
import ManageorderScreen from './Components/Main/Manageorder';
import LoginScreen from './Components/Login';
import SignupScreen from './Components/Signup';



const Stack = createStackNavigator();
export class App extends Component {

  render () {
    return (

      <NavigationContainer style={ { height: StatusBar.currentHeight } }>
        <Stack.Navigator initialRouteName="Login" headerMode={ false }>
          <Stack.Screen name="Signup" component={ SignupScreen } />
          <Stack.Screen name="Login" component={ LoginScreen } />
          <Stack.Screen name="Main" component={ MainScreen } />
          <Stack.Screen name="Manageorder" component={ ManageorderScreen } />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}
export default App;

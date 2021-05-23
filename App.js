import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RegisterPage from './src/RegisterPage'
import LoginPage from './src/LoginPage'
import MainMenu from './src/MainMenu'
import AddReport from './src/AddReport'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Register" component={RegisterPage} /> */}
        {/* <Stack.Screen name="Login" component={LoginPage} /> */}
        <Stack.Screen name="Main Menu" component={MainMenu} />
        <Stack.Screen name="Add Report" component={AddReport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

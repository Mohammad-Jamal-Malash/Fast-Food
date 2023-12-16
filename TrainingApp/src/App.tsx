import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import RegestrationPage from './components/RegestrationPage'
import WelcomePage from './components/Screens/AfterLogin/WelcomePage'
// Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './components/Login'

// This is not must do it is just for type safty shit
export type RootStackParamList = {
  RegestrationPage: undefined;
  WelcomePage: undefined;
  Login:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();



export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView style = {{flex:1}}>
          <Stack.Navigator initialRouteName='RegestrationPage'
            screenOptions={{headerShown:false}}>
            <Stack.Screen
            name='RegestrationPage'
            component={RegestrationPage} />
             
            <Stack.Screen
            name='WelcomePage'
            component={WelcomePage} />
             <Stack.Screen
            name='Login'
            component={Login} />
          </Stack.Navigator>

        
        
        </SafeAreaView>
        </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
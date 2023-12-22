import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation 
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../App'

// TABS

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


// pages
import Home from './Home'
import Cart from './Cart'
import Offers from './Offers'
import Account from './Account'

type AfterWelcomParentPageProps = NativeStackScreenProps<RootStackParamList,'AfterWelcomParentPage'>

export type TabsProps ={
    Home:undefined;
    Cart:undefined;
    Offers:undefined;
    Account:undefined;
}


const Tab = createBottomTabNavigator<TabsProps>();

const AfterWelcomParentPage = ({navigation}:AfterWelcomParentPageProps) => {
  return (
    
    <Tab.Navigator>
        <Tab.Screen name='Home'
        component={Home} />
        <Tab.Screen name='Cart'
        component={Cart} />
        <Tab.Screen name='Offers'
        component={Offers} />
        <Tab.Screen name='Account'
        component={Account} />
    </Tab.Navigator>
    

  )
}

export default AfterWelcomParentPage

const styles = StyleSheet.create({})
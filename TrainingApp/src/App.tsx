import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import RegestrationPage from './components/RegestrationPage'




export default function App() {
  return (
    <>
    <SafeAreaView style = {{flex:1}}>
        <RegestrationPage />
        
        </SafeAreaView>
        </>
  )
}

const styles = StyleSheet.create({})
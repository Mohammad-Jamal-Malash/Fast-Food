import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Logo from '../assets/Logos/logo.png'

import Login from './Login';
import Signup from './Signup';

export default function RegestrationPage() {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style = {styles.container}>

      <View style= {styles.secondContainer}>
          
          <Image style= {styles.pageLogo} source={Logo}/>{ // this is the logo 
          }
       <View style = {styles.btnContainer}>
       
          <TouchableOpacity style ={styles.btnStyle}
          onPress={()=>{setIsPressed(false)}} >
          <Text style = {styles.btnText}>Login</Text>
          {!isPressed && <View style = {styles.underLine} />}
          
          </TouchableOpacity>
        
          <TouchableOpacity style ={styles.btnStyle}
          onPress={()=>{setIsPressed(true)}} >
          <Text style = {styles.btnText}>Sign-up</Text>
          {isPressed && <View style = {styles.underLine} />}
          </TouchableOpacity>
       </View>
   </View>
   <View style= {styles.thirdContainer}>
   {!isPressed ?<Login /> : <Signup/>}
   </View>
    </View>
  )
}// cheack platform

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F2F2F2'
  },
  secondContainer:{
    flex:1/3,
    backgroundColor:'white',
    borderBottomRightRadius:35,
    borderBottomLeftRadius:35,
    justifyContent:'center',
    alignItems:'center',
    elevation:30,
    shadowOpacity:0.4,
    shadowColor:"#0F0000"
  },
  pageLogo:{
    width:347,
    height:246,
    position:'absolute'
  },
  btnContainer:{
    flexDirection:'row',
    marginTop:'auto',
    marginHorizontal:10,
    
    
  },
  btnText:{
    color:'black',
    fontWeight:'bold',
    fontSize:18,
    fontFamily:'Poppins',
    fontStyle:'normal',
  },
  btnStyle:{
    
      flex:1/2,
      alignItems:'center',
      
        
  },
  underLine:{
    marginTop:8,
    width:134,
    height:3,
    backgroundColor:'#FA4A0C',
    borderRadius:40,
    elevation:4,
    shadowColor:'rgba(195, 63, 21, 0.10)'
    },
    thirdContainer:{
      paddingTop:10,
      flex:2/3,
    }
})
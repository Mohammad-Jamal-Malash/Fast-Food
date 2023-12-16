import { Image, SafeAreaView, StyleSheet, Text, View,TouchableOpacity,TextInput, ScrollView } from 'react-native'
import React from 'react'
import FaceBookLogo from '../../assets/Logos/logos_facebook.png'
import GoogleLogo from '../../assets/Logos/GoogleLogo.png'

export default function Signup({isPressed}:any) {
  return (
    <ScrollView >

  <SafeAreaView style = {styles.container}>
    
    <View style = {styles.RegestrationTxtView}>
      <Text style = {styles.txtStyle}>Register</Text>
      <View style = {{flexDirection:'row'}}>
      <TouchableOpacity style = {styles.btnsStyle}>
                <Image source={GoogleLogo} width={27} height={27}/>
               </TouchableOpacity>
      <TouchableOpacity style = {styles.btnsStyle}>
                    <Image source={FaceBookLogo} width={27} height={27}/>
                    </TouchableOpacity>
               </View>
    </View>
    <View style = {styles.textInputsView} >
    <TextInput
            style= {styles.textInput}
            placeholder='Full Name' 
            placeholderTextColor={'rgba(160, 160, 160, 0.60)'}/>
            <TextInput
            style= {styles.textInput}
            placeholder='Mobile Number' 
            placeholderTextColor={'rgba(160, 160, 160, 0.60)'}/>
            <TextInput
            style= {styles.textInput}
            placeholder='Password' 
            placeholderTextColor={'rgba(160, 160, 160, 0.60)'}/>
            <TextInput
            style= {styles.textInput}
            placeholder='Confirm Password' 
            placeholderTextColor={'rgba(160, 160, 160, 0.60)'}/>
    </View>
    <View style = {styles.btnView}>
      <TouchableOpacity style = {styles.SignupBtn}><Text style = {styles.SignupTxt}>Sign-up</Text></TouchableOpacity>        
          <View style = {styles.tryThis}>
          <Text style = {styles.txt1}>Already a Member? 
          </Text>
          <TouchableOpacity
           style = {styles.btn}
           onPress={()=>{
            isPressed();}}>
            <Text style = {styles.txt2}>Login</Text>
            </TouchableOpacity>
            </View>
    </View>
    
  </SafeAreaView>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
   marginHorizontal:'9%',
    marginTop:'10%',
    
},
  RegestrationTxtView:{
  flexDirection:'row',
  justifyContent:'space-between'
  },
  btnsStyle:{
    backgroundColor:"#FFFFFF",
    width:45,
    height:45,
    borderRadius:10,
    elevation:15,
    shadowColor:"#260000",
    shadowOpacity:0.15,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:10,
    marginTop:7,
  },
  txtStyle:{
    color:"#F8774A",
    fontSize:36,
    fontWeight:'700',

  },
  textInputsView:{
    marginVertical:27,
  },
  textInput:{ 
    height:55,
    paddingHorizontal:20,
    backgroundColor:"#FFFFFF",
    borderRadius:10,
    fontSize:16,
    fontFamily:'Nunito',
    fontWeight:'400',
    marginVertical:11,
},
SignupBtn:{
  backgroundColor:'#F8774A',
  height:58,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:30,
  flexDirection:'row',
  flex:1,
},
SignupTxt:{
  fontFamily:'Poppins-Bold',
  fontSize:17,
  color:'#F6F6F9',
},
btnView:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginBottom:'10%',
  alignItems:'center',
},
txt1:{
color:'#B3B3B3',
fontSize:16,
fontWeight:'400',
},
txt2:{
  color:'#B3B3B3',
  fontSize:16,
  fontWeight:'700',
},
btn:{
  alignSelf:'flex-end',
  paddingTop:19,
},
tryThis:{
  width:131,
  height:40,
  flexDirection:'row',
  justifyContent:'flex-end'
}
})
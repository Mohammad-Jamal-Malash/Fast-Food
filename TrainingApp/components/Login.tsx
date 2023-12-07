import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FaceBookLogo from '../assets/Logos/FacebookLogo.png'
import GoogleLogo from '../assets/Logos/GoogleLogo.png'
import * as Yup from 'yup';
export default function Login() {
    const [userName, setUserName] = useState('');
    const Validator  = Yup.object().shape({
        userName: Yup.string()
        .required("This feild is required").email('Email is Invalid')
      });
 
    return (
    <>
        <SafeAreaView  style = {styles.container}>
            <TextInput
            style = {styles.textInput}
            placeholder='Username, Mobile Number'
            placeholderTextColor={'rgba(160, 160, 160, 0.60)'} />
            <TextInput
            style= {styles.textInput}
            placeholder='Password' 
            placeholderTextColor={'rgba(160, 160, 160, 0.60)'}/>
            <TouchableOpacity>
                <Text style = {styles.forgotPassword}>Forgot password? </Text>
            </TouchableOpacity>
                <TouchableOpacity style = {[styles.btnsStyle, styles.LoginBtn]}>
                    <Text style = {styles.LoginTxt}>Login</Text>
                </TouchableOpacity>
                    <Text style = {styles.Or}> Or</Text>
                    <TouchableOpacity style = {[styles.btnsStyle, styles.FaceBookBtn]}>
                    <Image source={FaceBookLogo} width={24} height={24}/>
                    <Text style= {styles.FaceBookTxt}>Log in with Facebook</Text>
                    </TouchableOpacity>
                <TouchableOpacity style = {[styles.btnsStyle, styles.GoogleBtn]}>
                <Image source={GoogleLogo} width={24} height={24}/>
                    <Text style = {styles.GoogleTxt}>Log in with Google</Text></TouchableOpacity>
        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:'9%',
        justifyContent:'space-evenly'
    },
    textInput:{
        
        height:58,
        paddingHorizontal:20,
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        fontSize:16,
        fontFamily:'Nunito',
        fontWeight:'400',
    },
    forgotPassword:{
        marginRight:'auto',
        color:"#FA4A0C",
        fontSize:14,
        fontWeight:'600',
    },
    btnsStyle:{
        height:56,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        flexDirection:'row',
    },
    LoginBtn:{
        backgroundColor:'#F8774A'
    },
    FaceBookBtn:{
        backgroundColor:'#1877F2',
    },
    GoogleBtn:{
        backgroundColor:'#FFFFFF'
    },
    LoginTxt:{
        fontFamily:'Poppins-Bold',
        fontSize:17,
        color:'#F6F6F9',
    },
    FaceBookTxt:{
        paddingTop:5,
        paddingHorizontal:12,
        color:'#FFFFFF',
        fontFamily:'Poppins-SemiBold',
        fontSize:20,
    },
    GoogleTxt:{
        paddingTop:5,
        paddingHorizontal:35,
        color:'rgba(0, 0, 0, 0.54)',
        fontWeight:'500',
        fontSize:20,
    },
    Or:{
        color:"#000000",
        fontFamily:'Poppins-Bold',
        fontSize:18,
        alignSelf:'center', 
    }
})
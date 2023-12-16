import { Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import chevron_left from '../../assets/Logos/chevron_big_left.png'
import NextButton from '../../assets/Logos/NextButton.png'



const ForgotPassword = ({BackButton}:any) => {
  return (
    <SafeAreaView style = {styles.container}>
        <TouchableOpacity
        onPress={()=>{
            BackButton(false);
        }}>
            <Image 
            width={22}
            height={22}
            source={chevron_left}
             />
        
        </TouchableOpacity>
        <Text style = {styles.txtStyle}>Forgot password?</Text>
        <TextInput
            style = {styles.textInput}
            placeholder=' ✉  Enter your email address'
            placeholderTextColor={'rgba(160, 160, 160, 0.60)'} />
            <View style = {styles.textContainer}>
                <Text style = {[styles.text, {color:'#FF4B26'}]}>*</Text>
                <Text style = {[styles.text, {color:'#676767'}]}>We will send you a message to set or reset your new password</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style = {styles.sendCode}>
                        Send Code
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.NextButton}>
                    <Image
                        width={51}
                        height={51}
                        source={NextButton} />
                </TouchableOpacity>
            </View>

    </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:'9%',
        justifyContent:'space-evenly'
    },
    txtStyle:{
        width:180,
        color:"#F8774A",
        fontSize:36,
        fontWeight:'700',
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
    text:{
        fontSize:12,
        fontWeight:'400',
    },
    textContainer:{
        width:'90%',
        flexDirection:'row'
    },
    sendCode:{
        
        color:"#B2B2B2",
        fontFamily:'Gilroy-Bold',
        fontSize:24,
        fontWeight:'400',
        lineHeight:43,
    },
    NextButton:{
        alignSelf:'flex-end',
        
    }

})
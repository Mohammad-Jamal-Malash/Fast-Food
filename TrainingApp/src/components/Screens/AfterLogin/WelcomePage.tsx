import { StyleSheet, Text, View,Image, Touchable, TouchableOpacity  } from 'react-native'
import React from 'react'


import Logo from '../../../../assets/Logos/logo.svg'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'
import { SafeAreaView } from 'react-native-safe-area-context'


//Navigation
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack' 
// For type saftye
type WelcomePageProps = NativeStackScreenProps<RootStackParamList,'WelcomePage'>

const WelcomePage = () => {
  const navigation  = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.container1}>
        <TouchableOpacity style= {styles.skip}
        onPress={()=>{
          navigation.navigate('AfterWelcomParentPage');
        }}>
      <Text style = {styles.skipTxt} >SKIP {'>>  '}</Text>
        </TouchableOpacity>
      <View style = {styles.Logo}>  
          <Logo width={133}
            height={133}/>
          
          </View>
          <Text style = {styles.welcomeTxt}>Welcome, Sumanya!</Text>

          <Text style = {styles.midTxt}>
            Unlock the world of regular{'\n'}
            and rescued food by setting up{'\n'}
            your delivery address.</Text>
        <View style = {{width:'100%', height:20}}/>
         <View style = {styles.LastContainer }>
          <Text style = {styles.selectTxt}>
            SELECT LOCATION
          </Text>
          <TouchableOpacity style = {styles.btns}>
            <Text style = {styles.btnsTxt}>🚗 Locate Me</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.btns}>
            <Text style = {styles.btnsTxt}>
              🔎 Provide Delivery Location
            </Text>
          </TouchableOpacity>
          </View> 
          </View>
        </SafeAreaView>

  )
}

export default WelcomePage

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FF4B3A',
  },
  container1:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly',
    marginHorizontal:'9%',
  },
  Logo:{
      backgroundColor:'white',
     overflow:'hidden',
      borderRadius:160 / 2,
      justifyContent:'center',
      alignItems:'center',
      padding:1,
      elevation:6,
      shadowColor:'white',
      shadowOffset:{
        width:4,
        height:4
      }
  },
  skipTxt:{
    color:'rgba(255, 255, 255, 0.60)',
    textAlign:'center',
    fontSize:18,
    fontFamily:'Gilroy-Bold'
  },
  skip:{
    alignSelf:'flex-end',
  },
  welcomeTxt:{
    fontFamily:'Metropolis-Thin',
    color:'#FFFFFF',
    textAlign:'center',
    fontSize:55,
    fontWeight:'100',
    lineHeight:47.76,
  },
  midTxt:{
    fontFamily:'Nunito-VariableFont_wght',
    textAlign:'center',
    fontSize:18,
    fontWeight:'600',
    color:'rgba(255, 255, 255, 0.60)',
    marginBottom:'5%',
    marginTop:'-5%',
    
  },
 LastContainer:{
  alignSelf:'stretch',// Make the container take the full width
  flex:2/4,
  justifyContent:'space-evenly',
  bottom:'-1%',
 },
 selectTxt:{
  marginLeft:'8%',
  paddingBottom:'5%',
  fontSize:18,
  fontFamily:'Nunito-Light',
  fontWeight:'800',
  color:'rgba(255, 255, 255, 0.60)',    
},
 btns:{   
  justifyContent:'center',
  height:70,
  paddingHorizontal:20,
  backgroundColor:"#FFFFFF",
  borderRadius:30,
},
btnsTxt:{
  fontSize:17,
  fontFamily:'Poppins-SemiBold',
  fontWeight:'600',
  color:'#FF460A'
}

})
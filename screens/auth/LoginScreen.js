import React from 'react';
import { View, StyleSheet, Image, TextInput, Text, ImageBackground, TouchableOpacity} from  'react-native';
import {Button} from 'react-native-elements';

const imgLogin = require('../../assets/images/yoga.gif');
const imgBg = require('../../assets/images/imagesBG.png');

const LoginScreen = ({navigation}) => {
  return ( 
<ImageBackground  source={imgBg} style={{width: '100%', height: '100%'}}>    
<View style={styles.container}>
  <Text style={{fontSize:30, fontWeight:'bold', marginBottom:50}}>ASHTANGA APP</Text>
  <Text style={{ marginBottom:10}}>O seu App de Yoga!</Text>
  <Image
    source={imgLogin}
    style={styles.gif}
  />
  <TextInput
      style={{ height: 40, width:320, marginBottom:20 }}
      placeholder="Login" 
    />
   <TextInput
      style={{ height: 40, width:320, marginBottom:20}}
      autoCompleteType={"password"}
      placeholder="Senha"
    />
     <Button
      containerStyle={{width:"80%", height: 20, marginBottom:30}}
          title="Login"
          color="blue"
          onPress={() => navigation('HomeScreen')}
        />
  <TouchableOpacity style={{alignItems:"flex-end", width:330}}
  onPress = {()=>{}}
  
  >
    <Text>Cadastre-se</Text>
  </TouchableOpacity>

</View>

</ImageBackground>
   );
}
 const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",

  },

  gif:{
    height:200,
    width:200,
    backgroundColor:"transparent"
  },


 });
export default LoginScreen;

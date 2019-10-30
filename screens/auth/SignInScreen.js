import React from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements';


const SignInScreen = () => {
  const imgYogaPose = require('../../assets/images/yogaPose.png');
    return ( 
        <View style={styles.container}>
          <Image
            source = {imgYogaPose}
            style={{width:200, height: 200, marginBottom: 20}}
          />

          <TextInput
            style={{ height: 40, width:320, marginBottom:20 }}
            placeholder="Nome Completo" 
          />
          <TextInput
            style={{ height: 40, width:320, marginBottom:20 }}
            placeholder="Email" 
          />
          <TextInput
            style={{ height: 40, width:320, marginBottom:20 }}
            placeholder="Nome de Login" 
          />
          <TextInput
            style={{ height: 40, width:320, marginBottom:20 }}
            placeholder="Senha" 
          />
          <Button
            containerStyle={{width:"80%", height: 20, marginBottom:30}}
            title="Submit"
            color="blue"
          />
            
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
});
 
export default SignInScreen;
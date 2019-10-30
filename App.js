import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreen from  './screens/main/HomeScreen';
import SignInScreen from  './screens/auth/SignInScreen';
import LoginScreen from  './screens/auth/LoginScreen';
const App = () => {
  return ( 
    <View style={{  flex: 1, backgroundColor: '#fff'}}>
          <SignInScreen/>
    </View>
   );
}
 
export default App;

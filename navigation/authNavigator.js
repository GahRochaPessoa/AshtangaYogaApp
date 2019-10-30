import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/auth/LoginScreen';

const AuthNavigator = createStackNavigator({
    LoginScreen:{screen:LoginScreen}
},{headerMode:'none', initialRouteName:'LoginScreen'});

export default AuthNavigator;

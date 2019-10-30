import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import AuthNavigator from './authNavigator';
import MainTabNavigator from './mainTabNavigator/mainTabNavigator';


const AppNavigator = createStackNavigator({
    Auth: {screen: AuthNavigator},
    MainTabNavigator:{screen: MainTabNavigator},
}, {headerMode:'none', initialRoute:'Auth'});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
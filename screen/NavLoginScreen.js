import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const NavLogin = createStackNavigator();

const NavLoginScreen = ({navigation}) => (
    <NavLogin.Navigator headerMode='none'>
        <NavLogin.Screen name="Login" component={Login}/>
        <NavLogin.Screen name="SignInScreen" component={SignInScreen} />
        <NavLogin.Screen name="SignUpScreen" component={SignUpScreen} />
    </NavLogin.Navigator>
);

export default NavLoginScreen;
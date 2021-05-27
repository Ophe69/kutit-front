import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import { Ionicons } from '@expo/vector-icons';

import Login from './screen/Login';
import NavLoginScreen from './screen/NavLoginScreen';
import Home from './screen/Home';
import Calendar from './screen/Calendar';
import Dashboard from './screen/Dashboard';
import HairdresserList from './screen/HairderesserList';
import HairdresserDetails from './screen/HairdresserDetails';
import Profile from './screen/Profile';
import ProfileEdit from './screen/ProfileEdit';
import RecapRDV from './screen/RecapRDV';
import Paiement from './screen/Paiement';
import ChoixRDV from './screen/ChoixRDV';
import Favorite from './screen/Favorite';
import Welcome from './screen/Welcome';
import Reviews from './screen/Reviews';
import History from './screen/History';

import professionnels from './reducers/professionnels';
import proDetails from './reducers/proDetails';
import prestation from './reducers/prestationsDetails';
import statut from './reducers/status';
import heure from './reducers/heureDeRDV';
import token from './reducers/token';
import pseudo from './reducers/pseudo';
import date from './reducers/date';
import image from './reducers/image';
import coupe from './reducers/choixCoupe';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const store = createStore(combineReducers({ professionnels, proDetails,heure, statut, prestation, token, pseudo, date, coupe, image }));



const BottomNavigator = () => {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'Home') {
            return <Ionicons name="home-outline" size={24} color={color} />
          } else if (route.name == 'Calendar') {
            return <Ionicons name="calendar-outline" size={24} color={color}/>
          }else if (route.name == 'Profile') {
          return <Ionicons name="person-outline" size={24} color={color}/>
        }

        },
        })}
      tabBarOptions={{
        activeTintColor: '#009788',
        inactiveTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#354F52',
          borderRadius: 20,
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={NavLoginScreen} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
            <Stack.Screen name="HairdresserList" component={HairdresserList} />
            <Stack.Screen name="HairdresserDetails" component={HairdresserDetails} />
            <Stack.Screen name="RecapRDV" component={RecapRDV} />
            <Stack.Screen name="ChoixRDV" component={ChoixRDV} />
            <Stack.Screen name="paiement" component={Paiement} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
            <Stack.Screen name="Reviews" component={Reviews} />
            <Stack.Screen name="History" component={History} />
          </Stack.Navigator>
      </NavigationContainer> 
    </Provider>
  );
}



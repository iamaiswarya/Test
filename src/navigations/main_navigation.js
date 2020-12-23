import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Welcome from '../screens/welcome';
import Login from '../screens/login';
import BookTaxi from '../screens/book_for_taxi';
import RegisterTaxi from '../screens/register_taxi';
import Home from '../screens/home';

const Stack = createStackNavigator();

const MainNavigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRoutName="Welcome">
                <Stack.Screen name= "Welcome" component ={Welcome} options= {{title:'Welcome', headerShown: false }} />
                <Stack.Screen name= "Login" component ={Login} options= {{title:'Login', headerShown: false }} />
                <Stack.Screen name= "BookTaxi" component ={BookTaxi} options= {{title:'BookTaxi', headerShown: false }} />
                <Stack.Screen name= "RegisterTaxi" component ={RegisterTaxi} options= {{title:'RegisterTaxi', headerShown: false }} />
                <Stack.Screen name= "Home" component ={Home} options= {{title:'Home', headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Favoritos from '../screens/Favoritos';
import Textos from '../screens/Textos';
import Numericos from '../screens/Numericos';
import NewMarcador from '../screens/New';
import Marcador from '../screens/Marcador';
import CustomTabBar from '../components/CustomTabBar';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator 
    
    initialRouteName={Home}
    tabBar={props => <CustomTabBar {...props} />}
   
    // screenOptions={{ headerShown: false }}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            
        />
        <Tab.Screen
            name="Favoritos"
            component={Favoritos}
            
        />
        <Tab.Screen
            name="Textos"
            component={Textos}
            
        />
        <Tab.Screen
            name="Numericos"
            component={Numericos}
            
        />
        <Tab.Screen
            name="New"
            component={NewMarcador}
        />
        <Tab.Screen
            name="Marcador"
            component={Marcador}
        />
        
    </Tab.Navigator>
  );
};
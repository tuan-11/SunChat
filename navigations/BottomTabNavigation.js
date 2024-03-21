import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from '../screens/MessageScreen';
import icons from '../constants/icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            headerShown:false,
    }}
    >
    
        <Tab.Screen
            name="Message" 
            component={MessageScreen} 
            options={{
                tabBarIcon:({focused}) => 
                    <Image
                        source={focused ? icons.message : icons.messageOutline}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
        }}/>


    </Tab.Navigator>
  )
}

export default BottomTabNavigation
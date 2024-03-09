import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import icons from '../constants/icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({title}) => {
    const navigation = useNavigation();
  return (
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:true,
            headerTitle:title,
            headerStyle:{
                backgroundColor:"#41ADFA",
            },
            headerTitleStyle: {
                color: "white",
            },
            headerTitleAlign: "center",
            headerLeft:() => (
                <Pressable onPress={() => navigation.goBack()} style={{ flexDirection: 'row', marginLeft: 12}}>
                    <Image source={icons.back} />
                </Pressable>
            ),     
        })
    },[])
  )
}

export default Header
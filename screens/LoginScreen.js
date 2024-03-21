import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity} from 'react-native'
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import icons from '../constants/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [focusedInput, setFocusedInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocusChange = (fieldName) => {
        setFocusedInput(fieldName);
      };
    
    const handleRetrievalPasswordScreen = () => {
        navigation.navigate('RetrievalPasswordScreen');
    };

    const handleClearText = () => {
        setPhoneNumber('');
        setFocusedInput('');
    };

  return (
    <View style={styles.container}>

        <Header title="Đăng nhập"/>

        <View style={styles.requestContainer}>
          <Text style={{fontSize: 14, color: '#4F4F4F'}}>Vui lòng nhập số điện thoại và mật khẩu để đăng nhập</Text>
        </View>

        <View style={styles.infoContainer}>
            <View style={{ position: 'relative' }}>
                <TextInput
                    value={phoneNumber}
                    onChangeText={(text) => {setPhoneNumber(text)}}
                    style={[
                        styles.textInputPhone,
                        (isFocused || focusedInput === 'phoneNumber') && { borderBottomColor: '#41ADFA', borderBottomWidth: 2, },
                    ]}
                    placeholderTextColor={'#939393'}
                    placeholder='Số điện thoại'
                    onFocus={() => {
                        handleFocusChange('phoneNumber');
                        setIsFocused(true);
                    }} 
                    onBlur={() => handleFocusChange('')}
                    keyboardType={'numeric'}
                />
                {phoneNumber !== '' && (
                    <TouchableOpacity onPress={handleClearText} style={{ position: 'absolute', right: 0, top: 30 }}>
                        <Image source={icons.clear}/>
                    </TouchableOpacity>
                )}
            </View>

            <View style={{ position: 'relative' }}>
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={[
                        styles.textInputPass,
                        focusedInput === 'password' && { borderBottomColor: '#41ADFA', borderBottomWidth: 2, },
                    ]}
                    placeholderTextColor={'#939393'}
                    placeholder='Mật khẩu'
                    secureTextEntry={!showPassword}
                    onFocus={() => {
                        handleFocusChange('password');
                        setIsFocused(false);
                    }}
                    onBlur={() => handleFocusChange('')}
                />
                <Ionicons
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color={'#757575'}
                    style={{ position: 'absolute', right: 0, top: 5 }}
                    onPress={() => setShowPassword(!showPassword)}
                />
            </View>

            <Text onPress={handleRetrievalPasswordScreen} style={styles.resetContainer}>Lấy lại mật khẩu</Text>
        </View>

        <View style={styles.btnNextContainer}>      
            <Pressable 
                style={[styles.nextContainer, { alignItems: 'center' }]}
                onPress={() => navigation.navigate('BottomTabNavigation')}
            >
                <Image
                    source={icons.next}
                    style={{ alignSelf: 'center'}}
                />
            </Pressable>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    requestContainer: {
        alignItems:'flex-start',
        backgroundColor: '#ECECEC',
        height: 40,
        left: 20,
        justifyContent: 'center'
    },
    infoContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '800',
    },
    textInputPhone: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.6,
        width: 350,
        paddingBottom: 8,
        fontSize: 16,
        marginVertical: 30,
    },
    textInputPass: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.6,
        width: 350,
        paddingBottom: 8,
        fontSize: 16,
    },
    resetContainer: {
        marginTop: 30,
        marginRight: 230,
        fontSize: 16, 
        color: '#41ADFA', 
        fontWeight: '800',
    },
    btnNextContainer: {
        alignItems:'flex-end',
        backgroundColor: 'white',
        orderRadius: 20,
    },
    nextContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#41ADFA',
        padding: 15,
        borderRadius: 10,
        right: 15,
        bottom: 15
    },
})
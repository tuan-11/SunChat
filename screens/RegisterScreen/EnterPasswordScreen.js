import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import icons from '../../constants/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';

const EnterPasswordScreen = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [passwordRetype, setPasswordRetype] = useState('');
    const [focusedInput, setFocusedInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRetype, setShowPasswordRetype] = useState(false);

    const handleFocusChange = (fieldName) => {
        setFocusedInput(fieldName);
      };

  return (
    <View style={styles.container}>

        <Header title="Mật khẩu"/>

        <View style={styles.requestContainer}>
          <Text style={{fontSize: 14, color: '#4F4F4F'}}>Vui lòng tạo mật khẩu để đăng nhập</Text>
        </View>

        <View style={styles.infoContainer}> 
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
                    }}
                    onBlur={() => handleFocusChange('')}
                />
                <Ionicons
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color={'#757575'}
                    style={{ position: 'absolute', right: 0, top: 35 }}
                    onPress={() => setShowPassword(!showPassword)}
                />
            </View>

            <View style={{ position: 'relative' }}>
                <TextInput
                    value={passwordRetype}
                    onChangeText={(text) => setPasswordRetype(text)}
                    style={[
                        styles.textInputPassRetype,
                        focusedInput === 'passwordRetype' && { borderBottomColor: '#41ADFA', borderBottomWidth: 2, },
                    ]}
                    placeholderTextColor={'#939393'}
                    placeholder='Nhập lại mật khẩu'
                    secureTextEntry={!showPasswordRetype}
                    onFocus={() => {
                        handleFocusChange('passwordRetype');
                    }}
                    onBlur={() => handleFocusChange('')}
                />
                <Ionicons
                    name={showPasswordRetype ? 'eye' : 'eye-off'}
                    size={20}
                    color={'#757575'}
                    style={{ position: 'absolute', right: 0, top: 5 }}
                    onPress={() => setShowPasswordRetype(!showPasswordRetype)}
                />
            </View>

            <View style={styles.btnNextContainer}>      
                <Pressable 
                    style={[styles.nextContainer, { alignItems: 'center' }]}
                    onPress={() => navigation.navigate('Onboarding')}
                >
                    <Text style={{fontSize: 16, color: 'white', fontWeight: '700'}}>Tạo tài khoản</Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default EnterPasswordScreen

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
    textInputPass: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.8,
        width: 320,
        paddingBottom: 4,
        fontSize: 18,
        marginVertical: 30,
    },
    textInputPassRetype: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.6,
        width: 320,
        paddingBottom: 4,
        fontSize: 18,
    },
    btnNextContainer: {
        alignItems:'flex-end',
        backgroundColor: 'white',
        orderRadius: 20,
        marginTop: 30,
    },
    nextContainer: {
        width: 200,
        height: 50,
        backgroundColor: '#41ADFA',
        justifyContent: 'center',
        borderRadius: 30,
    },
})
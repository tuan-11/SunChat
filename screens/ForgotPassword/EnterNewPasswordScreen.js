import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import icons from '../../constants/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';

const EnterNewPasswordScreen = () => {
    const navigation = useNavigation();
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRetype, setNewPasswordRetype] = useState('');
    const [focusedInput, setFocusedInput] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showNewPasswordRetype, setShowNewPasswordRetype] = useState(false);

    const handleFocusChange = (fieldName) => {
        setFocusedInput(fieldName);
      };

    
  return (
    <View style={styles.container}>

        <Header title="Mật khẩu mới"/>

        <View style={styles.requestContainer}>
          <Text style={{fontSize: 14, color: '#4F4F4F'}}>Vui lòng tạo mật khẩu để đăng nhập</Text>
        </View>

        <View style={styles.infoContainer}> 
            <View style={{ position: 'relative' }}>
                <TextInput
                    value={newPassword}
                    onChangeText={(text) => setNewPassword(text)}
                    style={[
                        styles.textInputNewPass,
                        focusedInput === 'newPassword' && { borderBottomColor: '#41ADFA', borderBottomWidth: 2, },
                    ]}
                    placeholderTextColor={'#939393'}
                    placeholder='Mật khẩu mới'
                    secureTextEntry={!showNewPassword}
                    onFocus={() => {
                        handleFocusChange('newPassword');
                    }}
                    onBlur={() => handleFocusChange('')}
                />
                <Ionicons
                    name={showNewPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color={'#757575'}
                    style={{ position: 'absolute', right: 0, top: 35 }}
                    onPress={() => setShowNewPassword(!showNewPassword)}
                />
            </View>

            <View style={{ position: 'relative' }}>
                <TextInput
                    value={newPasswordRetype}
                    onChangeText={(text) => setNewPasswordRetype(text)}
                    style={[
                        styles.textInputNewPassRetype,
                        focusedInput === 'newPasswordRetype' && { borderBottomColor: '#41ADFA', borderBottomWidth: 2, },
                    ]}
                    placeholderTextColor={'#939393'}
                    placeholder='Nhập lại mật khẩu mới'
                    secureTextEntry={!showNewPasswordRetype}
                    onFocus={() => {
                        handleFocusChange('newPasswordRetype');
                    }}
                    onBlur={() => handleFocusChange('')}
                />
                <Ionicons
                    name={showNewPasswordRetype ? 'eye' : 'eye-off'}
                    size={20}
                    color={'#757575'}
                    style={{ position: 'absolute', right: 0, top: 5 }}
                    onPress={() => setShowNewPasswordRetype(!showNewPasswordRetype)}
                />
            </View>

            <View style={styles.btnNextContainer}>      
                <Pressable 
                    style={[styles.nextContainer, { alignItems: 'center' }]}
                    onPress={() => navigation.navigate('Onboarding')}
                >
                    <Text style={{fontSize: 16, color: 'white', fontWeight: '700'}}>Cập nhật</Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default EnterNewPasswordScreen

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
    textInputNewPass: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.8,
        width: 350,
        paddingBottom: 4,
        fontSize: 18,
        marginVertical: 30,
    },
    textInputNewPassRetype: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.7,
        width: 350,
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
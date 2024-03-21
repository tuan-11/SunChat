import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, Image} from 'react-native'
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import icons from '../../constants/icons';

const EnterPhoneNumberScreen = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [focusedInput, setFocusedInput] = useState('');

    const handleFocusChange = (fieldName) => {
        setFocusedInput(fieldName);
      };

      const handleClearText = () => {
        setPhoneNumber('');
        setFocusedInput('');
    };

  return (
    <View style={styles.container}>
        <Header title="Tạo tài khoản"/>

        <View style={styles.requestContainer}>
          <Text style={{fontSize: 14, color: '#4F4F4F'}}>Nhập số điện thoại để tạo tài khoản mới</Text>
        </View>

        <View style={styles.infoContainer}>
            <View style={{ position: 'relative' }}>
                <TextInput
                    value={phoneNumber}
                    onChangeText={(text) => {setPhoneNumber(text)}}
                    style={[
                        styles.textInputPhone,
                        focusedInput === 'phoneNumber' && { borderBottomColor: '#41ADFA', borderBottomWidth: 2, },
                    ]}
                    placeholderTextColor={'#939393'}
                    placeholder='Nhập số điện thoại'
                    onFocus={() => {
                        handleFocusChange('phoneNumber');
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
        </View>

        <View style={styles.btnNextContainer}>      
            <Pressable 
                style={[styles.nextContainer, { alignItems: 'center' }]}
                onPress={() => navigation.navigate('EnterCodeRegisScreen')}
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

export default EnterPhoneNumberScreen

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
    textInputPhone: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.6,
        width: 350,
        paddingBottom: 8,
        fontSize: 16,
        marginVertical: 30,
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
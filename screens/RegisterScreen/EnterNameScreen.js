import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import icons from '../../constants/icons';

const EnterNameScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [focusedInput, setFocusedInput] = useState('');

    const handleFocusChange = (fieldName) => {
        setFocusedInput(fieldName);
      };

    const handleClearText = () => {
        setName('');
        setFocusedInput('');
    };
  return (
    <View style={styles.container}>
        <Header title="Tạo tài khoản"/>

        <View style={styles.infoContainer}>
            <Text style={styles.displayName}>Tên hiển thị</Text>

            <View style={{ position: 'relative', marginTop: -10 }}>
                <TextInput
                    value={name}
                    onChangeText={(text) => {setName(text)}}
                    style={[
                        styles.textInputName,
                        focusedInput === 'name' && { borderBottomColor: '#41ADFA', borderBottomWidth: 2, },
                    ]}
                    placeholderTextColor={'#939393'}
                    placeholder='Gồm 2 - 40 kí tự'
                    onFocus={() => {
                        handleFocusChange('name');
                    }} 
                    onBlur={() => handleFocusChange('')}
                />
                {name !== '' && (
                    <TouchableOpacity onPress={handleClearText} style={{ position: 'absolute', right: 0, top: 30 }}>
                        <Image source={icons.clear}/>
                    </TouchableOpacity>
                )}
            </View>

            <Text style={{paddingRight: 230, fontSize: 16}}>Lưu ý khi đặt tên: </Text>

            <Text style={{paddingLeft: 30, paddingRight: 30, paddingTop: 10, fontSize: 16}}>* Nên sử dụng tên thật để giúp bạn bè dễ nhận ra bạn. </Text>
        </View>

        <View style={styles.btnNextContainer}>      
            <Pressable 
                style={[styles.nextContainer, { alignItems: 'center' }]}
                onPress={() => navigation.navigate('EnterPhoneNumberScreen')}
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

export default EnterNameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    infoContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    displayName: {
        fontSize: 18, 
        color: '#000000', 
        fontWeight: '800', 
        paddingRight: 250,
        paddingTop: 30
    },
    textInputName: {
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
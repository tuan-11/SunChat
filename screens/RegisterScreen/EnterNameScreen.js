    import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
    import React, { useState} from 'react'
    import { useNavigation } from '@react-navigation/native';
    import Header from '../../components/Header';
    import icons from '../../constants/icons';

    const EnterNameScreen = () => {
        const navigation = useNavigation();
        const [name, setName] = useState('');
        const [focusedInput, setFocusedInput] = useState('');
        const [error, setError] = useState('');

        const handleTextChange = (text) => {
            if( /[0-9]/.test(text)) {
                setError('Tên không được chứa chữ số');
            } else if(text.length < 2 || text.length > 40){
                setError('Tên quá ngắn. Tên hợp lệ phải gồm 2-40 ký tự');
            } else{
                setError('');
            }
        };

        const handleFocusChange = (fieldName) => {
            setFocusedInput(fieldName);
        };

        const handleClearText = () => {
            setName('');
            setFocusedInput('');
            setError('');
        };
    return (
        <View style={styles.container}>
            <Header title="Tạo tài khoản"/>

            <View style={styles.infoContainer}>
                <Text style={styles.displayName}>Tên hiển thị</Text>

                <View style={{ position: 'relative', marginTop: -10 }}>
                    <TextInput
                        value={name}
                        onChangeText={(text) => {
                            setName(text);
                            handleTextChange(text)}}
                        style={[
                            styles.textInputName,
                            (focusedInput === 'name' || name !== '') && { borderBottomColor: '#41ADFA', borderBottomWidth: 2, },
                        ]}
                        placeholderTextColor={'#939393'}
                        placeholder='Gồm 2 - 40 kí tự'
                        onFocus={() => {
                            handleFocusChange('name');
                        }}          
                    />
                    {name !== '' && error && <Text style={{ color: 'red', marginTop: 10,}}>{error}</Text>}
                    {name !== '' && (
                        <TouchableOpacity onPress={handleClearText} style={{ position: 'absolute', right: 0, top: 30 }}>
                            <Image source={icons.clear}/>
                        </TouchableOpacity>
                    )}
                </View>

                <Text style={{paddingRight: 200, marginTop: 20, fontSize: 16}}>Lưu ý khi đặt tên: </Text>

                <Text style={{paddingLeft: 30, paddingRight: 30, paddingTop: 10, fontSize: 16}}>* Nên sử dụng tên thật để giúp bạn bè dễ nhận ra bạn. </Text>
            </View>

            <View style={styles.btnNextContainer}>      
                <Pressable 
                    style={[styles.nextContainer, { alignItems: 'center', backgroundColor: name !== '' && !error ? '#41ADFA' : '#A4CEEC'}]}
                    onPress={() => navigation.navigate('EnterPhoneNumberScreen')}
                    disabled={name === '' || error !== ''}
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
            paddingRight: 220,
            paddingTop: 30
        },
        textInputName: {
            borderBottomColor: 'gray',
            borderBottomWidth: 0.8,
            width: 320,
            paddingBottom: 4,
            fontSize: 18,
            marginTop: 30,
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
            justifyContent: 'center',
            borderRadius: 10,
            right: 15,
            bottom: 15
        },
    })
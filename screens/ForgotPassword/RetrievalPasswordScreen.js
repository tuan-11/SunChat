import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState} from 'react'
import images from '../../constants/images';
import icons from '../../constants/icons';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const RetrievalPasswordScreen = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [focusedInput, setFocusedInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocusChange = (fieldName) => {
      setFocusedInput(fieldName);
    };
  
    const handleClearText = () => {
      setPhoneNumber('');
      setFocusedInput('');
      setIsFocused(true);
  };
  
    return (
      <View style={styles.container}>
  
        <Header title="Lấy lại mật khẩu"/>
  
        <View style={styles.requestContainer}>
            <Text style={{fontSize: 14, color: '#4F4F4F'}}>Nhập số điện thoại để lấy lại mật khẩu</Text>
        </View>
  
        <View style={styles.infoContainer}>
          <Image source={images.pass} style={{top: 20}}/>
  
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
                      onFocus={() => {handleFocusChange('phoneNumber');}} 
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
                onPress={() => navigation.navigate('EnterCodeScreen')}
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

export default RetrievalPasswordScreen

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
        paddingBottom: 4,
        fontSize: 18,
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
        justifyContent: 'center',
        borderRadius: 10,
        right: 15,
        bottom: 15
    },
})
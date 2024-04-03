import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import icons from '../../constants/icons';
import images from '../../constants/images';
import {OtpInput} from 'react-native-otp-entry'


const EnterCodeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Header title="Nhập mã xác thực"/>

        <View style={styles.requestContainer}>
          <Text style={{fontSize: 14, color: '#4F4F4F'}}>Vui lòng không chia sẽ mã xác thực để tránh mất tài khoản</Text>
        </View>

        <View style={styles.infoContainer}>
          <Image source={images.box} style={{top: 80}}/>

          <Text style={{fontSize: 16, fontWeight: 800, top: 100}}>Đã gửi mã đến số +84 123456789</Text>

          <Text style={{fontSize: 16, top: 110}}>Xin kiểm tra SMS và điền mã xác nhận bên dưới</Text>

          <View style={{width: 350, top: 150}}>
            <OtpInput
              numberOfDigits={6}
              onTextChange={(text) => console.log(text)}
              focusColor={'#41ADFA'}
              theme={{
                pinCodeContainerStyle:{
                  backgroundColor: 'white',
                  width: 45,
                  height: 50,
                  borderRadius: 12
                }
              }}
            />
          </View>
          
          <TouchableOpacity >
              <Text style={{top: 170, color: '#41ADFA' }}>Gửi lại mã</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnNextContainer}>      
            <Pressable 
                style={[styles.nextContainer, { alignItems: 'center' }]}
                onPress={() => navigation.navigate('EnterNewPasswordScreen')}
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

export default EnterCodeScreen

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
    },
    requestContainer: {
        alignItems:'flex-start',
        backgroundColor: '#ECECEC',
        height: 40,
        left: 10,
        justifyContent: 'center'
    },
    infoContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
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
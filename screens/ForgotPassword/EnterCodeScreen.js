import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header';


const EnterCodeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Lấy lại mật khẩu"/>
  
      <View style={styles.requestContainer}>
        <Text style={{fontSize: 14, color: '#4F4F4F'}}>Nhập số điện thoại để lấy lại mật khẩu</Text>
      </View>

      <View style={styles.infoContainer}>
        
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
    left: 20,
    justifyContent: 'center'
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
})
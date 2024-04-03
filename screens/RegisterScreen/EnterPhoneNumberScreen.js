import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, Image} from 'react-native'
import React, { useRef, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import icons from '../../constants/icons';
import { auth } from '../../firebase/firebaseConfig';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const EnterPhoneNumberScreen = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [focusedInput, setFocusedInput] = useState('');
    const [error, setError] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [result, setResult] = useState('');
    const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
    let verifier;

    const regexVNPhoneNumber = /^0[35789]\d{8}$/;

    // const regexVNPhoneNumber = /^(\+84|0)[35789]\d{8}$/;

    // const onCaptchVerify = async () => {
    //     try {
    //         if (!window.recaptchaVerifier) {
    //             window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    //             'size': 'invisible',
    //             'callback': (response) => {
    //                 console.error("tuan", window.recaptchaVerifier);
    //                 sendOtp();
    //             },
    //             'expired-callback': () => {}
    //           });
    //         }
    //       } catch (error) {
    //         console.error("Error creating RecaptchaVerifier:", error);
    //       }   
    // }

    // const sendOtp = async () => {
    //     try {
    //         onCaptchVerify();
    //         const phoneNumbers = '+84337981963';
    //         const appVerifier = window.recaptchaVerifier;
    //         signInWithPhoneNumber(auth, phoneNumbers, appVerifier).then((confirmationResult) => {
    //             setResult(confirmationResult);
    //             console.log("success");
    //         })
    //         .catch((err) => {
    //             console.log("error: ", err);
    //         });

    //         navigation.navigate('EnterCodeRegisScreen', { phoneNumber } );
    //     } catch (error) {
    //         console.log("Error sending code: ", error);
    //     }
    //   };
    const signInWithPhoneNumber = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
        } catch (error) {
            console.log("Error sending code: ", error);
        }
    }
    

    const handleSubmit = () => {
        if (!regexVNPhoneNumber.test(phoneNumber)) {
            setError('Số điện thoại không hợp lệ');
          }else{
            setError('');
            // sendOtp();
            signInWithPhoneNumber();
        }
    };

    const handleFocusChange = (fieldName) => {
        setFocusedInput(fieldName);
      };

      const handleClearText = () => {
        setPhoneNumber('');
        setFocusedInput('');
        setError('');
    };

  return (
    <View style={styles.container}>
        <View id="recaptcha-container" style={{ width: 0, height: 0 }}></View>
        <Header title="Tạo tài khoản"/>

        <View style={styles.requestContainer}>
          <Text style={{fontSize: 14, color: '#4F4F4F'}}>Nhập số điện thoại để tạo tài khoản mới</Text>
        </View>

        <View style={styles.infoContainer}>
            <View style={{ position: 'relative' }}>
                <TextInput
                    value={phoneNumber}
                    onChangeText={(text) => {
                        setPhoneNumber(text);
                        if (text === '') {
                            setError('');
                          }}}
                    style={[
                        styles.textInputPhone,
                        (focusedInput === 'phoneNumber' || phoneNumber !== '') && { borderBottomColor: '#41ADFA', borderBottomWidth: 2, },
                    ]}
                    placeholderTextColor={'#939393'}
                    placeholder='Nhập số điện thoại'
                    onFocus={() => {
                        handleFocusChange('phoneNumber');
                    }} 
                    keyboardType={'numeric'}
                />
                {phoneNumber !== '' && error && <Text style={{ color: 'red', marginTop: 10,}}>{error}</Text>}
                {phoneNumber !== '' && (
                    <TouchableOpacity onPress={handleClearText} style={{ position: 'absolute', right: 0, top: 30, }}>
                        <Image source={icons.clear}/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    
        <View style={styles.btnNextContainer}>      
            <Pressable 
                style={[styles.nextContainer, { alignItems: 'center', backgroundColor: phoneNumber !== '' ? '#41ADFA' : '#A4CEEC' }]}
                onPress={handleSubmit}
                disabled={phoneNumber === ''}
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
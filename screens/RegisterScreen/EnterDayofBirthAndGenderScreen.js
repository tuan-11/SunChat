import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header';
import RadioForm from 'react-native-simple-radio-button';
import icons from '../../constants/icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native';


const EnterDayofBirthAndGenderScreen = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const genderOptions = [
    { label: '', value: 'male' },
    { label: '', value: 'female' },
    ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  
  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  };

  return (
    <View style={styles.container}>
        <Header title="Ngày sinh và giới tính"/>

        <View style={styles.requestContainer}>
          <Text style={{fontSize: 14, color: '#4F4F4F'}}>Hãy chọn ngày sinh và giới tính của bạn</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.genderContainer}>
            <Text style={styles.gendertitle}>Giới tính</Text>

            <View style={styles.genderIconContainer}>
              <Image source={icons.male} style={styles.genderIcon}/>
              <Image source={icons.female} style={styles.genderIcon}/>
            </View>

            <RadioForm
              radio_props={genderOptions}
              initial={selectedGender === 'male' ? 0 : 1}
              onPress={(value) => setSelectedGender(value)}
              buttonSize={10}
              buttonOuterSize={20}
              buttonColor={'#2196f3'}
              selectedButtonColor={'#2196f3'}
              formHorizontal={true}
              labelHorizontal={false}
              style={styles.radioForm}
            />
          </View>
          <View style={styles.birthdayContainer}>
            <Text style={styles.birthdaytitle}>Ngày Sinh</Text>

            <View style={styles.inputContainer}>
              <TextInput
              style={styles.input}
              value={formatDate(selectedDate)}
              editable={false}
              caretHidden={true}
              />
              <TouchableOpacity onPress={showDatePicker}>
                <Image source={icons.calendar} style={styles.calendarIcon}/>
              </TouchableOpacity>
            </View>
            
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              confirmTextIOS="Xác nhận"
              cancelTextIOS="Hủy"
              date={selectedDate}
              maximumDate={new Date()}
            />
          </View>
        </View>

        <View style={styles.btnNextContainer}>      
            <Pressable 
                style={[styles.nextContainer, { alignItems: 'center' }]}
                onPress={() => navigation.navigate('EnterPasswordScreen')}
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

export default EnterDayofBirthAndGenderScreen

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
    backgroundColor: 'white',
  },
  genderContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  radioForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
    top: 25,
    left: -5
  },
  genderIconContainer: {
    flexDirection: 'row',
    top: 30
  },
  genderIcon: {
    marginHorizontal: 44,
  },
  gendertitle: {
    fontSize: 18, 
    fontWeight: '800', 
    marginLeft: 40,
    color: '#41ADFA',
    width: '100%'
  },
  birthdayContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  birthdaytitle: {
    fontSize: 18, 
    fontWeight: '800', 
    marginLeft: 40,
    color: '#41ADFA',
    width: '100%'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: '#088AE8',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 30
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
    marginLeft: 10,
    color: 'gray',
  },
  calendarIcon: {
    width: 30,
    height: 30,
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
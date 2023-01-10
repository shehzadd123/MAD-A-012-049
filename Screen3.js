import React from 'react';
import {useEffect, useState} from 'react';

import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Background from './Background';
import Backround2 from './Backround2';
import Btn from './Btn';
import {darkGreen} from './constants';
import Field from './Field';
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from './Home';
import Screen1 from './Screen1';

const Screen3 = ({navigation}) => {
  const [userList, setuserList] = useState([]);
  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();
  // const saveData=  async ( password) => {
  //   const user={
  
      
  //     password:password
  //   }
  //    try {
  //      await AsyncStorage.setItem("userData", JSON.stringify(user));
       
    
  //      alert(user.password)
  //   } catch (error) {
  //     alert("Something went wrong", error);
  //   }

  // }
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'}
  // ]);
  // const saveData=  async (name, cnic, password) => {
  //   const user={
  //     name:name,

  //     password:password
  //   }
  //    try {
  //      await AsyncStorage.setItem("userData", JSON.stringify(user));

  //      alert(user.name)
  //   } catch (error) {
  //     alert("Something went wrong", error);
  //   }

  // }
  
  
  const [addBtnState, setAddBtnState] = useState(true);
  const Save = async(password) => {
    const user={
     password:password,
      
    
    }
     try {
       await AsyncStorage.setItem("userData", JSON.stringify(user));
       
    
       alert("Credentials added")
       navigation.navigate('Login')
    } catch (error) {
      alert("Something went wrong", error);
    }
    if ((password === '')) {
        alert('Age can only be in numbers');
    } else {
        const userList = {
            Spassword: password,
            Scpassword: cpassword,
            // Sgender: gender,
            
        };
        
        setuserList((oldList) => [...oldList, userList]);
        setAddBtnState(true);
        setpassword('');
        setcpassword('');
        // setgender('');
        
    }

};
  return (
    <View style={{alignItems: 'center', width: 400}}>
      <Image
        source={require('../images/logo.png')}
        style={{
          width: 170,
          height: 100,

          alignContent: 'center',
          marginTop: 0,
        }}
      />

      <View
        style={{
          height: 400,
          width: 460,
          borderTopLeftRadius: 130,
          paddingTop: 0,
          alignItems: 'center',
        }}>
        <View style={{marginBottom: 0}}>
          <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}>
            Create{' '}
          </Text>
        </View>
        <View style={{marginBottom: 19}}>
          <Text style={{color: 'grey', fontSize: 14}}>
            Your account in few steps{' '}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1, marginLeft: 80}}>
            <TouchableOpacity
              style={{
                // backgroundColor: '#10942e',

                alignItems: 'center',
                borderRadius: 3,
                marginLeft: -10,
                width: 30,
                height: 30,

                paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15}}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, marginLeft: 60}}>
            <TouchableOpacity
              style={{
                //  backgroundColor:'black',

                alignItems: 'center',
                borderRadius: 3,
                marginLeft: 30,
                width: 30,
                height: 30,
                //  marginRight:50,
                paddingVertical: 5,
                //  marginRight:140
              }}
              onPress={() => navigation.navigate('Screen2')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15}}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 3, marginLeft: 70}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#10942e',

                alignItems: 'center',

                borderRadius: 3,
                marginLeft: 25,
                width: 30,
                height: 30,
                //  marginRight:50,
                paddingVertical: 5,
                //  marginRight:140
              }}
              onPress={() => navigation.navigate('Screen3')}>
              <Text style={{color: 'white', marginTop: 0, fontSize: 15}}>
                3
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginLeft: 100,
            width: '100%',
            marginR: 100,
            borderRadius: 5,
            marginBottom: 30,
            height: 310,
          }}>
          <ScrollView>
          <Text
              style={{
                color: '#10942e',
                marginTop:30,
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
              PASSWORD
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 2,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: 'white',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={password}
              onChangeText={(password) => {
                password === '' ||  cpassword === ''
                     ? setAddBtnState(true)
                     : setAddBtnState(false);
                 setpassword(password);
             }}
              placeholder="Enter Password"
              secureTextEntry={true}
              keyboardType={'password'}
            />
  <Text
              style={{
                color: '#10942e',
                marginTop:30,
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
          CONFIRM PASSWORD
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 2,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: 'white',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={cpassword}
              onChangeText={(cpassword) => {
               password === '' ||  cpassword === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setcpassword(cpassword);
            }}
              placeholder="Confirm Password"
              secureTextEntry={true}
              keyboardType={'password'}
            />
        
          </ScrollView>
        </View>

        <View style={{ marginTop: -30}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
              height: 50,
              alignItems: 'center',

            }}
            disabled={addBtnState} onPress={Save}
           >
            <Text style={{color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Screen3;

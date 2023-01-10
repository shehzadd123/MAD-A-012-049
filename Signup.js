import React from 'react';
import {useEffect, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

import axios from 'axios';
import DropDownPicker from "react-native-dropdown-picker";
import {BASE_URL, API_KEY} from '@env';
import {useForm, Controller} from 'react-hook-form'
import {
  View,
  StyleSheet,
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

import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from './Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Signup = ({navigation}) => {
  const [Signupname, setSignupname] = useState();
  const [Signupcnic, setSignupcnic] = useState();
  const [password, setpassword] = useState();
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'}
  // ]);
  // const saveData=  async ( Signupcnic, password) => {
  //   const user={
  //     Signupcnic:Signupcnic,
      
  //     password:password
  //   }
  //    try {
  //      await AsyncStorage.setItem("userData", JSON.stringify(user));
       
    
  //      alert(user.Signupcnic)
  //   } catch (error) {
  //     alert("Something went wrong", error);
  //   }

  // }
  const [userList, setuserList] = useState([]);
  const [addBtnState, setAddBtnState] = useState(true);
  const [genderOpen, setgenderOpen] = useState(false);
  const [genderValue, setgenderValue] = useState(null);
  const [gender, setgender] = useState([
    { label: "Male", value: " male" },
    { label: "Female", value: "female"  },
    { label: "Prefer Not to Say",  value: "none"},
  ]);
  const {  control } = useForm();
  const Save = async () => {
    const user={
      Signupcnic:Signupcnic,
      
    
    }
     try {
       await AsyncStorage.setItem("userData", JSON.stringify(user));
       
    
       alert("Credentials Added")
    } catch (error) {
      alert("Something went wrong", error);
    }
    
    if (isNaN(Signupcnic)) {
        alert('Age can only be in numbers');
    } else {
        const userList = {
            SSignupname: Signupname,
            SSignupcnic: Signupcnic,
            // Sgender: gender,
            
        };
        setuserList((oldList) => [...oldList, userList]);
        setAddBtnState(true);
        setpassword('');
        setSignupcnic('');
        // setgender('');
        
    }
    navigation.navigate('Screen2')
};
// function Save(){
//   if (  Signupname === '' || Signupcnic === '' || gender === ''
//   ? setAddBtnState(true)
//   : setAddBtnState(false))
//   {
//   navigation.navigate('Screen2')}
// }

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
                backgroundColor: '#10942e',

                alignItems: 'center',
                borderRadius: 3,
                marginLeft: -10,
                width: 30,
                height: 30,

                paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: 'white', marginTop: 0, fontSize: 15}}>
                1
              </Text>
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
              onPress={() =>navigation.navigate('Screen2')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15}}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 3, marginLeft: 70}}>
            <TouchableOpacity
              style={{
                //  backgroundColor:'black',

                alignItems: 'center',

                borderRadius: 3,
                marginLeft: 25,
                width: 30,
                height: 30,
                //  marginRight:50,
                paddingVertical: 5,
                //  marginRight:140
              }}
              onPress={() =>navigation.navigate('Screen3')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15}}>3</Text>
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
            height: 510,
          }}>
        
            <Text
              style={{
                color: '#10942e',
                marginTop:30,
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
              FULL NAME
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
              value={Signupname}
              onChangeText={(Signupname) => {
                Signupname === '' || Signupcnic === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setSignupname(Signupname);
            }}
              placeholder="Enter Name"
              // secureTextEntry={true}
            />

            {/* <Text style={{color:'#10942e',fontWeight:'bold',marginLeft:10 , fontSize:14 }}>2</Text> */}

            {/* <DropDownPicker style={{borderRadius: 100, color: darkGreen, marginLeft:2,paddingHorizontal: 10, width: 355, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, label:'Select 1'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}

            {/* <Text style={{color:'#10942e',fontWeight:'bold',marginLeft:10 , fontSize:14 }}>3</Text> */}
            {/* <DropDownPicker style={{borderRadius: 100, color: darkGreen, marginLeft:2,paddingHorizontal: 10, width: 355, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, label:'Select 1'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}
            {/* 
          <Text style={{color:'#10942e',fontWeight:'bold',marginLeft:10 , fontSize:14 }}>4</Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
           <Text style={{color:'#10942e',fontWeight:'bold',marginLeft:10 , fontSize:14 }}>5</Text>
           <Field
            placeholder="Enter CNIC"
            
          /> */}
            <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
              CNIC
            </Text>
            {/* <DropDownPicker style={{borderRadius: 100, color: darkGreen, marginLeft:2,paddingHorizontal: 10, width: 355, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, label:'Select 1'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}

<TextInput
           
           style={{
             borderRadius: 10,
             color: darkGreen,
             marginLeft: 2,
             marginBottom:30,
             paddingHorizontal: 10,
             width: 350,
             height:50,
             backgroundColor: 'white',
             marginVertical: 10,
           }}
           placeholderTextColor="grey"
           value={Signupcnic}
           onChangeText={(Signupcnic) => {
            Signupname === '' || Signupcnic === '' 
                ? setAddBtnState(true)
                : setAddBtnState(false);
            setSignupcnic(Signupcnic);
        }}
           placeholder="Enter CNIC (Without dashes)"
           // secureTextEntry={true}
         />
         <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
              GENDER
            </Text>
            <Controller
        name="gender"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={genderOpen}
              value={genderValue} //genderValue
              items={gender}
              setOpen={setgenderOpen}
              setValue={setgenderValue}
              setItems={setgender}
              placeholder="Select Gender"
              placeholderStyle={styles.placeholderStyles}
              
              onChangeValue={(gender) => {
                Signupname === '' || Signupcnic === '' 
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setgender(gender);
            }}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
        )}
      />
             {/* <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
          
              }}>
                
               DISCRICT
            </Text>
            <Field
             placeholderTextColor="grey"
              placeholder=" Enter CNIC  (without dashes)"
              value={cnic}
              onChangeText={setcnic}
              keyboardType={'numeric'}
              
            />
              <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
              City
            </Text>
            <Field
             placeholderTextColor="grey"
              placeholder=" Enter CNIC  (without dashes)"
              value={cnic}
              onChangeText={setcnic}
              keyboardType={'numeric'}
              
            />
              <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
               Area Police Station
            </Text>
            <Field
             placeholderTextColor="grey"
              placeholder=" Enter CNIC  (without dashes)"
              value={cnic}
              onChangeText={setcnic}
              keyboardType={'numeric'}
              
            />
              <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
               QUALIFICATION
            </Text>
            <Field
             placeholderTextColor="grey"
              placeholder=" Enter CNIC  (without dashes)"
              value={cnic}
              onChangeText={setcnic}
              keyboardType={'numeric'}
              
            /> */}
            {/* <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
              Password
            </Text>
            <Field
              placeholder="Password"
              value={password}
              onChangeText={setpassword}
              secureTextEntry={true}
            />
            <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
              Confirm Password
            </Text>
            <Field placeholder="Confirm Password" secureTextEntry={true} /> */}
            {/* <Field placeholder="Confirm Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} /> */}
      
        </View>

        <View style={{marginLeft: 280, marginTop: -16}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 50,
              width: 80,
              height: 35,
              alignItems: 'center',
            }}
            disabled={addBtnState} onPress={Save}
          >
            <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
            NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
   
  },
  placeholderStyles: {
    color: "grey",
    
  },
  dropdownGender: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"77%",
    marginBottom: 15,
    marginLeft:-2,
    borderRadius: 7,
    marginTop:10,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },


 
});
export default Signup;

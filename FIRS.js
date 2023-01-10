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
import Back3 from './Back3';
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
import Screen2 from './Screen2';

const FIRS = ({navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [relation, setrelation] = useState();
  const [password, setpassword] = useState();
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

  return (
    <Back3>
    <View style={{alignItems: 'center', width: 400}}>
      
  
      <View
        style={{
          height: 400,
          width: 460,
          borderTopLeftRadius: 130,
          paddingTop: 0,
          alignItems: 'center',
        }}>
       <View>
        <TouchableOpacity>
       <Image
        source={require('../images/arrow.png')}
        style={{
          width: 28,
          height: 38,
marginLeft:-175,
          paddingTop:12,
          marginTop: 12,

        }}
      />
      </TouchableOpacity>
      </View>
        <View style={{marginBottom: 19, marginTop:-35}}>
          <Text style={{color: 'white', fontSize: 29, fontWeight:'bold'}}>
        FIR
          </Text>
        </View>
      
        <View
          style={{
            backgroundColor:'white',
           borderRadius:37,
          marginRight:9,
            width:390,
           
          
            marginBottom: 30,
            height:650,
          }}>
          {/* <ScrollView style={{backgroundColor:'white',borderRadius:37, width:390, marginLeft:-18}}> */}
          <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1, marginLeft: 80}}>
            <TouchableOpacity
              style={{
               
marginTop:22,
                alignItems: 'center',
                borderRadius: 3,
                marginLeft: -40,
                width: 100,
                // height: 30,

                // paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('Rcrime.,')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>
              CASE INFORMATION
              </Text>
           
            </TouchableOpacity>
         
          </View>
          <View style={{flex: 2, marginLeft: 60, }}>
            <TouchableOpacity
              style={{
                //  backgroundColor:'black',

              
                marginTop:22,
                marginLeft: 20,
                width: 300,
                height: 30,
                //  marginRight:50,
                
                //  marginRight:140
              }}
             >
              <Text style={{color: '#10942e', fontSize: 10, fontWeight:'bold'}}>SUSPECT INFORMATION</Text>
            </TouchableOpacity>
            <View style={{width:400, marginLeft:-29,marginTop:-7}}>
              
            <Text style={{color:'#10942e'}}>---------------------------------------------------------------</Text>
           
          
            </View>
          </View>
             
        </View>
        <ScrollView style={{}}>
        <Text
              style={{
                color: '#10942e',
                marginTop:5,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
              SUSPECT NAME
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:15,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={name}
              onChangeText={setname}
              placeholder="Enter Name"
              // secureTextEntry={true}
            />
            <Text
              style={{
                color: '#10942e',
                marginTop:15,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
            SUSPECT CONTACT NO.
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={name}
              onChangeText={setname}
              placeholder="Enter Name"
              keyboardType={'numeric'}
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
                
         SUSPECT IMAGES
            </Text>
            <TouchableOpacity>
              <View style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}>
                <Text style={{color:'grey', marginTop:12,}}>
                  Upload Suspect images
                </Text>
                <Image
        source={require('../images/u.png')}
        style={{
          width: 28,
          height: 22,
marginLeft:295,
          paddingTop:12,
          marginTop: -19
        }}
      />

              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#10942e',
               
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             REASON FOR SUSPECT
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:150,
                borderColor: "#B7B7B7",
                marginBottom:15,
                backgroundColor: '#eceded',
                marginVertical: 10,
               
              }}
              placeholderTextColor="grey"
              
              value={name}
              onChangeText={setname}
              placeholder="Describe"
              // secureTextEntry={true}
            />
             <Text
              style={{
                color: '#10942e',
               
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             RELATION WITH VICTIM 
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:90,
                borderColor: "#B7B7B7",
                marginBottom:15,
                backgroundColor: '#eceded',
                marginVertical: 10,
               
              }}
              placeholderTextColor="grey"
              placeholder="Describe"
              value={relation}
              onChangeText={setrelation}
            
              // secureTextEntry={true}
            />
             <Text
              style={{
                color: '#10942e',
               
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             DESCRIPTION
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:150,
                borderColor: "#B7B7B7",
                marginBottom:15,
                backgroundColor: '#eceded',
                marginVertical: 10,
               
              }}
              placeholderTextColor="grey"
              
              value={name}
              onChangeText={setname}
              placeholder="Describe"
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
         
            {/* <DropDownPicker style={{borderRadius: 100, color: darkGreen, marginLeft:2,paddingHorizontal: 10, width: 355, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, label:'Select 1'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
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
        </ScrollView>
        </View>
  
        <View style={{marginLeft: 280, }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 200,
              height: 50,
              alignItems: 'center',
              marginLeft:-245,
              marginTop:-22
            }}
            onPress={() => navigation.navigate('UserPanel')}>
            <Text style={{color: 'white', fontSize: 19, marginTop: 12, fontWeight:'bold'}}>
         REGISTER FIR
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
    </Back3>
  );
};

export default FIRS;

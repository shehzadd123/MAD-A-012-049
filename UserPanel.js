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
import Complaints from './Complaints';
const UserPanel = ({navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
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
                source={require('../images/menu.png')}
                style={{
                  width: 28,
                  height: 38,
                  marginLeft: -175,
                  paddingTop: 12,
                  marginTop: 12,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 19, marginTop: -35}}>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              CRIME REPORTER
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../images/loout.png')}
                style={{
                  width: 30,
                  height: 27,
                  marginLeft: 320,
                
                  marginTop:-44,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 37,
              marginRight: 9,
              width: 390,

              marginBottom: 30,
              height: 650,
            }}>
            <View style={{marginLeft: 170, marginTop: -18}}>
              <View>
                <Image
                  source={require('../images/p.png')}
                  style={{
                    width: 400,
                    borderRadius: 35,
                    height: 200,
                    marginLeft: -174,
                    paddingTop: 12,
                    marginTop: 12,
                  }}
                />
              </View>
              <View style={{marginTop: -160, marginLeft: -140}}>
                <Text
                  style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
                  Salam Ibrahim,
                </Text>
              </View>
              <TextInput
                style={{
                  borderRadius: 100,
                  backgroundColor: 'white',
                  marginTop: 60,
                  marginLeft: -150,
                  width: 350,
color:'black',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={name}
                onChangeText={setname}
                placeholder="   Search"
                // secureTextEntry={true}
              />
            </View>
          </View>
        
          <View style={{marginTop: -480, marginLeft: -280}}>
            <Text style={{color: 'black', fontSize: 19, fontWeight: 'bold'}}>
              Categories
            </Text>
          </View>
          
          <View style={{marginLeft: 300, marginTop:-18}}>
            <TouchableOpacity>
              <Text style={{color: 'grey', fontSize: 12}}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{height:'100%',marginBottom:-650}}>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 12}}>
            <View style={{flex: 1, marginLeft: 30}}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',

                  alignItems: 'center',
                  borderRadius: 30,
                  marginLeft: -10,
                  width: 130,
                  height: 130,

                  paddingVertical: 5,
                }}
                onPress={() => navigation.navigate('FIR')}>
                <Image
                  source={require('../images/rf.jpg')}
                  style={{
                    borderRadius: 20,
                    width: 130,
                    height: 130,

                    marginTop: -5,
                  }}
                />
                <Text
                  style={{
                    color: 'red',
                    marginTop: 0,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  FIR
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginLeft: 100}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#10942e',

                  alignItems: 'center',
                  borderRadius: 30,
                  marginLeft: -10,
                  width: 130,
                  height: 130,

                  paddingVertical: 5,
                }}
                onPress={() => navigation.navigate('Complaints')}>
                <Image
                  source={require('../images/rc.jpg')}
                  style={{
                    borderRadius: 20,
                    width: 130,
                    height: 130,

                    marginTop: -5,
                  }}
                />
                <Text
                  style={{
                    color: 'red',
                    marginTop: 0,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  COMPLAINTS
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 12}}>
            <View style={{flex: 1, marginLeft: 30}}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',

                  alignItems: 'center',
                  borderRadius: 30,
                  marginLeft: -10,
                  width: 130,
                  height: 130,

                  paddingVertical: 5,
                }}
                onPress={() => navigation.navigate('Signup')}>
                <Image
                  source={require('../images/r1.png')}
                  style={{
                    borderRadius: 30,
                    width: 130,
                    height: 130,

                    marginTop: -5,
                  }}
                />
                <Text
                  style={{
                    color: 'red',
                    marginTop: 0,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  MISSING PERSON
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginLeft: 100}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#10942e',

                  alignItems: 'center',
                  borderRadius: 30,
                  marginLeft: -10,
                  width: 130,
                  height: 130,

                  paddingVertical: 5,
                }}
                onPress={() => navigation.navigate('Signup')}>
                <Image
                  source={require('../images/r1.png')}
                  style={{
                    borderRadius: 30,
                    width: 130,
                    height: 130,

                    marginTop: -5,
                  }}
                />
                <Text
                  style={{
                    color: 'red',
                    marginTop: 0,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  NOTIFICATION
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginLeft: 0, marginTop: 10}}>
            <Text style={{color: 'black', fontSize: 19, fontWeight: 'bold'}}>
              View
            </Text>
          </View>
          <View style={{backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:14,marginTop:8 }}>
            <TouchableOpacity>
              <Text style={{fontSize:20, marginLeft:10, fontWeight:'bold', color:'#494848', marginTop:9}}>Most  Wanted  Criminals</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:14,marginTop:8 }}>
            <TouchableOpacity>
              <Text style={{fontSize:20, marginLeft:10, fontWeight:'bold', color:'#494848', marginTop:9}}>Notifications</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
       
      </View>
    </Back3>
  );
};

export default UserPanel;

import React, {useState} from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './constants';
import {Image} from 'react-native';
import {green} from './constants';
import Field from './Field';

const Alogin = ({navigation}) => {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [validated, setvalidated] = useState(false);
  const [error, setError] = useState('wrong credentials');

  function validate() {
    if (pass == 'admin' && email == 'admin') {
      setvalidated(true);
      navigation.navigate('Auserpanel');
    } else {
      alert(error);
    }
  }
  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <View style={{marginHorizontal: 90, marginVertical: 50, marginTop: 96}}>
          <Image
            source={require('../images/logo.png')}
            style={{
              width: 250,
              height: 150,

              alignContent: 'center',
              marginTop: 0,
            }}
          />
        </View>
        <View>
          <TouchableOpacity style={{borderRadius: 7}}>
            <Text
              style={{
                color: 'black',
                fontSize: 34,
                fontWeight: 'bold',
                marginTop: -35,
              }}>
              Admin Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 189,
            height: 700,
            width: 460,
            alignItems: 'center',
          }}>
          <TextInput
            onChangeText={value => setEmail(value)}
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: '78%',
              backgroundColor: 'rgb(220,220, 220)',
              marginVertical: 10,
            }}
            placeholderTextColor="grey"
            placeholder="Enter User Email"
          />

          {/* <Field placeholder="Password" secureTextEntry={true} /> */}

          <TextInput
            onChangeText={value => setPass(value)}
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: '78%',
              backgroundColor: 'rgb(220,220, 220)',
              marginVertical: 10,
            }}
            placeholderTextColor="grey"
            placeholder="Enter password"
          />

          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 30,
            }}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>

          {/* <Btn bgColor={green} textColor='white' btnLabel="Login" onPress={()=>validate} /> */}

          <TouchableOpacity
            onPress={validate}
            style={{
              backgroundColor: 'black',
              borderRadius: 100,
              alignItems: 'center',
              width: 350,
              paddingVertical: 5,
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
                borderRadius: 100,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          {/* <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16,textColor:'black', fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </Background>
  );
};

export default Alogin;

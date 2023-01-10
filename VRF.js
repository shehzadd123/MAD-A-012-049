import React from 'react';
import {View, Text, Image,Alert,Button, TextInput,
  ScrollView,
  TouchableOpacity, ImageBackground} from 'react-native';
// import {
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const VRF = ({navigation}) => {

 
    return (
      <View
        style={{
          backgroundColor: '#FFF',
          flex: 1,
        //   height:150,
        }}>
        <View
          style={{
            backgroundColor: '#212121',
            height: '20%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}>
          <Image
            source={require('../images/logo.png')}
            style={{
              height: 90,
              width: 100,
              marginTop: 0,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 25,
              width: '100%',
            }}>
            <View style={{width: 370, alignItems:'center',}}>
              <Text
                style={{
                  fontSize: 30,
               
                  color: '#FFF',
                  fontWeight: 'bold',
                }}>
             CASES INFORMATION
              </Text>
            </View>
            {/* <View style={{width: '50%', alignItems: 'flex-end'}}>
              <Image
                // source={require('../images/g.png')}
                style={{height: 60, width: 60}}
              />
            </View> */}
          </View>
        </View>
  
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            width: '100%',
            alignItems: 'center',
            backgroundColor:'#212121'
          }}>
          <View style={{width: '50%',  backgroundColor:'#212121'}}></View>
          <View style={{width: '50%',   backgroundColor:'#212121',alignItems: 'flex-end'}}></View>
        </View>
  <View style={{height:150,}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{height: 100,}}>
          <TouchableOpacity
             onPress={() => navigation.navigate('VRF')}
            style={{
              height: 100,
              elevation: 2,
            
            
              marginLeft: 25,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 0,
              width: 160,
            }}>
            <Image 
  
            style={{height:100,borderRadius:7}} source={require('../images/l1.png')} />
          </TouchableOpacity>
  
  
          <TouchableOpacity
             onPress={() => navigation.navigate('VRF')}
            style={{
              height: 100,
              elevation: 2,
            
            
              marginLeft: 25,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 0,
              width: 160,
            }}>
            <Image 
  
            style={{height:100,borderRadius:7}} source={require('../images/L2.png')} />
          </TouchableOpacity>
        </ScrollView>
        </View>
        <View style={{height:150,}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{height: 100,}}>
          <TouchableOpacity
             onPress={() => navigation.navigate('VRF')}
            style={{
              height: 100,
              elevation: 2,
            
            
              marginLeft: 25,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 0,
              width: 160,
            }}>
            <Image 
  
            style={{height:100,borderRadius:7}} source={require('../images/L3.png')} />
          </TouchableOpacity>
  
  
          <TouchableOpacity
             onPress={() => navigation.navigate('VRF')}
            style={{
              height: 100,
              elevation: 2,
            
            
              marginLeft: 25,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 0,
              width: 160,
            }}>
            <Image 
  
            style={{height:100,borderRadius:7}} source={require('../images/L4.png')} />
          </TouchableOpacity>
        </ScrollView>
        </View>
        <View style={{height:150,}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{height: 100,}}>
          <TouchableOpacity
             onPress={() => navigation.navigate('VRF')}
            style={{
              height: 100,
              elevation: 2,
            
            
              marginLeft: 25,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 0,
              width: 160,
            }}>
            <Image 
  
            style={{height:100,borderRadius:7}} source={require('../images/L5.png')} />
          </TouchableOpacity>
  
  
          <TouchableOpacity
             onPress={() => navigation.navigate('VRF')}
            style={{
              height: 100,
              elevation: 2,
            
            
              marginLeft: 25,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 0,
              width: 160,
            }}>
            <Image 
  
            style={{height:100,borderRadius:7}} source={require('../images/L6.png')} />
          </TouchableOpacity>
        </ScrollView>
        </View>
        <View style={{height:150,}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{height: 100,}}>
          <TouchableOpacity
             onPress={() => navigation.navigate('VRF')}
            style={{
              height: 100,
              elevation: 2,
            
            
              marginLeft: 25,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 0,
              width: 160,
            }}>
            <Image 
  
            style={{height:100,borderRadius:7}} source={require('../images/L7.png')} />
          </TouchableOpacity>
  
  
          <TouchableOpacity
             onPress={() => navigation.navigate('VRF')}
            style={{
              height: 100,
              elevation: 2,
            
            
              marginLeft: 25,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 0,
              width: 160,
            }}>
            <Image 
  
            style={{height:100,borderRadius:7}} source={require('../images/L8.png')} />
          </TouchableOpacity>
        </ScrollView>
        </View>
      </View>
    );
  };
  export default VRF;
  
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


const Auserpanel = ({navigation}) => {

 
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
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
          source={require('../images/1.png')}
          style={{
            height: 10,
            width: 20,
            marginTop: 50,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            width: '100%',
          }}>
          <View style={{width: '50%'}}>
            <Text
              style={{
                fontSize: 28,
                color: '#FFF',
                fontWeight: 'bold',
              }}>
             Admin Panel
            </Text>
          </View>
          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <Image
              source={require('../images/g.png')}
              style={{height: 60, width: 60}}
            />
          </View>
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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{height: 400}}>
        <TouchableOpacity
           onPress={() => navigation.navigate('VRF')}
          style={{
            height: 250,
            elevation: 2,
            borderRadius:10,
          
            marginLeft: 25,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 0,
            width: 160,
          }}>
          <Image 

          style={{height: 252,borderRadius:10,}} source={require('../images/1A.png')} />
        </TouchableOpacity>


        <TouchableOpacity
           onPress={() => navigation.navigate('CIT')}
          style={{
            height: 250,
            elevation: 2,
          
          
            marginLeft: 25,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 0,
            width: 160,
          }}>
          <Image 

          style={{height: 252,borderRadius:10,}} source={require('../images/2A.png')} />
        </TouchableOpacity>
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{height: 400}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('VCD')}
          style={{
            height: 250,
            elevation: 2,

            marginLeft: 25,
            marginTop: 0,
            borderRadius: 15,
            marginBottom: 0,
            width: 160,
          }}>
          <Image style={{height: 252,borderRadius:10,}} source={require('../images/3A.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>navigation.navigate('Auserpanel')}
          style={{
            height: 250,
            elevation: 2,

            marginLeft: 25,
            marginTop: 0,
            borderRadius: 15,
            marginBottom: 0,
            width: 160,
          }}>
          <Image style={{height: 252,borderRadius:10,}} source={require('../images/4A.png')} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Auserpanel;

import { useRoute } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image,Alert,Button, TextInput,
  ScrollView,
  TouchableOpacity, ImageBackground, FlatList} from 'react-native';
 
// import {
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native-gesture-handler';

const route = useRoute();
const VRF = ({navigation}) => {
    const {userList} = route.params;
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
         
           
         <FlatList
          data={userList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            if (item != undefined) {
              return (
                <View>
                  <View style={styles.FList}>
                    <Text>ID : {index + 1}</Text>
                    <Text >Name: {item.Sname}</Text>
                    <Text >CNIC {item.Scnic}</Text>
                    <Text>
                     Description {item.description}
                    </Text>
                    <Text>
                      Contact {item.contact}
                    </Text>
                    <Text>%--------------------------------------%</Text>
                  </View>
                </View>
              );
            }
          }}
        />
          </View>
        </View>
  
       
 
     
    );
  };
  export default VRF;
  
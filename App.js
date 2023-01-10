import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Alogin from './screens/Alogin';
import FIR from './screens/FIR';
import Signup from './screens/Signup';
import Home from './screens/Home';
import UserPanel from './screens/UserPanel';
import Sets from './screens/Sets';
import PMC from './screens/PMC';
import Tabs from './screens/Tabs';
import Rcrime from './screens/Rcrime';
import Rcomplaint from './screens/Rcomplaint';
import Auserpanel from './screens/Auserpanel';
import CIT from './screens/CIT';
import VRF from './screens/VRF';
import VCD from './screens/VCD';
import PM from './screens/PM';
import Screen1 from './screens/Screen1';
import Test from './screens/Test';
import MyTheme from './screens/MyTheme';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import FIRS from './screens/FIRS';
import Firebaseee from './screens/Firebaseee';
import Complaints from './screens/Complaints';
import Rcomplaints from './screens/Rcomplaints';
import VRFu from './screens/VRFu';
// import AuthStack from './screens/AuthStack';
// import CustomDrawer from './screens/CustomDrawer';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Test" component={Test} /> */}
        <Stack.Screen name="Firebaseee" component={Firebaseee} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FIR" component={FIR} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Alogin" component={Alogin} />
        <Stack.Screen name="Auserpanel" component={Auserpanel} />
        <Stack.Screen name="UserPanel" component={UserPanel} />
        <Stack.Screen name="Rcrime" component={Rcrime} />
        <Stack.Screen name="Rcomplaint" component={Rcomplaint} />
        <Stack.Screen name="Setings" component={Sets} />
        <Stack.Screen name="PM" component={PM} />
        <Stack.Screen name="PMC" component={PMC} />
        <Stack.Screen name="CIT" component={CIT} />
        <Stack.Screen name="VRF" component={VRF} />
        <Stack.Screen name="VRFu" component={VRFu} />
        
        <Stack.Screen name="VCD" component={VCD} />
        <Stack.Screen name="FIRS" component={FIRS} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Complaints" component={Complaints} />
        <Stack.Screen name="Rcomplaints" component={Rcomplaints} />
        {/* <Stack.Screen name="CustomDrawer" component={CustomDrawer} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

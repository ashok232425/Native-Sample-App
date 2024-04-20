/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Home from '../../screens/Home';
import Countries from '../../screens/Countries';
import DropDown from '../../screens/DropDown';
import QRCode from '../../screens/QRCode';
import useReducerExample from '../../screens/useReducerExample';
import { NotificationListner, requestUserPermission } from '../../screens/PushNotification';
import PushNotification from 'react-native-push-notification';
import CounterButtons from '../../screens/CounterButtons';
// import { createDrawerNavigator } from 'react-navigation-drawer';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const AuthStack = () => {
//     return (

//     )
// }

const NavigationRouter = () => {

  React.useEffect(() => {
    NotificationListner();
    requestUserPermission();
  }, []);

  PushNotification.createChannel(
    {
      channelId: 'important-notifications',
      channelName: 'Important Notifications',
      channelDescription: 'Receive important updates and alerts',
      importance: 4, // Notification importance level (default: 4)
      vibrate: true, // Vibration option (default: true)
    },
    created => console.log(`Channel created: ${created}`),
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Register}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Countries" component={Countries} />
        <Stack.Screen name="DropDown" component={DropDown} />
        <Stack.Screen name="QRCode" component={QRCode} />
        <Stack.Screen name="useReducerExample" component={useReducerExample} />
        <Stack.Screen name="CustomHook" component={CounterButtons} />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Login">
    //     <Drawer.Screen name="Login" component={Login} />
    //     <Drawer.Screen name="CustomHook" component={CounterButtons} />
    //     <Drawer.Screen name="useReducerExample" component={useReducerExample} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}

export default NavigationRouter;
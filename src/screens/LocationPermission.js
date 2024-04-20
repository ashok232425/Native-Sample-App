/* eslint-disable prettier/prettier */
import {Alert, PermissionsAndroid} from 'react-native';

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'This app needs access to your location.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // Permission granted, return true
      return true;
    } else {
      // Permission denied, display alert and return false
      Alert.alert(
        'Location Access Denied',
        'Please enable location access to use this feature.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

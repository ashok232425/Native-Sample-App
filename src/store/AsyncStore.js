/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeRegistrationDetails = async (userDetails) => {
    try {
        await AsyncStorage.setItem('userData', JSON.stringify(userDetails));
    } catch (error) {
        console.error('Error storing user details:', error);
    }
};

export const getRegestrationDetails = async () => {
    try {
        const registrationDetailsString = await AsyncStorage.getItem('userData');
        if (registrationDetailsString !== null) {
            const registrationDetails = JSON.parse(registrationDetailsString);
            return { email: registrationDetails.email, password: registrationDetails.password };
        }
    } catch (error) {
        console.log('Error getting user data: ', error);
    }
};

export const clearRegistrationDetails = async () => {
    try {
        await AsyncStorage.removeItem('userData');
    } catch (error) {
        console.log('Error clearing user data: ', error);
    }
};
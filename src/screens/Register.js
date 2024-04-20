/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { Alert, Button, Modal, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import { Styles } from '../assets/Styles';
import { validateInput } from '../utils/CommonFunction';
import { Login_Screen } from '../assets/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeRegistrationDetails } from '../store/AsyncStore';

const Register = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleRegister = async (e) => {

        e.preventDefault();
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        const { isValid: isEmailValid, value: validateEmail } = validateInput(email, emailRegExp, 'Please enter a valid email address.');
        const { isValid: isPasswordValid, value: validatePassword } = validateInput(password, passwordRegExp, 'The password must be at least 8 characters long and contain one number, one uppercase letter, one lowercase letter, and one');

        if (!isEmailValid || !isPasswordValid) {
            return;
        }

        if (validatePassword !== confirmPassword) {
            Alert.alert('The password does not match the confirmation.');
            return;
        }

        const registrationDetails = { email, password, confirmPassword};
        storeRegistrationDetails(registrationDetails);
        // API Call to register user here
        // const url = 'http://localhost:8080/api/register';
        // try {
        //     console.log('new--0000000000------')
        //     const response = await fetch(url, {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({password, confirmPassword, email
        //             // passWord: password,
        //             // confirmPassWord: confirmPassword,
        //             // email: email,
        //         }),
        //     });
        //     console.log('11111111------', response)
        //     if (!response.ok) {
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //     }

        //     const data = await response.json();
        //     console.log('Response data:', data);
        //     if (response.ok) {
        //         Alert.alert(data.message);
        //         navigation.navigate(Login_Screen);
        //     } else {
        //         Alert.alert('Registration failed: ' + data.message);
        //     }
        // } catch (error) {
        //     Alert.alert('An error occurred: ' + error.message);
        // }
        navigation.navigate(Login_Screen);
    };

    return (
        <SafeAreaView>
            {/* <Modal visible={modalVisible}> */}
            <TextInput
                style={Styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(value) => setEmail(value.trim())}
            />
            <TextInput
                style={Styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(value) => setPassword(value.trim())}
            />
            <TextInput
                style={Styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(value) => setConfirmPassword(value.trim())}
            />
            <TouchableOpacity style={Styles.loginScreenSubmitButton} onPress={handleRegister}>
                <Text style={Styles.loginScreenButtonTxt}> Submit </Text>
            </TouchableOpacity>
            {/* </Modal> */}
        </SafeAreaView>
    );
};

export default Register;

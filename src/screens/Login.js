/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Alert, View, Text, TextInput, SafeAreaView, Modal, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Styles } from '../assets/Styles';
import CheckBox from 'react-native-check-box';
import { validateInput } from '../utils/CommonFunction';
import { Register_Screen } from '../assets/Constants';
import { getRegestrationDetails } from '../store/AsyncStore';
import { getUserLocation } from './LocationInfo';
import CustomButton from './CustomButton';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(true);
    const [hidePassword, setHidePassword] = useState(true);

    const loadStoredDetails = async () => {
        const { email: storedEmail, password: storedPassword } = await getRegestrationDetails();
        if (storedEmail && storedPassword) {
            setEmail(storedEmail);
            setPassword(storedPassword);
        }
    };

    useEffect(() => {
        loadStoredDetails();
        getLocation();
        // requestLocationPermission();
    }, []);

    const handleLogin = async(event) => {

        // event.preventDefault();
        // const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        // const { isValid: isEmailValid, value: validateEmail } = validateInput(email, emailRegExp, 'Please enter a valid email address.');
        // const { isValid: isPasswordValid, value: validatePassword } = validateInput(password, passwordRegExp, 'The password must be at least 8 characters long and contain one number, one uppercase letter, one lowercase letter, and one');

        // if (!isEmailValid || !isPasswordValid) {
        //     return;
        // }
        // if (email.trim() && password.trim()) {
        //     Alert.alert('Please fill in both username and password fields!');
        //     return;
        // }
        // try {
        //     const response = await fetch('http://localhost:8080/api/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             userName: email,
        //             passWord: password,
        //         }),
        //     });

        //     if (response.ok) {
        //         const data = await response.json();
        //         console.log('Login successful: ', data);
        //         Alert.alert('Success', 'Login successful!');
        //         navigation.navigate('Home');
        //     } else {
        //         Alert.alert('Failed', 'Invalid Credentials!');
        //     }
        // } catch (error) {
        //     // Bypassing login while network issues
        //     navigation.navigate('Home');
        //     console.log('An error occured: ', error.message);
        // }
        console.log('aaaaaaaaaaaaa')
        // const { email, password } = await getRegestrationDetails();
        console.log('Email: ', email);
        console.log('password: ', password);
        // navigation.navigate('Home');
        // navigation.navigate('useReducerExample');
        navigation.navigate('CustomHook');
    };

    const getLocation = async () => {
        let result = await getUserLocation();
        console.log('user location data: ', result);
      };

    const handleModalVisibility = () => {
        setModalVisible(!modalVisible);
    };

    const handleRegisteration = () => {
        console.log('New user...');
        navigation.navigate(Register_Screen);
    };

    // const regexExpressionValidation = (input) => {
    //     let onlyNumberAndChars = /^[a-zA-Z0-9]*$/;
    //     if (onlyNumberAndChars.test(input)) {
    //         setEmail(input);
    //     }
    // };

    return (
        <SafeAreaView>
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { Alert.alert('Modal has been closed.')}}
            > */}
                <TextInput
                    style={Styles.input}
                    placeholder="Email"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)}
                    // onChangeText={regexExpressionValidation}
                />
                <TextInput
                    style={Styles.loginScreenPasswordText}
                    placeholder="password"
                    secureTextEntry={hidePassword}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                {/* <View style={Styles.loginScreenViewSubmitButton}>
                    <TouchableOpacity style={Styles.loginScreenSubmitButton} onPress={handleLogin}>
                        <Text style={Styles.loginScreenButtonTxt}> Submit </Text>
                    </TouchableOpacity>
                </View> */}
                <CustomButton title="Submit" onPress={handleLogin} />
                <CheckBox onClick={() => setHidePassword(!hidePassword)}
                    isChecked={hidePassword}
                    checkBoxColor="#1f95cc"
                />
                <Text style={Styles.checkBox}>Remember me</Text>
                <View>
                    <Text>You don't have an account?</Text>
                    <TouchableOpacity onPress={handleRegisteration}>
                        <Text>Click Here</Text>
                    </TouchableOpacity>
                </View>
            {/* </Modal> */}
        </SafeAreaView>
    );
};

export default Login;

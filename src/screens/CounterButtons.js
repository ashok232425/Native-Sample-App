/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useContext } from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {useCounter} from './CountContext'
import { Styles } from '../assets/Styles';
import useCustomHook from './CustomHook';
import CustomButton from './CustomButton';

const CounterButtons = () => {
    // const { increment, decrement, reset } = useCounter();
    const {count, increment, decrement} = useCustomHook(0, 1);

    return (
        <View>
            <Text>CustomHook- Count: {count}</Text>
            <CustomButton title="Increment" onPress={increment} />
            <CustomButton title="Decrement" onPress={decrement} />
            {/* <TouchableOpacity style={Styles.loginScreenSubmitButton} onPress={increment}>
                <Text style={Styles.loginScreenButtonTxt}> Increment </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.loginScreenSubmitButton} onPress={decrement}>
                <Text style={Styles.loginScreenButtonTxt}> Decrement </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={Styles.loginScreenSubmitButton} onPress={reset}>
                <Text style={Styles.loginScreenButtonTxt}> Reset </Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default CounterButtons;
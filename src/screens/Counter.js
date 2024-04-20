/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native'
import { useCounter } from './CountContext';
import CounterButtons from './CounterButtons';

const Counter = () => {
    const {count} = useCounter();

    return (
        <View>
            <Text>{count}</Text>
            <CounterButtons/>
        </View>
    )
}

export default Counter;
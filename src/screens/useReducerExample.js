/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useReducer} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { Styles } from '../assets/Styles';
import { reducer, initialState } from './CountOfUseReducer';

const useReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
        <Text>Count: {state.count}</Text>
      <TouchableOpacity
        style={Styles.loginScreenSubmitButton}
        onPress={() => dispatch({type : 'increment'})}>
        <Text style={Styles.loginScreenButtonTxt}> Increment </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.loginScreenSubmitButton}
        onPress={() => dispatch({ type: 'decrement'})}>
        <Text style={Styles.loginScreenButtonTxt}> Decrement </Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.loginScreenSubmitButton} onPress={() => dispatch({type: 'reset'})}>
        <Text style={Styles.loginScreenButtonTxt}> Reset </Text>
      </TouchableOpacity>
    </View>
  );
};

export default useReducerExample;

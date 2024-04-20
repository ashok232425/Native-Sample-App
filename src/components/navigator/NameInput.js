// components/NameInput.js
import React from 'react';
import { TextInput } from 'react-native';

const NameInput = ({ value, onChangeText }) => (
  <TextInput
    placeholder="Enter your name"
    value={value}
    onChangeText={onChangeText}
  />
);

export default NameInput;
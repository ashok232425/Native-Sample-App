// components/DateOfBirthInput.js
import React from 'react';
import DatePicker from 'react-native-datepicker';

const DateOfBirthInput = ({ value, onChange }) => (
  <DatePicker
    style={{ width: 200 }}
    date={value}
    mode="date"
    placeholder="Select Date of Birth"
    format="YYYY-MM-DD"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    onDateChange={(date) => onChange(date)}
  />
);

export default DateOfBirthInput;

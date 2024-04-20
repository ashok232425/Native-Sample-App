/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
const { Alert } = require("react-native");

    export const validateInput = (value, regExp, errorMessage) => {

        if (!regExp || typeof regExp.test !== 'function') {
            return { isValid: false, value };
        }

        const isValid = regExp.test(value);
        if (!isValid) {
            Alert.alert('Invalid input', errorMessage);
        }
        return { isValid, value };
    };

    export const validateEmail = (email) => {
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return validateInput(email, emailRegExp, 'Please enter a valid email address');
    };
    export const validatePassword = (password) => {
        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return validateInput(
            password,
            passwordRegExp,
            'Password must be at least 8 characters long \n and contain at least one uppercase letter, one lowercase letter, and one digit.'
        );
    };

    export const country = () => {
        let globalCountries = [
        {
            name: 'India',
            value: 'IN',
            states: [
                { id: 1, name: 'Delhi' },
                { id: 2, name: 'Maharastra' },
                { id: 3, name: 'TamilNadu' },
                { id: 4, name: 'Karnataka' },
            ],
            cities: [
                { name: 'Firozobad', stateId: 1 },
                { name: 'Mumbai', stateId: 2 },
                { name: 'Chennai', stateId: 3 },
                { name: 'Salem', stateId: 3 },
                { name: 'Bangalore', stateId: 4 },
            ],
        },
        {
            name: 'Pakistan',
            value: 'PK',
            states: [
                { id: 1, name: 'Lahore' },
                { id: 2, name: 'Karachi' },
                { id: 3, name: 'Islamabad' },
            ],
        },
        {
            name: 'Australia',
            value: 'AU',
            states: [
                { id: 1, name: 'Sydney' },
                { id: 2, name: 'Melborne' },
                { id: 3, name: 'Brisbane' },
                { id: 4, name: 'Hobart' },
            ],
        },
        {
            name: 'SouthAfrica',
            value: 'SA',
            states: [
                { id: 1, name: 'Durban' },
                { id: 2, name: 'Capetown' },
                { id: 3, name: 'Johnesburg' },
                { id: 4, name: 'parl' },
            ],
        },
    ];
    return globalCountries;
};
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { View, Text,TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
// import { Picker} from 'native-base';
import { country } from '../utils/CommonFunction';
import { Styles } from '../assets/Styles';

const DropDown = ({navigation}) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const countriesData = country();

    const handleCountryCHange = (itemValue) => {
        setSelectedCountry(itemValue);
        setSelectedState(null);
    }

    const handleNavigaton = () => {
        navigation.navigate('QRCode');
    };
    
    return (
        <View style={{ margin: 20 }}>
            <Text style={{ fontSize: 16, marginBottom: 8 }}>Select Country:</Text>
            <Picker
                selectedValue={selectedCountry}
                onValueChange={handleCountryCHange}>
                <Picker.Item label="Select a country" value={null} />
                {countriesData.map((country) => (
                    <Picker.Item key={country.value} label={country.name} value={country} />
                ))}
            </Picker>
            {selectedCountry && (
                <View>
                    <Text style={{ fontSize: 16, marginBottom: 8 }}>Selected country: {selectedCountry.name}</Text>
                    <Picker
                        selectedValue={selectedState}
                        onValueChange={(itemValue) => setSelectedState(itemValue)}>
                        <Picker.Item label="Select a State" value={null} />
                        {selectedCountry.states.map((state) => (
                            <Picker.Item key={state.id} label={state.name} value={state} />
                        ))}
                    </Picker>
                </View>
            )}
            {selectedState && (
                <View>
                    <Text style={{ fontSize: 16, marginBottom: 8 }}>Selected State: {selectedState.name}</Text>
                    <Picker>
                        <Picker.Item label="Select a City" value={null} />
                        {selectedCountry.cities.filter((city) => city.stateId === selectedState.id)
                            .map((city) => (<Picker.Item key={city.name} label={city.name} value={city} />))}
                    </Picker>
                </View>
            )}

            <TouchableOpacity onPress={handleNavigaton}>
                <Text style={Styles.nextPageScreenButtonTxt}> Next Page </Text>
            </TouchableOpacity>
        </View>

    );
};

export default DropDown;
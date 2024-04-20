/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    SafeAreaView,
    Modal,
    TouchableOpacity,
    Alert
} from 'react-native';
import { country } from '../utils/CommonFunction';
import { Styles } from '../assets/Styles';
const Countries = ({navigation}) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    let countriesData = country();

    const handleNavigaton = () => {
        selectedCountry && selectedState ? navigation.navigate('DropDown') : Alert.alert('Please select a Country and State');
    };

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 20, color: 'black' }}>Select Country</Text>
            <FlatList
                data={countriesData}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedCountry(item)}>
                        <View>
                            <Text style={{ color: 'blue' }}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.value}
            />
            {selectedCountry && (
                <View>
                    {/* Render States */}
                    <Text style={{ fontSize: 20, color: 'black' }}>Select State</Text>
                    <Text style={{ fontSize: 16, color: 'blue' }}>'You clicked : '{selectedCountry.name}</Text>
                    <FlatList
                        data={selectedCountry.states}
                        extraData={selectedCountry.stateId}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelectedState(item)}>
                                <View>
                                    <Text style={{ color: 'brown' }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                    {selectedState && (
                        <>
                            <Text style={{ fontSize: 20, color: 'black' }}>Cities: </Text>
                            <FlatList
                                data={selectedCountry.cities.filter((city) => city.stateId === selectedState.id)}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text style={{ color: 'green' }}>{item.name}</Text>
                                    </View>
                                )}
                                keyExtractor={(item) => item.name}
                            />
                        </>
                    )}
                </View>
            )}
            <TouchableOpacity onPress={handleNavigaton}>
                <Text style={Styles.nextPageScreenButtonTxt}> Next Page </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Countries;

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, TouchableOpacity, Text } from "react-native";
import { Styles } from "../assets/Styles";
const CustomButton = ({ onPress, title }) => {

    return (
        <View style={Styles.loginScreenViewSubmitButton}>
                    <TouchableOpacity style={Styles.loginScreenSubmitButton} onPress={ onPress }>
                        <Text style={Styles.loginScreenButtonTxt}> {title} </Text>
                    </TouchableOpacity>
                </View>
    );
};

export default CustomButton;
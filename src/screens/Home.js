/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Modal, TouchableOpacity } from 'react-native';
import { buyCake, buyIcecream } from '../store/Actions';
import { connect } from 'react-redux';
import { Styles } from '../assets/Styles';

const Home = ({ navigation, cakes, icecreams, buyCake, buyIcecream }) => {

    const handleNavigaton = () => {
        navigation.navigate('Countries');
    };
    
    return (
        <View>
            <Text>Welcome to Home page!</Text>
            <Text>Cake: {cakes}</Text>
            <Text>Icecream: {icecreams}</Text>
            <TouchableOpacity style={Styles.loginScreenSubmitButton} onPress={buyCake}>
                <Text style={Styles.loginScreenButtonTxt}> Cake </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.loginScreenSubmitButton} onPress={buyIcecream}>
                <Text style={Styles.loginScreenButtonTxt}> Icecream </Text>
            </TouchableOpacity>
            <View>
            <TouchableOpacity onPress={handleNavigaton}>
                <Text style={Styles.nextPageScreenButtonTxt}> Next Page </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        cakes: state.cakeReducer.cakes,
        icecreams: state.icecreamReducer.icecreams
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
        buyIcecream: () => dispatch(buyIcecream())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
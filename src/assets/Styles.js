/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: '#C4CCD4',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 20,
    padding: 10,
    fontSize: 15,
    // fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    color: '#000000',
    },
    loginScreenPasswordText: {
      height: 45,
      borderColor: 'gray',
      //borderWidth: 1,
      //borderRadius: 3,
      marginBottom: 20,
      padding: 10,
      width: hp('42%'),
      fontSize: 15,
      // fontWeight: 'bold',
      fontFamily: 'Helvetica Neue',
      color: '#000000',
    },
    loginScreenSubmitButton: {
      alignItems: 'center',
      backgroundColor: '#0181be',
      padding: 10,
      borderRadius: 4,
      marginBottom: 10,
      flexDirection: 'row',
    },
    loginScreenButtonTxt: {
      color: '#fff',
      fontSize: 19,
      fontFamily: 'Helvetica Neue',
      fontWeight: 'bold',
      justifyContent: 'center',
    },
    nextPageScreenButtonTxt: {
      color: 'red',
      fontSize: 19,
      fontFamily: 'Helvetica Neue',
      fontWeight: 'bold',
      justifyContent: 'center',
    },
    loginScreenViewSubmitButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
    },
    loginScreenModalView: {
      backgroundColor: 'rgba(0,0,0,0.7)',
      flex: 1,
    },
    checkBox: {
      marginTop: 10,
      color: 'blue',
    },
  });

export {Styles};

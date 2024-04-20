/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { SafeAreaView } from "react-native";
import { View, Text } from 'react-native';
import QRcode from 'react-native-qrcode-svg'

const QRCode = () => {
    const qrData = 'Hello, this is a QR code!';
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>QR Code Generator</Text>
          <QRcode
            value={qrData}
            size={230}
            color="black"
            backgroundColor="white"
          />
        </View>
      );
}

export default QRCode;
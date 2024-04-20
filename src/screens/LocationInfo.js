/* eslint-disable prettier/prettier */
import Geolocation from 'react-native-geolocation-service';
import { requestLocationPermission } from './LocationPermission';

export const getUserLocation = async () => {
    let isLocation = await requestLocationPermission();
    if (isLocation) {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                position => {
                    const { coords: { latitude, longitude } } = position;
                    resolve({ latitude, longitude });
                },
                error => {
                    reject(error);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
            );
        });
    }
};

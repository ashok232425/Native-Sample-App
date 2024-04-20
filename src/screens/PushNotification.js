/* eslint-disable prettier/prettier */
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    await getToken();
    console.log('Authorization status:', authStatus);
  }
}

export const getToken = async () => {

  let deviceToken = await AsyncStorage.getItem('deviceToken');
  console.log('Old device token: ', deviceToken);
  if (!deviceToken) {
    try {
      const token = await messaging().getToken();
      console.log('Device Token: ', token);
      // Store device token in local storage
      await AsyncStorage.setItem('deviceToken', token);
    } catch (error) {
      console.log('Error storing device token: ', error);
    }
  }
};

export const NotificationListner = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('Notification caused app to open from background state:', remoteMessage.notification); //TODO
  });

  messaging().getInitialNotification().then(remoteMessage => {
      if (remoteMessage) {
        console.log('Notification caused app to open from quit state:', remoteMessage.notification); //TODO
      }
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      PushNotification.localNotification({
        channelId: 'important-notifications',
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
      });
      // console.log('Message handled in the background: ', remoteMessage.notification);
    });

  messaging().onMessage(async remoteMessage => {
    PushNotification.localNotification({
      channelId: 'important-notifications',
      title: remoteMessage.notification.title,
      message: remoteMessage.notification.body,
    });
    // console.log('notification on foreground state....', remoteMessage.notification);
  });
};


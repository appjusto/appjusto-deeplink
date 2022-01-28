import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { ToastAndroid } from 'react-native';


export const signInWithEmail = async (email: string): Promise<void> => {
  const auth = getAuth();
  const url = `https://login.test.appjusto.com.br/join`;
  try {
    await sendSignInLinkToEmail(auth, email, {
      url,
      handleCodeInApp: true,
      android: {
        packageName: 'br.com.appjusto.deeplink',
        installApp: false,
      },
      dynamicLinkDomain: 'auth.test.appjusto.com.br',
    });
  } catch (error) {
    ToastAndroid.showWithGravity(JSON.stringify(error), 10000, ToastAndroid.CENTER);
  }
};

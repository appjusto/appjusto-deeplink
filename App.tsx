import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import * as Linking from "expo-linking";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { signInWithEmail } from "./auth";

initializeApp(firebaseConfig);

export default function App() {
  const [email, setEmail] = React.useState("saulobrito@gmail.com");
  const deeplink = Linking.useURL();
  return (
    <View style={styles.container}>
      <Text>Deeplink: {deeplink} </Text>
      <TextInput
        style={{ borderColor: "#000000" }}
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Sign in" onPress={() => signInWithEmail(email)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

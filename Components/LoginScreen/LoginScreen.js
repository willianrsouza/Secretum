import React, { useState } from "react";
import { View, Image, TextInput, Button, Text, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Styles from "./Style";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage from "./../../assets/LoginScreen/login.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import RegisterScreen from "../RegisterScreen/RegisterScreen";

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  console.log(email);

  const auth = getAuth();

  const onLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((err) => Alert.alert("Login error", err.message));
  };

  return (
    <View style={Styles.canvas}>
      <Image style={Styles.background} source={backgroundImage} />
      <Text style={Styles.phrase}>Share your feelings with us. </Text>
      <SafeAreaView style={Styles.safeArea}>
        <TextInput
          style={Styles.inputText}
          placeholder="Login"
          autoCorrect={true}
          keyboardType="email-address"
          autoFocus={true}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={Styles.inputText}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          autoFocus={true}
          onChangeText={(text) => setPass(text)}
        />
        <Button
          onPress={() => onLogin()}
          style={Styles.loginButton}
          color="#8677A6"
          border="radius"
          title="Login"
        />
      </SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={Styles.register}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

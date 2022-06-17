import React, { useState } from "react";
import { View, Image, TextInput, Button, Text, Alert } from "react-native";
import { auth } from "../../config/firebase";
import Styles from "./Style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage from "./../../assets/RegisterScreen/register.png";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onRegister = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={Styles.canvas}>
      <Image style={Styles.background} source={backgroundImage} />
      <Text style={Styles.phrase}>
        Welcome, it's a pleasure to have you here!
      </Text>
      <SafeAreaView style={Styles.safeArea}>
        <TextInput
          style={Styles.inputText}
          placeholder="E-mail"
          autoCorrect={true}
          keyboardType="email-address"
          autoFocus={true}
          onChangeText={(text) => setEmail()}
        />
        <TextInput
          style={Styles.inputText}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          autoFocus={true}
          onChangeText={(text) => setPass()}
        />
        <Button
          onPress={() => onRegister(email, pass)}
          style={Styles.loginButton}
          color="#8677A6"
          border="radius"
          title="Register"
        />
      </SafeAreaView>
    </View>
  );
};

export default RegisterScreen;

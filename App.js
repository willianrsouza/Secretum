import React, { useState, createContext, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import Login from "./Components/LoginScreen/LoginScreen";
import Signup from "./Components/RegisterScreen/RegisterScreen";
import Chat from "./Components/ChatScreen/ChatScreen";
import "react-native-gesture-handler";

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const [verify, setVerify] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return setVerify(true);
    }
  });

  return (
    <NavigationContainer>
      {verify ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}

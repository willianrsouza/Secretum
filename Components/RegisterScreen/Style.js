import { StyleSheet } from "react-native";

export const RegisterScreenStyle = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  background: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  inputText: {
    height: 58,
    width: 300,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#F6F7F8",
  },
  safeArea: {
    paddingTop: 20,
  },
  loginButton: {
    borderRadius: 80,
    color: "#8677A6",
  },
  phrase: {
    padding: 15,
    fontStyle: "italic",
  },
  register: {
    padding: 10,
    color: "#0D0D0D",
  },
});

export default RegisterScreenStyle;

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(7, 130, 127, 0.67)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width,
   // height: '40%',
    marginTop: 5

  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
      padding: 5
  },
  buttonContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 5,
    justifyContent: "space-between"
  }
});

export const Button = ({ text, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);

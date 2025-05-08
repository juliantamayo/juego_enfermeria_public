import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import styles from './../Style.js';
const style = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 1,
    borderRadius: 20,
    margin: 20
  },
  text: {
    fontSize: 18,
    //color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export const RowItemJuego1 = ({ onPress = () => {}, name, color }) => (
  <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                          onPress={onPress}>
     <Image style={ styles.image } source={require("../../assets/images/button-derecha.png")} />
     
   </TouchableOpacity>
);

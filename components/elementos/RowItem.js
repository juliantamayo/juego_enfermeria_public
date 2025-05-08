import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
   row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 1,
    borderRadius: 20,
    margin: 20
  },
  rowPares:{ 
     paddingHorizontal:5,
    paddingVertical: 10,
    marginBottom: 1,
    borderRadius: 50,
    margin: 10,
   // width:'50%'
   width: Dimensions.get('window').width/4,
  },
  text: {
    fontSize: 18,
    //color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text2: {
    fontSize: 22,
    //color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center'
  },


  columns:{
    //flexDirection: "columns",
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 1,
    borderRadius: 20,
    margin: 20,
   // width:'50%'
   width: Dimensions.get('window').width/3,
  }


});

export const RowItem = ({ onPress = () => {}, name, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={[styles.row, { backgroundColor: color }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);


export const RowItemEscena3 = ({ onPress = () => {}, name, color }) => (
 
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={[styles.columns, { backgroundColor: color }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
  
);

export const RowItemPares = ({ onPress = () => {}, name, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={[styles.rowPares, { backgroundColor: color }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);

export const RowItemMjuegos = ({ onPress = () => {}, name, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={[styles.row, { backgroundColor: color }]}>
      <Text style={styles.text2}>{name}</Text>
    </View>
  </TouchableOpacity>
);




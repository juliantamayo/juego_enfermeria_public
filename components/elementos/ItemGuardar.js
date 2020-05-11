import React from "react";
import { View, TouchableOpacity, Text, StyleSheet,Image, Dimensions, ImageBackground } from "react-native";
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  MainContainer: {
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  textStyle2: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: "white",
    fontWeight: 'bold',
  },
   button: {
  
    margin: 5,
  },
  button3: {
     margin: 20,
     height:50,
     width: 270,
    alignItems: "center",
    backgroundColor: "#00bfff",
    padding: 10,
    borderRadius: 20
  },
  Imagen:{
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/3,
  },
  ContainerImagen:{
     alignItems: 'center',
    justifyContent: 'center',
   // marginBottom: 5
  }
});

export const Save = ({  onPress = () => {} }) => (    
       <TouchableOpacity activeOpacity={0.8} style={styles.button3}  onPress ={onPress}>
        <Text style={styles.textStyle}> Continuar </Text>
       </TouchableOpacity>
         
);

export const ContainerSave = ({ children }) => (
<ImageBackground style={styles.MainContainer} source={require("../../assets/images/background.png")} >
   <View style={styles.ContainerImagen}>
            <Image style={styles.Imagen} source={require("../../assets/images/felicidades.gif")} resizeMode="contain"/>
            <Text style={styles.textStyle2}>Pregunta superada</Text>
   </View>
        <View style={styles.button}></View>
            {children}
    <View style={styles.button}></View>
   </ImageBackground>
);





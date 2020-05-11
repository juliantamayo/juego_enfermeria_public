import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, Dimensions, AsyncStorage,Alert, ImageBackground,TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window')
export default class guardar_escena1 extends Component {
  constructor(route) {
    super(route);

    global.hola = this.props.route.params?.ex;
  }
state = {
      'nombre':0
   }

  saveData = (value) => {
      AsyncStorage.setItem('nombre',  global.hola.toString());
      this.setState({ 'nombre':  global.hola });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);
       
   } 
   
  render() {
    return (
    <ImageBackground style={styles.MainContainer} source={require("../../../../assets/images/background.png")} >
        <View style={styles.ContainerImagen}>
            <Image style={styles.Imagen} source={require("../../../../assets/images/Congratulations-GIF35.gif")} resizeMode="contain"/>
           <Text style={styles.textStyle2}>Introducción superada</Text>
        </View> 
          <TouchableOpacity activeOpacity={0.8} style={styles.button3}  onPress ={this.saveData}>
        <Text style={styles.textStyle}> Continuar </Text>
       </TouchableOpacity>
        <View style={styles.button}></View>
 
      </ImageBackground>
    );
  }
}
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
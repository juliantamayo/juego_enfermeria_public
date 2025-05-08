import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";
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
    <ContainerSave>
                <Save onPress ={this.saveData}/>  
    </ContainerSave>
    );
  }
}

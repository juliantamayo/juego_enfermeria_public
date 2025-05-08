import React, { Component } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";
export default class C3_guardar_escena1 extends Component {
  constructor(route) {
    super(route);

    global.C3_hola = this.props.route.params?.ex;
  }
state = {
      'C3_nombre':0
   }

  saveData = (value) => {
      AsyncStorage.setItem('C3_nombre',  global.C3_hola.toString());
      this.setState({ 'C3_nombre':  global.C3_hola });
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

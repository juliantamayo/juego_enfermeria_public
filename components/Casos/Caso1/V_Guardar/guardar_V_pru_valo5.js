import React, { Component } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class guardar_V_pru_valo5 extends Component {
  constructor(route) {
    super(route);
    // variable global
    global.recibe_pru_valo5 = this.props.route.params?.pv5;
  }
state = {
      'save_pruValo5':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('save_pruValo5',  global.recibe_pru_valo5.toString());
      this.setState({ 'save_pruValo5':  global.recibe_pru_valo5 });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_caso1") }
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
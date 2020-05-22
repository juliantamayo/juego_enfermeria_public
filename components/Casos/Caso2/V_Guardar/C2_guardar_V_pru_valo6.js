import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class guardar_V_pru_valo6 extends Component {
  constructor(route) {
    super(route);
    // variable global
    global.recibe_pru_valo6 = this.props.route.params?.pv6;
  }
state = {
      'save_pruValo6':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('save_pruValo6',  global.recibe_pru_valo6.toString());
      this.setState({ 'save_pruValo6':  global.recibe_pru_valo6 });
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

import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class guardar_V_pru_valo7 extends Component {
  constructor(route) {
    super(route);
    // variable global
    global.recibe_pru_valo7 = this.props.route.params?.pv7;
  }
state = {
      'save_pruValo7':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('save_pruValo7',  global.recibe_pru_valo7.toString());
      this.setState({ 'save_pruValo7':  global.recibe_pru_valo7 });
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

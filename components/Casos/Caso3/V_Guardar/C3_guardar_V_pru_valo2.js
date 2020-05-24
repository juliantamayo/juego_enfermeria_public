import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class C3_guardar_V_pru_valo2 extends Component {
  constructor(route) {
    super(route);
    // variable global
    global.C3_recibe_pru_valo2 = this.props.route.params?.C3_pv2;
  }
state = {
      'C3_save_pruValo2':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('C3_save_pruValo2',  global.C3_recibe_pru_valo2.toString());
      this.setState({ 'C3_save_pruValo2':  global.C3_recibe_pru_valo2 });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_caso3") }
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

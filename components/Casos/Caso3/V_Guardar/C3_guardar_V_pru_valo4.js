import React, { Component } from 'react';
import { Alert } from 'react-native';
import { AsyncStorage }  from '@react-native-async-storage/async-storage';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class C3_guardar_V_pru_valo4 extends Component {
  constructor(route) {
    super(route);
    // variable global
    global.C3_recibe_pru_valo4 = this.props.route.params?.C3_pv4;
  }
state = {
      'C3_save_pruValo4':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('C3_save_pruValo4',  global.C3_recibe_pru_valo4.toString());
      this.setState({ 'C3_save_pruValo4':  global.C3_recibe_pru_valo4 });
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
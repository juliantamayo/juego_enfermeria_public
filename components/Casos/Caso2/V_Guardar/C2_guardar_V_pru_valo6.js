import React, { Component } from 'react';
import { Alert } from 'react-native';
import { AsyncStorage }  from '@react-native-async-storage/async-storage';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class C2_guardar_V_pru_valo6 extends Component {
  constructor(route) {
    super(route);
    // variable global
    global.C2_recibe_pru_valo6 = this.props.route.params?.C2_pv6;
  }
state = {
      'C2_save_pruValo6':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('C2_save_pruValo6',  global.C2_recibe_pru_valo6.toString());
      this.setState({ 'C2_save_pruValo6':  global.C2_recibe_pru_valo6 });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_caso2") }
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

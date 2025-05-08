import React, { Component } from 'react';
import { Alert } from 'react-native';
import { AsyncStorage }  from '@react-native-async-storage/async-storage';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class C2_guardar_V_pru_valo15 extends Component {
  constructor(route) {
    super(route);
    // variable global
    global.C2_recibe_pru_valo15 = this.props.route.params?.C2_pv15;
  }
state = {
      'C2_save_pruValo15':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('C2_save_pruValo15',  global.C2_recibe_pru_valo15.toString());
      this.setState({ 'C2_save_pruValo15':  global.C2_recibe_pru_valo15 });
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

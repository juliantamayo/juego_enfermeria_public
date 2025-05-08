import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class C3_guardar_V_preg_pcte3 extends Component {
  constructor(route) {
    super(route);

    global.C3_recibe_pregPcte3 = this.props.route.params?.C3_ppcte3;
  }
state = {
      'C3_save_pregPcte3':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('C3_save_pregPcte3',  global.C3_recibe_pregPcte3.toString());
      this.setState({ 'C3_save_pregPcte3':  global.C3_recibe_pregPcte3 });
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

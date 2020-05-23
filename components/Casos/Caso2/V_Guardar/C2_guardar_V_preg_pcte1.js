import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class C2_guardar_V_preg_pcte1 extends Component {
  constructor(route) {
    super(route);
    
    global.C2_recibe_pregPcte1 = this.props.route.params?.C2_ppcte1;
  }
state = {
      'C2_save_pregPcte1':0
   }

  saveData = (value) => {
      AsyncStorage.setItem('C2_save_pregPcte1',  global.C2_recibe_pregPcte1.toString());
      this.setState({ 'C2_save_pregPcte1':  global.C2_recibe_pregPcte1 });
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

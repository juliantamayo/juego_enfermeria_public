import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class C2_guardar_V_preg_pcte5 extends Component {
  constructor(route) {
    super(route);

    global.C2_recibe_pregPcte5 = this.props.route.params?.C2_ppcte5;
  }
state = {
      'C2_save_pregPcte5':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('C2_save_pregPcte5',  global.C2_recibe_pregPcte5.toString());
      this.setState({ 'C2_save_pregPcte5':  global.C2_recibe_pregPcte5 });
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

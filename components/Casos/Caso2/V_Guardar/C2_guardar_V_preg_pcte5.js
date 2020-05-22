import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class guardar_V_preg_pcte5 extends Component {
  constructor(route) {
    super(route);

    global.recibe_pregPcte5 = this.props.route.params?.ppcte5;
  }
state = {
      'save_pregPcte5':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('save_pregPcte5',  global.recibe_pregPcte5.toString());
      this.setState({ 'save_pregPcte5':  global.recibe_pregPcte5 });
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

import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";


export default class guardar_V_preg_pcte6 extends Component {
  constructor(route) {
    super(route);
    //Setting up global variable
    global.recibe_pregPcte6 = this.props.route.params?.ppcte6;
  }
state = {
      'save_pregPcte6':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('save_pregPcte6',  global.recibe_pregPcte6.toString());
      this.setState({ 'save_pregPcte6':  global.recibe_pregPcte6 });
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

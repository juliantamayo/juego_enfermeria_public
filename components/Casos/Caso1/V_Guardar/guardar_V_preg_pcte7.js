import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";


export default class guardar_V_preg_pcte7 extends Component {
  constructor(route) {
    super(route);

    global.recibe_pregPcte7 = this.props.route.params?.ppcte7;
  }
state = {
      'save_pregPcte7':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('save_pregPcte7',  global.recibe_pregPcte7.toString());
      this.setState({ 'save_pregPcte7':  global.recibe_pregPcte7 });
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

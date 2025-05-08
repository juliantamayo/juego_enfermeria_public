import React, { Component } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class guardar_V_preg_pcte3 extends Component {
  constructor(route) {
    super(route);

    global.recibe_pregPcte3 = this.props.route.params?.ppcte3;
  }
state = {
      'save_pregPcte3':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('save_pregPcte3',  global.recibe_pregPcte3.toString());
      this.setState({ 'save_pregPcte3':  global.recibe_pregPcte3 });
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

import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class guardar_V_preg_pcte1 extends Component {
  constructor(route) {
    super(route);
    
    global.recibe_pregPcte1 = this.props.route.params?.ppcte1;
  }
state = {
      'save_pregPcte1':0
   }

  saveData = (value) => {
      AsyncStorage.setItem('save_pregPcte1',  global.recibe_pregPcte1.toString());
      this.setState({ 'save_pregPcte1':  global.recibe_pregPcte1 });
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

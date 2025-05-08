import React, { Component } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";


export default class C3_guardar_V_preg_pcte4 extends Component {
  constructor(route) {
    super(route);

    global.C3_recibe_pregPcte4 = this.props.route.params?.C3_ppcte4;
  }
state = {
      'C3_save_pregPcte4':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('C3_save_pregPcte4',  global.C3_recibe_pregPcte4.toString());
      this.setState({ 'C3_save_pregPcte4':  global.C3_recibe_pregPcte4 });
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

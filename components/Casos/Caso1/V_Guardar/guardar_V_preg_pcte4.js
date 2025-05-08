import React, { Component } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";


export default class guardar_V_preg_pcte4 extends Component {
  constructor(route) {
    super(route);

    global.recibe_pregPcte4 = this.props.route.params?.ppcte4;
  }
state = {
      'save_pregPcte4':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('save_pregPcte4',  global.recibe_pregPcte4.toString());
      this.setState({ 'save_pregPcte4':  global.recibe_pregPcte4 });
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

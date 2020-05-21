import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";
export default class guardar_escena1 extends Component {
  constructor(route) {
    super(route);

    global.recibe_quiz = this.props.route.params?.envia_quiz;
    global.recibe_quiz_CP = this.props.route.params?.cantidad_preg;
  }
state = {
      'save_quiz':0
   }

  saveData = (value) => {
    if (global.recibe_quiz === global.recibe_quiz_CP) {
      AsyncStorage.setItem('save_quiz',  global.recibe_quiz.toString());
      this.setState({ 'save_quiz':  global.recibe_quiz });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);

        }else{
         return  this.props.navigation.navigate("M_caso1");
       } 
       
   } 
   
  render() {
    return (
    <ContainerSave>
                <Save onPress ={this.saveData}/>  
    </ContainerSave>
    );
  }
}
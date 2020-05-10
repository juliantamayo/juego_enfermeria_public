//This is an example of React Native Global Scope Variables//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, AsyncStorage,Alert } from 'react-native';

//import all the components we are going to use.
export default class guardar_V_pru_valo2 extends Component {
  constructor(route) {
    super(route);
    // variable global
    global.recibe_pru_valo2 = this.props.route.params?.pv2;
  }
state = {
      'save_pruValo2':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('save_pruValo2',  global.recibe_pru_valo2.toString());
      this.setState({ 'save_pruValo2':  global.recibe_pru_valo2 });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("Escena3") }
     ]);
       
   } 
    
  render() {
    return (
    <View style={styles.MainContainer}>
        <View style={{ marginBottom: 15 }}>
         
        </View>
         <Button onPress ={this.saveData} title="guardar" style={styles.button}/>  
          <View style={styles.button}></View>
      {//Global Variable
        <Button onPress ={this.removeValue}  title="eliminar cache data"/>  
        }
        <View style={styles.button}></View>
 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
   button: {
  
    margin: 5,
  }
});
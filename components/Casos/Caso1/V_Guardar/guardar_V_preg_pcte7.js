//This is an example of React Native Global Scope Variables//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, AsyncStorage,Alert } from 'react-native';

//import all the components we are going to use.
export default class guardar_V_preg_pcte7 extends Component {
  constructor(route) {
    super(route);
    // variable global
    global.recibe_pregPcte7 = this.props.route.params?.ppcte7;
  }
state = {
      'save_pregPcte7':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('save_pregPcte7',  global.recibe_pregPcte7.toString());
      this.setState({ 'save_pregPcte7':  global.recibe_pregPcte7 });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_caso1") }
     ]);
       
   } 

  removeValue = async () => {
  try {
    await AsyncStorage.removeItem('save_pregPcte7');
     Alert.alert("Mensaje","Datos eliminados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}
    
  render() {
    return (
    <View style={styles.MainContainer}>
        <View style={{ marginBottom: 15 }}>
            <Text style={styles.textStyle}>
         PPcte7   {global.recibe_pregPcte7}
           
          </Text>
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
//This is an example of React Native Global Scope Variables//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, AsyncStorage,Alert } from 'react-native';

//import all the components we are going to use.
export default class guardar_V_preg_pcte3 extends Component {
  constructor(route) {
    super(route);
    //Setting up global variable
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

  removeValue = async () => {
  try {
    await AsyncStorage.removeItem('save_pregPcte3');
     Alert.alert("Mensaje","Datos eliminados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}

  
   componentDidMount2 = () => AsyncStorage.getItem('save_pregPcte3').then((value3) => this.setState({ 'save_pregPcte3': value3 }))
     
  render() {
    return (
    <View style={styles.MainContainer}>
        <View style={{ marginBottom: 15 }}>
            <Text style={styles.textStyle}>
         PPcte2   {global.recibe_pregPcte3}
           
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
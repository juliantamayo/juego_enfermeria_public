//This is an example of React Native Global Scope Variables//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, AsyncStorage,Alert } from 'react-native';

//import all the components we are going to use.
export default class guardar_escena1 extends Component {
 
state = {
      'nombre':0,
       caja:this.props.route.params?.check1,
       caja2:this.props.route.params?.check2
   }

     
  render() {
    return (
    <View style={styles.MainContainer}>
        <View style={{ marginBottom: 15 }}>
            <Text style={styles.textStyle}>
            {/*Global Variable*/}
          </Text>
        </View>
         <Button onPress ={this.saveData} title="guardar" style={styles.button}/>  
          <View style={styles.button}></View>
     
        <Button onPress ={this.removeValue}  title="eliminar cache data"/>  
        
        <View style={styles.button}></View>
               <Text style={styles.textStyle}>   {this.state.caja}  </Text>
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
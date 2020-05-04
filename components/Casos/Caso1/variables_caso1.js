//This is an example of React Native Global Scope Variables//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, AsyncStorage, TouchableOpacity, Alert, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
//import all the components we are going to use.
export default class FirstPage extends Component {
  constructor(route) {
    super(route);
    //Setting up global variable
    global.hola = this.props.route.params?.ex;
    global.nombre = '';
  }
state = {
      'name': '',
      hola:this.props.route.params?.ex,
      'nombre':''
   }

  saveData = (value) => {
      AsyncStorage.setItem('nombre',  global.hola);
      this.setState({ 'nombre':  global.hola });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);
       
   } 

  displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('nombre');  
      alert(user);  
    }  
    catch(error){  
      alert(error)  
    }  
  }


  removeValue = async () => {
  try {
    await AsyncStorage.removeItem('nombre');
     Alert.alert("Mensaje","Datos eliminados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}

  
   componentDidMount = () => AsyncStorage.getItem('nombre').then((value) => this.setState({ 'nombre': value }))
     
   


  
  changeScreen = () => {
    //Function to navigate to the next screen
    this.props.navigation.navigate('pruebaT2');
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.textStyle}>
           nombre {global.nombre}
            {/*Global Variable*/}
          </Text>
            <Text style={styles.textStyle}>
         hola   {global.hola}
            {/*Global Variable*/}
          </Text>
        </View>
         <Button onPress ={this.saveData} title="guardar" style={styles.button}/>  
          <View style={styles.button}></View>
           
        <Button onPress ={this.displayData} title="mostrar" />  
         <View style={styles.button}></View>
        <Button onPress ={this.removeValue}  title="eliminar cache data"/>  
        
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
   
   
  },
});
import React, { Component } from 'react';
import { StyleSheet, Alert,View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save, ContainerSave,Save2,ContainerSave2 } from "../../../elementos/ItemGuardar";
export default class guardar_V_quiz extends Component {
  constructor(route) {
    super(route);

    global.recibe_quiz = this.props.route.params?.envia_quiz;
    global.recibe_quiz_CP = this.props.route.params?.cantidad_preg;
    global.recibe_quiz_erroneas=this.props.route.params?.erroneas;
  }
state = {
      'save_quiz':0
   }

  saveData = (value) => {
    if (global.recibe_quiz === global.recibe_quiz_CP) {
      AsyncStorage.setItem('save_quiz',  global.recibe_quiz.toString());
      this.setState({ 'save_quiz':  global.recibe_quiz });
       Alert.alert("Mensaje","Buen trabajo", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);

        } 
       
   } 
   saveData2 = (value) => {
       Alert.alert("Mensaje","Sigue estudiando", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_caso1") }
     ]);

        } 

   
  render() {
    return (
      <View style={styles.MainContainer}>
    {  global.recibe_quiz ==  global.recibe_quiz_CP ? <ContainerSave>
                <Save onPress ={this.saveData}/>  
    </ContainerSave>:
    <ContainerSave2
        text={global.recibe_quiz}
        text2={global.recibe_quiz_erroneas}>
       
                <Save2 onPress ={this.saveData2}/>  
    </ContainerSave2>
    }
    </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});


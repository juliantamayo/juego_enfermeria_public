import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Alert,View } from 'react-native';
import { Save, ContainerSave,Save2,ContainerSave2 } from "../../../elementos/ItemGuardar";

export default class C3_guardar_v_quiz extends Component {
  constructor(route) {
    super(route);

    global.C3_recibe_quiz = this.props.route.params?.C3_envia_quiz;
    global.C3_recibe_quiz_CP = this.props.route.params?.cantidad_preg;
    global.recibe_quiz_erroneas=this.props.route.params?.erroneas;
  }
state = {
      'C3_save_quiz':0
   }

  saveData = (value) => {
    if (global.C3_recibe_quiz === global.C3_recibe_quiz_CP) {
      AsyncStorage.setItem('C3_save_quiz',  global.C3_recibe_quiz_CP.toString());
      this.setState({ 'C3_save_quiz':  global.C3_recibe_quiz_CP });
       Alert.alert("Mensaje","Buen trabajo", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);

        } 
       
   } 
   saveData2 = (value) => {
       Alert.alert("Mensaje","Sigue estudiando", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_caso3") }
     ]);

        } 

   
  render() {
    return (
      <View style={styles.MainContainer}>
    {  global.C2_recibe_quiz ==  global.C2_recibe_quiz_CP ? <ContainerSave>
                <Save onPress ={this.saveData}/>  
    </ContainerSave>:
    <ContainerSave2
        text={global.C2_recibe_quiz}
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


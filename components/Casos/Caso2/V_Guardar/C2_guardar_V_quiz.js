import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Alert,View } from 'react-native';
import { Save, ContainerSave,Save2,ContainerSave2 } from "../../../elementos/ItemGuardar";

export default class C2_guardar_v_quiz extends Component {
  constructor(route) {
    super(route);

    global.C2_recibe_quiz = this.props.route.params?.C2_envia_quiz;
    global.C2_recibe_quiz_CP = this.props.route.params?.cantidad_preg;
    global.recibe_quiz_erroneas=this.props.route.params?.erroneas;
  }
state = {
      'C2_save_quiz':0
   }

  saveData = (value) => {
    if (global.C2_recibe_quiz === global.C2_recibe_quiz_CP) {
      AsyncStorage.setItem('C2_save_quiz',  global.C2_recibe_quiz_CP.toString());
      this.setState({ 'C2_save_quiz':  global.C2_recibe_quiz_CP });
       Alert.alert("Mensaje","¡Buen trabajo!", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);

        } 
       
   } 
   saveData2 = (value) => {
       Alert.alert("Mensaje","Sigue estudiando.", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_caso2") }
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


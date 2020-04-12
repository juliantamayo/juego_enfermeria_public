import React, {Component, useState} from 'react';
import { Button, View, Text, Alert, StyleSheet } from 'react-native';

function Welcome(props) {
  let a=parseInt(props.value);

 let suma=a + 10;
  return  <Text>Hello, {suma} , {props.name}</Text>;
}

class M_juego1 extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  updateCount() {
   this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    })
     let variable= this.state.count
      Alert.alert("Clicked    "+ variable +"  times")
  }

 render(){
   // name.valor=name.valor+200;

  return (
    <View style={styles.container}>
        <View style={styles.arriba}>
        <Button style={styles.button}
        title="ir a JUEGO 1 TEORIA 1"
        onPress={() => this.props.navigation.navigate('juego1_teory1')}
         />
        <Text>SNC</Text>
      <Button
        title="ir a JUEGO 1 PARTE 1"
        onPress={() => this.props.navigation.navigate('juego1_part1')}
      />


         </View>
        <View style={styles.abajo}> 

         <Button
        title="cambiar valores"
         onPress={
          () => this._onPressButton()
        }
              />

      <Welcome value='8' name="julian"/> 


          <Button
              title= "vamooooossssssssssss"
              onPress={() => this.updateCount()}
            >
              
            </Button>



        </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'palevioletred',
    flexDirection: 'column',
  },

  arriba: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'turquoise',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  abajo: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'mediumturquoise',
  },
  button:{
     color: '#f194ff',
     borderRadius: 50,

  }

})

export default M_juego1;
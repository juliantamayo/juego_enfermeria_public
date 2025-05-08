import React, {Component} from 'react';
import {StyleSheet, Text, View,Button, ImageBackground,Image,TouchableOpacity,} from "react-native";
       import styles from './../../Style.js';


export default class result_qJ3 extends React.Component  {
state = {


    tot: this.props.route.params?.t
    
  };

  render(){

 
    return (
  
    <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
          
      <View style={styles.vBody}>
       <View style={style.parametros}>
       <Text style ={style.textResult}>RESULTADOS</Text>
       <Text style={styles.text}>✔️ Correctas: { this.props.route.params.correctas}</Text>
      <Text style={styles.text}>❌ Erróneas: { this.props.route.params.erroneas}</Text>
       </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button2}  onPress={() => this.props.navigation.navigate('M_juegos3')}>
        <Text style={styles.text}> Continuar </Text>
       </TouchableOpacity>
       </View>
    
        </ImageBackground>
  );
}


}

const style = StyleSheet.create({
  parametros: {
     height:200,
     width: 200,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#77c6c6',
     borderRadius:25,    
  },
  textResult:{
    fontSize:25,
    color: 'white',
    fontWeight: 'bold',
    textAlign : 'center',
    marginLeft: 10,
    marginRight: 10,
    margin: 5
  }
});


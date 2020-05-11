import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableOpacity,
        AsyncStorage
      } from 'react-native';
       import styles from './../../Style.js';


export default class result_qJ3 extends React.Component  {
   
  render(){
 
    return (
  
    <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
          
      <View style={styles.vBody}>
       
       <TouchableOpacity activeOpacity={0.8} style={styles.button2}  onPress={() => this.props.navigation.navigate('M_juegos3')

     }>
        <Text style={styles.text}> Continuar </Text>
       </TouchableOpacity>
       <View style={style.parametros}>
      
       <Text style={style.Text}>Experiencia: {this.props.route.params.experiencia}</Text>
       
       <Text style={style.Text}>Correctas: {this.props.route.params.correctas}</Text>
      
       <Text style={style.Text}>Erróneas: {this.props.route.params.erroneas}</Text>

       </View>
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
     backgroundColor: 'yellow',     
  },
  Text:{
    //alignItems : 'flex-start',
    textAlign : 'left',
    fontWeight: "bold",
    fontSize : 20
  }
});


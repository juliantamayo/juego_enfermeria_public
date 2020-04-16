import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableOpacity
      } from 'react-native';
       import styles from './../../Style.js';




export default function result_q ({navigation, route}) {
  // const { item } = route.params.itemId;
    return (
  
    <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
          
      <View style={styles.vBody}>
       
       <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => navigation.navigate('M_juego2')

     }>
        <Text style={styles.text}> Jugar </Text>
       </TouchableOpacity>
       <View style={style.parametros}>
      
       <Text style={styles.text}>experiencia: {route.params.experiencia}</Text>
       
       <Text style={styles.text}>correctas: {route.params.correctas}</Text>
      
       <Text style={styles.text}>erroneas: {route.params.erroneas}</Text>
       </View>
       </View>
    
        </ImageBackground>
  );
  
}

const style = StyleSheet.create({
  parametros: {
     height:200,
     width: 200,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'yellow',     
  }
});


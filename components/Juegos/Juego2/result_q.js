import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableHighlight,
        TouchableOpacity
      } from 'react-native';
       import styles from './../../Style.js';




export default function m_juego2_preguntas ({navigation, route}) {

    return (
  
    <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
          
      <View style={styles.vBody}>
       
       <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => navigation.navigate('QuizIndex',
         {
         itemId: 86,
            otherParam: 'anything you want here',
       })

     }>
        <Text style={styles.text}> Jugar </Text>
       </TouchableOpacity>


       </View>
    
        </ImageBackground>
  );
  
}


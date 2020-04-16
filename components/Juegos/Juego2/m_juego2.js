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
import { CommonActions } from '@react-navigation/native';




export default function m_juego2 ({navigation, route}) {

    return (
  
    <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
          
      <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('M_juegos')}>
               <Image style={ styles.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('Home')}>
               <Image style={ styles.image } source={require("../../../assets/images/buttonteory.png")} />
      </TouchableOpacity>
      </View>

      </View>


      <View style={styles.vBody}>
       
       <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => navigation.navigate('QuizIndex',
         {
        //aqui van los parametros
       })

     }>
        <Text style={styles.text}> Jugar </Text>
       </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}> Repasar </Text>
       </TouchableOpacity>

       </View>
    
        </ImageBackground>
  );
  
}


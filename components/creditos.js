import React, {Component, useState  } from 'react';
import {Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableOpacity,
        StyleSheet  ,
         Dimensions 
      } from 'react-native';
  import styles from './Style.js';
 // import im from '../assets/images/background.png';
 import { CommonActions } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

export default function creditos ({navigation, route}) {

 
    return (
   //  <Imagebackground style={styles.container}>
    <ImageBackground source={require("../assets/images/background.png")}style={styles.container}>


       <View style={styles.header}>   
      <View style={styles.headerIzquierda}>

      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
         onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Creditos',
                },
                { name: 'Menu' },
              ],
            })
          )
        }>


               <Image style={ styles.image } source={require("../assets/images/button-back.png")} />
      </TouchableOpacity>

      </View>
       <View style={styles.headerCentro}>
       

      </View>


<View style={styles.headerDerecha}>    
  <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Menu',
                },
                { name: 'M_juegos' },
              ],
            })
          )
        }>
               <Image style={ styles.image } source={require("../assets/images/buttonMinijuegos.png")} />
      </TouchableOpacity>
      
       <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Menu',
             
                },
                { name: 'pruebaT' },
              ],
            })
          )
        }>
               <Image style={ styles.image } source={require("../assets/images/buttonteory.png")} />
      </TouchableOpacity>
      </View>

      </View>

      <View style={escudo.cuerpo}>

         <View style={escudo.opacidad}>
           <Image style={ escudo.escudo} source={require("../assets/images/escudo.png")} resizeMode='contain' />

        </View>


         <Text style={escudo.textbold}>      Diseñado y Desarrollado por:      </Text>
         <Text style={escudo.textnormal}>      Julian D. Tamayo & Karla N. Cárdenas      </Text>

         <Text style={escudo.textbold}>      Ilustraciones:      </Text>
         <Text style={escudo.textnormal}>      Karla N. Cárdenas      </Text>
 
         <Text style={escudo.textbold}>      Asesor Metodológico:      </Text>
         <Text style={escudo.textnormal}>      Ing. Ana Esperanza Merchán      </Text>

        <Text style={escudo.textbold}>      Asesor de Contenidos:      </Text>
         <Text style={escudo.textnormal}>      Enf. Adriana Hernández       </Text>

        <Text style={escudo.textbold}>      Todos los Derechos Reservados      </Text>





          
            
       </View>
    
        </ImageBackground>
  );
  
}


const escudo = StyleSheet.create({
  escudo: {
  height: Dimensions.get('window').height/4,
  width: Dimensions.get('window').width/4

  },
  opacidad: {
    backgroundColor: "rgba(255, 255, 255, 0.90)" ,
    borderRadius: 20,
    alignItems: 'center'
  },
     cuerpo: {
      flex:1,
      alignItems: 'center',
     },

      textnormal: {
        backgroundColor: "rgba(255, 255, 255, 0.95)" ,
    fontSize: 18,
    //color: "#fff",

    textAlign: 'center'
  },     

   textbold: {
     backgroundColor: "rgba(255, 255, 255, 0.90)" ,
    fontSize: 18,
    //color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center'
  }


})
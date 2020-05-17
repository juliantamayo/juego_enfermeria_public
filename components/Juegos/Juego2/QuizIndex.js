import React, {Component} from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image  } from "react-native";


import {Mj2questions,Mj2questions2} from "../../data/J2SNA";
import {Mj2SNC_questions,Mj2SNC_questions2,Mj2SNC_questions3} from "../../data/J2SNC";
import {Mj2SNP_questions,Mj2SNP_questions2,Mj2SNP_questions3} from "../../data/J2SNP";


import { RowItem } from "../../elementos/RowItem";

import styles from './../../Style.js';

export default function QuixIndex ({navigation, route}) {

 var listadopPJ2_SNA = new Array(Mj2questions,Mj2questions2);
 var listadopPJ2_SNC = new Array(Mj2SNC_questions,Mj2SNC_questions2,Mj2SNC_questions3);
 var listadopPJ2_SNP = new Array(Mj2SNP_questions,Mj2SNP_questions2,Mj2SNP_questions3);

    return (
  <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
  
  <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('M_juego2')}>
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

    <ScrollView  style={styles.margen}>
    <StatusBar barStyle="dark-content" />
    <RowItem   
      name="Preguntados S.N.C"
      color="#F3DD11"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Preguntados S.N.C",
          questions:listadopPJ2_SNC[Math.floor(Math.random()*listadopPJ2_SNC.length)],
          color: "#18A196"
        })
      }
    />
    <RowItem
      name="Preguntados S.N.P"
      color="#FBBD20"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Preguntados S.N.P",
          questions: listadopPJ2_SNP[Math.floor(Math.random()*listadopPJ2_SNP.length)],
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Preguntados S.N.A"
      color="#F3DD11"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Preguntados S.N.A",
          questions:listadopPJ2_SNA[Math.floor(Math.random()*listadopPJ2_SNA.length)],
          color: "#49475B"
        })
      }
    />
  </ScrollView>

  </ImageBackground>
 );
  
}

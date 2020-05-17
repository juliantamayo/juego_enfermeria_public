import React, {Component} from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image  } from "react-native";

import J2SNPQuestions from "../../data/J2SNP";
import J2SNCQuestions from "../../data/J2SNC";
import J2SNAQuestions from "../../data/J2SNA";

import { RowItem } from "../../elementos/RowItem";

import styles from './../../Style.js';

export default ({ navigation, route }) => (
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
          questions: J2SNPQuestions,
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
          questions: J2SNCQuestions,
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
          questions: J2SNAQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>

  </ImageBackground>
);

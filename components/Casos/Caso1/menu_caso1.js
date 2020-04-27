import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text } from 'react-native';

import styles from './../../Style.js';
import spaceQuestions from "../../data/space";
import westernsQuestions from "../../data/westerns";
import computerQuestions from "../../data/computers";
import { RowItem } from "../../elementos/RowItem";

export default function menu_caso1({navigation, route}) {
  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
  
  <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('Menu')}>
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
      name="Escena 1"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Qué tanto sabes?",
          questions: spaceQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Qué tanto sabes?"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Qué tanto sabes?",
          questions: westernsQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Qué tanto sabes?"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Que tanto sabes?",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
    </ScrollView>

  </ImageBackground>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'stretch',
   
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 8,
  },
  text: {
    textAlign : 'center',
    fontSize: 20,
  },
  button: {
    backgroundColor: "rgba(3, 33, 0, 0.47)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "66%",
    height :'30%',
    margin: 20,
    marginLeft : 60,
   
  },
  viewScroll:{
    flex : 1,
    backgroundColor: 'red',
    alignItems: "center",
    width: "100%",
    height :'100%',
  }
});
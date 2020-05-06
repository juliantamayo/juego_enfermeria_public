import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage } from 'react-native';

import styles from './../../Style.js';
import Escena1Dialog from "../../data/C2_data/C2_escena1dialog";
import Escena2Dialog from "../../data/escena2dialog";
import westernsQuestions from "../../data/westerns";
import computerQuestions from "../../data/computers";
import { RowItem } from "../../elementos/RowItem";

export default class menu_caso2 extends React.Component {


    state ={

      isVisible:false,
      isVisible2:false,
      val:this.props.route.params?.activeQuestion,
      'name': '',
       hola:this.props.route.params?.ex,
       'nombre':''
    };
   
 componentDidMount = () => AsyncStorage.getItem('nombre').then((value) => this.setState({ 'nombre': value }))

render() {

  

  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
   <View style={style.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={styles.margen2}></View>
    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('M_casos')}>
               <Image style={ styles.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Home')}>
               <Image style={ styles.image } source={require("../../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>
     
      </View>
            
     <RowItem   
      name="Introducción al Caso"
      color="#f9e67a"
      onPress={() =>
        this.props.navigation.navigate("C2_Escena1", {
          title: "C2_Escena1",
          questions: Escena1Dialog,
          color: "#36b1f0"
        })
      }
    />
     { this.state.nombre == '2'? 
    <RowItem
      name="Preguntas a Paciente"
      color="#f9a94b"
      onPress={() =>
        this.props.navigation.navigate("C2_Escena2", {
          title: "Preguntas a Paciente",
          color: "#799496"
        })
      }
    />
    : null }
    <RowItem
      name="Pruebas de valoración"
       color="#f9e67a"
      onPress={() =>
        this.props.navigation.navigate("pruebaT",{ex:'2'})
      }
    />
    <RowItem
      name="Valoración"
      color="#f9a94b"
      onPress={() =>
        this.props.navigation.navigate("Variables",{ex:'2'})
      }
    />
     <RowItem
      name="Quiz"
      color="#f9e67a"
      onPress={() =>
        this.props.navigation.navigate("Variables",{ex:'2'})
      }
    />
    <RowItem
      name="Variables"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("Variables",{ex:'2'})
      }
    />
    </ScrollView>
  </View>
  </ImageBackground>
  );
}
}


const style = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems : 'stretch',
    width: "100%",
    height :'100%',
   
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
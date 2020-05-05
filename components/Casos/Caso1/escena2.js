import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage } from 'react-native';

import styles from './../../Style.js';
import Escena1Dialog from "../../data/escena1dialog";
import Escena2Dialog from "../../data/escena2dialog";
import C1_pregunta1 from "../../data/C1_preguntas/C1_pregunta1";
import C1_pregunta2 from "../../data/C1_preguntas/C1_pregunta2_dialog";
import C1_pregunta3 from "../../data/C1_preguntas/C1_pregunta3_dialog";
import C1_pregunta4 from "../../data/C1_preguntas/C1_pregunta4_dialog";
import C1_pregunta5 from "../../data/C1_preguntas/C1_pregunta5_dialog";
import C1_pregunta6 from "../../data/C1_preguntas/C1_pregunta6_dialog";
import C1_pregunta7 from "../../data/C1_preguntas/C1_pregunta7_dialog";
import { RowItem } from "../../elementos/RowItem";

export default class menu_caso1 extends React.Component {

  

    state ={

      isVisible:false,
      isVisible2:false,
      val:this.props.route.params?.activeQuestion,
      
    };
    
 

render() {

  const userId = this.props.route.params?.activeQuestion;

  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
   <View style={style.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={styles.margen2}></View>
    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('M_caso1')}>
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
      name="1. ¿Cómo se encuentra?"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("DialogosC1", {
          title: "1. ¿Cómo se encuentra?1",
          questions: C1_pregunta1,
          color: "#36b1f0"
        })
      }
    />

    <RowItem
      name="2. ¿Sabe usted en qué lugar se encuentra?"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C1_Preg2_dialogo", {
          title: "¿En qué lugar se encuentra?",
          questions: C1_pregunta2,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="3. ¿Qué elementos de los que observa aquí en su habitación los encuentra también en la sala de su hogar?"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C1_Preg3_dialogo", {
          title: "C1_pregunta3",
          questions: C1_pregunta3,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="4. ¿Sabe cuánto tendría ahorrado en total?"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C1_Preg4_dialogo", {
          title: "Escena2",
          questions: C1_pregunta4,
          color: "#799496"
        })
      }
    />
   <RowItem
      name="5. ¿Cuáles son los nombres de sus hijas desde la mayor a la menor?"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C1_Preg5_dialogo", {
          title: "Escena2",
          questions: C1_pregunta5,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="6. ¿Podria por favor levantar sus brazos?"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C1_Preg6_dialogo", {
          title: "Escena2",
          questions: C1_pregunta6,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="7. Puede cerrar los ojos y me puede indicar hacia ¿qué dirección le estoy movilizando su brazo derecho e izquierdo?"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C1_Preg7_dialogo", {
          title: "Escena2",
          questions: C1_pregunta7,
          color: "#799496"
        })
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
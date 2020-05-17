import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage } from 'react-native';

import styles from './../../Style.js';

import D_C3_pregunta1_dialog from "../../data/C3_data/C3_preguntas/D_C3_pregunta1_dialog";
import D_C3_pregunta2_dialog from "../../data/C3_data/C3_preguntas/D_C3_pregunta2_dialog";
import D_C3_pregunta3_dialog from "../../data/C3_data/C3_preguntas/D_C3_pregunta3_dialog";
import D_C3_pregunta4_dialog from "../../data/C3_data/C3_preguntas/D_C3_pregunta4_dialog";
import { Modal_C1_escena2 } from "../../elementos/ModalsTutorial";


import { RowItem } from "../../elementos/RowItem";

export default class escena2 extends React.Component {

  

    state ={

      isVisible:false,
      isVisible2:false,
      modalVisible: false ,
      val:this.props.route.params?.activeQuestion,
      
    };
    
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

render() {

  const userId = this.props.route.params?.activeQuestion;
   const { modalVisible } = this.state;
  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
      <Modal_C1_escena2
      
       text={modalVisible}
       onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
      />


   <View style={style.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={styles.margen2}></View>
    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('M_caso3')}>
               <Image style={ styles.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
        onPress={() => {
                        this.setModalVisible(true);
                      }}>
               <Image style={ styles.image } source={require("../../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>
     
      </View>
    

 

     <RowItem   
      name="1. ¿cómo es el dolor que siente?"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C3_Preg1_dialogo", {
          title: "Caso 3. Pregunta 1",
          questions: D_C3_pregunta1_dialog,
          color: "#36b1f0"
        })
      }
    />

    <RowItem
      name="2. sabe usted ¿cómo se llama la zona del abdomen que le duele? "
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C3_Preg2_dialogo", {
          title: "Caso 3. Pregunta 2",
          questions: D_C3_pregunta2_dialog,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="3.¿esta es su postura todo el tiempo? "
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C3_Preg3_dialogo", {
          title: "Caso 3. Pregunta 3",
          questions: D_C3_pregunta3_dialog,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="4. ¿en qué zona específicamente presenta el dolor?"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C3_Preg4_dialogo", {
          title: "Caso 3. Pregunta 4",
          questions: D_C3_pregunta4_dialog,
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
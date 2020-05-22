import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage } from 'react-native';

import styles from './../../Style.js';
import Escena1Dialog from "../../data/C2_data/C2_escena1dialog";
import Escena2Dialog from "../../data/escena2dialog";
import D_C2_Quiz from "../../data/C2_data/C2_Quiz/D_C2_Quiz";
import { RowItem } from "../../elementos/RowItem";
import { Modal_MenuCaso1} from "../../elementos/ModalsTutorial";

export default class menu_caso2 extends React.Component {



    state ={
      modalVisible: false,
    };

componentDidMount= () => {
    let keys2 = ['save_pregPcte1', 'save_pregPcte2','save_pregPcte3','save_pregPcte4','save_pregPcte5','C2_intro','save_pregPcte7','C2_intro',
     'save_pruValo1', 'save_pruValo2','save_pruValo3','save_pruValo4','save_pruValo5','save_pruValo6','save_pruValo7','save_valo','save_quiz'
    ];
    AsyncStorage.multiGet(keys2).then(result => {
      this.setState({
        'save_pregPcte1': result[0][1],
        'save_pregPcte2': result[1][1],
        'save_pregPcte3': result[2][1],
        'save_pregPcte4': result[3][1],
        'save_pregPcte5': result[4][1],
        'C2_intro'      : result[5][1],
        'save_pregPcte7': result[6][1],
        'C2_intro'      : result[7][1],
        'save_pruValo1':  result[8][1],
        'save_pruValo2':  result[9][1],
        'save_pruValo3':  result[10][1],
        'save_pruValo4':  result[11][1],
        'save_pruValo5':  result[12][1],
        'save_pruValo6':  result[13][1],
        'save_pruValo7':  result[14][1],
        'save_valoracion':  result[15][1],
        'save_quiz':      result[16][1],
      });
    });
  };

setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
   };

render() {

    const { modalVisible } = this.state;
    const C2_Esc1= parseInt(this.state.C2_intro);
    const C2_Esc2=parseFloat(this.state.save_pregPcte1)+parseFloat(this.state.save_pregPcte2)+parseFloat(this.state.save_pregPcte3)+parseFloat(this.state.save_pregPcte4)+parseFloat(this.state.save_pregPcte5)+parseFloat(this.state.save_pregPcte6)+parseFloat(this.state.save_pregPcte7);
    const C2_Esc3=parseFloat(this.state.save_pruValo1)+parseFloat(this.state.save_pruValo2)+parseFloat(this.state.save_pruValo3)+parseFloat(this.state.save_pruValo4)+parseFloat(this.state.save_pruValo5)+parseFloat(this.state.save_pruValo6)+parseFloat(this.state.save_pruValo7);
    const C2_Esc4=parseInt(this.state.save_valoracion);
    const C2_Esc5= parseInt(this.state.save_quiz);

  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
    
   <Modal_MenuCaso1
      
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
       onPress={() => this.props.navigation.navigate('M_casos')}>
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
     { C2_Esc1 == 2? 
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
        this.props.navigation.navigate("C2_Escena3",{ex:'2'})
      }
    />
    <RowItem
      name="Valoración"
      color="#f9a94b"
      onPress={() =>
        this.props.navigation.navigate("C2_Escena3",{ex:'2'})
      }
    />
     <RowItem
      name="Quiz"
      color="#f9e67a"
      onPress={() =>
        this.props.navigation.navigate("C2_Escena5",{ex:'2',
        title: "Caso 2. Quiz",
          questions: D_C2_Quiz,
          color: "#20b2aa"
      })
      }
    />
    <RowItem
      name="Proceso de atención de Enfermeria"
      color="#f9a94b"
      onPress={() =>
        this.props.navigation.navigate("C2_Escena6",{ex:'2'})
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
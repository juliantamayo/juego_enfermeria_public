import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage } from 'react-native';

import styles from './../../Style.js';
import Escena1Dialog from "../../data/C2_data/C2_escena1dialog";
import D_C2_Quiz from "../../data/C2_data/C2_Quiz/D_C2_Quiz";
import { RowItem } from "../../elementos/RowItem";
import { Modal_MenuCaso1} from "../../elementos/ModalsTutorial";

export default class menu_caso2 extends React.Component {



    state ={
      modalVisible: false,
    };

componentDidMount= () => {
    let keys2 = ['C2_save_pregPcte1', 'C2_save_pregPcte2','C2_save_pregPcte3','C2_save_pregPcte4','C2_save_pregPcte5','C2_intro','C2_save_pruValo1','C2_save_pruValo2',
     'C2_save_pruValo3', 'C2_save_pruValo4','C2_save_pruValo5','C2_save_pruValo6','C2_save_pruValo7','C2_save_pruValo8','C2_save_pruValo9','C2_save_pruValo10',
    'C2_save_pruValo11','C2_save_pruValo12','C2_save_pruValo13','C2_save_pruValo14','C2_save_pruValo15','C2_save_valoracion','C2_save_quiz'
    ];
    AsyncStorage.multiGet(keys2).then(result => {
      this.setState({
        'C2_save_pregPcte1': result[0][1],
        'C2_save_pregPcte2': result[1][1],
        'C2_save_pregPcte3': result[2][1],
        'C2_save_pregPcte4': result[3][1],
        'C2_save_pregPcte5': result[4][1],
        'C2_intro'         : result[5][1],
        'C2_save_pruValo1' : result[6][1],
        'C2_save_pruValo2' : result[7][1],
        'C2_save_pruValo3' : result[8][1],
        'C2_save_pruValo4' : result[9][1],
        'C2_save_pruValo5' : result[10][1],
        'C2_save_pruValo6' : result[11][1],
        'C2_save_pruValo7' : result[12][1],
        'C2_save_pruValo8' : result[13][1],
        'C2_save_pruValo9' : result[14][1],
        'C2_save_pruValo10': result[15][1],
        'C2_save_pruValo11': result[16][1],
        'C2_save_pruValo12': result[17][1],
        'C2_save_pruValo13': result[18][1],
        'C2_save_pruValo14': result[19][1],
        'C2_save_pruValo15': result[20][1],
        'C2_save_valoracion':result[21][1],
        'C2_save_quiz':      result[22][1],
      });
    });
  };

setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
   };

render() {

    const { modalVisible } = this.state;
    const C2_Esc1= parseInt(this.state.C2_intro);
    const C2_Esc2=parseInt(this.state.C2_save_pregPcte1)+parseInt(this.state.C2_save_pregPcte2)+parseInt(this.state.C2_save_pregPcte3)+parseInt(this.state.C2_save_pregPcte4)+parseInt(this.state.C2_save_pregPcte5);
    const C2_Esc3=parseInt(this.state.C2_save_pruValo1)+parseInt(this.state.C2_save_pruValo2)+parseInt(this.state.C2_save_pruValo3)+parseInt(this.state.C2_save_pruValo4)+parseInt(this.state.C2_save_pruValo5)+parseInt(this.state.C2_save_pruValo6)+parseInt(this.state.C2_save_pruValo7)
    +parseInt(this.state.C2_save_pruValo8)+parseInt(this.state.C2_save_pruValo9)+parseFloat(this.state.C2_save_pruValo10)
    +parseInt(this.state.C2_save_pruValo11)+parseInt(this.state.C2_save_pruValo12)+parseInt(this.state.C2_save_pruValo13)+parseInt(this.state.C2_save_pruValo14)+parseInt(this.state.C2_save_pruValo15);
    
    const C2_Esc4=parseInt(this.state.C2_save_valoracion);
    const C2_Esc5= parseInt(this.state.C2_save_quiz);

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
    { C2_Esc2 == 5? 
    <RowItem
      name="Pruebas de Valoración"
       color="#f9e67a"
      onPress={() =>
        this.props.navigation.navigate("C2_Escena3",{ex:'2'})
      }
    />:
    null }
    { C2_Esc3 == 15?
    <RowItem
      name="Valoración"
      color="#f9a94b"
      onPress={() =>
        this.props.navigation.navigate("C2_Escena4")
      }
    />:
    null}
    { C2_Esc4 == 1?
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
    />:
    null}
    { C2_Esc5 == 7?
    <RowItem
      name="Proceso de Atención de Enfermeria"
      color="#f9a94b"
      onPress={() =>
        this.props.navigation.navigate("C2_Escena6",{ex:'2'})
      }
    />:
    null}
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
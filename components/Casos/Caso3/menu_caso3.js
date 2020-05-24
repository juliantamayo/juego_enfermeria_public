import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage } from 'react-native';

import styles from './../../Style.js';
import { RowItem } from "../../elementos/RowItem";
import Escena3Dialog from "../../data/C3_data/C3_escena1dialog";
import D_C3_Quiz from "../../data/C3_data/C3_Quiz/D_C3_Quiz";
import { Modal_MenuCaso1} from "../../elementos/ModalsTutorial";
export default class menu_caso3 extends React.Component {


    state ={
            modalVisible: false,
    };

    componentDidMount= () => {
    let keys = ['C3_save_pregPcte1', 'C3_save_pregPcte2','C3_save_pregPcte3','C3_save_pregPcte4','C3_nombre',
     'C3_save_pruValo1', 'C3_save_pruValo2','C3_save_pruValo3','C3_save_pruValo4','C3_save_pruValo5','C3_save_valoracion','C3_save_quiz'
    ];
    AsyncStorage.multiGet(keys).then(result => {
      this.setState({
        'C3_save_pregPcte1': result[0][1],
        'C3_save_pregPcte2': result[1][1],
        'C3_save_pregPcte3': result[2][1],
        'C3_save_pregPcte4': result[3][1],
        'C3_nombre'        : result[4][1],
        'C3_save_pruValo1' : result[5][1],
        'C3_save_pruValo2' : result[6][1],
        'C3_save_pruValo3' : result[7][1],
        'C3_save_pruValo4' : result[8][1],
        'C3_save_pruValo5' : result[9][1],
        'C3_save_valoracion':  result[10][1],
        'C3_save_quiz':      result[11][1],
      });
    });
  };
   
 setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
   };

render() {
      const { modalVisible } = this.state;
      const C3_Esc1= parseInt(this.state.C3_nombre);
      const C3_Esc2=parseInt(this.state.C3_save_pregPcte1)+parseInt(this.state.C3_save_pregPcte2)+parseInt(this.state.C3_save_pregPcte3)+parseInt(this.state.C3_save_pregPcte4);
      const C3_Esc3=parseInt(this.state.C3_save_pruValo1)+parseInt(this.state.C3_save_pruValo2)+parseInt(this.state.C3_save_pruValo3)+parseInt(this.state.C3_save_pruValo4)+parseInt(this.state.C3_save_pruValo5);
      const C3_Esc4=parseInt(this.state.C3_save_valoracion);
      const C3_Esc5= parseInt(this.state.C3_save_quiz);
  
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
        this.props.navigation.navigate("C3_Escena1", {
          title: "Caso 3. Introducción al Caso",
          questions: Escena3Dialog,
          color: "#36b1f0"
        })
      }
    />
  { C3_Esc1 >= 2?
    <RowItem
      name="Preguntas a Paciente"
      color="#f9a94b"
      onPress={() =>
        this.props.navigation.navigate("C3_Escena2", {
          title: "Caso 3. Preguntas Paciente",
          color: "#799496"
        })
      }
    />:
    null}
 {C3_Esc2 >= 4?
    <RowItem
      name="Pruebas de valoración"
       color="#f9e67a"
      onPress={() =>
        this.props.navigation.navigate("C3_Escena3")
      }
    />:
    null}
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
        this.props.navigation.navigate("C3_Escena5",{ex:'2',
        title: "Caso 3. Quiz",
          questions: D_C3_Quiz,
          color: "#20b2aa"
      })
      }
    />

    <RowItem
      name="Proceso de atención de Enfermeria"
      color="#f9a94b"
      onPress={() =>
        this.props.navigation.navigate("C3_Escena6",{ex:'2'})
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
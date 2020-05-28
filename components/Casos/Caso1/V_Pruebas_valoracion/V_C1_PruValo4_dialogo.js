import React from "react";
import {AsyncStorage, View, StyleSheet, StatusBar, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity} from "react-native";

import { Button, ButtonContainer } from "../../../elementos/ButtonEscene1";
import { ModalHistorial,  Modal_C1_Pru_valoracion4_procedimiento, Modal_C1_Pru_valoracion4_HN  } from "../../../elementos/Modals";
import style from '../../../Style.js';
import D_C1_Pru_Valoracion4_pregunta from "../../../data/C1_data/C1_Pru_valoracion/D_C1_Pru_Valoracion4_pregunta";
import { CommonActions } from '@react-navigation/native';

import { Modal_Pruebas } from "../../../elementos/ModalsTutorial";
import  styles  from "../../../Style_dialog.js";

const mult =5;




class V_C1_PruValo4_dialogo extends React.Component {
   
  state = {
    modalVisible: false,
      modalVisible2: false,
    modalVisibleProdedimiento: false,
    modalVisibleHN: false,
    correctCount: 0, 
    //totalCount: this.props.navigation.getParam("questions", []).length,
      totalCount: this.props.route.params?.questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false
      
  };

  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
       // return this.props.navigation.popToTop();
        return this.props.navigation.navigate("V_C1_PruValo4_pregunta", {activeQuestion: 1, 
          title: "Caso 1. Prueba de Valoración 4",
          questions: D_C1_Pru_Valoracion4_pregunta,
          color: "#36b1f0"
        });
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  setModalVisible2 = (visible2) => {
    this.setState({ modalVisible2: visible2 });
  }
   setModalVisibleProcedimiento = (visible) => {
    this.setState({ modalVisibleProdedimiento: visible });
  }

  setModalVisibleHN= (visible) => {
    this.setState({modalVisibleHN: visible });
  }

  render() {

 
    const { modalVisible, modalVisible2, modalVisibleProdedimiento, modalVisibleHN } = this.state;
    const questions = this.props.route.params?.questions ?? [];
    const question = questions[this.state.activeQuestionIndex];
  
    return (
    <ImageBackground source={question.image} style={style.container} resizeMode='contain'>

    <ModalHistorial
      
       text={modalVisible}
       onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
      />
        <Modal_Pruebas
      
       text={modalVisible2}
       onPress={() => {
                  this.setModalVisible2(!modalVisible2);
                }}
      />
       <Modal_C1_Pru_valoracion4_procedimiento
      
       text={modalVisibleProdedimiento}
       onPress={() => {
                  this.setModalVisibleProcedimiento(!modalVisibleProdedimiento);
                }}
      />

        <Modal_C1_Pru_valoracion4_HN
      
       text={modalVisibleHN}
       onPress={() => {
                  this.setModalVisibleHN(!modalVisibleHN);
                }}
      />

      <View
        style={
          styles.container
          
        }
      >

     <View style={style.header}>   
      <View style={style.headerIzquierda}>
     <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Escena3')}>
               <Image style={ style.image } source={require("../../../../assets/images/button-back.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisible2(true);
                      }}>
             <Image style={ style.image } source={require("../../../../assets/images/ayuda.png")} />
       </TouchableOpacity>
     </View>


<View style={style.headerDerecha}> 

           <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisible(true);
                      }}>
                           <Image style={ style.image } source={require("../../../../assets/images/historial.png")} />
               </TouchableOpacity>  

              <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisibleProcedimiento(true);
                      }}>
                           <Image style={ style.image } source={require("../../../../assets/images/procedimiento.png")} />
               </TouchableOpacity>

               <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisibleHN(true);
                      }}>
                           <Image style={ style.image } source={require("../../../../assets/images/hallazgos_normales.png")} />
               </TouchableOpacity>
      
      
      </View>
      </View>
 
      </View>
       
       <View style={styles.containerdialog}>

    
        <Text style={styles.text2}>{question.personaje}</Text>
        <ButtonContainer>
         
                <Button
                  key={question.Text}
                  text={question.Text}
                  onPress={() => {
            setTimeout(() => this.nextQuestion(), 50);
      }}
                />
              
            </ButtonContainer>
       </View>

      </ImageBackground>
    );
  }
}

export default V_C1_PruValo4_dialogo;

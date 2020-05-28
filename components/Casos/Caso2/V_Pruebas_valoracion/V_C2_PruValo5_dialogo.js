import React from "react";
import {AsyncStorage, View, StyleSheet, ScrollView, StatusBar, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity} from "react-native";

import { Button, ButtonContainer } from "../../../elementos/ButtonEscene1";
import { C2_ModalHistorial, Modal_C2_Pru_valoracion5_procedimiento, Modal_C2_Pru_valoracion5_HN } from "../../../elementos/Modals";
import style from '../../../Style.js';
import D_C2_Pru_Valoracion5_pregunta from "../../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion5_pregunta";
import { CommonActions } from '@react-navigation/native';
import  styles  from "../../../Style_dialog.js";
import { Modal_Pruebas } from "../../../elementos/ModalsTutorial";
const mult =5;




class V_C2_PruValo5_dialogo extends React.Component {
   
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
        return this.props.navigation.navigate("V_C2_PruValo5_pregunta", {activeQuestion: 1, 
          title: "Caso 2. Prueba de Valoración 5",
          questions: D_C2_Pru_Valoracion5_pregunta,
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

    <C2_ModalHistorial
      
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
      <Modal_C2_Pru_valoracion5_procedimiento
      
       text={modalVisibleProdedimiento}
       onPress={() => {
                  this.setModalVisibleProcedimiento(!modalVisibleProdedimiento);
                }}
      />

        <Modal_C2_Pru_valoracion5_HN
      
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
       onPress={() => this.props.navigation.navigate('C2_Escena3')}>
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

    
         {question.personaje=="ENFERMERA"?
        <Text style={styles.text2}>{question.personaje}</Text>:
        <Text style={styles.text4}>{question.personaje}</Text>}
         <ScrollView>
        <ButtonContainer>
         
                <Button
                  key={question.Text}
                  text={question.Text}
                  onPress={() => {
            setTimeout(() => this.nextQuestion(), 50);
      }}
                />
              
            </ButtonContainer>
             </ScrollView>
       </View>

      </ImageBackground>
    );
  }
}

export default V_C2_PruValo5_dialogo;

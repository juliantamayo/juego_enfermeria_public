import React from "react";
import {AsyncStorage,ScrollView, Modal, View, StyleSheet, Dimensions, StatusBar, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TouchableHighlight, Alert} from "react-native";
import { Button, ButtonContainer } from "../../../elementos/ButtonEscene1";
import style from '../../../Style.js';
import C1_pregunta4_pregunta from "../../../data/C1_preguntas/C1_pregunta4_pregunta";
import { CommonActions } from '@react-navigation/native';
import  styles  from "../../../Style_dialog.js";
import { ModalHistorial } from "../../../elementos/Modals";
import { Modal_Preguntas } from "../../../elementos/ModalsTutorial";

const mult =5;


class V_C1_Preg4_dialogo extends React.Component {
   
  state = {
    modalVisible: false,
     modalVisible2: false,
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
        return this.props.navigation.navigate("V_C1_Preg4_pregunta", {activeQuestion: 1, 
          title: "Caso 1. Pregunta 4",
          questions: C1_pregunta4_pregunta,
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
  };
   setModalVisible2 = (visible2) => {
    this.setState({ modalVisible2: visible2 });
  }

  render() {

 
    const {modalVisible, modalVisible2} = this.state;
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
         <Modal_Preguntas
      
       text={modalVisible2}
       onPress={() => {
                  this.setModalVisible2(!modalVisible2);
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
                 onPress={() => this.props.navigation.navigate('Escena2')}>
                         <Image style={ style.image } source={require("../../../../assets/images/button-back.png")} />
                </TouchableOpacity>
     
</View>


<View style={style.headerDerecha}> 

              <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                  onPress={() => {
                        this.setModalVisible2(true);
                      }}>
               <Image style={ style.image } source={require("../../../../assets/images/ayuda.png")} />
           </TouchableOpacity>

              <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisible(true);
                      }}>
                           <Image style={ style.image } source={require("../../../../assets/images/historial.png")} />
               </TouchableOpacity>
      
      
      </View>
      </View>
 
      </View>
       
       <View style={styles.containerdialog}>

    
        {question.personaje=="ENFERMERA"?
        <Text style={styles.text2}>{question.personaje}</Text>:
        <Text style={styles.text3}>{question.personaje}</Text>}
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

export default V_C1_Preg4_dialogo;

import React from "react";
import {AsyncStorage, View, StyleSheet, StatusBar, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity} from "react-native";

import { Button, ButtonContainer } from "../../../elementos/ButtonEscene1";
import { C3_ModalHistorial,  Modal_C3_Pru_valoracion3_procedimiento, Modal_C3_Pru_valoracion3_HN } from "../../../elementos/Modals";
import style from '../../../Style.js';
import D_C3_Pru_Valoracion3_pregunta from "../../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion3_pregunta";
import { CommonActions } from '@react-navigation/native';

 
const styles = StyleSheet.create({
  container: {
   // backgroundColor: "#36B1F0",
    flex: 1,

  },
  text: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  text2: {
   marginLeft : 5,
   //paddingVertical: 8,
   // borderWidth: 4,
    borderColor: "#20232a",
   // borderRadius: 6,
    backgroundColor: "red",
    color: "#fff",
    textAlign: "left",
    fontSize: 17,
    fontWeight: "bold"
  },
  containerdialog:{
   flex: 0.5,
  backgroundColor: "rgba(0, 185, 188, 0.37)",
  width: '100%',
  height: '100%'
  }
   
});

const mult =5;




class V_C3_PruValo3_dialogo extends React.Component {
   
  state = {
    modalVisible: false,
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
        return this.props.navigation.navigate("V_C3_PruValo3_pregunta", {activeQuestion: 1, 
          title: "2 PrubValu3",
          questions: D_C3_Pru_Valoracion3_pregunta,
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
   setModalVisibleProcedimiento = (visible) => {
    this.setState({ modalVisibleProdedimiento: visible });
  }

  setModalVisibleHN= (visible) => {
    this.setState({modalVisibleHN: visible });
  }

  render() {

 
    const { modalVisible, modalVisibleProdedimiento, modalVisibleHN } = this.state;
    const questions = this.props.route.params?.questions ?? [];
    const question = questions[this.state.activeQuestionIndex];
  
    return (
    <ImageBackground source={question.image} style={style.container} resizeMode='contain'>

    <C3_ModalHistorial
      
       text={modalVisible}
       onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
      />

       <Modal_C3_Pru_valoracion3_procedimiento
      
       text={modalVisibleProdedimiento}
       onPress={() => {
                  this.setModalVisibleProcedimiento(!modalVisibleProdedimiento);
                }}
      />

        <Modal_C3_Pru_valoracion3_HN
      
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
       onPress={() => this.props.navigation.navigate('C3_Escena3')}>
               <Image style={ style.image } source={require("../../../../assets/images/button-back.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisible(true);
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

export default V_C3_PruValo3_dialogo;

import React from "react";
import {AsyncStorage, View, StyleSheet, StatusBar, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity} from "react-native";

import { Button, ButtonContainer } from "../../../elementos/ButtonEscene1";
import { ModalHistorial } from "../../../elementos/Modals";
import style from '../../../Style.js';
import D_C1_Pru_Valoracion6_pregunta from "../../../data/C1_data/C1_Pru_valoracion/D_C1_Pru_Valoracion6_pregunta";
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




class V_C1_PruValo6_dialogo extends React.Component {
   
  state = {
    modalVisible: false,
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
        return this.props.navigation.navigate("V_C1_PruValo6_pregunta", {activeQuestion: 1, 
          title: "2 PrubValu6",
          questions: D_C1_Pru_Valoracion6_pregunta,
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

  render() {

 
    const { modalVisible } = this.state;
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
                        this.setModalVisible(true);
                      }}>
                           <Image style={ style.image } source={require("../../../../assets/images/procedimiento.png")} />
               </TouchableOpacity>

               <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisible(true);
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

export default V_C1_PruValo6_dialogo;

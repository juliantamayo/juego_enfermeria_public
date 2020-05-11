import React from "react";
import {AsyncStorage, Modal, View, StyleSheet, Dimensions, StatusBar, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TouchableHighlight, Alert} from "react-native";

import { Button, ButtonContainer } from "../../elementos/ButtonEscene1";
import { ModalHistorial } from "../../elementos/Modals";
import { Modal_C1_escena1 } from "../../elementos/ModalsTutorial";
import style from './../../Style.js';
import Escena2Dialog from "../../data/escena2dialog";
import { CommonActions } from '@react-navigation/native';
const { width, height } = Dimensions.get('window')
 
const styles = StyleSheet.create({
  container: {
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
    borderColor: "#20232a",
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




class escena1 extends React.Component {
   
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
        return this.props.navigation.navigate("Guardar_escena1", {ex: 2, 
          title: "Escena2",
          questions: Escena2Dialog,
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

 
    const { modalVisible, modalVisible2 } = this.state;
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

      <Modal_C1_escena1
      
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
       onPress={() => this.props.navigation.navigate('M_caso1')}>
               <Image style={ style.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
</View>


<View style={style.headerDerecha}> 

           <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisible2(true);
                      }}>
                           <Image style={ style.image } source={require("../../../assets/images/ayuda.png")} />
               </TouchableOpacity>  

              <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisible(true);
                      }}>
                           <Image style={ style.image } source={require("../../../assets/images/historial.png")} />
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

export default escena1;

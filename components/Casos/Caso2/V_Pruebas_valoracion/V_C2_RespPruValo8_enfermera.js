import React from "react";
import {AsyncStorage, Modal, View, StyleSheet, Dimensions, StatusBar, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TouchableHighlight, Alert} from "react-native";

import { Button, ButtonContainer } from "../../../elementos/ButtonEscene1";
import { C2_ModalHistorial } from "../../../elementos/Modals";
import style from '../../../Style.js';

import { CommonActions } from '@react-navigation/native';
const { width, height } = Dimensions.get('window')
 
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

class V_C2_RespPruValo1_enfermera extends React.Component {
   
  state = {
    modalVisible: false,
    correctCount: 0, 
    totalCount: this.props.route.params?.questions.length,
    activeQuestionIndex: 0,
    answered: false
      
  };

  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
       // return this.props.navigation.popToTop();
        return this.props.navigation.navigate("C2_Escena3");
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

     <C2_ModalHistorial
      
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
     
</View>


<View style={style.headerDerecha}> 

           <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
                 onPress={() => 
                    this.props.navigation.dispatch(
                      CommonActions.reset({
                        index: 1,
                        routes: [
                          {
                            name: 'Escena1',
                       
                          },
                          { name: 'M_caso1' },
                        ],
                      })
                    )
                  }>
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

export default V_C2_RespPruValo1_enfermera;

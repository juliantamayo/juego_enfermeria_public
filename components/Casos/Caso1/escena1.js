import React from "react";
import {AsyncStorage, Modal, View, StyleSheet, Dimensions, StatusBar, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TouchableHighlight, Alert} from "react-native";

import { Button, ButtonContainer } from "../../elementos/ButtonEscene1";
import { ModalHistorial } from "../../elementos/Modals";
import style from './../../Style.js';
import Escena2Dialog from "../../data/escena2dialog";
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
  },
  modalView: {
    width: '90%',
    height: '90%',
    margin: 20,
   // backgroundColor: "black",
    backgroundColor: "rgba(0, 185, 188, 0.37)",
    //borderRadius: 20,
    //padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
   backgroundColor: "red",
   // borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2
  },
   modalText2: {
   // marginBottom: 15,
    // marginLeft : 20,
    fontSize: 22,
    textAlign: "center",
    // borderColor: "#20232a",
     paddingVertical: 8,
     borderWidth: 4,
      fontWeight: "bold"
   // backgroundColor: "red"
  },
   modalText: {
   // marginBottom: 15,
    textAlign: "center",
    fontSize : 18,
     
  },
  modalTextcuerpo: {
   // marginBottom: 15,
    textAlign: "left",
     marginLeft : 10,
  },
   modalTextnegrilla: {
   // marginBottom: 15,
   fontSize : 18,
    textAlign: "left",
    fontWeight: "bold",
     marginLeft : 3,
  },

  modalTex3: {
   // marginBottom: 15,
    textAlign: "center",
    color: "#fff"
     
  },
  headerModal:{
    flex: 0.1,
    flexDirection : 'row',
    //backgroundColor: "yellow",
    alignItems: 'center',
    
  },
  headerMizq:{
    flex:0.9,
    backgroundColor: "#fbe122"
  },
  headerMDer:{
    flex:0.1,
    backgroundColor: "rgba(0, 0, 0, 0.48)",
  },
  bodyModal:{
    flex:0.9,
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 4,
    justifyContent: "center",
    width: '90%',
    height: '90%',
  },
  margen:{
    margin:5
  },
  wrapper: {
     //backgroundColor: 'white'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
   
  
});

const mult =5;




class escena1 extends React.Component {
   
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
        return this.props.navigation.navigate("Guardar_escena1", {ex: '2', 
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
       onPress={() => this.props.navigation.navigate('M_caso1')}>
               <Image style={ style.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
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

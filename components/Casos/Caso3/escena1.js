import React from "react";
import {AsyncStorage, Modal, View, StyleSheet, Dimensions, StatusBar, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TouchableHighlight, Alert} from "react-native";

import { Button, ButtonContainer } from "../../elementos/ButtonEscene1";
import style from './../../Style.js';

import { CommonActions } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
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
          title: "C3_Escena2",
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

     <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
               <Text style={styles.modalText2}>Historial Paciente</Text>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        >
          <View style={styles.slide}>

                <Text style={styles.margen}></Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Fecha de consulta: </Text>
                <Text style={styles.modalText}>29/03/20 </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Nombre: </Text>
                <Text style={styles.modalText}>Señor C.J.M </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Edad: </Text>
                <Text style={styles.modalText}> 58 años </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Estado civil: </Text>
                <Text style={styles.modalText}> casado </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Ocupación anterior: </Text>
                <Text style={styles.modalText}> Ingeniero </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Ocupación actual: </Text>
                <Text style={styles.modalText}> Ninguna </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Acompañante: </Text>
                <Text style={styles.modalText}> Esposa </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Antecedentes patológicos: </Text>
                <Text style={styles.modalText}> Hipertensión, accidente cerebrovascular hace 3 meses.</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Antecedentes farmacológicos: </Text>
                <Text style={styles.modalText}> Antihipertensivos.</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Motivo de Consulta: </Text>
                <Text style={styles.modalText}> Dolor al orinar desde hace dos días.</Text>
                </Text>

          </View>

          <View style={styles.slide}>

                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Problema actual: </Text>
                <Text style={styles.modalText}> desde hace dos días presentaba sensación constante y ardor al orinar, con olor fuerte y en poca cantidad, fue hospitalizado para recibir el tratamiento farmacológico correspondiente pero su esposa refiere “desde el accidente cerebrovascular lo observo irritable, de mal humor e  impotente ante todos los cambios que ha tenido y que no puede expresar lo que siente de la manera adecuada”.</Text>
                </Text>

          </View>
          <View style={styles.slide}>
          
           <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Perfil del paciente: </Text>
                <Text style={styles.modalText}>  Vive con su esposa Liliana de 57 años y sus tres hijas, siendo la mayor Lorena, la menor lucia e intermedia Laura, viven en un tercer piso con ascensor, tienen buena relación familiar. 
                    Se le debe asistir en la alimentación porque su esposa dice que “él siempre se le olvida comerse los alimentos del lado derecho del plato” y cuando empezó con el problema de la orina, él estaba en proceso de recuperación y en terapia.</Text>
                </Text>
          </View>
        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
      <View
        style={
          styles.container
          
        }
      >

     <View style={style.header}>   
      <View style={style.headerIzquierda}>
     <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('M_caso3')}>
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

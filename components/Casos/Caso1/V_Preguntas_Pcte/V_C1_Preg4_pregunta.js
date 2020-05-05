import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, ImageBackground, Image, TouchableHighlight, ScrollView } from "react-native";

import { Button, ButtonContainer } from "../../../elementos/ButtonC1_Preguntas";

import C1_pregunta4_Resp_enfermera from "../../../data/C1_preguntas/C1_pregunta4_Resp_enfermera";

import { Alert } from "../../../elementos/Alert";

 
const styles = StyleSheet.create({
  container: {
  //  backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    backgroundColor: "#36B1F0",
    fontSize: 22,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },

  textContador: {
    color: "#fff",
    //backgroundColor: "#36B1F0",
    fontSize: 22,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  containerImagen:{
    alignItems : 'center',
    backgroundColor: 'white',
    width : '100%',
    height : '50%'
  },
  Imagen:{
    width: 290,
  height: '100%'
  },
  Imagen2:{
    width: 40,
  height: 40
  },
   modalView: {
     width: '90%',
   height: '60%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
  

});

const mult =5;

class V_c1_Preg4_pregunta extends React.Component {
   

  


  state = {
     modalVisible: false,
    correctCount: 0, 
    //totalCount: this.props.navigation.getParam("questions", []).length,
      totalCount: this.props.route.params?.questions.length,
   //route.params?.someParam ?? 'defaultValue';
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false
      
  };

  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;

        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount && this.state.correctCount < 2) {
       // return this.props.navigation.popToTop();
        return this.props.navigation.navigate('V_C1_Preg4_dialogo',{experiencia: (this.state.correctCount*mult)-((this.state.totalCount-this.state.correctCount)*3), correctas:this.state.correctCount,erroneas:(this.state.totalCount-this.state.correctCount)});
      }else if (nextIndex >= state.totalCount   && this.state.correctCount==2) {
       return this.props.navigation.navigate('V_C1_RespP4_enfermera',{repu_enferme:1,experiencia: (this.state.correctCount*mult)-((this.state.totalCount-this.state.correctCount)*3), correctas:this.state.correctCount,erroneas:(this.state.totalCount-this.state.correctCount),
        title: "RespuestaP4 enfermero",
          questions: C1_pregunta4_Resp_enfermera,
          color: "#36b1f0"});
      
      }else if (nextIndex < state.totalCount && this.state.correctCount == 0) {
         return this.props.navigation.navigate('V_C1_Preg4_dialogo',{experiencia: (this.state.correctCount*mult)-((this.state.totalCount-this.state.correctCount)*3), correctas:this.state.correctCount,erroneas:(this.state.totalCount-this.state.correctCount)});
      
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
     
    <ImageBackground source={require("../../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>

    <ScrollView  >
    <StatusBar barStyle="dark-content" />
      
        <StatusBar barStyle="light-content" />
        <SafeAreaView >
        

          <Text style={styles.text}>{question.question}</Text>  
          <View>
          
          

            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.textContador}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
          
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
        </ScrollView>
       </ImageBackground>
    );
  }
}

export default V_c1_Preg4_pregunta;

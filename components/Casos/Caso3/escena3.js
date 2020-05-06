import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Image,TouchableHighlight, Modal, ImageBackground } from "react-native";

import { Button, ButtonContainer } from "../../elementos/ButtonEscene1";
import { Alert } from "../../elementos/Alert";
import style from './../../Style.js';
import Escena2Dialog from "../../data/escena2dialog";
 
const styles = StyleSheet.create({
  container: {
   // backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
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
  containerdialog:{
   flex: 0.5,
  backgroundColor: "rgba(3, 33, 0, 0.47)",
   width: '100%',
  height: '100%'
  }
   
  
});

const mult =5;

class escena3 extends React.Component {
   
  state = {
    correctCount: 0, 
    //totalCount: this.props.navigation.getParam("questions", []).length,
      totalCount: this.props.route.params?.questions.length,
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

      if (nextIndex >= state.totalCount) {
       // return this.props.navigation.popToTop();
       

     return this.props.navigation.navigate('Result_QJ1',{experiencia: (this.state.correctCount*mult)-((this.state.totalCount-this.state.correctCount)*3), correctas:this.state.correctCount,erroneas:(this.state.totalCount-this.state.correctCount)});
          }

      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

  render() {
 
    const questions = this.props.route.params?.questions ?? [];
    const question = questions[this.state.activeQuestionIndex];
    
    return (
    <ImageBackground source={question.image} style={style.container} resizeMode='contain'>
      <View
        style={
          styles.container
          
        }
      >

     
        <StatusBar barStyle="light-content" />
        <SafeAreaView >
        

          
          <View>
          
          

            
          </View>

          <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
          
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
       
       <View style={styles.containerdialog}>
        <Text style={styles.text}>{question.question}</Text>
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

      </ImageBackground>
    );
  }
}

export default escena3;

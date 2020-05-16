import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Image,TouchableHighlight, Modal,Alert } from "react-native";

import { Button, ButtonContainer } from "../../elementos/ButtonJ1";
import { Alerta } from "../../elementos/Alert";
import { ModalJuego1} from "../../elementos/ModalsRepaso";

 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
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
  }
});

const mult =5;

class juego1_part1 extends React.Component {
   

  


  state = {
     modalVisible: false,
    correctCount: 0, 
    //totalCount: this.props.navigation.getParam("questions", []).length,
      totalCount: this.props.route.params?.questions.length,
       totalCount: 5,
   //route.params?.someParam ?? 'defaultValue';
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    //availableQuesions : [this.props.route.params?.questions ?? []]
      
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

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    let availableQuesions = []
    const { modalVisible } = this.state;
    const questions = this.props.route.params?.questions ?? [];
    const question = questions[this.state.activeQuestionIndex];
    
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.route.params.color }
        ]}
      >

      <ModalJuego1
              
             text={modalVisible}
             imagen={question.image}
             onPress={() => {
                this.setModalVisible(!modalVisible);
                    }}
              />
         

              <StatusBar barStyle="light-content" />
        <SafeAreaView >
        

          <Text style={styles.text}>{question.question}</Text>  
          <View>
          <View style={styles.containerImagen}>
           <TouchableHighlight
          
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
         <Image style={styles.Imagen}   source={question.image} resizeMode='contain'/>
        </TouchableHighlight>
           </View>
          

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

          <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
          
        </SafeAreaView>
        <Alerta
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

export default juego1_part1;

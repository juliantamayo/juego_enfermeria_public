import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Dimensions, ScrollView} from "react-native";

import { Button2, ButtonContainer } from "../../elementos/ButtonJ1";
import { Alert } from "../../elementos/Alert";
import { Modal_gameover} from "../../elementos/ModalsGameover";
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 20,
    justifyContent: "space-between",
   
  },
  timertext:{
    color: 'black',
    fontSize: 22,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
    backgroundColor: 'white',
    borderRadius: 25 
  }
});

const mult =5;

class Quiz extends React.Component {

  state = {
    modalfinjuego:false,
    correctCount: 0,
    totalCount: this.props.route.params?.questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    timer: 10
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

      if (nextIndex == state.totalCount) {
       var T= this.state.timer='-2';
        return this.props.navigation.navigate('Result_Q',{experiencia: (this.state.correctCount*mult)-((this.state.totalCount-this.state.correctCount)*3), correctas:this.state.correctCount,erroneas:(this.state.totalCount-this.state.correctCount)});
      }else if (this.state.timer == -1) {
       return{ modalfinjuego:true}
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
        timer: 10
      };
    });
  };

  setModalfinjuego = (visible) => {
    this.setState({ modalfinjuego: visible });
  }
    componentDidMount(){
  this.interval = setInterval(
    () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
    1000
  );
}

componentDidUpdate(){
  if(this.state.timer === -1){ 
    clearInterval(this.interval);
  }
}

componentWillUnmount(){
 clearInterval(this.interval);
}

  render() {
    const { modalfinjuego } = this.state;
    const questions = this.props.route.params?.questions ?? [];
    const question = questions[this.state.activeQuestionIndex];
    
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.route.params.color }
        ]}
      >
      <Modal_gameover
              
             text={this.state.timer == -1? true: modalfinjuego}
             onPress={() => this.props.navigation.navigate('M_juego2')}
              />

        <ScrollView  style={styles.margen}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
           <Text style={styles.timertext}> { this.state.timer == -1? 0: this.state.timer}' 🕗 </Text>
            <Text style={styles.text}>{question.question}</Text>

            <ButtonContainer>
              {question.answers.map(answer => (
                <Button2
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.text}>
            {`${this.state.activeQuestionIndex + 1}/${this.state.totalCount}`}
          </Text>
          
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
          </ScrollView>
      </View>
    );
  }
}

export default Quiz;

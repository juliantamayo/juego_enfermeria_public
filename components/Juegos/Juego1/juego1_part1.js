import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Image,TouchableHighlight,Alert,Dimensions,ScrollView } from "react-native";

import { Button, ButtonContainer } from "../../elementos/ButtonJ1";
import { Alerta } from "../../elementos/Alert";
import { ModalJuego1} from "../../elementos/ModalsRepaso";
import { Modal_gameover} from "../../elementos/ModalsGameover";
const { width, height } = Dimensions.get('window')
 
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
    height: Dimensions.get('window').width/1.5,

  },
  Imagen:{
  width: 290,
 // width: Dimensions.get('window').width/3,
  height: '100%'
  },
   textContador: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
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

class juego1_part1 extends React.Component {
   

  


  state = {
    modalVisible: false,
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
        return this.props.navigation.navigate('Result_QJ1',{experiencia: (this.state.correctCount*mult)-((this.state.totalCount-this.state.correctCount)*3), correctas:this.state.correctCount,erroneas:(this.state.totalCount-this.state.correctCount),t:this.state.timer});
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

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

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
    let availableQuesions = []
    const { modalVisible,modalfinjuego } = this.state;
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

              <Modal_gameover
              
             text={this.state.timer == -1? true: modalfinjuego}
             onPress={() => this.props.navigation.navigate('m_juego1')}
              />
         
<ScrollView  >
              <StatusBar barStyle="light-content" />
        <SafeAreaView >
        
         <Text style={styles.timertext}> { this.state.timer == -1? 0: this.state.timer}' 🕗</Text>
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
        </ScrollView>
      </View>
    );
  }
}

export default juego1_part1;

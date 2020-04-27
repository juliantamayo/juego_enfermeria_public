import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Image,TouchableHighlight, Modal } from "react-native";

import { Button, ButtonContainer } from "../../elementos/ButtonJ1";
import { Alert } from "../../elementos/Alert";

 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
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
   modalView: {
     width: '90%',
   height: '80%',
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

class juego1_part2 extends React.Component {
   

  


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

      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          
            <View style={styles.modalView}>
              

              <TouchableHighlight 
                
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                 <Image style={styles.Imagen}   source={question.image} resizeMode='contain'/>
              </TouchableHighlight>
            </View>
         
        </Modal>
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
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

export default juego1_part2;




/*
import React, {Component} from 'react';
import { Button, View, Text, Alert } from 'react-native';
import App, {name} from '../../../app'


class juego1_part1 extends Component {

   _onPressButton() {
    // name.valor=name.valor+100,
     //name.valoresNuevos= ['julian David', name.valor],
   // alert('los nuevos valores son'+name.nombreCompleto)
   //Alert.alert('ESTI FUNCIONA PPOR LO MENOS')
  }

  render(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ESTE ES EL JUEGO 1</Text>
      <Button
        title="ir a menu juegos"
        onPress={() => this.props.navigation.navigate('m_juego1')}
      />

      <Button 
        title="presioname"
        onPress={
         this._onPressButton
        }
      />

       <Text>  </Text>
    </View>

  );
}
}


export default juego1_part1;
*/
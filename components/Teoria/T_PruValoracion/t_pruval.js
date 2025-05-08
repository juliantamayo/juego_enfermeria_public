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
  title:{ 

    textAlign : 'center',
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#77c6c6',
    borderRadius: 50,
    padding: 3
  },
  nombre:{ 

    textAlign : 'center',
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#D182FD',
    borderRadius: 50,
    padding: 3
  },
  text: {
    textAlign : 'justify',
    fontSize: 19,
    marginLeft: 10,
    marginRight: 10,
    margin: 10
  },
  subtext: {
    textAlign : 'left',
    fontSize: 19,
    marginLeft: 35,
    marginRight: 10,
    margin: 10
  },
  textBold:{
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#F8D95B',
  },
  containerImagen:{
    alignItems : 'center',
    backgroundColor: 'white',
    width : '100%',
    height: Dimensions.get('window').width/2,

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
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
    backgroundColor: 'black',
  }
});

const mult =5;

class t_pruval extends React.Component {

  state = {
    modalVisible: false,
    correctCount: 0, 
    totalCount: this.props.route.params?.prueba.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,

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

      };
    });
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  
  render() {
    const { modalVisible } = this.state;
    const questions = this.props.route.params?.prueba ?? [];
    const question = questions[this.state.activeQuestionIndex];
    
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.route.params.color }
        ]}
      >
             
         
<ScrollView  >
              <StatusBar barStyle="light-content" />
        <SafeAreaView >
          <Text style={styles.title}>Nombre de la prueba</Text>  
          <Text style={styles.text}>{question.Nombre}</Text>  
          <Text style={styles.title}>Área</Text>  
          <Text style={styles.text}>{question.Area}</Text>  
          <View>
          <View style={styles.containerImagen}>
           
         <Image style={styles.Imagen}   source={question.image} resizeMode='contain'/>
        
           </View>
           <Text style={styles.title}>Procedimiento de la prueba</Text>  
            <Text style={styles.text}>{question.procedimiento}</Text> 
            <Text style={styles.title}>Hallazgos Normales</Text>  
            <Text style={styles.text}>{question.hallazgos_normales}</Text> 
            <Text style={styles.title}>Hallazgos Anormales</Text>  
            <Text style={styles.text}>{question.hallazgos_anormales}</Text> 
          </View>

    
          
        </SafeAreaView>
        
        </ScrollView>
      </View>
    );
  }
}

export default t_pruval;

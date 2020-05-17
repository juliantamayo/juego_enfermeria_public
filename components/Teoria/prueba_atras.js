//------------bloqueo boton atras android
/*
import React, {Component,} from 'react';
import {
    View,
    Text,
    BackHandler,
    ToastAndroid,
} from 'react-native';

export default class BackButtonDemo extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }

    render() {
        return (
            <View>
                <Text>Back button example</Text>
            </View>
        );
    }
}
*/

//------- scroll horizontal pantallas
/*
import React, { Component } from 'react'
import { View, Image, StatusBar, Dimensions, Text } from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height
  },
  modalText: {
   // marginBottom: 15,
    textAlign: "center",
     
  }
}

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image source={require('../../assets/images/bg.jpg')} style={styles.imgBackground} />
        <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
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
                backgroundColor: '#fff',
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
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/2.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
           <Text style={styles.modalText}>Hello World!</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}
*/
/*

//--------hiden
import React, { Component } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

export default class hideshow extends Component {

  constructor(){

    super();

    this.state ={

      isVisible:false,
      isVisible2:false,
      val:0
    }
  }  


  ToggleFunction = () => {
         if(this.state.val<=0){
    this.setState(state => ({

      isVisible: !state.isVisible,
      
    }));
}else if(this.state.val<=2){
      this.setState(state => ({
       isVisible: !state.isVisible,
      isVisible2: !state.isVisible2

    }));
}
  };


  render() {
     const num = <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> Hello World4! </Text>;
    return (

      <View style={styles.MainContainer}>
     <Button title="Toggle Visibility" onPress={this.ToggleFunction} />
      {  

        this.state.isVisible ? <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> Hello World! </Text> : null
       
      }
      {  

        this.state.isVisible2 ? <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> Hello World2! </Text> : null
      
      }

                    

     
       <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> {this.state.val} </Text>

           {this.state.val <= 0? <Text>data</Text>: null }

      </View>
         
              


    );
  }
}

const styles = StyleSheet.create({

MainContainer :{
justifyContent: 'center',
flex:1,
margin: 10

},
m:{
    flex:0.5,
    width : '100%',
    height : '50%',
    backgroundColor: "gray",
}

});
*/
/*
//This is an example code to understand AsyncStorage// 
import React, { Component } from 'react';
//import react in our code. 

import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity, AsyncStorage } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textInputData: 7,
      //to get the value from the TextInput
      getValue: '',
      //to set the value on Text
    };
  }
  saveValueFunction = () => {
    //function to save the value in AsyncStorage
    if(this.state.textInputData){
      //To check the input not empty
      AsyncStorage.setItem('any_key_here', this.state.textInputData);
      //Setting a data to a AsyncStorage with respect to a key 
      this.setState({ textInputData: '' })
      //Resetting the TextInput
      alert('Data Saved');
      //alert to confirm
    }else{
      alert('Please fill data');
      //alert for the empty InputText
    }
  };
  getValueFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('any_key_here').then(value =>
      //AsyncStorage returns a promise so adding a callback to get the value
      this.setState({ getValue: value })
      //Setting the value in Text 
    );
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter Some Text here"
          value={this.state.textInputData}
          onChangeText={data => this.setState({ textInputData: data })}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TouchableOpacity
          onPress={this.saveValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> SAVE VALUE </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.getValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> GET VALUE </Text>
        </TouchableOpacity>
        <Text style={styles.text}> {this.state.getValue} </Text>

         {this.state.getValue >= 1? <Text>data2</Text>: null }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    margin: 10,
    marginTop:60
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#808000',
  },
  button: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808000',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
*/
/*
import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () => (
  <Swiper style={styles.wrapper} showsButtons loop={false}>
    <View testID="Hello" style={styles.slide1}>
      <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View testID="Beautiful" style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View testID="Simple" style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
  </Swiper>
)

*/

/*
import React, { Component } from 'react';
import {
  AppRegistry,
  SectionList,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
  Button,
} from 'react-native';

export default class AsyncStorageExample extends Component {
  state = {
    name: '',
    email: '',
  };
  componentDidMount = () => {
    this.getValueFromStorage();
  };

  getValueFromStorage = () => {
    let keys = ['name', 'email'];
    AsyncStorage.multiGet(keys).then(result => {
      this.setState({
        name: result[0][1],
        email: result[1][1],
      });
    });
  };

  setName = value => {
    this.setState({ name: value });
  };
  setEmail = value => {
    this.setState({ email: value });
  };

  saveText = () => {
    const value1 = this.state.name;
    const value2 = this.state.email;
    let keys = [['name', value1], ['email', value2]];
    AsyncStorage.multiSet(keys, err => {
      console.log('Value1' + value1 + ' ' + value2);
      this.setState({
        name: value1,
        email: value2,
      });
    });
  };

  clearText = () => {
    let keys = ['name', 'email'];
    AsyncStorage.multiRemove(keys, err => {
      this.getValueFromStorage();
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          onChangeText={this.setName}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Enter Email"
          onChangeText={this.setEmail}
        />
        <Text>
          Name: {this.state.name}
        </Text>
        <Text>
          Email: {this.state.email}
        </Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button title="Clear" color="#841584" onPress={this.clearText} />
          <Button title="Save" color="#841584" onPress={this.saveText} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  textInput: {
    margin: 15,
    height: 35,
    width: 200,
    borderWidth: 1,
    padding:5,
  },
});
AppRegistry.registerComponent('AwesomeProject', () => AsyncStorageExample);
*/

/*
import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ScrollView, StatusBar, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'
import style from '../Style.js';
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,



    
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'black',
    fontSize: 20
  },
   modalText: {
    textAlign: "justify",
    fontSize : 18, 
  },
  modalTextcuerpo: {
    textAlign: "left",
     marginLeft : 10,
  },
   modalTextnegrillaTitulo: {
   fontSize : 23,
    textAlign: "center",
    fontWeight: "bold",
     borderWidth: 4,
     backgroundColor: 'white'
  },
   modalTextnegrilla: {
   fontSize : 18,
    textAlign: "left",
    fontWeight: "bold",
     marginLeft : 3,
  },
  margen:{
    margin:5
  },
  bordeview:{
    borderWidth: 2,
     margin:5,
    backgroundColor: 'white'
  },
  fondoviewText:{
    backgroundColor: "rgba(0, 185, 188, 0.37)"
  }
}

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class extends Component {
  render() {
    return (
       <ImageBackground source={require("../../assets/images/background.png")}style={style.container}>
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination} showsButtons loop={false}
      >
       
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}></Text>
          }
        >
        <ScrollView  >
       <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
          <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00133</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Dolor crónico</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Experiencia sensitiva y emocional desagradable ocasionada por una lesión tisular real o potencial, inicio súbito o lento de cualquier intensidad de leve a grave, constante o recurrente sin un final anticipado o previsible y una duración superior a 3 (>3) meses</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Agentes que provocan lesiones, Antecedentes de abuso de sustancias como licor, cigarrillo, gaseosas.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Alteraciones en el patrón de dormir, Anorexia, Expresión facial de dolor, EVA 7</Text>
                </Text>
                </View>
          </View>
                </ScrollView>
        </View>

        <View
          style={styles.slide}
          title={<Text numberOfLines={1}></Text>}
        >
        <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
          <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00146</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Ansiedad</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Sensación vaga e intranquilizadora de malestar o amenaza acompañada de una respuesta autónoma (el origen de la cual con frecuencia es inespecífico o desconocido para la persona); sentimiento de aprensión causado por la anticipación de un peligro. Es una señal de alerta que advierte de un peligro inminente y permite a la persona tomar medidas para afrontar la amenaza</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Crisis situacional, Estresores, necesidades no satisfechas, grandes cambios (el estado de salud, los patrones de interacción, el rol)</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Angustia, Incertidumbre, Incremento de la preocupación, temor, alteraciones del patrón de sueño</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
         <View
          style={styles.slide}
          title={<Text numberOfLines={1}></Text>}
        >
        <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
          <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>000781</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Gestión ineficaz de la salud</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Patrón de regulación e integración en la vida diaria de un régimen terapéutico para el tratamiento de la enfermedad y sus secuelas que no es adecuado para alcanzar los objetivos de salud específicos</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Complejidad del régimen terapéutico, Percepción de la gravedad de su condición, Percepción de susceptibilidad, Demandas excesivas</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Dificultades con el tratamiento prescrito, En su vida diaria hace elecciones ineficaces para alcanzar objetivos de salud{"\n"}No emprende acciones para reducir los factores de riesgo, no incluye el régimen de tratamiento en la vida diaria</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
         <View
          style={styles.slide}
          title={<Text numberOfLines={1}></Text>}
        >
        <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
          <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00069</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Afrontamiento ineficaz</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Incapacidad para formular una apreciación válida de los agentes estresantes, elecciones inadecuadas de respuestas llevadas a la práctica y/o incapacidad para utilizar los recursos disponibles</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Alto grado de amenaza, Apreciación inexacta de las amenazas, Insuficiente sentido de control</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Abuso de sustancias, Acceso insuficiente de apoyo social, Alteración en la concentración, Alteraciones en el patrón de sueño, Conducta de asunción de riesgos, Conducta destructiva hacia sí mismo, ,Enfermedades frecuentes, Estrategias de afrontamiento ineficaces, Habilidades insuficientes para la solución de problemas, Incapacidad para afrontar una situación, Incapacidad para satisfacer las necesidades básicas ,Insuficiente conducta dirigida al logro de objetivos ,Insuficiente resolución de los problemas</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}></Text>}
        >
        <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
          <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00079</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Incumplimiento</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Conducta de una persona y/o cuidador que no coincide con el plan terapéutico o de promoción de la salud acordado entre la persona (y/o la familia y/o comunidad) y un profesional sanitario. Ante un plan terapéutico o de promoción de la salud acordado, la conducta de la persona o del cuidador es total o parcialmente de no adherencia y puede conducir a resultados clínicos ineficaces o parcialmente ineficaces</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Habilidades insuficientes para realizar el régimen de tratamiento, Motivación insuficiente, Intensidad del régimen de tratamiento, Prolongada duración del régimen de tratamiento</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Conducta indicativa de falta de adhesión{"\n"+"\n"}Desarrollo de complicaciones relacionadas{"\n"+"\n"}Exacerbación de los síntomasFalta de progresos</Text>
                </Text>  
                                               
                </View>
         </View>
                </ScrollView>
        </View>
      </Swiper>
      </ImageBackground>
    )
  }
}

*/

import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Image,TouchableHighlight, Modal,Alert } from "react-native";
import { ModalJuego1} from "../elementos/ModalsRepaso";
import { Modal_gameover} from "../elementos/ModalsGameover";
import { Button, ButtonContainer } from "../elementos/ButtonJ1";
import { Alerta } from "../elementos/Alert";

 
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
  },
  Imagen2:{
    width: 40,
  height: 40
  }
});

const mult =5;

class juego3 extends React.Component {
   

  


  state = {
     modalVisible: false,
     modalfinjuego:false,
    correctCount: 0, 
    //totalCount: this.props.navigation.getParam("questions", []).length,
      totalCount: this.props.route.params?.questions.length,
   //route.params?.someParam ?? 'defaultValue';
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
       // return this.props.navigation.popToTop();
        return this.props.navigation.navigate('Menu',{experiencia: (this.state.correctCount*mult)-((this.state.totalCount-this.state.correctCount)*3), correctas:this.state.correctCount,erroneas:(this.state.totalCount-this.state.correctCount)});
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
        timer:10
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
    const { modalVisible,modalfinjuego } = this.state;
    const questions = this.props.route.params?.questions ?? [];
    const question = questions[this.state.activeQuestionIndex];
    
    return (
      <View
        
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
             onPress={() => this.props.navigation.navigate('Menu')}
              />


        <StatusBar barStyle="light-content" />
        <SafeAreaView >
        
          <Text> { this.state.timer == -1? null: this.state.timer} </Text>
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

export default juego3;

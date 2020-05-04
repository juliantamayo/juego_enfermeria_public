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
import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'

class AsyncStorageExample extends Component {
   state = {
      'name': '',
      hola:this.props.route.params?.ex,
      'nombre':''
   }
/*
  saveData = (value) => {
      AsyncStorage.setItem('nombre', this.state.hola);
      this.setState({ 'nombre': this.state.hola });
       Alert.alert("Mensaje","Datos guardados correctamente");
       if(Alert!null)
       this.props.navigation.navigate("M_caso1", {activeQuestion: 1,   
        });
   } 
   */ 
    saveData = (value) => {
      AsyncStorage.setItem('nombre', this.state.hola);
      this.setState({ 'nombre': this.state.hola });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_caso1",{p:this.state.nombre}) }
      ]);
       
   } 

  displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('nombre');  
      alert(user);  
    }  
    catch(error){  
      alert(error)  
    }  
  }


  
   componentDidMount = () => AsyncStorage.getItem('nombre').then((value) => this.setState({ 'nombre': value }))
     
   setName = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   }
   render() {
      return (
         <View style = {styles.container}>
          

            <TextInput style = {styles.textInput} autoCapitalize = 'none'
            onChangeText = {this.setName}/>
            <Text>
               {this.state.name}
            </Text>
            <Text>
               ={this.state.hola}
            </Text>
            <Text>
             nombre  {this.state.nombre}
            </Text>

        <TouchableOpacity onPress ={this.saveData}>  
          <Text>Click to save data</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress ={this.displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity>
       {this.state.nombre == '2'? <Text>data2</Text>: null }

         </View>
      )
   }
}
export default AsyncStorageExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   textInput: {
      margin: 5,
      height: 100,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   }
})